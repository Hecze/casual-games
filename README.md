# Juegos en persona

Ayuda digital para jugar en persona con amigos, pasando **un solo celular** en ronda:

- **El impostor** (`/impostor`): todos ven la misma palabra, el impostor ve "IMPOSTOR".
- **El artista impostor** (`/impostor-artista`): todos ven qué dibujar (con un dibujo de referencia de pocos trazos), el impostor no.
  Se elige dónde dibujan: **papel o pizarra** (todo fuera del celular) o **este celular** (lienzo por turnos: un trazo por jugador, cada uno con su color, con deshacer y leyenda de colores al final).

Pensado solo para celular en **vertical**; si se gira, pide volver a vertical.

Sin login, sin cookies, sin base de datos, sin storage. Todo pasa en memoria en el navegador.

## Cómo funciona

1. Eliges jugadores (3–20) e impostores (1 o 2; por defecto 1 con menos de 6 jugadores y 2 desde 6; con 3 o 4 jugadores solo 1).
2. "Ver palabra" → la persona ve su secreto → "Siguiente" lo oculta y pide pasar el celular.
3. Al final dice quién empieza. "Terminar ronda" vuelve a los ajustes (con la misma configuración) y "Empezar" reparte otra palabra.

## Casos borde cubiertos

- **Doble toque**: "Ver palabra" se habilita 0,8 s después de aparecer, así quien termina no ve la palabra del siguiente.
- **Impostor de reojo**: la tarjeta del impostor tiene el mismo color y tamaño que la de los demás.
- **Pantalla apagada / cambio de app** con la palabra visible: se oculta sola.
- **Pantalla encendida** durante la ronda (Wake Lock, si el navegador lo soporta).
- **Sin repetir** palabras ni dibujos hasta agotar la lista (mientras la pestaña siga abierta).
- Sin zoom por doble toque, sin pull-to-refresh, sin selección de texto.

## Editar contenido

- Palabras: `src/data/words.ts`
- Dibujos: `src/data/drawings.ts` (SVG de 100×100, solo trazos)

## Desarrollo

```bash
npm install
npm run dev
```

Hecho con [Astro](https://astro.build): sitio estático, sin framework en el cliente (~24 KB de JS en total).
`npm run build` genera `dist/`. En Vercel se importa el repo y se despliega tal cual, sin configuración.
