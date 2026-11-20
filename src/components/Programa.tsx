import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Globe2, HeartHandshake, TrendingUp } from "lucide-react";
import { Container, Eyebrow } from "./ui";

const beneficios = [
  {
    icon: TrendingUp,
    titulo: "Más posibilidades",
    texto: "Una habilidad que puede fortalecer tu proyección personal y profesional.",
    acento: "bg-cian",
  },
  {
    icon: Globe2,
    titulo: "Conexión con el mundo",
    texto: "Acércate a nuevos contenidos, culturas y conversaciones.",
    acento: "bg-amarillo",
  },
  {
    icon: HeartHandshake,
    titulo: "Aprendizaje con propósito",
    texto: "Comunicación, convivencia y construcción de paz desde el territorio.",
    acento: "bg-naranja",
  },
];

/** Sección 01 · El programa: portada, propuesta de valor y motivación para conocer la formación. */
export default function Programa() {
  return (
    <section id="programa" aria-labelledby="programa-title">
      {/* Portada */}
      <div className="relative overflow-hidden bg-navy text-white">
        <div aria-hidden="true" className="absolute inset-y-0 left-0 w-2 bg-amarillo" />
        <svg
          viewBox="0 0 200 200"
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 -right-20 w-56 opacity-70"
          fill="none"
        >
          <circle cx="100" cy="100" r="80" stroke="#1B4A96" strokeWidth="22" />
          <path d="M100 20 A80 80 0 0 1 180 100" stroke="#FCCB06" strokeWidth="4" strokeLinecap="round" />
        </svg>
        <Container className="relative grid items-center gap-10 py-12 sm:py-16 md:gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-20 xl:py-24">
          <div>
            <p className="font-display inline-flex items-center gap-2 rounded-full bg-amarillo px-4 py-1.5 text-sm font-bold tracking-[0.06em] text-navy uppercase">
              Santander Territorio Bilingüe
            </p>

            <h1
              id="programa-title"
              className="font-display text-[clamp(2.3rem,1.5rem+3.2vw,4.25rem)] mt-7 leading-[1.05] font-bold tracking-tight"
            >
              ¡Tu próxima gran oportunidad puede <span className="text-amarillo">hablar inglés!</span>
            </h1>
            <p className="font-display mt-4 text-xl leading-snug font-bold text-white sm:text-2xl xl:text-[1.75rem]">
              ¡Prepárate para ella y haz que tu perfil destaque!
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 xl:text-xl">
              Haz que tu talento llegue más lejos. Aprende inglés, fortalece tu perfil profesional y desarrolla una de
              las habilidades más valoradas en el mundo laboral.
            </p>

            <Link
              href="/#formacion"
              className="group mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-naranja px-8 py-4 text-base font-bold text-white shadow-[0_8px_24px_rgba(246,135,18,0.35)] transition-colors hover:bg-[#ff9a2e]"
            >
              Conoce la formación
              <ArrowDown aria-hidden="true" className="size-5 transition-transform group-hover:translate-y-0.5" />
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
            <div aria-hidden="true" className="absolute -right-3 -bottom-3 left-3 top-3 rounded-[1.75rem] bg-amarillo" />
            <Image
              src="/images/fotos/estudiantes-english-for-peace.webp"
              alt="Jóvenes conversando en una clase de inglés con un tablero que dice English for Peace"
              width={1400}
              height={933}
              sizes="(min-width: 1360px) 640px, (min-width: 1024px) 46vw, 92vw"
              className="relative aspect-[4/3] h-auto w-full rounded-[1.75rem] object-cover lg:aspect-[5/4] shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
              preload
            />
          </div>
        </Container>
      </div>

      {/* Propuesta de valor */}
      <div className="bg-white py-14 md:py-20">
        <Container>
          <div className="grid items-center gap-6 md:gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <Eyebrow>El programa</Eyebrow>
              <h2 className="font-display text-[clamp(2rem,1.45rem+2.2vw,3.4rem)] leading-[1.05] font-bold text-navy">
                Tu territorio es el punto de partida, no el límite.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-negro/80 xl:text-xl">
              <p>
                Con <strong className="text-navy">Santander Territorio Bilingüe</strong>, tienes la oportunidad de
                formarte gratuitamente, ampliar tus horizontes y prepararte para acceder a nuevas oportunidades. Te
                ofrecemos formación gratuita y virtual en inglés, con acompañamiento académico de la Universidad Santo
                Tomás. Una oportunidad dirigida a personas residentes en Santander y pertenecientes a las poblaciones del
                FondoPAZ.
              </p>
              <p>
                Aprender inglés es sumar una herramienta para crecer, compartir ideas y descubrir otras formas de ver el
                mundo. A través de Santander Territorio Bilingüe, podrás fortalecer tus habilidades de comunicación en
                inglés, adquirir conocimientos prácticos para desenvolverte en diferentes situaciones y ampliar tus
                posibilidades de desarrollo personal, educativo y profesional.
              </p>
            </div>
          </div>

          <div className="mt-10 grid items-center gap-6 md:mt-14 lg:grid-cols-[1.35fr_1fr] lg:gap-8">
            <Image
              src="/images/fotos/formacion-virtual-ingles-santander.webp"
              alt="Mujer en un computador portátil tomando una clase virtual de inglés, con el mapa de Santander y una paloma de la paz"
              width={1670}
              height={942}
              sizes="(min-width: 1360px) 730px, (min-width: 1024px) 55vw, 92vw"
              className="aspect-[1670/942] h-auto w-full rounded-[1.75rem] object-cover shadow-[0_20px_50px_rgba(18,49,101,0.18)]"
            />

            <ul className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:h-full lg:grid-cols-1 lg:gap-4">
              {beneficios.map(({ icon: Icon, titulo, texto, acento }) => (
                <li
                  key={titulo}
                  className="relative flex flex-col overflow-hidden rounded-card border border-navy/10 bg-niebla p-6 sm:last:col-span-2 lg:flex-row lg:items-center lg:gap-5 lg:last:col-span-1 xl:px-7"
                >
                  <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1.5 lg:inset-x-auto lg:inset-y-0 lg:left-0 lg:h-auto lg:w-1.5 ${acento}`} />
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-azul text-white">
                    <Icon aria-hidden="true" className="size-6" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-display mt-5 text-xl leading-snug font-bold text-navy lg:mt-0 xl:text-2xl">{titulo}</h3>
                    <p className="mt-1.5 leading-relaxed text-negro/75 lg:text-[17px]">{texto}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <p className="font-display mt-10 rounded-card border-l-4 border-amarillo bg-niebla px-6 py-6 text-[clamp(1.35rem,1.1rem+1vw,2rem)] leading-snug font-bold text-navy sm:px-10 sm:py-8 md:mt-14">
            Porque las oportunidades no tienen fronteras cuando tienes las herramientas para alcanzarlas.
          </p>
        </Container>
      </div>
    </section>
  );
}
