// Lienzo compartido para "El artista impostor" cuando se dibuja en el celular.
// Los trazos se guardan normalizados (divididos por el ancho del lienzo), así
// se ven igual aunque el lienzo cambie de tamaño.

export interface Stroke {
  player: number;
  pts: number[]; // x0, y0, x1, y1, ...
}

// Colores distinguibles sobre fondo blanco (uno por jugador, hasta 20).
export const COLORS = [
  '#e6194b', '#2f9e44', '#1c62d6', '#f58231', '#911eb4',
  '#0fa3b1', '#f032e6', '#9a6324', '#111111', '#800000',
  '#469990', '#808000', '#d4a000', '#ff6fa5', '#000075',
  '#7cb518', '#5b3cc4', '#ff7f50', '#707070', '#1e90ff',
];

export const colorOf = (player: number) => COLORS[player % COLORS.length];

/** Proporción alto/ancho del lienzo (vertical, como el celular). */
export const BOARD_RATIO = 4 / 3;

export function attachBoard(
  canvas: HTMLCanvasElement,
  strokes: Stroke[],
  opts: {
    canDraw: () => boolean;
    player: () => number;
    onStroke: () => void;
  },
) {
  const ctx = canvas.getContext('2d')!;
  let w = 1;

  const paint = (s: Stroke) => {
    const p = s.pts;
    ctx.strokeStyle = colorOf(s.player);
    ctx.lineWidth = Math.max(3, w * 0.014);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(p[0] * w, p[1] * w);
    if (p.length === 2) ctx.lineTo(p[0] * w + 0.1, p[1] * w); // un toque = un punto
    for (let i = 2; i < p.length; i += 2) ctx.lineTo(p[i] * w, p[i + 1] * w);
    ctx.stroke();
  };

  const redraw = () => {
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    strokes.forEach(paint);
  };

  const resize = () => {
    const r = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.max(1, Math.round(r.width * dpr));
    canvas.height = Math.max(1, Math.round(r.height * dpr));
    w = canvas.width;
    redraw();
  };

  const pos = (e: PointerEvent): [number, number] => {
    const r = canvas.getBoundingClientRect();
    const x = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
    const y = Math.min(BOARD_RATIO, Math.max(0, (e.clientY - r.top) / r.width));
    return [x, y];
  };

  // Un solo dedo a la vez: los demás toques se ignoran.
  let active: Stroke | null = null;
  let pointerId = -1;

  const onDown = (e: PointerEvent) => {
    if (active || !opts.canDraw()) return;
    e.preventDefault();
    pointerId = e.pointerId;
    canvas.setPointerCapture(pointerId);
    active = { player: opts.player(), pts: pos(e) };
    strokes.push(active);
    paint(active);
  };

  const onMove = (e: PointerEvent) => {
    if (!active || e.pointerId !== pointerId) return;
    e.preventDefault();
    const events = e.getCoalescedEvents?.() ?? [e];
    for (const ev of events.length ? events : [e]) active.pts.push(...pos(ev));
    paint(active);
  };

  const onUp = (e: PointerEvent) => {
    if (!active || e.pointerId !== pointerId) return;
    active = null;
    pointerId = -1;
    opts.onStroke();
  };

  canvas.addEventListener('pointerdown', onDown);
  canvas.addEventListener('pointermove', onMove);
  canvas.addEventListener('pointerup', onUp);
  canvas.addEventListener('pointercancel', onUp);

  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize();

  return {
    redraw,
    destroy: () => ro.disconnect(),
  };
}
