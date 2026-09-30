import { ARTIST_INFO } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export default function CtaFinal() {
  return (
    <section className="relative py-28 sm:py-36 border-t border-neutral-900 bg-[#080808] overflow-hidden text-center">
      {/* Fondo y luz sutil */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900/60 via-[#080808] to-[#080808] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-medium mb-6">
          TATUADOR PROFESIONAL · ALBERT
        </p>

        <h2 
          className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-[0.05em] text-white uppercase mb-6 leading-tight"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          ¿Listo para tu próximo tatuaje?
        </h2>

        <p className="text-lg sm:text-2xl text-neutral-300 font-light italic mb-10 max-w-xl mx-auto">
          Cuéntale a Albert qué tienes en mente.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={ARTIST_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-12 py-5 bg-white text-black hover:bg-neutral-200 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] transition-all duration-200 shadow-2xl shadow-white/10 flex items-center justify-center gap-3"
          >
            <span>HABLEMOS</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-8 text-xs text-neutral-400 font-mono">
          <span>RESPUESTA DIRECTA POR WHATSAPP: {ARTIST_INFO.phoneDisplay}</span>
        </div>

      </div>
    </section>
  );
}
