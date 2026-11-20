import { CREDITOS } from "@/lib/config";
import { ColorBar, Container } from "./ui";

/** Pie de página con las entidades de la alianza. */
export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <ColorBar />
      <Container className="flex flex-col gap-4 py-12 lg:flex-row lg:items-center lg:justify-between">
        <p className="font-display shrink-0 text-2xl leading-tight font-bold whitespace-nowrap">
          Santander <span className="text-amarillo">Territorio Bilingüe</span>
        </p>
        <ul
          aria-label="Entidades aliadas"
          className="grid gap-1 text-sm leading-relaxed text-white/70 sm:grid-cols-2 sm:gap-x-8 lg:text-right"
        >
          {CREDITOS.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
