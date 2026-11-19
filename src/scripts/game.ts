import { WORDS } from '../data/words';
import { DRAWINGS } from '../data/drawings';
import { attachBoard, colorOf, type Stroke } from './board';

type Mode = 'words' | 'drawings';
type Phase = 'setup' | 'pass' | 'reveal' | 'done' | 'draw' | 'final';
type Where = 'paper' | 'phone';

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
const ARM_DELAY_DONE = 600;

/** Entre 1 y 2 impostores, y siempre más gente normal que impostores
 *  (con 3 o 4 jugadores solo cabe 1). */
const maxImpostors = (players: number) => Math.min(2, Math.max(1, Math.floor((players - 1) / 2)));
/** Por defecto: 1 impostor con menos de 6 jugadores, 2 desde 6. */
const defaultImpostors = (players: number) => Math.min(maxImpostors(players), players < 6 ? 1 : 2);

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

// Que un impostor empiece es muy poco probable (no imposible, para que
// "empezó, entonces no es impostor" no sea una certeza): peso 1 vs 10.
const STARTER_WEIGHT_NORMAL = 10;
const STARTER_WEIGHT_IMPOSTOR = 1;

function pickStarter(players: number, imps: Set<number>): number {
  const w = (i: number) => (imps.has(i) ? STARTER_WEIGHT_IMPOSTOR : STARTER_WEIGHT_NORMAL);
  let total = 0;
  for (let i = 0; i < players; i++) total += w(i);
  let r = randInt(total);
  for (let i = 0; i < players; i++) {
    r -= w(i);
    if (r < 0) return i;
  }
  return 0;
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
  let impostors = defaultImpostors(players);
  let impostorsTouched = false; // si el usuario lo eligió a mano, se respeta
  let round: Round | null = null;
  let current = 0;
  let armTimer: ReturnType<typeof setTimeout> | undefined;

  // Solo artista impostor: dónde se dibuja y el lienzo compartido.
  let where: Where = 'paper';
  let strokes: Stroke[] = [];
  let turn = 0; // turnos de dibujo jugados (incluye vueltas)
  let drewThisTurn = false;
  let board: ReturnType<typeof attachBoard> | null = null;
  const drawer = () => (round ? (round.starter + turn) % players : 0);

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
    const imps = new Set(shuffled(players).slice(0, impostors));
    round = { secret: drawSecret(), impostors: imps, starter: pickStarter(players, imps) };
    current = 0;
    strokes = [];
    turn = 0;
    drewThisTurn = false;
    go('pass');
  }

  function next() {
    if (current < players - 1) {
      current++;
      go('pass');
    } else {
      go('done');
    }
  }

  // Los ajustes solo se ven al terminar la ronda.
  function endGame() {
    go('setup');
  }

  function setPlayers(n: number) {
    players = Math.min(MAX_PLAYERS, Math.max(MIN_PLAYERS, n));
    impostors = impostorsTouched
      ? Math.min(impostors, maxImpostors(players))
      : defaultImpostors(players);
    render();
  }

  const actions: Record<string, (el: HTMLElement) => void> = {
    'players-': () => setPlayers(players - 1),
    'players+': () => setPlayers(players + 1),
    'impostors-': () => {
      impostors = Math.max(1, impostors - 1);
      impostorsTouched = true;
      render();
    },
    'impostors+': () => {
      impostors = Math.min(maxImpostors(players), impostors + 1);
      impostorsTouched = true;
      render();
    },
    start,
    reveal: () => go('reveal'),
    next,
    end: endGame,
    'where-paper': () => {
      where = 'paper';
      render();
    },
    'where-phone': () => {
      where = 'phone';
      render();
    },
    startDraw: () => go('draw'),
    keepDrawing: () => go('draw'),
    finish: () => go('final'),
    undo: () => {
      if (!drewThisTurn) return;
      strokes.pop();
      drewThisTurn = false;
      board?.redraw();
      syncTurnButtons();
    },
    nextTurn: () => {
      if (!drewThisTurn) return;
      turn++;
      drewThisTurn = false;
      render();
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

  const topbar = (left: string, action?: string, label?: string) => `
    <div class="topbar">
      <span class="player-tag">${left}</span>
      ${action ? `<button class="link" data-action="${action}">${label}</button>` : ''}
    </div>`;

  // Al terminar la ronda se vuelve a los ajustes (con la configuración ya puesta).
  const endButton = (cls = 'btn') =>
    `<button class="${cls}" data-action="end" data-gate disabled>Terminar ronda</button>`;

  const drawingBox = (index: number | null) =>
    index === null
      ? `<div class="drawing" aria-label="Sin dibujo">?</div>`
      : `<div class="drawing"><svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${DRAWINGS[index].svg}</svg></div>`;

  const whereToggle = () => `
    <div class="field column">
      <label>Dibujan en</label>
      <div class="segmented">
        <button type="button" data-action="where-paper" aria-pressed="${where === 'paper'}">Papel o pizarra</button>
        <button type="button" data-action="where-phone" aria-pressed="${where === 'phone'}">Este celular</button>
      </div>
    </div>`;

  const legend = () =>
    `<div class="legend">${Array.from(
      { length: players },
      (_, i) => `<span><i style="background:${colorOf(i)}"></i>${i + 1}</span>`,
    ).join('')}</div>`;

  function screen(): string {
    if (phase === 'setup' || !round) {
      return `
        <div class="topbar"><a href="/" class="link">← Juegos</a></div>
        <div class="center">
          <h1>${esc(title)}</h1>
          ${stepper('Jugadores', 'players', players, MIN_PLAYERS, MAX_PLAYERS)}
          ${stepper('Impostores', 'impostors', impostors, 1, maxImpostors(players))}
          ${mode === 'drawings' ? whereToggle() : ''}
        </div>
        <div class="actions"><button class="btn" data-action="start">Empezar</button></div>`;
    }

    const n = current + 1;

    if (phase === 'pass') {
      const fresh = current === 0;
      return `
        ${topbar(`Jugador ${n} de ${players}`)}
        <div class="center">
          <p class="muted big-text">${fresh ? 'Que tome el celular el' : 'Pásale el celular al'}</p>
          <div class="big-number">${n}</div>
          <p class="muted big-text">jugador ${n}</p>
        </div>
        <div class="actions"><button class="btn" data-action="reveal" data-gate disabled>Ver palabra</button></div>`;
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
      const last = current === players - 1;
      return `
        ${topbar(`Jugador ${n}`)}
        <div class="center">
          <div class="secret">
            ${mode === 'drawings' ? drawingBox(imp ? null : round.secret) : ''}
            <p class="muted">${label}</p>
            <div class="word">${esc(word)}</div>
          </div>
        </div>
        <div class="actions"><button class="btn secondary" data-action="next" data-gate disabled>${last ? 'Listo' : 'Siguiente'}</button></div>`;
    }

    if (phase === 'draw') {
      const p = drawer();
      return `
        ${topbar(`Vuelta ${Math.floor(turn / players) + 1}`, 'finish', 'Terminar dibujo')}
        <div class="turn">
          <i style="background:${colorOf(p)}"></i>
          <div><strong>Turno del jugador ${p + 1}</strong><span class="muted">Un solo trazo</span></div>
        </div>
        <div class="board-wrap"><canvas class="board" aria-label="Lienzo"></canvas></div>
        <div class="actions row">
          <button class="btn secondary" data-action="undo" disabled>Deshacer</button>
          <button class="btn" data-action="nextTurn" disabled>Siguiente</button>
        </div>`;
    }

    if (phase === 'final') {
      return `
        ${topbar('Dibujo terminado')}
        ${legend()}
        <div class="board-wrap"><canvas class="board" aria-label="Dibujo final"></canvas></div>
        <div class="actions row">
          <button class="btn secondary" data-action="keepDrawing">Seguir</button>
          ${endButton()}
        </div>`;
    }

    // done
    if (mode === 'drawings' && where === 'phone') {
      return `
      ${topbar(`${impostors} ${impostors === 1 ? 'impostor' : 'impostores'} · ${players} jugadores`)}
      <div class="center">
        <p class="muted big-text">¡Todos listos! Empieza el</p>
        <div class="big-number">${round.starter + 1}</div>
        <p class="muted big-text">jugador ${round.starter + 1}</p>
      </div>
      <div class="actions">
        <button class="btn" data-action="startDraw" data-gate disabled>Empezar a dibujar</button>
        ${endButton('btn secondary')}
      </div>`;
    }

    return `
      ${topbar(`${impostors} ${impostors === 1 ? 'impostor' : 'impostores'} · ${players} jugadores`)}
      <div class="center">
        <p class="muted big-text">¡Todos listos! Empieza el</p>
        <div class="big-number">${round.starter + 1}</div>
        <p class="muted big-text">jugador ${round.starter + 1}</p>
      </div>
      <div class="actions">
        ${endButton()}
      </div>`;
  }

  function syncTurnButtons() {
    root.querySelectorAll<HTMLButtonElement>('[data-action="undo"], [data-action="nextTurn"]').forEach(
      (b) => (b.disabled = !drewThisTurn),
    );
  }

  let lastKey = '';
  function render() {
    // Los cambios de pantalla se animan; los toques en los +/− no.
    const key = phase === 'draw' ? 'draw' : `${phase}-${current}`;
    const animate = key !== lastKey;
    lastKey = key;
    board?.destroy();
    board = null;
    root.innerHTML = `<main class="screen${animate ? ' fade-in' : ''}">${screen()}</main>`;

    const canvas = root.querySelector<HTMLCanvasElement>('canvas.board');
    if (canvas) {
      board = attachBoard(canvas, strokes, {
        canDraw: () => phase === 'draw' && !drewThisTurn,
        player: drawer,
        onStroke: () => {
          drewThisTurn = true;
          syncTurnButtons();
        },
      });
    }

    clearTimeout(armTimer);
    // Botones con data-gate: se habilitan tras un instante (anti doble toque).
    const gated = root.querySelectorAll<HTMLButtonElement>('[data-gate]');
    if (gated.length) {
      const delay =
        phase === 'pass' ? ARM_DELAY_PASS : phase === 'reveal' ? ARM_DELAY_REVEAL : ARM_DELAY_DONE;
      armTimer = setTimeout(() => gated.forEach((b) => (b.disabled = false)), delay);
    }
    if (animate) window.scrollTo(0, 0);
  }

  render();
}
