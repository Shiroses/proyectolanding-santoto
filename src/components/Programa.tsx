import { BookOpen, BriefcaseBusiness, Globe2 } from "lucide-react";
import { Container, Eyebrow } from "./ui";

const beneficios = [
  {
    icon: Globe2,
    titulo: "Comunicación intercultural",
    texto: "Interactuar con personas de otros contextos.",
    acento: "bg-cian",
  },
  {
    icon: BookOpen,
    titulo: "Acceso al conocimiento",
    texto: "Explorar contenidos y experiencias educativas en inglés.",
    acento: "bg-amarillo",
  },
  {
    icon: BriefcaseBusiness,
    titulo: "Proyección laboral",
    texto: "Incorporar una habilidad útil para distintos entornos productivos.",
    acento: "bg-naranja",
  },
];

/** Bloque 2: Sobre el programa, con los tres beneficios en el mismo bloque. */
export default function Programa() {
  return (
    <section id="programa" aria-labelledby="programa-title" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <Eyebrow>Sobre el programa</Eyebrow>
            <h2 id="programa-title" className="font-display text-4xl leading-[1.08] font-bold text-navy sm:text-5xl">
              El inglés también contribuye a construir paz.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-negro/80 lg:pt-10">
            Aprender un segundo idioma facilita el encuentro con otras culturas, fortalece el diálogo y amplía el
            acceso al conocimiento. <strong className="text-navy">Santander Territorio Bilingüe</strong> promueve estas
            capacidades como parte de una apuesta por la inclusión y el desarrollo de las comunidades priorizadas del
            departamento.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {beneficios.map(({ icon: Icon, titulo, texto, acento }) => (
            <li key={titulo} className="relative overflow-hidden rounded-card border border-navy/10 bg-niebla p-8">
              <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1.5 ${acento}`} />
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-azul text-white">
                <Icon aria-hidden="true" className="size-6" strokeWidth={1.75} />
              </span>
              <h3 className="font-display mt-6 text-2xl leading-snug font-bold text-navy">{titulo}</h3>
              <p className="mt-2 leading-relaxed text-negro/75">{texto}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
