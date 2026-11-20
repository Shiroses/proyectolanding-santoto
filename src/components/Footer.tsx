import { CREDITOS } from "@/lib/config";
import { ColorBar, Container } from "./ui";

/** Bloque 7: pie de página. Cierre sobrio: sin llamada a la acción, sin eslogan y sin enlace de inscripción. */
export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <ColorBar />
      <Container className="flex flex-col gap-4 py-12 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-2xl leading-tight font-bold">
          Santander <span className="text-amarillo">Territorio Bilingüe</span>
        </p>
        <ul
          aria-label="Entidades aliadas"
          className="flex max-w-3xl flex-col gap-1 md:flex-row md:flex-wrap md:gap-x-2 text-sm leading-relaxed text-white/70 md:justify-end"
        >
          {CREDITOS.map((c, i) => (
            <li key={c} className="whitespace-nowrap">
              {i > 0 && (
                <span aria-hidden="true" className="mr-2 hidden md:inline">
                  ·
                </span>
              )}
              {c}
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
