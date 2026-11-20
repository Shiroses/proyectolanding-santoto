import { ArrowUpRight, Clock } from "lucide-react";
import { FORM_URL } from "@/lib/config";
import { Container, Eyebrow } from "./ui";

const pasos = [
  {
    titulo: "Consulta los requisitos",
    texto:
      "Verifica las poblaciones destinatarias, las condiciones de participación y la información oficial de la convocatoria.",
  },
  {
    titulo: "Realiza tu postulación",
    texto: "Cuando se habilite el formulario, completa tus datos y presenta los documentos solicitados.",
  },
  {
    titulo: "Espera la confirmación",
    texto:
      "Tu solicitud será revisada según los requisitos y los cupos disponibles. La información sobre el resultado se comunicará por los canales oficiales.",
  },
];

/**
 * Botón único de inscripción. Si FORM_URL (src/lib/config.ts) está vacío, se muestra deshabilitado
 * y se informa que la convocatoria está pendiente de publicación.
 */
function BotonInscripcion() {
  const habilitado = /^https?:\/\//.test(FORM_URL);
  const clases =
    "group inline-flex flex-col items-center justify-center rounded-3xl px-9 py-4 sm:rounded-full text-base font-bold sm:flex-row sm:gap-3";

  if (!habilitado) {
    return (
      <div className="flex flex-col items-center gap-4 lg:items-start">
        <span
          role="link"
          aria-disabled="true"
          aria-describedby="convocatoria-pendiente"
          className={`${clases} cursor-not-allowed bg-[#c9d3df] text-[#5b6b80]`}
        >
          Consultar información de inscripción
          <span className="text-xs font-semibold tracking-[0.08em] uppercase opacity-80">Enlace oficial</span>
        </span>
        <p
          id="convocatoria-pendiente"
          className="inline-flex items-center gap-2 rounded-full bg-amarillo/25 px-4 py-2 text-sm font-semibold text-navy ring-1 ring-amarillo"
        >
          <Clock aria-hidden="true" className="size-4" />
          Convocatoria pendiente de publicación
        </p>
      </div>
    );
  }

  return (
    <a
      href={FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${clases} bg-naranja text-white shadow-[0_8px_24px_rgba(246,135,18,0.35)] transition-colors hover:bg-[#ff9a2e]`}
    >
      <span className="inline-flex items-center gap-2">
        Consultar información de inscripción
        <ArrowUpRight
          aria-hidden="true"
          className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
      <span className="text-xs font-semibold tracking-[0.08em] uppercase opacity-85">Enlace oficial</span>
      <span className="sr-only"> (abre en una nueva pestaña)</span>
    </a>
  );
}

/** Sección 03 · Cómo participar: ruta de inscripción en tres pasos y un único llamado a la acción. */
export default function Participar() {
  return (
    <section id="participar" aria-labelledby="participar-title" className="bg-[#f9fafb] py-14 md:py-20">
      <Container className="grid items-center gap-10 md:gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-x-16 lg:gap-y-9">
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:self-end lg:text-left">
          <Eyebrow>Da el primer paso</Eyebrow>
          <h2
            id="participar-title"
            className="font-display text-[clamp(2rem,1.45rem+2.2vw,3.4rem)] leading-[1.05] font-extrabold tracking-tight text-navy"
          >
            Tu oportunidad de aprender inglés empieza aquí.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#566479] lg:mx-0 xl:text-xl">
            Revisa las condiciones del programa y prepárate para postularte. El proceso es sencillo y se realizará a
            través de los canales oficiales de la convocatoria.
          </p>
        </div>

        <ol className="relative mx-auto grid w-full max-w-3xl gap-4 md:gap-5 lg:col-start-2 lg:max-w-none lg:row-span-2 lg:row-start-1 lg:grid-cols-1">
          <span
            aria-hidden="true"
            className="absolute top-[58px] bottom-[58px] left-[54px] hidden w-px bg-[repeating-linear-gradient(to_bottom,#afc0d2_0_8px,transparent_8px_16px)] md:block"
          />
          {pasos.map(({ titulo, texto }, i) => (
            <li
              key={titulo}
              className="relative z-10 rounded-card bg-white p-6 text-center shadow-[0_8px_24px_rgba(21,39,71,0.06)] ring-1 ring-[#dde5ee] md:grid md:grid-cols-[60px_1fr] md:items-center md:gap-x-6 md:px-6 md:py-7 md:text-left"
            >
              <span className="font-display mx-auto mb-5 grid size-[60px] place-items-center rounded-full border-[7px] border-white md:row-span-2 md:mx-0 md:mb-0 bg-navy text-lg font-extrabold text-white shadow-[0_0_0_1px_#dde5ee]">
                <span className="sr-only">Paso </span>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display mb-2.5 text-[19px] font-bold text-navy md:mb-1.5 lg:text-[22px]">{titulo}</h3>
              <p className="mx-auto max-w-[420px] text-base leading-relaxed text-[#566479] md:mx-0 md:max-w-none lg:text-lg">{texto}</p>
            </li>
          ))}
        </ol>

        <div className="text-center lg:col-start-1 lg:row-start-2 lg:self-start lg:text-left">
          <BotonInscripcion />
        </div>
      </Container>
    </section>
  );
}
