/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Styles from './components/Styles';
import WhyAlbert from './components/WhyAlbert';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import CtaFinal from './components/CtaFinal';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#EAEAEA] selection:bg-neutral-800 selection:text-white">
      {/* Navegación Principal */}
      <Navbar />

      <main>
        {/* Sección Hero de Inicio */}
        <Hero />

        {/* Sección Sobre Albert */}
        <About />

        {/* Sección Estilos de Tatuaje */}
        <Styles />

        {/* Sección ¿Por qué Albert? */}
        <WhyAlbert />

        {/* Sección El Proceso en 4 Pasos */}
        <Process />

        {/* Galería Editorial Portafolio / Visor */}
        <Portfolio />

        {/* Sección Contacto Directo */}
        <Contact />

        {/* Llamado Final a la Acción */}
        <CtaFinal />
      </main>

      {/* Pie de Página Oficial */}
      <Footer />
    </div>
  );
}
