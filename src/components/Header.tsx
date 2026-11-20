import Image from "next/image";
import { Menu } from "lucide-react";
import { Container } from "./ui";

const links = [
  { href: "#programa", label: "El programa" },
  { href: "#formacion", label: "Formación y postulación" },
  { href: "#participar", label: "Cómo participar" },
  { href: "#aliados", label: "Aliados" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-navy"
      >
        Saltar al contenido
      </a>
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <a href="#inicio" className="flex min-w-0 items-center gap-2.5 sm:gap-4" aria-label="Santander Territorio Bilingüe, ir al inicio">
          <span className="font-display text-[0.95rem] leading-[1.1] font-bold text-white sm:text-lg">
            Santander <span className="block text-amarillo sm:inline">Territorio Bilingüe</span>
          </span>
          <span aria-hidden="true" className="h-7 w-px shrink-0 bg-white/25 sm:h-8" />
          <Image
            src="/images/logos/usta-bucaramanga-blanco.png"
            alt="Universidad Santo Tomás, seccional Bucaramanga"
            width={500}
            height={150}
            className="h-8 w-auto shrink-0 sm:h-10"
            preload
          />
        </a>

        {/* Menú de escritorio */}
        <nav aria-label="Secciones" className="hidden lg:block">
          <ul className="flex items-center gap-6 text-sm font-medium text-white/80 xl:gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menú móvil (sin JavaScript) */}
        <details className="group relative shrink-0 lg:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-white ring-1 ring-white/25 [&::-webkit-details-marker]:hidden">
            <Menu aria-hidden="true" className="size-5" />
            <span className="sr-only sm:not-sr-only">Menú</span>
          </summary>
          <nav
            aria-label="Secciones"
            className="absolute right-0 mt-2 w-64 rounded-2xl bg-azul p-2 shadow-[0_8px_32px_rgba(0,0,0,0.35)] ring-1 ring-white/15"
          >
            <ul className="flex flex-col text-base text-white">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="block rounded-xl px-4 py-3 hover:bg-white/10">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </Container>
    </header>
  );
}
