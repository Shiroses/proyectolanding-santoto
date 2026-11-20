import { ArrowUpRight, GraduationCap, Languages, MapPin } from "lucide-react";
import { FORM_URL } from "@/lib/config";
import { Container } from "./ui";

const etiquetas = [
  { icon: Languages, texto: "Inglés" },
  { icon: GraduationCap, texto: "Formación gratuita" },
  { icon: MapPin, texto: "Presencial o híbrida" },
];

/** Gráfico de arcos y líneas en la paleta USTA (inspirado en la portada del manual visual). */
function Arcos({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 520 520" aria-hidden="true" className={className} fill="none">
      <circle cx="260" cy="260" r="210" stroke="#1B4A96" strokeWidth="56" />
      <path d="M260 50 A210 210 0 0 1 460 195" stroke="#FCCB06" strokeWidth="10" strokeLinecap="round" />
      <path d="M430 385 A210 210 0 0 1 135 430" stroke="#F68712" strokeWidth="10" strokeLinecap="round" />
      <path d="M30 330 L490 140" stroke="#00ADEF" strokeWidth="4" strokeLinecap="round" />
      <circle cx="260" cy="260" r="120" fill="#1B4A96" fillOpacity="0.35" />
      <circle cx="88" cy="118" r="14" fill="#ED1C2D" />
      <circle cx="392" cy="440" r="8" fill="#FCCB06" />
      <text
        x="260"
        y="285"
        textAnchor="middle"
        fill="#FFFFFF"
        fontFamily="var(--font-archivo-narrow), Helvetica, Arial, sans-serif"
        fontWeight="700"
        fontSize="72"
        letterSpacing="2"
      >
        ABC
      </text>
    </svg>
  );
}

/** Bloque 1: portada con el único botón de inscripción de la página. */
export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden bg-navy text-white">
      <div aria-hidden="true" className="absolute inset-y-0 left-0 w-2 bg-amarillo" />
      <svg
        viewBox="0 0 200 200"
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-20 w-56 opacity-70 lg:hidden"
        fill="none"
      >
        <circle cx="100" cy="100" r="80" stroke="#1B4A96" strokeWidth="22" />
        <path d="M100 20 A80 80 0 0 1 180 100" stroke="#FCCB06" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <Container className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.25fr_1fr] lg:py-24">
        <div>
          <p className="font-display inline-flex items-center gap-2 rounded-full bg-amarillo px-4 py-1.5 text-sm font-bold tracking-[0.06em] text-navy uppercase">
            Formación gratuita en inglés en Santander
          </p>

          <p className="font-display mt-8 text-xl font-bold tracking-[0.06em] uppercase sm:text-2xl">
            Santander <span className="text-amarillo">Territorio Bilingüe</span>
          </p>

          <h1
            id="hero-title"
            className="font-display mt-3 text-[2.6rem] leading-[1.03] font-bold tracking-tight sm:text-6xl lg:text-[4.2rem]"
          >
            Aprende inglés y amplía tus <span className="text-amarillo">oportunidades.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            Fortalece tus habilidades de comunicación en un segundo idioma con formación gratuita, presencial o
            híbrida, dirigida a poblaciones priorizadas de Santander.
          </p>

          <ul className="mt-8 flex flex-wrap gap-3" aria-label="Características del programa">
            {etiquetas.map(({ icon: Icon, texto }) => (
              <li
                key={texto}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold ring-1 ring-white/20"
              >
                <Icon aria-hidden="true" className="size-4 text-amarillo" strokeWidth={2} />
                {texto}
              </li>
            ))}
          </ul>

          {/* Único botón de inscripción de la página. La URL se configura en src/lib/config.ts (FORM_URL). */}
          <a
            href={FORM_URL}
            {...(FORM_URL.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-naranja px-8 py-4 text-base font-bold text-white shadow-[0_8px_24px_rgba(246,135,18,0.35)] transition-colors hover:bg-[#ff9a2e]"
          >
            Inscríbete · Presencial o híbrida
            <ArrowUpRight
              aria-hidden="true"
              className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <div className="relative hidden lg:block">
          <Arcos className="w-full" />
        </div>
      </Container>
    </section>
  );
}
