import Image from "next/image";
import { Container, Eyebrow } from "./ui";

// Los cuatro logotipos oficiales, con igual espacio y sin alterar sus diseños.
const aliados = [
  { nombre: "Gobernación de Santander", src: "/images/logos/gobernacion-santander.png", width: 700, height: 218 },
  {
    nombre: "Secretaría de Competitividad y Productividad",
    src: "/images/logos/secretaria-competitividad.png",
    width: 600,
    height: 172,
  },
  { nombre: "FondoPAZ", src: "/images/logos/fondopaz.png", width: 300, height: 299 },
  {
    nombre: "Universidad Santo Tomás, Seccional Bucaramanga",
    src: "/images/logos/usta-bucaramanga.png",
    width: 1267,
    height: 281,
  },
];

/** Sección 04 · Aliados: entidades participantes con sus identidades visuales oficiales. */
export default function Aliados() {
  return (
    <section id="aliados" aria-labelledby="aliados-title" className="border-t border-navy/10 bg-white py-14 md:py-20">
      <Container>
        <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Una alianza que crea oportunidades</Eyebrow>
            <h2 id="aliados-title" className="font-display text-[clamp(2rem,1.45rem+2.2vw,3.4rem)] leading-[1.05] font-bold text-navy">
              Cuando unimos esfuerzos, el talento de Santander llega más lejos.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-negro/80 xl:text-xl">
            Santander Territorio Bilingüe reúne el compromiso institucional con el desarrollo del departamento y la
            formación académica para acercar el inglés a poblaciones beneficiarias del Fondo de Pacificación. Una
            iniciativa que apuesta por el conocimiento, la inclusión y la construcción de paz.
          </p>
        </div>

        <div className="mt-10 rounded-card bg-niebla p-5 sm:p-8 md:mt-12 lg:p-10">
          <div className="grid gap-3 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-10">
            <h3 className="font-display text-2xl font-bold text-navy lg:text-3xl">Instituciones participantes</h3>
            <p className="leading-relaxed text-negro/75 lg:text-lg">
            La Gobernación de Santander, a través de la Secretaría de Competitividad y Productividad, participa junto con
            FondoPAZ y la Universidad Santo Tomás, Seccional Bucaramanga, en una iniciativa para fortalecer las
            capacidades comunicativas en inglés de las poblaciones convocadas.
            </p>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {aliados.map((a) => (
              <li
                key={a.nombre}
                className="flex h-32 items-center justify-center rounded-card border border-navy/10 bg-white p-4 sm:h-44 sm:p-6 xl:h-48"
              >
                <Image
                  src={a.src}
                  alt={a.nombre}
                  width={a.width}
                  height={a.height}
                  sizes="(min-width: 1024px) 300px, 45vw"
                  className="h-auto max-h-20 w-auto sm:max-h-24 xl:max-h-28 max-w-full object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
