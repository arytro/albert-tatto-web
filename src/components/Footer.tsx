import { ARTIST_INFO } from '../data/portfolioData';
import { ArrowUp, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-900 bg-[#060606] py-16 text-neutral-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-900 items-start">
          
          {/* Marca / Identidad */}
          <div className="md:col-span-5">
            <span 
              className="text-2xl font-black tracking-[0.25em] text-white uppercase block mb-3"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {ARTIST_INFO.name}
            </span>
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed font-light mb-4">
              {ARTIST_INFO.tagline} Arte personalizado sobre la piel, cuidando cada detalle desde la consulta inicial hasta la curación del tatuaje.
            </p>
            <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
              <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
              <span>{ARTIST_INFO.addressDisplay}</span>
            </div>
          </div>

          {/* Navegación rápida en español */}
          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-widest text-neutral-400 font-mono mb-4">
              Navegación
            </p>
            <ul className="space-y-2 text-xs uppercase tracking-wider">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">El Artista</a>
              </li>
              <li>
                <a href="#styles" className="hover:text-white transition-colors">Estilos</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Portafolio</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contacto & Estudio</a>
              </li>
            </ul>
          </div>

          {/* Canales Oficiales & Citas */}
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-widest text-neutral-400 font-mono mb-4">
              Atención & Canales
            </p>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2">
                <span className="text-neutral-400 font-mono text-[10px] w-24">INSTAGRAM:</span>
                <a 
                  href={ARTIST_INFO.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-neutral-300 underline underline-offset-4"
                >
                  {ARTIST_INFO.handle}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neutral-400 font-mono text-[10px] w-24">WHATSAPP:</span>
                <a 
                  href={ARTIST_INFO.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-neutral-300 font-mono"
                >
                  {ARTIST_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1 border-t border-neutral-900">
                <span className="text-neutral-400 font-mono text-[10px] w-24">HORARIO:</span>
                <span className="text-neutral-300 text-[11px] leading-tight">
                  {ARTIST_INFO.schedule}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Barra inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {currentYear} {ARTIST_INFO.name}. Todos los derechos reservados.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-xs uppercase tracking-wider cursor-pointer"
            aria-label="Volver al inicio de la página"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
