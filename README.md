# Santander Territorio Bilingüe

Landing de la convocatoria de formación gratuita en inglés para poblaciones priorizadas de Santander.
Alianza de la Gobernación de Santander, la Secretaría de Competitividad y Productividad, Fondo Paz y la Universidad Santo Tomás.

Stack: Next.js 16 · React 19 · Tailwind CSS 4 · TypeScript.

## Cómo ejecutarla

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev      # desarrollo en http://localhost:3000
npm run build    # compilación de producción
npm start        # servir la compilación
npm run lint     # revisión de código
```

## Enlace del formulario de inscripción

La página tiene **un solo botón** de inscripción, en la portada («Inscríbete · Presencial o híbrida»).
Su enlace está en `src/lib/config.ts`:

```ts
export const FORM_URL = "#"; // TODO: URL oficial del formulario
```

Reemplaza `"#"` por la URL oficial cuando el cliente la entregue. Si es un enlace `http(s)`, se abre en una pestaña nueva.

## Estructura

- `src/app/layout.tsx`: fuentes, metadatos e idioma (`es`).
- `src/app/page.tsx`: orden de las secciones.
- `src/components/`: Header, Hero, Programa, Formacion (formación + ¿a quién va dirigido?), Participar, Aliados, Footer y `ui.tsx`.
- `public/images/logos/`: logos de las cuatro entidades aliadas.
- `src/app/icon.png`, `apple-icon.png`, `favicon.ico`: generados a partir del escudo de la USTA.

## Identidad visual

Paleta del Manual de Identidad Visual de la Universidad Santo Tomás: azul institucional `#1B4A96`, azul profundo `#123165`,
naranja `#F68712`, amarillo `#FCCB06`, rojo `#ED1C2D`, cian `#00ADEF` y negro `#231F20`.
Fuentes: DM Sans (texto) y Manrope (titulares), de Google Fonts.

## Contenido

Los textos son los de la propuesta editorial del cliente. Por indicación del documento, no se publican edades, cupos,
horarios, duración, certificaciones ni niveles hasta que se confirmen.
