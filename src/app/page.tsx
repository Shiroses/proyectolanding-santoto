import Aliados from "@/components/Aliados";
import Footer from "@/components/Footer";
import Formacion from "@/components/Formacion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Participar from "@/components/Participar";
import Programa from "@/components/Programa";

/**
 * Orden de bloques según la propuesta editorial del cliente:
 * 01 Portada · 02 Sobre el programa · 03 Formación y postulación · 04 Población priorizada y condiciones
 * 05 Cómo participar · 06 Alianza institucional · 07 Pie de página
 */
export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />
        <Programa />
        <Formacion />
        <Participar />
        <Aliados />
      </main>
      <Footer />
    </>
  );
}
