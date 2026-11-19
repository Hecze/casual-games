import { WORDS } from '../data/words';
import { DRAWINGS } from '../data/drawings';

type Mode = 'words' | 'drawings';
type Phase = 'setup' | 'pass' | 'reveal' | 'done' | 'forgot';

interface Round {
  secret: number;
  impostors: Set<number>;
  starter: number;
}

const MIN_PLAYERS = 3;
const MAX_PLAYERS = 20;
const WORD_LIST = Array.from(new Set(WORDS));

// "Ver palabra" se habilita un instante después de aparecer, para que un doble
// toque en "Siguiente" no revele la palabra del jugador que viene.
const ARM_DELAY_PASS = 800;
const ARM_DELAY_REVEAL = 400;

/** Siempre debe quedar más gente normal que impostores. */
const maxImpostors = (players: number) => Math.max(1, Math.floor((players - 1) / 2));

function randInt(n: number): number {
  const a = new Uint32Array(1);
  crypto.getRandomValues(a);
  return a[0] % n;
}

function shuffled(n: number): number[] {
  const arr = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = randInt(i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export function mountGame(root: HTMLElement) {
  const mode = root.dataset.mode as Mode;
  const title = root.dataset.title ?? '';
  const poolSize = mode === 'words' ? WORD_LIST.length : DRAWINGS.length;

  // Todo vive en memoria: sin cookies ni storage. Un mazo barajado evita
  // repetir palabras hasta que se acaben todas.
  let deck: number[] = [];
  let lastSecret = -1;

  let phase: Phase = 'setup';
  let players = 4;
  let impostors = 1;
  let round: Round | null = null;
  let current = 0;
  let recheck = false; // alguien volvió a ver su palabra desde la pantalla final
  let armTimer: ReturnType<typeof setTimeout> | undefined;

  function drawSecret(): number {
    if (deck.length === 0) {
      deck = shuffled(poolSize);
      // Al rebarajar, que no salga la misma dos rondas seguidas.
      const top = deck.length - 1;
      if (top > 0 && deck[top] === lastSecret) [deck[0], deck[top]] = [deck[top], deck[0]];
    }
    lastSecret = deck.pop()!;
    return lastSecret;
  }

  // ---------- Pantalla siempre encendida durante la ronda ----------
  let wakeLock: WakeLockSentinel | null = null;
  async function syncWakeLock() {
    const want = phase !== 'setup' && document.visibilityState === 'visible';
    if (want && !wakeLock && 'wakeLock' in navigator) {
      try {
        wakeLock = await navigator.wakeLock.request('screen');
        wakeLock.addEventListener('release', () => (wakeLock = null));
      } catch {
        /* sin soporte o sin permiso: no pasa nada */
      }
    } else if (!want && wakeLock) {
      wakeLock.release().catch(() => {});
      wakeLock = null;
    }
  }

  // ---------- Acciones ----------
  function go(next: Phase) {
    phase = next;
    render();
    syncWakeLock();
  }

  function start() {
    impostors = Math.min(impostors, maxImpostors(players));
    round = {
      secret: drawSecret(),
      impostors: new Set(shuffled(players).slice(0, impostors)),
      starter: randInt(players),
    };
    current = 0;
    recheck = false;
    go('pass');
  }

  function next() {
    if (recheck) {
      recheck = false;
      go('done');
    } else if (current < players - 1) {
      current++;
      go('pass');
    } else {
      go('done');
    }
  }

  function exitToSetup() {
    const midRound = phase === 'pass' || phase === 'reveal';
    if (midRound && !window.confirm('¿Terminar esta ronda?')) return;
    go('setup');
  }

  const actions: Record<string, (el: HTMLElement) => void> = {
    'players-': () => {
      players = Math.max(MIN_PLAYERS, players - 1);
      impostors = Math.min(impostors, maxImpostors(players));
      render();
    },
    'players+': () => {
      players = Math.min(MAX_PLAYERS, players + 1);
      render();
    },
    'impostors-': () => {
      impostors = Math.max(1, impostors - 1);
      render();
    },
    'impostors+': () => {
      impostors = Math.min(maxImpostors(players), impostors + 1);
      render();
    },
    start,
    reveal: () => go('reveal'),
    next,
    exit: exitToSetup,
    forgot: () => go('forgot'),
    cancelForgot: () => go('done'),
    pick: (el) => {
      current = Number(el.dataset.player);
      recheck = true;
      go('pass');
    },
  };

  root.addEventListener('click', (e) => {
    const el = (e.target as HTMLElement).closest<HTMLElement>('[data-action]');
    if (!el || (el as HTMLButtonElement).disabled) return;
    actions[el.dataset.action!]?.(el);
  });

  // Si la pantalla se apaga o se cambia de app con la palabra visible,
  // se oculta: quien lo prenda después no ve el secreto de otro.
  const onHide = () => {
    if (document.visibilityState === 'hidden' && phase === 'reveal') go('pass');
    else syncWakeLock();
  };
  document.addEventListener('visibilitychange', onHide);
  window.addEventListener('pagehide', onHide);

  // ---------- Pantallas ----------
  const stepper = (label: string, key: string, value: number, min: number, max: number) => `
    <div class="field">
      <label>${label}</label>
      <div class="stepper">
        <button type="button" data-action="${key}-" aria-label="Menos ${label.toLowerCase()}" ${value <= min ? 'disabled' : ''}>−</button>
        <output aria-live="polite">${value}</output>
        <button type="button" data-action="${key}+" aria-label="Más ${label.toLowerCase()}" ${value >= max ? 'disabled' : ''}>+</button>
      </div>
    </div>`;

  const topbar = (left: string, action: string, label: string) => `
    <div class="topbar">
      <span class="player-tag">${left}</span>
      <button class="link" data-action="${action}">${label}</button>
    </div>`;

  const drawingBox = (index: number | null) =>
    index === null
      ? `<div class="drawing" aria-label="Sin dibujo">?</div>`
      : `<div class="drawing"><svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${DRAWINGS[index].svg}</svg></div>`;

  function screen(): string {
    if (phase === 'setup' || !round) {
      return `
        <div class="topbar"><a href="/" class="link">← Juegos</a></div>
        <div class="center">
          <h1>${esc(title)}</h1>
          ${stepper('Jugadores', 'players', players, MIN_PLAYERS, MAX_PLAYERS)}
          ${stepper('Impostores', 'impostors', impostors, 1, maxImpostors(players))}
        </div>
        <div class="actions"><button class="btn" data-action="start">Empezar</button></div>`;
    }

    const n = current + 1;

    if (phase === 'pass') {
      const fresh = (current === 0 && !recheck) || recheck;
      return `
        ${topbar(recheck ? 'Volver a ver' : `Jugador ${n} de ${players}`, 'exit', 'Salir')}
        <div class="center">
          <p class="muted big-text">${fresh ? 'Que tome el celular el' : 'Pásale el celular al'}</p>
          <div class="big-number">${n}</div>
          <p class="muted big-text">jugador ${n}</p>
        </div>
        <div class="actions"><button class="btn" data-action="reveal" disabled>Ver palabra</button></div>`;
    }

    if (phase === 'reveal') {
      // La tarjeta del impostor es idéntica en forma y color a la de los demás.
      const imp = round.impostors.has(current);
      const label = imp ? 'Eres el' : mode === 'words' ? 'La palabra es' : 'Hay que dibujar';
      const word = imp
        ? 'IMPOSTOR'
        : mode === 'words'
          ? WORD_LIST[round.secret]
          : DRAWINGS[round.secret].name;
      const last = recheck || current === players - 1;
      return `
        ${topbar(`Jugador ${n}`, 'exit', 'Salir')}
        <div class="center">
          <div class="secret">
            ${mode === 'drawings' ? drawingBox(imp ? null : round.secret) : ''}
            <p class="muted">${label}</p>
            <div class="word">${esc(word)}</div>
          </div>
        </div>
        <div class="actions"><button class="btn secondary" data-action="next" disabled>${last ? 'Listo' : 'Siguiente'}</button></div>`;
    }

    if (phase === 'forgot') {
      const buttons = Array.from(
        { length: players },
        (_, i) => `<button data-action="pick" data-player="${i}">${i + 1}</button>`,
      ).join('');
      return `
        ${topbar('Volver a ver', 'cancelForgot', 'Cancelar')}
        <div class="center">
          <h1 style="font-size:26px">¿Qué jugador eres?</h1>
          <div class="grid">${buttons}</div>
        </div>`;
    }

    // done
    return `
      ${topbar(`${impostors} ${impostors === 1 ? 'impostor' : 'impostores'} · ${players} jugadores`, 'exit', 'Ajustes')}
      <div class="center">
        <p class="muted big-text">¡Todos listos! Empieza el</p>
        <div class="big-number">${round.starter + 1}</div>
        <p class="muted big-text">jugador ${round.starter + 1}</p>
      </div>
      <div class="actions">
        <button class="btn" data-action="start">Nueva ronda</button>
        <button class="btn secondary" data-action="forgot">Alguien olvidó su palabra</button>
      </div>`;
  }

  let lastKey = '';
  function render() {
    // Los cambios de pantalla se animan; los toques en los +/− no.
    const key = `${phase}-${current}`;
    const animate = key !== lastKey;
    lastKey = key;
    root.innerHTML = `<main class="screen${animate ? ' fade-in' : ''}">${screen()}</main>`;

    clearTimeout(armTimer);
    const gated = root.querySelector<HTMLButtonElement>('[data-action="reveal"], [data-action="next"]');
    if (gated) {
      armTimer = setTimeout(
        () => (gated.disabled = false),
        phase === 'pass' ? ARM_DELAY_PASS : ARM_DELAY_REVEAL,
      );
    }
    if (animate) window.scrollTo(0, 0);
  }

  render();
}
