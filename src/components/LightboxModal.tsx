import { useEffect } from 'react';
import { PortfolioItem, ARTIST_INFO } from '../data/portfolioData';
import { X, ChevronLeft, ChevronRight, ArrowUpRight, MessageCircle } from 'lucide-react';

interface LightboxModalProps {
  item: PortfolioItem | null;
  items: PortfolioItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function LightboxModal({
  item,
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxModalProps) {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [item, onClose, onPrev, onNext]);

  if (!item) return null;

  const whatsappMessage = encodeURIComponent(
    `Hola Albert, vi tu trabajo "${item.title}" en tu sitio web y me gustaría cotizar una pieza con este estilo.`
  );
  const consultUrl = `https://wa.me/18099699707?text=${whatsappMessage}`;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-6 md:p-8 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Detalle de ${item.title}`}
    >
      {/* Contenedor Modal */}
      <div 
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col lg:flex-row bg-[#0d0d0d] border border-neutral-800 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 bg-black/70 hover:bg-black text-neutral-300 hover:text-white rounded-full transition-colors border border-neutral-800"
          aria-label="Cerrar vista ampliada"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Contenedor de la foto completa */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] sm:min-h-[420px] max-h-[70vh] lg:max-h-[85vh] overflow-hidden group">
          <img
            src={item.imageSrc}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain max-h-[70vh] lg:max-h-[85vh] select-none"
          />

          {/* Flechas de navegación */}
          <button
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-black/90 text-white rounded-full transition-all border border-neutral-800 hover:scale-105"
            aria-label="Fotografía anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-black/90 text-white rounded-full transition-all border border-neutral-800 hover:scale-105"
            aria-label="Siguiente fotografía"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Panel lateral de información sin etiquetas */}
        <div className="w-full lg:w-80 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-neutral-800 bg-[#0d0d0d]">
          <div>
            {/* Contador */}
            <div className="flex items-center justify-between text-xs text-neutral-400 font-mono mb-4">
              <span>OBRA REAL</span>
              <span>
                {currentIndex + 1} / {items.length}
              </span>
            </div>

            <h3 
              className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide mb-3 leading-snug"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {item.title}
            </h3>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light mb-6">
              {item.details}
            </p>

            <div className="text-xs text-neutral-400 font-mono border-l border-neutral-800 pl-3 space-y-1 mb-6">
              <p>ARTISTA: ALBERT</p>
              <p>ESTUDIO: {ARTIST_INFO.addressDisplay}</p>
              <p>INSTAGRAM: {ARTIST_INFO.handle}</p>
            </div>
          </div>

          <div className="space-y-3 pt-6 border-t border-neutral-900">
            {/* Botón WhatsApp */}
            <a
              href={consultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 bg-white text-black hover:bg-neutral-200 text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Cotizar este trabajo</span>
            </a>

            {/* Enlace Instagram */}
            <a
              href={item.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
            >
              <span>Ver en Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
