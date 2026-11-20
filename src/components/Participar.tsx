import { Container } from "./ui";

const pasos = [
  "Consulta las condiciones de la convocatoria y verifica que cumples los requisitos.",
  "Diligencia el formulario único de inscripción e indica tu interés en modalidad presencial o híbrida, según corresponda.",
  "Permanece atento a las comunicaciones oficiales sobre las siguientes etapas del proceso.",
];

/** Bloque 5: Cómo participar. Tres pasos con línea de recorrido, sin repetir el botón de inscripción. */
export default function Participar() {
  return (
    <section id="participar" aria-labelledby="participar-title" className="bg-[#f9fafb] py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="participar-title" className="font-display text-4xl leading-[1.08] font-extrabold tracking-tight text-navy sm:text-5xl">
            ¿Cómo participar?
          </h2>
        </div>

        <ol className="relative mt-14 grid gap-12 md:grid-cols-3 md:gap-[34px]">
          <span
            aria-hidden="true"
            className="absolute top-[29px] right-[14%] left-[14%] hidden h-px bg-[repeating-linear-gradient(to_right,#afc0d2_0_8px,transparent_8px_16px)] md:block"
          />
          {pasos.map((texto, i) => (
            <li key={i} className="relative z-10 text-center">
              <span className="font-display mx-auto mb-5 grid size-[60px] place-items-center rounded-full border-[7px] border-[#f9fafb] bg-navy text-lg font-extrabold text-white shadow-[0_0_0_1px_#dde5ee]">
                <span className="sr-only">Paso </span>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mx-auto max-w-[300px] text-base leading-relaxed text-[#566479]">{texto}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
