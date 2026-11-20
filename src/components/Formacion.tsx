import { CheckCircle2, Languages, MapPin } from "lucide-react";
import { Container, Eyebrow } from "./ui";

const indicadores = [
  { icon: MapPin, etiqueta: "Modalidad", valor: "presencial o híbrida" },
  { icon: Languages, etiqueta: "Área de formación", valor: "inglés" },
];

const poblaciones = [
  "Víctimas del conflicto armado",
  "Firmantes de paz y personas en reincorporación",
  "Personas reinsertadas, desmovilizadas o en reintegración",
  "Comparecientes ante la JEP, incluida la Fuerza Pública",
  "Personas defensoras de derechos humanos, líderes y lideresas",
];

/**
 * Bloques 3 y 4: Formación y postulación (una sola oferta, sin botón)
 * + Población priorizada y condiciones.
 */
export default function Formacion() {
  return (
    <>
      <section id="formacion" aria-labelledby="formacion-title" className="relative overflow-hidden bg-navy py-20 text-white sm:py-24">
        <svg
          viewBox="0 0 400 400"
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-32 w-[420px] opacity-60"
          fill="none"
        >
          <circle cx="200" cy="200" r="160" stroke="#1B4A96" strokeWidth="40" />
          <path d="M200 40 A160 160 0 0 1 360 200" stroke="#FCCB06" strokeWidth="6" strokeLinecap="round" />
        </svg>
        <Container className="relative">
          <div className="max-w-3xl">
            <Eyebrow dark>Formación y postulación</Eyebrow>
            <h2 id="formacion-title" className="font-display text-4xl leading-[1.08] font-bold sm:text-5xl">
              Formación gratuita en inglés.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/85">
              El programa contempla participación en modalidad presencial o híbrida. La información sobre condiciones
              de asistencia, oferta disponible y demás detalles de la convocatoria se comunicará a través de los
              canales oficiales.
            </p>
          </div>

          <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:max-w-3xl">
            {indicadores.map(({ icon: Icon, etiqueta, valor }) => (
              <div key={etiqueta} className="flex items-center gap-4 rounded-card bg-white/[0.07] p-6 ring-1 ring-white/15">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-amarillo text-navy">
                  <Icon aria-hidden="true" className="size-6" strokeWidth={2} />
                </span>
                <div>
                  <dt className="font-display text-sm font-bold tracking-[0.08em] text-amarillo uppercase">{etiqueta}</dt>
                  <dd className="mt-0.5 text-xl font-semibold">{valor}</dd>
                </div>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section aria-labelledby="dirigido-title" className="bg-niebla py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <Eyebrow>Población priorizada</Eyebrow>
            <h2 id="dirigido-title" className="font-display text-4xl leading-[1.08] font-bold text-navy sm:text-5xl">
              ¿A quién va dirigido?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-negro/80">
              Personas residentes en Santander que pertenezcan a alguna de estas poblaciones priorizadas:
            </p>

            <div className="mt-8 rounded-card border-l-4 border-naranja bg-white p-6 shadow-[0_4px_20px_rgba(18,49,101,0.06)]">
              <h3 className="font-display text-xl font-bold text-navy">Requisitos</h3>
              <p className="mt-2 leading-relaxed text-negro/80">
                Residir en Santander, pertenecer a alguna de las poblaciones señaladas y cumplir las condiciones de
                inscripción que se indiquen en la convocatoria.
              </p>
            </div>
          </div>

          <ul className="grid content-start gap-3" aria-label="Poblaciones priorizadas">
            {poblaciones.map((p) => (
              <li
                key={p}
                className="flex items-start gap-4 rounded-2xl bg-white p-5 text-lg leading-snug font-medium text-navy ring-1 ring-navy/10"
              >
                <CheckCircle2 aria-hidden="true" className="mt-0.5 size-6 shrink-0 text-azul" strokeWidth={2} />
                {p}
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
