import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MarcoNormativo from "@/components/MarcoNormativo";

export const metadata: Metadata = {
  title: "Respaldo normativo | Santander Territorio Bilingüe",
  description:
    "Santander Programando Futuro se financia con el Fondo de Paz de Santander. Estas son las normas que lo respaldan y la forma en que la formación en programación e inteligencia artificial contribuye a cumplirlas.",
};

export default function MarcoNormativoPage() {
  return (
    <>
      <Header />
      <main id="contenido">
        <MarcoNormativo />
      </main>
      <Footer />
    </>
  );
}
