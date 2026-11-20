import type { Metadata, Viewport } from "next";
import { Archivo, Archivo_Narrow } from "next/font/google";
import { SITE, SITE_URL } from "@/lib/config";
import "./globals.css";

// El manual de la USTA usa Helvetica (comercial). Archivo es una alternativa libre muy cercana.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Titulares: equivalente libre de Helvetica Condensed.
const archivoNarrow = Archivo_Narrow({
  variable: "--font-archivo-narrow",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE.titulo,
  description: SITE.descripcion,
  keywords: [
    "Santander Territorio Bilingüe",
    "inglés gratis",
    "formación gratuita en inglés",
    "bilingüismo",
    "Gobernación de Santander",
    "Fondo Paz",
    "Universidad Santo Tomás",
    "víctimas del conflicto armado",
    "firmantes de paz",
  ],
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: SITE.nombre,
    title: SITE.titulo,
    description: SITE.descripcion,
  },
  twitter: {
    card: "summary",
    title: SITE.titulo,
    description: SITE.descripcion,
  },
};

export const viewport: Viewport = {
  themeColor: "#123165",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${archivo.variable} ${archivoNarrow.variable} antialiased`}>
      <body className="min-h-dvh bg-white text-negro">{children}</body>
    </html>
  );
}
