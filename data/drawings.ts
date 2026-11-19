// Dibujos de referencia ultra simples (pocos trazos).
// Cada dibujo es el contenido interno de un <svg viewBox="0 0 100 100">
// que se pinta con stroke="currentColor" y fill="none".
// Usa class="f" para rellenar algo pequeño (ojos, narices).

export interface Drawing {
  name: string;
  svg: string;
}

const waves = (y: number) =>
  `<path d="M6 ${y} q7 -5 14 0 t14 0 t14 0 t14 0 t14 0 t14 0"/>`;

export const DRAWINGS: Drawing[] = [
  {
    name: 'Perro',
    svg: `
      <ellipse cx="50" cy="55" rx="23" ry="21"/>
      <path d="M32 40 Q16 40 19 66 Q28 66 31 52"/>
      <path d="M68 40 Q84 40 81 66 Q72 66 69 52"/>
      <circle class="f" cx="42" cy="51" r="2.5"/>
      <circle class="f" cx="58" cy="51" r="2.5"/>
      <ellipse class="f" cx="50" cy="61" rx="5" ry="3.5"/>
      <path d="M50 64 v4 M50 68 q-4 4 -8 0 M50 68 q4 4 8 0"/>`,
  },
  {
    name: 'Gato',
    svg: `
      <path d="M27 56 C27 44 28 32 31 21 L45 34 Q50 33 55 34 L69 21 C72 32 73 44 73 56 C73 70 63 78 50 78 C37 78 27 70 27 56 Z"/>
      <circle class="f" cx="41" cy="52" r="2.5"/>
      <circle class="f" cx="59" cy="52" r="2.5"/>
      <path class="f" d="M46.5 59 L53.5 59 L50 62.5 Z"/>
      <path d="M50 62.5 q-3 5 -7 3 M50 62.5 q3 5 7 3"/>
      <path d="M36 60 L16 56 M36 64 L16 66 M64 60 L84 56 M64 64 L84 66"/>`,
  },
  {
    name: 'Tiburón',
    svg: `
      <path d="M10 54 C24 40 56 38 78 50 C60 62 28 66 10 54 Z"/>
      <path d="M78 50 L91 33 Q86 50 91 67 Z"/>
      <path d="M40 42 L51 24 L57 42"/>
      <path d="M38 60 L31 73 L47 60"/>
      <circle class="f" cx="21" cy="50" r="2"/>
      <path d="M30 48 q-2 4 0 8 M35 47 q-2 4 0 8"/>
      <path d="M13 56 q6 3 12 1"/>`,
  },
  {
    name: 'Loro',
    svg: `
      <circle cx="45" cy="28" r="12"/>
      <path d="M56 22 Q68 24 63 39 Q60 34 56 34"/>
      <circle class="f" cx="48" cy="25" r="2.2"/>
      <path d="M35 35 Q26 58 41 72 Q55 72 56 50 Q57 40 54 36"/>
      <path d="M41 46 Q48 58 45 70"/>
      <path d="M42 72 L37 95 L46 95 L49 72"/>
      <path d="M20 75 L80 75"/>`,
  },
  {
    name: 'Tucán',
    svg: `
      <circle cx="36" cy="32" r="11"/>
      <path d="M45 26 Q74 20 89 34 Q72 42 46 38"/>
      <path d="M47 32 Q70 29 89 34"/>
      <circle class="f" cx="35" cy="30" r="2.3"/>
      <path d="M27 38 Q20 60 32 78 Q43 81 45 62 Q46 49 43 42"/>
      <path d="M33 78 L31 92 L39 92 L40 79"/>
      <path d="M16 80 L66 80"/>`,
  },
  {
    name: 'Barco',
    svg: `
      <path d="M16 62 L84 62 L73 76 L27 76 Z"/>
      <path d="M50 62 L50 14"/>
      <path d="M53 18 L78 56 L53 56 Z"/>
      <path d="M47 24 L27 56 L47 56 Z"/>
      ${waves(86)}`,
  },
  {
    name: 'Titanic',
    svg: `
      <path d="M5 56 L95 56 L86 74 L14 74 Z"/>
      <path d="M18 56 L18 48 L82 48 L82 56"/>
      <path d="M25 48 L28 31 L35 31 L33 48"/>
      <path d="M39 48 L42 31 L49 31 L47 48"/>
      <path d="M53 48 L56 31 L63 31 L61 48"/>
      <path d="M67 48 L70 31 L77 31 L75 48"/>
      <path d="M27 36 H34.5 M41 36 H48.5 M55 36 H62.5 M69 36 H76.5"/>
      <circle class="f" cx="26" cy="64" r="1.6"/><circle class="f" cx="36" cy="64" r="1.6"/>
      <circle class="f" cx="46" cy="64" r="1.6"/><circle class="f" cx="56" cy="64" r="1.6"/>
      <circle class="f" cx="66" cy="64" r="1.6"/><circle class="f" cx="76" cy="64" r="1.6"/>
      ${waves(84)}`,
  },
  {
    name: 'Casa',
    svg: `
      <path d="M22 48 L22 84 L78 84 L78 48"/>
      <path d="M14 52 L50 20 L86 52"/>
      <path d="M43 84 L43 64 L57 64 L57 84"/>
      <rect x="28" y="56" width="10" height="10"/>
      <rect x="62" y="56" width="10" height="10"/>`,
  },
  {
    name: 'Árbol',
    svg: `
      <path d="M44 88 L45 62 M56 88 L55 62"/>
      <path d="M45 64 C25 68 16 52 26 42 C20 26 38 16 48 24 C56 12 78 18 76 34 C88 40 84 62 66 62 C62 66 52 66 55 62"/>
      <path d="M36 88 L64 88"/>`,
  },
  {
    name: 'Sol',
    svg: `
      <circle cx="50" cy="50" r="17"/>
      <path d="M50 10 V22 M50 78 V90 M10 50 H22 M78 50 H90 M22 22 L30 30 M70 70 L78 78 M78 22 L70 30 M30 70 L22 78"/>`,
  },
  {
    name: 'Luna',
    svg: `
      <path d="M58 14 A36 36 0 1 0 86 64 A28 28 0 1 1 58 14 Z"/>
      <path d="M76 20 l2 6 6 2 -6 2 -2 6 -2 -6 -6 -2 6 -2 Z"/>`,
  },
  {
    name: 'Estrella',
    svg: `<path d="M50 12 L61 38 L89 40 L67 58 L74 86 L50 71 L26 86 L33 58 L11 40 L39 38 Z"/>`,
  },
  {
    name: 'Corazón',
    svg: `<path d="M50 84 C20 62 10 46 18 32 C26 18 44 20 50 34 C56 20 74 18 82 32 C90 46 80 62 50 84 Z"/>`,
  },
  {
    name: 'Pez',
    svg: `
      <path d="M14 50 C28 30 58 30 72 50 C58 70 28 70 14 50 Z"/>
      <path d="M72 50 L90 36 L90 64 Z"/>
      <circle class="f" cx="28" cy="47" r="2.5"/>
      <path d="M40 38 Q46 50 40 62"/>`,
  },
  {
    name: 'Flor',
    svg: `
      <circle cx="50" cy="19" r="8"/><circle cx="62.4" cy="28" r="8"/><circle cx="57.6" cy="42.5" r="8"/>
      <circle cx="42.4" cy="42.5" r="8"/><circle cx="37.6" cy="28" r="8"/>
      <circle class="bg" cx="50" cy="32" r="7"/>
      <path d="M50 50 L50 90"/>
      <path d="M50 74 C58 62 72 62 74 64 C70 74 60 78 50 74"/>`,
  },
  {
    name: 'Auto',
    svg: `
      <path d="M10 66 L10 54 Q10 50 16 49 L28 47 L38 34 L66 34 L76 47 L86 49 Q90 50 90 56 L90 66 Z"/>
      <path d="M40 38 L33 47 L50 47 L50 38 Z M55 38 L55 47 L70 47 L63 38 Z"/>
      <circle cx="28" cy="67" r="8"/>
      <circle cx="72" cy="67" r="8"/>`,
  },
  {
    name: 'Avión',
    svg: `
      <path d="M50 8 C55 8 55 18 55 30 L55 70 C55 80 52 88 50 88 C48 88 45 80 45 70 L45 30 C45 18 45 8 50 8 Z"/>
      <path d="M45 38 L10 58 L10 64 L45 54 M55 38 L90 58 L90 64 L55 54"/>
      <path d="M46 76 L32 86 L32 90 L47 85 M54 76 L68 86 L68 90 L53 85"/>`,
  },
  {
    name: 'Cohete',
    svg: `
      <path d="M50 8 C64 20 64 46 60 70 L40 70 C36 46 36 20 50 8 Z"/>
      <circle cx="50" cy="36" r="6"/>
      <path d="M40 54 L28 70 L28 78 L41 70 M60 54 L72 70 L72 78 L59 70"/>
      <path d="M44 76 Q50 90 56 76"/>`,
  },
  {
    name: 'Helado',
    svg: `
      <path d="M30 46 L50 92 L70 46"/>
      <path d="M30 46 C22 46 22 34 32 32 C32 16 52 12 58 24 C70 20 80 32 70 46 Z"/>
      <path d="M38 56 L62 56 M42 66 L58 66"/>`,
  },
  {
    name: 'Pizza',
    svg: `
      <path d="M50 90 L18 22 Q50 8 82 22 Z"/>
      <path d="M21 28 Q50 15 79 28"/>
      <circle cx="44" cy="38" r="5"/>
      <circle cx="58" cy="52" r="5"/>
      <circle cx="47" cy="66" r="4"/>`,
  },
  {
    name: 'Taza de café',
    svg: `
      <path d="M20 44 L24 80 Q26 86 34 86 L56 86 Q64 86 66 80 L70 44 Z"/>
      <path d="M69 52 C86 50 86 72 66 72"/>
      <path d="M36 36 q-4 -6 0 -12 t0 -12 M48 36 q-4 -6 0 -12 t0 -12 M60 36 q-4 -6 0 -12 t0 -12"/>
      <path d="M12 90 L78 90"/>`,
  },
  {
    name: 'Guitarra',
    svg: `
      <path d="M38 52 C24 50 18 64 24 74 C30 86 46 90 56 82 C66 74 64 60 58 56 C64 48 60 38 50 40 C46 41 42 46 38 52 Z"/>
      <circle cx="44" cy="66" r="6"/>
      <path d="M50 58 L80 18"/>
      <path d="M77 14 L88 22 L84 27 L74 20 Z"/>
      <path d="M34 78 L42 72"/>`,
  },
  {
    name: 'Paraguas',
    svg: `
      <path d="M10 50 Q50 0 90 50 Q80 44 70 50 Q60 44 50 50 Q40 44 30 50 Q20 44 10 50 Z"/>
      <path d="M50 50 L50 82 Q50 90 42 90 Q36 90 36 84"/>
      <path d="M50 14 L50 10"/>`,
  },
  {
    name: 'Lentes',
    svg: `
      <circle cx="30" cy="54" r="15"/>
      <circle cx="70" cy="54" r="15"/>
      <path d="M45 52 Q50 46 55 52"/>
      <path d="M15 50 L6 40 M85 50 L94 40"/>`,
  },
  {
    name: 'Manzana',
    svg: `
      <path d="M50 32 C38 22 16 26 18 52 C20 74 36 90 50 82 C64 90 80 74 82 52 C84 26 62 22 50 32 Z"/>
      <path d="M50 32 Q50 20 56 12"/>
      <path d="M54 20 C60 10 72 12 74 14 C70 22 60 24 54 20 Z"/>`,
  },
  {
    name: 'Plátano',
    svg: `
      <path d="M22 26 C14 56 34 86 74 80 C82 79 86 74 84 72 C56 74 36 58 32 28 Z"/>
      <path d="M22 26 L22 18 L30 18 L32 28"/>`,
  },
  {
    name: 'Montaña',
    svg: `
      <path d="M6 84 L38 30 L56 58 L68 42 L94 84 Z"/>
      <path d="M29 45 L35 50 L40 44 L45 48 L38 30 Z"/>
      <circle cx="78" cy="22" r="7"/>`,
  },
  {
    name: 'Llama',
    svg: `
      <path d="M30 12 L32 22 M38 12 L37 22"/>
      <path d="M30 22 C24 22 20 28 24 32 L32 32 L34 58"/>
      <path d="M39 22 L40 52 C48 48 66 48 74 52 C82 56 80 68 74 70 L74 90 M66 70 L66 90"/>
      <path d="M34 58 C34 66 38 70 42 70 L42 90 M50 70 L50 90"/>
      <path d="M42 70 L74 70"/>
      <circle class="f" cx="33" cy="26" r="1.8"/>
      <path d="M78 54 q8 -2 8 6"/>`,
  },
  {
    name: 'Caracol',
    svg: `
      <path d="M48 70 C30 70 24 52 34 42 C44 32 62 36 62 50 C62 60 50 62 46 56 C42 50 48 44 52 48"/>
      <path d="M10 74 C30 78 70 78 80 72 C88 68 88 60 84 56 C80 52 70 54 66 60"/>
      <path d="M82 55 L78 42 M86 57 L92 45"/>
      <circle class="f" cx="78" cy="41" r="2"/><circle class="f" cx="92" cy="44" r="2"/>`,
  },
  {
    name: 'Mariposa',
    svg: `
      <path d="M50 30 L50 76"/>
      <path d="M50 40 C40 14 10 16 14 36 C18 50 36 52 50 50 C36 54 22 64 28 78 C36 88 48 72 50 60"/>
      <path d="M50 40 C60 14 90 16 86 36 C82 50 64 52 50 50 C64 54 78 64 72 78 C64 88 52 72 50 60"/>
      <path d="M50 30 Q44 20 40 16 M50 30 Q56 20 60 16"/>`,
  },
  {
    name: 'Araña',
    svg: `
      <path d="M50 4 L50 34"/>
      <ellipse cx="50" cy="56" rx="14" ry="16"/>
      <circle cx="50" cy="38" r="7"/>
      <path d="M37 50 L22 38 L14 46 M36 56 L18 54 L10 64 M37 62 L22 70 L18 82 M40 68 L32 80 L32 92"/>
      <path d="M63 50 L78 38 L86 46 M64 56 L82 54 L90 64 M63 62 L78 70 L82 82 M60 68 L68 80 L68 92"/>`,
  },
  {
    name: 'Serpiente',
    svg: `
      <path d="M14 80 C30 92 44 80 40 64 C36 48 50 40 60 50 C68 58 82 54 82 40 C82 28 70 22 62 26"/>
      <path d="M62 26 C54 22 48 28 54 34 C58 38 64 36 66 32"/>
      <circle class="f" cx="58" cy="28" r="1.8"/>
      <path d="M52 32 L44 34 M44 34 l-3 -3 M44 34 l-3 3"/>`,
  },
  {
    name: 'Pato',
    svg: `
      <circle cx="34" cy="34" r="12"/>
      <path d="M22 32 L10 36 L22 40"/>
      <circle class="f" cx="32" cy="31" r="2"/>
      <path d="M40 45 C26 52 26 76 46 78 L70 78 C84 78 90 66 90 52 C80 60 70 58 62 56 C56 54 48 52 44 44"/>
      <path d="M50 62 Q62 70 72 62"/>
      ${waves(88)}`,
  },
  {
    name: 'Conejo',
    svg: `
      <path d="M40 38 C30 10 34 4 40 6 C46 8 46 22 46 36"/>
      <path d="M60 38 C70 10 66 4 60 6 C54 8 54 22 54 36"/>
      <circle cx="50" cy="58" r="22"/>
      <circle class="f" cx="42" cy="54" r="2.5"/>
      <circle class="f" cx="58" cy="54" r="2.5"/>
      <path d="M47 62 L53 62 L50 65 Z"/>
      <path d="M50 65 v5 M44 68 L30 66 M56 68 L70 66"/>`,
  },
  {
    name: 'Pingüino',
    svg: `
      <path d="M50 10 C34 10 28 30 28 52 C28 76 36 88 50 88 C64 88 72 76 72 52 C72 30 66 10 50 10 Z"/>
      <path d="M42 30 C36 40 36 76 50 82 C64 76 64 40 58 30 Q50 36 42 30 Z"/>
      <circle class="f" cx="44" cy="24" r="2"/><circle class="f" cx="56" cy="24" r="2"/>
      <path d="M46 30 L50 35 L54 30"/>
      <path d="M28 46 L18 62 M72 46 L82 62"/>
      <path d="M40 88 L34 92 L46 92 M60 88 L54 92 L66 92"/>`,
  },
  {
    name: 'Ballena',
    svg: `
      <path d="M10 56 C10 30 50 28 68 46 C74 52 78 56 84 50 L90 38 L92 56 Q90 76 66 76 L26 76 C16 76 10 68 10 56 Z"/>
      <circle class="f" cx="26" cy="54" r="2.5"/>
      <path d="M12 64 Q28 70 44 64"/>
      <path d="M34 34 C34 26 30 20 26 18 M34 34 C34 26 38 20 42 18 M34 34 L34 22"/>`,
  },
  {
    name: 'Corona',
    svg: `
      <path d="M16 74 L12 30 L32 50 L50 22 L68 50 L88 30 L84 74 Z"/>
      <path d="M16 64 L84 64"/>
      <circle cx="12" cy="27" r="3"/><circle cx="50" cy="19" r="3"/><circle cx="88" cy="27" r="3"/>`,
  },
  {
    name: 'Foco',
    svg: `
      <path d="M40 70 C40 58 24 52 24 36 C24 22 36 12 50 12 C64 12 76 22 76 36 C76 52 60 58 60 70 Z"/>
      <path d="M40 76 L60 76 M42 82 L58 82 M46 88 L54 88"/>
      <path d="M44 70 L44 50 L50 44 L56 50 L56 70"/>`,
  },
  {
    name: 'Celular',
    svg: `
      <rect x="30" y="8" width="40" height="84" rx="7"/>
      <path d="M30 20 L70 20 M30 78 L70 78"/>
      <circle cx="50" cy="85" r="2.5"/>
      <path d="M45 14 L55 14"/>`,
  },
  {
    name: 'Globo',
    svg: `
      <path d="M50 66 C30 66 22 48 22 36 C22 20 34 10 50 10 C66 10 78 20 78 36 C78 48 70 66 50 66 Z"/>
      <path d="M46 72 L50 66 L54 72 Z"/>
      <path d="M50 72 C40 80 60 84 50 94"/>
      <path d="M34 28 Q36 20 44 18"/>`,
  },
  {
    name: 'Regalo',
    svg: `
      <rect x="16" y="40" width="68" height="18"/>
      <path d="M22 58 L22 90 L78 90 L78 58"/>
      <path d="M44 40 L44 90 M56 40 L56 90"/>
      <path d="M50 40 C36 20 22 30 30 38 C34 42 46 40 50 40 C54 40 66 42 70 38 C78 30 64 20 50 40"/>`,
  },
  {
    name: 'Hongo',
    svg: `
      <path d="M10 50 C10 24 30 12 50 12 C70 12 90 24 90 50 Z"/>
      <path d="M38 50 C36 66 34 80 36 88 L64 88 C66 80 64 66 62 50"/>
      <circle cx="34" cy="32" r="6"/><circle cx="58" cy="24" r="5"/><circle cx="70" cy="40" r="5"/>`,
  },
  {
    name: 'Cactus',
    svg: `
      <path d="M40 90 L40 20 C40 10 60 10 60 20 L60 90"/>
      <path d="M40 58 L26 58 C20 58 18 54 18 48 L18 36 C18 30 28 30 28 36 L28 48 L40 48"/>
      <path d="M60 50 L74 50 C80 50 82 46 82 40 L82 28 C82 22 72 22 72 28 L72 40 L60 40"/>
      <path d="M26 90 L74 90"/>`,
  },
  {
    name: 'Palmera',
    svg: `
      <path d="M50 30 C46 50 44 70 40 90 M56 30 C54 50 52 70 50 90"/>
      <path d="M53 30 C40 18 22 20 12 34 C26 28 40 30 53 30 Z"/>
      <path d="M53 30 C66 18 84 20 92 34 C78 28 66 30 53 30 Z"/>
      <path d="M53 30 C46 22 46 10 54 6 C54 14 56 22 53 30 Z"/>
      <path d="M30 90 L70 90"/>`,
  },
  {
    name: 'Hamburguesa',
    svg: `
      <path d="M16 46 C16 22 84 22 84 46 Z"/>
      <path d="M14 54 Q22 48 30 54 Q38 48 46 54 Q54 48 62 54 Q70 48 78 54 Q84 50 86 54"/>
      <rect x="14" y="60" width="72" height="10" rx="5"/>
      <path d="M16 76 L84 76 C84 86 76 88 70 88 L30 88 C24 88 16 86 16 76 Z"/>`,
  },
  {
    name: 'Sandía',
    svg: `
      <path d="M10 36 A40 40 0 0 0 90 36 Z"/>
      <path d="M18 40 A32 32 0 0 0 82 40"/>
      <path class="f" d="M38 50 l2 5 -4 0 Z M50 58 l2 5 -4 0 Z M62 50 l2 5 -4 0 Z M50 44 l2 5 -4 0 Z"/>`,
  },
  {
    name: 'Bicicleta',
    svg: `
      <circle cx="24" cy="64" r="16"/>
      <circle cx="76" cy="64" r="16"/>
      <path d="M24 64 L40 40 L66 40 L76 64 M40 40 L52 64 L66 40 M52 64 L24 64"/>
      <path d="M36 32 L46 32 M66 40 L62 28 L70 26"/>`,
  },
  {
    name: 'Búho',
    svg: `
      <path d="M26 20 L34 30 C42 26 58 26 66 30 L74 20 C78 34 80 46 78 60 C76 80 62 88 50 88 C38 88 24 80 22 60 C20 46 22 34 26 20 Z"/>
      <circle cx="38" cy="44" r="9"/><circle cx="62" cy="44" r="9"/>
      <circle class="f" cx="38" cy="44" r="3"/><circle class="f" cx="62" cy="44" r="3"/>
      <path d="M46 54 L50 62 L54 54 Z"/>
      <path d="M40 70 q3 3 6 0 M54 70 q3 3 6 0"/>`,
  },
  {
    name: 'Cerdito',
    svg: `
      <circle cx="50" cy="54" r="28"/>
      <path d="M28 36 L26 20 L40 28 M72 36 L74 20 L60 28"/>
      <ellipse cx="50" cy="62" rx="11" ry="8"/>
      <circle class="f" cx="46" cy="62" r="2"/><circle class="f" cx="54" cy="62" r="2"/>
      <circle class="f" cx="39" cy="46" r="2.5"/><circle class="f" cx="61" cy="46" r="2.5"/>`,
  },
  {
    name: 'Ancla',
    svg: `
      <circle cx="50" cy="16" r="7"/>
      <path d="M50 23 L50 88"/>
      <path d="M36 36 L64 36"/>
      <path d="M16 62 C18 80 34 88 50 88 C66 88 82 80 84 62"/>
      <path d="M10 68 L16 60 L24 66 M90 68 L84 60 L76 66"/>`,
  },
  {
    name: 'Tortuga',
    svg: `
      <path d="M20 66 C20 34 76 34 76 66 Z"/>
      <path d="M36 42 L44 54 L56 54 L62 42 M44 54 L40 66 M56 54 L60 66"/>
      <path d="M76 60 C80 50 92 50 92 58 C92 64 86 66 76 66"/>
      <circle class="f" cx="86" cy="57" r="1.8"/>
      <path d="M28 66 L26 76 L36 76 L36 66 M60 66 L60 76 L70 76 L68 66"/>
      <path d="M20 64 L12 68"/>`,
  },
  {
    name: 'Dinosaurio',
    svg: `
      <path d="M6 76 C20 70 26 50 48 48 C58 47 64 46 66 38 L70 18 C70 10 84 10 86 16 C86 20 82 22 78 22 L76 50 C78 66 70 74 58 74 L30 74 C22 74 14 76 6 76 Z"/>
      <path d="M32 74 L32 90 M42 74 L42 90 M56 74 L56 90 M66 72 L66 90"/>
      <circle class="f" cx="79" cy="15" r="1.8"/>`,
  },
  {
    name: 'Robot',
    svg: `
      <rect x="30" y="14" width="40" height="28" rx="4"/>
      <circle class="f" cx="41" cy="27" r="3"/><circle class="f" cx="59" cy="27" r="3"/>
      <path d="M42 36 L58 36 M50 14 L50 6"/>
      <circle cx="50" cy="5" r="2"/>
      <rect x="26" y="46" width="48" height="32" rx="3"/>
      <path d="M26 52 L14 66 M74 52 L86 66 M40 78 L40 92 M60 78 L60 92"/>`,
  },
  {
    name: 'Fantasma',
    svg: `
      <path d="M22 88 L22 44 C22 22 36 12 50 12 C64 12 78 22 78 44 L78 88 L69 80 L60 88 L50 80 L40 88 L31 80 Z"/>
      <circle class="f" cx="40" cy="42" r="3.5"/><circle class="f" cx="60" cy="42" r="3.5"/>
      <ellipse cx="50" cy="58" rx="5" ry="7"/>`,
  },
  {
    name: 'Pulpo',
    svg: `
      <path d="M24 52 C20 20 80 20 76 52"/>
      <path d="M24 52 C18 62 10 66 12 74 M34 54 C30 66 26 78 30 86 M44 56 C42 68 44 80 40 90 M56 56 C58 68 56 80 60 90 M66 54 C70 66 74 78 70 86 M76 52 C82 62 90 66 88 74"/>
      <circle class="f" cx="40" cy="40" r="3"/><circle class="f" cx="60" cy="40" r="3"/>`,
  },
  {
    name: 'Reloj',
    svg: `
      <circle cx="50" cy="52" r="34"/>
      <path d="M50 52 L50 30 M50 52 L66 60"/>
      <path d="M50 22 L50 26 M50 78 L50 82 M20 52 L24 52 M76 52 L80 52"/>
      <path d="M28 18 L20 26 M72 18 L80 26"/>`,
  },
  {
    name: 'Tijeras',
    svg: `
      <circle cx="26" cy="72" r="10"/>
      <circle cx="74" cy="72" r="10"/>
      <path d="M32 64 L68 10 M68 64 L32 10"/>`,
  },
  {
    name: 'Huevo frito',
    svg: `
      <path d="M50 14 C66 10 84 22 82 38 C92 50 86 70 70 74 C62 90 36 90 28 76 C10 72 10 50 20 42 C16 24 34 12 50 14 Z"/>
      <circle cx="50" cy="48" r="13"/>
      <path d="M44 42 Q46 38 50 38"/>`,
  },
  {
    name: 'Carpa',
    svg: `
      <path d="M8 84 L50 18 L92 84 Z"/>
      <path d="M50 18 L40 84 M50 18 L60 84"/>
      <path d="M50 18 L50 8 L60 12 L50 16"/>
      <path d="M4 84 L96 84"/>`,
  },
];
