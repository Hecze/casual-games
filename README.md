# Juegos en persona

Ayuda digital para jugar en persona con amigos, pasando **un solo celular** en ronda:

- **El impostor** (`/impostor`): todos ven la misma palabra, el impostor ve "IMPOSTOR".
- **El artista impostor** (`/impostor-artista`): todos ven qué dibujar (con un dibujo de referencia de pocos trazos), el impostor no.

Sin login, sin cookies, sin base de datos, sin storage. Todo pasa en memoria en el navegador.

## Cómo funciona

1. Eliges jugadores (3–20) e impostores (siempre menos que la mitad).
2. "Ver palabra" → la persona ve su secreto → "Siguiente" lo oculta y pide pasar el celular.
3. Al final dice quién empieza (al azar). "Nueva ronda" usa otra palabra.

## Casos borde cubiertos

- **Doble toque**: "Ver palabra" se habilita 0,8 s después de aparecer, así quien termina no ve la palabra del siguiente.
- **Impostor de reojo**: la tarjeta del impostor tiene el mismo color y tamaño que la de los demás.
- **Pantalla apagada / cambio de app** con la palabra visible: se oculta sola.
- **Alguien olvidó su palabra**: desde la pantalla final, elige su número y la vuelve a ver.
- **Pantalla encendida** durante la ronda (Wake Lock, si el navegador lo soporta).
- **Sin repetir** palabras ni dibujos hasta agotar la lista (mientras la pestaña siga abierta).
- Sin zoom por doble toque, sin pull-to-refresh, sin selección de texto.

## Editar contenido

- Palabras: `data/words.ts`
- Dibujos: `data/drawings.ts` (SVG de 100×100, solo trazos)

## Desarrollo

```bash
npm install
npm run dev
```

`npm run build` genera un sitio estático en `out/` (`output: 'export'`). En Vercel se despliega tal cual, sin configuración.
