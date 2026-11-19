'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { WORDS } from '@/data/words';
import { DRAWINGS } from '@/data/drawings';

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
const POOL_SIZE: Record<Mode, number> = { words: WORD_LIST.length, drawings: DRAWINGS.length };

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

// Memoria solo mientras la pestaña está abierta: sin cookies ni storage.
// Un mazo barajado evita repetir palabras hasta que se acaben todas.
const decks: Record<Mode, number[]> = { words: [], drawings: [] };
const lastSecret: Record<Mode, number> = { words: -1, drawings: -1 };
const savedSettings: Record<Mode, { players: number; impostors: number }> = {
  words: { players: 4, impostors: 1 },
  drawings: { players: 4, impostors: 1 },
};

function drawSecret(mode: Mode): number {
  if (decks[mode].length === 0) {
    decks[mode] = shuffled(POOL_SIZE[mode]);
    // Al rebarajar, que no salga la misma palabra dos rondas seguidas.
    const top = decks[mode].length - 1;
    if (top > 0 && decks[mode][top] === lastSecret[mode]) {
      [decks[mode][0], decks[mode][top]] = [decks[mode][top], decks[mode][0]];
    }
  }
  const secret = decks[mode].pop()!;
  lastSecret[mode] = secret;
  return secret;
}

function newRound(mode: Mode, players: number, impostors: number): Round {
  return {
    secret: drawSecret(mode),
    impostors: new Set(shuffled(players).slice(0, impostors)),
    starter: randInt(players),
  };
}

/** Mantiene la pantalla encendida mientras se juega (si el navegador lo permite). */
function useWakeLock(active: boolean) {
  useEffect(() => {
    if (!active || !('wakeLock' in navigator)) return;
    let lock: WakeLockSentinel | null = null;
    let cancelled = false;
    const request = async () => {
      try {
        const l = await navigator.wakeLock.request('screen');
        if (cancelled) l.release();
        else lock = l;
      } catch {
        /* sin soporte o sin permiso: no pasa nada */
      }
    };
    const onVisible = () => {
      if (document.visibilityState === 'visible') request();
    };
    request();
    document.addEventListener('visibilitychange', onVisible);
    return () => {
      cancelled = true;
      document.removeEventListener('visibilitychange', onVisible);
      lock?.release().catch(() => {});
    };
  }, [active]);
}

