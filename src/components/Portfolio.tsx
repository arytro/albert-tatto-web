import { useState, useMemo } from 'react';
import { PORTFOLIO_ITEMS, PortfolioItem, ARTIST_INFO } from '../data/portfolioData';
import LightboxModal from './LightboxModal';
import { Maximize2, Instagram, ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);

  const currentIndex = useMemo(() => {
    if (!activeModalItem) return 0;
    return PORTFOLIO_ITEMS.findIndex((item) => item.id === activeModalItem.id);
  }, [activeModalItem]);

  const handlePrev = () => {
    if (PORTFOLIO_ITEMS.length === 0) return;
    const newIndex = (currentIndex - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length;
    setActiveModalItem(PORTFOLIO_ITEMS[newIndex]);
  };

  const handleNext = () => {
    if (PORTFOLIO_ITEMS.length === 0) return;
    const newIndex = (currentIndex + 1) % PORTFOLIO_ITEMS.length;
    setActiveModalItem(PORTFOLIO_ITEMS[newIndex]);
  };

  return (
    <section id="portfolio" className="py-24 border-t border-neutral-900 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-medium mb-3">
              05 · Galería de trabajos reales
            </p>
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-[0.08em] text-white uppercase"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Portafolio
            </h2>
            <p className="text-sm text-neutral-400 font-light mt-3 max-w-lg">
              Selección de tatuajes realizados por Albert en el estudio. Haz clic en cualquiera para apreciarlo en pantalla completa.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={ARTIST_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-neutral-800 hover:border-neutral-600 text-xs tracking-wider text-neutral-300 hover:text-white uppercase transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Ver más en {ARTIST_INFO.handle}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Cuadrícula editorial dinámica con TODAS las fotos reales sin filtros ni etiquetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:auto-rows-[280px]">
          {PORTFOLIO_ITEMS.map((item, index) => {
            return (
              <div
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                className={`relative group cursor-pointer overflow-hidden border border-neutral-800/80 bg-neutral-950 transition-all duration-300 hover:border-neutral-500 ${item.spanClass}`}
              >
                {/* Fotografía limpia */}
                <img
                  src={item.imageSrc}
                  alt={`Tatuaje de Albert ${index + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-115 brightness-90 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500 ease-out min-h-[260px]"
                  loading="lazy"
                />

                {/* Sombra y gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-75 group-hover:opacity-95 transition-opacity" />

                {/* Ícono de zoom en esquina superior */}
                <div className="absolute top-4 right-4 flex items-center justify-end pointer-events-none">
                  <div className="p-2 rounded-full bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity border border-neutral-800">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Datos inferiores sin etiquetas */}
                <div className="absolute bottom-4 left-4 right-4 transform group-hover:-translate-y-1 transition-transform duration-300 pointer-events-none">
                  <div className="flex items-center justify-between">
                    <h3 
                      className="text-base sm:text-lg font-bold text-white uppercase tracking-wide leading-snug drop-shadow-md"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {item.title}
                    </h3>
                    <span className="text-[10px] font-mono text-neutral-400">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-300 font-light line-clamp-1 drop-shadow mt-0.5">
                    {item.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guía informativa de la galería */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border border-neutral-900 bg-neutral-950/40 p-5 text-xs text-neutral-400">
          <p className="font-light">
            Haz clic en cualquier imagen para verla en alta definición o cotizar un trabajo similar directamente con Albert.
          </p>
          <div className="flex items-center gap-2 text-white font-mono text-[11px] shrink-0">
            <span>{PORTFOLIO_ITEMS.length} FOTOGRAFÍAS REALES</span>
            <span aria-hidden="true" className="text-neutral-600">/</span>
            <span>@ALBERT_TATTOO_RD</span>
          </div>
        </div>

      </div>

      {/* Visor Lightbox sin etiquetas forzadas */}
      <LightboxModal
        item={activeModalItem}
        items={PORTFOLIO_ITEMS}
        currentIndex={currentIndex}
        onClose={() => setActiveModalItem(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
