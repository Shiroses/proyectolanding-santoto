import Image from "next/image";
import { Container, Eyebrow } from "./ui";

// Las cuatro entidades con igual reconocimiento institucional (mismo tamaño de tarjeta y de logo).
const aliados = [
  { nombre: "Gobernación de Santander", src: "/images/logos/gobernacion-santander.png", width: 700, height: 218 },
  {
    nombre: "Secretaría de Competitividad y Productividad",
    src: "/images/logos/secretaria-competitividad.png",
    width: 600,
    height: 172,
  },
  { nombre: "Fondo Paz", src: "/images/logos/fondopaz.png", width: 300, height: 299 },
  {
    nombre: "Universidad Santo Tomás, seccional Bucaramanga",
    src: "/images/logos/usta-bucaramanga.png",
    width: 1267,
    height: 281,
  },
];

/** Bloque 6: Alianza institucional. */
export default function Aliados() {
  return (
    <section id="aliados" aria-labelledby="aliados-title" className="border-t border-navy/10 bg-niebla py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Alianza institucional</Eyebrow>
          <h2 id="aliados-title" className="font-display text-4xl leading-[1.08] font-bold text-navy sm:text-5xl">
            Una alianza por el bilingüismo en Santander.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-negro/80">
            Santander Territorio Bilingüe articula los esfuerzos de la Gobernación de Santander, la Secretaría de
            Competitividad y Productividad, Fondo Paz y la Universidad Santo Tomás para ampliar el acceso a la
            formación en inglés de poblaciones priorizadas del departamento.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {aliados.map((a) => (
            <li
              key={a.nombre}
              className="flex h-32 items-center justify-center rounded-card border border-navy/10 bg-white p-4 sm:h-40 sm:p-6"
            >
              <Image
                src={a.src}
                alt={a.nombre}
                width={a.width}
                height={a.height}
                sizes="(min-width: 1024px) 240px, 45vw"
                className="h-auto max-h-20 w-auto max-w-full object-contain"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