function Stepper({
  label,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="field">
      <label>{label}</label>
      <div className="stepper">
        <button
          type="button"
          aria-label={`Menos ${label.toLowerCase()}`}
          disabled={value <= min}
          onClick={() => onChange(value - 1)}
        >
          −
        </button>
        <output aria-live="polite">{value}</output>
        <button
          type="button"
          aria-label={`Más ${label.toLowerCase()}`}
          disabled={value >= max}
          onClick={() => onChange(value + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

function DrawingBox({ index }: { index: number | null }) {
  if (index === null) {
    return (
      <div className="drawing" aria-label="Sin dibujo">
        ?
      </div>
    );
  }
  return (
    <div className="drawing">
      <svg
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        dangerouslySetInnerHTML={{ __html: DRAWINGS[index].svg }}
      />
    </div>
  );
}

export default function Game({ mode }: { mode: Mode }) {
  const title = mode === 'words' ? 'El impostor' : 'El artista impostor';

  const [phase, setPhase] = useState<Phase>('setup');
  const [players, setPlayers] = useState(savedSettings[mode].players);
  const [impostors, setImpostors] = useState(savedSettings[mode].impostors);
  const [round, setRound] = useState<Round | null>(null);
  const [current, setCurrent] = useState(0);
  const [armed, setArmed] = useState(false);
  // true cuando alguien volvió a ver su palabra desde la pantalla final.
  const [recheck, setRecheck] = useState(false);

  const phaseRef = useRef(phase);
  phaseRef.current = phase;

  useWakeLock(phase !== 'setup');

  // Bloqueo breve de botones al cambiar de pantalla (anti doble toque).
  useEffect(() => {
    if (phase !== 'pass' && phase !== 'reveal') return;
    setArmed(false);
    const t = setTimeout(() => setArmed(true), phase === 'pass' ? ARM_DELAY_PASS : ARM_DELAY_REVEAL);
    return () => clearTimeout(t);
  }, [phase, current]);

  // Si la pantalla se apaga o se cambia de app con la palabra visible,
  // se oculta: quien lo prenda después no ve el secreto de otro.
  useEffect(() => {
    const onHide = () => {
      if (document.visibilityState === 'hidden' && phaseRef.current === 'reveal') {
        setPhase('pass');
      }
    };
    document.addEventListener('visibilitychange', onHide);
    window.addEventListener('pagehide', onHide);
    return () => {
      document.removeEventListener('visibilitychange', onHide);
      window.removeEventListener('pagehide', onHide);
    };
  }, []);

  const changePlayers = (n: number) => {
    setPlayers(n);
    setImpostors((i) => Math.min(i, maxImpostors(n)));
  };

  const start = useCallback(() => {
    const imp = Math.min(impostors, maxImpostors(players));
    savedSettings[mode] = { players, impostors: imp };
    setRound(newRound(mode, players, imp));
    setCurrent(0);
    setRecheck(false);
    setPhase('pass');
    window.scrollTo(0, 0);
  }, [mode, players, impostors]);

  const next = () => {
    if (recheck) {
      setRecheck(false);
      setPhase('done');
    } else if (current < players - 1) {
      setCurrent(current + 1);
      setPhase('pass');
    } else {
      setPhase('done');
    }
  };

  const exitToSetup = () => {
    const midRound = phase === 'pass' || phase === 'reveal';
    if (midRound && !window.confirm('¿Terminar esta ronda?')) return;
    setPhase('setup');
  };

  // ---------- Pantallas ----------

  if (phase === 'setup' || !round) {
    return (
      <main className="screen fade-in">
        <div className="topbar">
          <Link href="/" className="link">
            ← Juegos
          </Link>
        </div>
        <div className="center">
          <h1>{title}</h1>
          <Stepper
            label="Jugadores"
            value={players}
            min={MIN_PLAYERS}
            max={MAX_PLAYERS}
            onChange={changePlayers}
          />
          <Stepper
            label="Impostores"
            value={impostors}
            min={1}
            max={maxImpostors(players)}
            onChange={setImpostors}
          />
        </div>
        <div className="actions">
          <button className="btn" onClick={start}>
            Empezar
          </button>
        </div>
      </main>
    );
  }

  const isImpostor = round.impostors.has(current);
  const playerNo = current + 1;

  if (phase === 'pass') {
    const first = current === 0 && !recheck;
    return (
      <main className="screen fade-in" key={`pass-${current}`}>
        <div className="topbar">
          <span className="player-tag">
            {recheck ? 'Volver a ver' : `Jugador ${playerNo} de ${players}`}
          </span>
          <button className="link" onClick={exitToSetup}>
            Salir
          </button>
        </div>
        <div className="center">
          <p className="muted" style={{ fontSize: 20 }}>
            {first || recheck ? 'Que tome el celular el' : 'Pásale el celular al'}
          </p>
          <div className="big-number">{playerNo}</div>
          <p className="muted" style={{ fontSize: 20 }}>
            jugador {playerNo}
          </p>
        </div>
        <div className="actions">
          <button className="btn" disabled={!armed} onClick={() => setPhase('reveal')}>
            Ver palabra
          </button>
        </div>
      </main>
    );
  }

  if (phase === 'reveal') {
    const last = recheck || current === players - 1;
    return (
      <main className="screen fade-in" key={`reveal-${current}`}>
        <div className="topbar">
          <span className="player-tag">Jugador {playerNo}</span>
          <button className="link" onClick={exitToSetup}>
            Salir
          </button>
        </div>
        <div className="center">
          <div className="secret">
            {mode === 'drawings' && <DrawingBox index={isImpostor ? null : round.secret} />}
            <p className="muted">{isImpostor ? 'Eres el' : mode === 'words' ? 'La palabra es' : 'Hay que dibujar'}</p>
            <div className="word">
              {isImpostor
                ? 'IMPOSTOR'
                : mode === 'words'
                  ? WORD_LIST[round.secret]
                  : DRAWINGS[round.secret].name}
            </div>
          </div>
        </div>
        <div className="actions">
          <button className="btn secondary" disabled={!armed} onClick={next}>
            {last ? 'Listo' : 'Siguiente'}
          </button>
        </div>
      </main>
    );
  }

  if (phase === 'forgot') {
    return (
      <main className="screen fade-in">
        <div className="topbar">
          <span className="player-tag">Volver a ver</span>
          <button className="link" onClick={() => setPhase('done')}>
            Cancelar
          </button>
        </div>
        <div className="center">
          <h1 style={{ fontSize: 26 }}>¿Qué jugador eres?</h1>
          <div className="grid">
            {Array.from({ length: players }, (_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrent(i);
                  setRecheck(true);
                  setPhase('pass');
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </main>
    );
  }

  // phase === 'done'
  return (
    <main className="screen fade-in">
      <div className="topbar">
        <span className="player-tag">
          {impostors} {impostors === 1 ? 'impostor' : 'impostores'} · {players} jugadores
        </span>
        <button className="link" onClick={exitToSetup}>
          Ajustes
        </button>
      </div>
      <div className="center">
        <p className="muted" style={{ fontSize: 20 }}>
          ¡Todos listos! Empieza el
        </p>
        <div className="big-number">{round.starter + 1}</div>
        <p className="muted" style={{ fontSize: 20 }}>
          jugador {round.starter + 1}
        </p>
      </div>
      <div className="actions">
        <button className="btn" onClick={start}>
          Nueva ronda
        </button>
        <button className="btn secondary" onClick={() => setPhase('forgot')}>
          Alguien olvidó su palabra
        </button>
      </div>
    </main>
  );
}
