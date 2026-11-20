import { Container } from "./ui";

const pasos = [
  "Consulta las condiciones de la convocatoria y verifica que cumples los requisitos.",
  "Diligencia el formulario único de inscripción e indica tu interés en modalidad presencial o híbrida, según corresponda.",
  "Permanece atento a las comunicaciones oficiales sobre las siguientes etapas del proceso.",
];

const colores = ["bg-azul text-white", "bg-amarillo text-navy", "bg-naranja text-white"];

/** Bloque 5: Cómo participar. Tres pasos, sin repetir el botón de inscripción. */
export default function Participar() {
  return (
    <section id="participar" aria-labelledby="participar-title" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="max-w-3xl">
          <h2 id="participar-title" className="font-display text-4xl leading-[1.08] font-bold text-navy sm:text-5xl">
            ¿Cómo participar?
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {pasos.map((texto, i) => (
            <li key={i} className="relative rounded-card border border-navy/10 bg-white p-8">
              <span
                className={`font-display inline-flex size-14 items-center justify-center rounded-full text-2xl font-bold ${colores[i]}`}
              >
                <span className="sr-only">Paso </span>
                {i + 1}
              </span>
              <p className="mt-6 text-lg leading-relaxed text-negro/80">{texto}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
