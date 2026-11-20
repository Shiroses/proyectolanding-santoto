import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check, CheckCircle2 } from "lucide-react";
import { FORM_URL } from "@/lib/config";
import { Container, Eyebrow } from "./ui";

const datos = ["Un mes de clases.", "100 horas de formación.", "200 participantes", "Sin costo de formación", "Modalidad virtual"];

const detalles = [
  { valor: "80 horas", texto: "Sesiones virtuales con docentes" },
  { valor: "20 horas", texto: "Trabajo autónomo guiado" },
  { valor: "Evaluación", texto: "Inicial y final" },
  { valor: "Certificación", texto: "De asistencia y aprobación" },
];

const poblaciones = [
  "Víctimas del conflicto armado",
  "Firmantes de paz y personas en reincorporación",
  "Personas reinsertadas, desmovilizadas o en reintegración",
  "Comparecientes ante la JEP, incluida la Fuerza Pública",
  "Personas defensoras de derechos humanos, líderes y lideresas",
];

const requisitos = [
  "Residir en el departamento de Santander.",
  "Acreditar la pertenencia a alguna de las poblaciones beneficiarias, de acuerdo con la convocatoria.",
  "Contar con disponibilidad para participar en sesiones virtuales y realizar las actividades autónomas.",
  "Tener acceso a un dispositivo que permita participar en la formación virtual.",
];

/** Sección 02 · Formación y postulación: English Horizons, aprendizajes, población destinataria y condiciones. */
export default function Formacion() {
  return (
    <section id="formacion" aria-labelledby="formacion-title">
      {/* Características de la formación */}
      <div className="relative overflow-hidden bg-navy py-14 text-white md:py-20">
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
          <div className="grid lg:grid-cols-[1fr_1.05fr] lg:grid-rows-[auto_auto] lg:gap-x-16">
            <div className="mb-6 lg:col-start-1 lg:row-start-1 lg:mb-0 lg:self-end lg:pb-6">
              <Eyebrow dark>Características de la formación</Eyebrow>
              <h2 id="formacion-title" className="font-display text-[clamp(2rem,1.45rem+2.2vw,3.4rem)] leading-[1.05] font-bold">
                Impulsa tus oportunidades con <span className="text-amarillo">English Horizons.</span>
              </h2>
            </div>
            <div className="mb-10 lg:col-start-1 lg:row-start-2 lg:mb-0 lg:pt-2">
              <p className="text-lg leading-relaxed text-white/85 xl:text-xl">
                Una ruta intensiva y práctica para dar tus primeros pasos en inglés, fortalecer tu confianza al
                comunicarte y desarrollar una habilidad valiosa para tu futuro. Aprende desde tu territorio, con sesiones
                virtuales en tiempo real y trabajo autónomo guiado.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white/85 xl:text-xl">
                El programa contempla recursos académicos y apoyo de conectividad. La certificación se expedirá a quienes
                cumplan los requisitos académicos y de asistencia establecidos.
              </p>
            </div>
            {/* Ficha del programa: panel amarillo y panel blanco unidos */}
            <div className="relative z-10 rounded-t-card bg-amarillo p-6 text-navy sm:p-10 lg:col-start-2 lg:row-start-1">
              <p className="font-display text-sm font-extrabold tracking-[0.08em] uppercase">Santander Territorio Bilingüe</p>
              <ul className="mt-5 grid gap-y-2.5 md:grid-cols-2 md:gap-x-8 lg:grid-cols-1">
                {datos.map((d) => (
                  <li key={d} className="font-display flex items-start gap-3 text-xl leading-snug font-bold sm:text-2xl">
                    <Check aria-hidden="true" className="mt-1 size-5 shrink-0" strokeWidth={3} />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <dl className="grid grid-cols-2 grid-rows-2 gap-px overflow-hidden rounded-b-card bg-[#e3e8f0] text-navy shadow-[0_24px_50px_rgba(0,0,0,0.28)] lg:col-start-2 lg:row-start-2">
              {detalles.map(({ valor, texto }) => (
                <div key={valor} className="flex flex-col justify-center bg-white p-5 sm:p-8 lg:p-10">
                  <dt className="font-display text-xl font-extrabold text-azul sm:text-2xl xl:text-3xl">{valor}</dt>
                  <dd className="mt-1 leading-snug text-negro/75">{texto}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Inscripción: enlace al formulario oficial */}
          <div id="inscripcion" className="mt-10 flex scroll-mt-24 justify-center md:mt-12">
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-naranja px-10 py-5 text-lg font-bold text-white shadow-[0_10px_30px_rgba(246,135,18,0.45)] ring-4 ring-naranja/25 transition-colors hover:bg-[#ff9a2e] sm:w-auto sm:min-w-[22rem] sm:px-14 sm:text-xl"
            >
              Inscríbete aquí
              <ArrowUpRight
                aria-hidden="true"
                className="size-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
              <span className="sr-only"> (abre en una nueva pestaña)</span>
            </a>
          </div>
        </Container>
      </div>

      {/* Continuación: población destinataria y condiciones */}
      <div className="bg-niebla py-14 md:py-20">
        <Container>
          <div className="grid items-end gap-6 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <Eyebrow>Formación y postulación</Eyebrow>
              <h3 className="font-display text-[clamp(2rem,1.45rem+2.2vw,3.4rem)] leading-[1.05] font-bold text-navy">
                ¿Esta oportunidad también puede ser para ti?
              </h3>
            </div>
            <p className="text-lg leading-relaxed text-negro/80 xl:text-xl">
              Si resides en Santander y haces parte de alguna de las poblaciones beneficiarias del Fondo de Pacificación,
              esta formación puede ser una oportunidad para fortalecer tu perfil y abrirte a nuevas experiencias. La
              convocatoria no establece restricción de edad.
            </p>
          </div>

          <div className="mt-10 grid gap-10 md:mt-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col">
              <h4 className="font-display text-2xl font-bold text-navy">Poblaciones a las que se dirige</h4>
              <ul className="mt-6 grid flex-1 auto-rows-fr gap-3" aria-label="Poblaciones a las que se dirige">
                {poblaciones.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-4 rounded-2xl bg-white p-5 text-lg leading-snug font-medium text-navy ring-1 ring-navy/10"
                  >
                    <CheckCircle2 aria-hidden="true" className="size-6 shrink-0 text-azul" strokeWidth={2} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col">
              <h4 className="font-display text-2xl font-bold text-navy">Lo que debes tener presente antes de postularte</h4>
              <ul className="mt-6 flex flex-1 flex-col justify-around gap-4 rounded-card bg-white p-6 ring-1 ring-navy/10 sm:p-8">
                {requisitos.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-lg leading-relaxed text-negro/80">
                    <span aria-hidden="true" className="mt-2.5 size-2 shrink-0 rounded-full bg-naranja" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center md:mt-12">
            <Link
              href="/#inscripcion"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-5 py-4 sm:w-auto sm:px-8 text-center text-base font-bold text-white shadow-[0_8px_24px_rgba(18,49,101,0.25)] transition-colors hover:bg-azul"
            >
              Quiero conocer cómo postularme
              <ArrowDown aria-hidden="true" className="size-5 transition-transform group-hover:translate-y-0.5" />
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
}
