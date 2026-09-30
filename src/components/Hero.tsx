import { useState, useEffect } from 'react';
import { ARTIST_INFO, ALBERT_REAL_POSTS, RealInstagramPost } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight, Shuffle, Instagram, MessageCircle } from 'lucide-react';

export default function Hero() {
  // Selecciona una fotografía real aleatoria en cada visita
  const [selectedPost, setSelectedPost] = useState<RealInstagramPost>(() => {
    const randomIndex = Math.floor(Math.random() * ALBERT_REAL_POSTS.length);
    return ALBERT_REAL_POSTS[randomIndex];
  });

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFading, setIsFading] = useState<boolean>(false);

  useEffect(() => {
    const idx = ALBERT_REAL_POSTS.findIndex((p) => p.id === selectedPost.id);
    if (idx !== -1) setCurrentIndex(idx);
  }, []);

  const handleNextRandom = () => {
    setIsFading(true);
    setTimeout(() => {
      let nextIdx = Math.floor(Math.random() * ALBERT_REAL_POSTS.length);
      if (nextIdx === currentIndex && ALBERT_REAL_POSTS.length > 1) {
        nextIdx = (currentIndex + 1) % ALBERT_REAL_POSTS.length;
      }
      setCurrentIndex(nextIdx);
      setSelectedPost(ALBERT_REAL_POSTS[nextIdx]);
      setIsFading(false);
    }, 150);
  };

  const whatsappMessage = encodeURIComponent(
    `Hola Albert, vi tu trabajo "${selectedPost.title}" en tu sitio web y me gustaría cotizar una pieza con este acabado.`
  );

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Luz ambiental de fondo */}
      <div 
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-neutral-900/40 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 left-10 w-72 h-72 bg-neutral-950 rounded-full blur-2xl pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Columna Izquierda: Tipografía & Acciones Directas */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="flex items-center gap-2 text-xs tracking-[0.2em] text-neutral-400 uppercase mb-6 font-medium">
              <span>{ARTIST_INFO.handle}</span>
              <span aria-hidden="true" className="text-neutral-600">/</span>
              <span>Tatuador</span>
              <span aria-hidden="true" className="text-neutral-600">/</span>
              <span>República Dominicana</span>
            </div>

            {/* Nombre del Artista */}
            <h1 
              className="text-6xl sm:text-7xl xl:text-8xl font-black tracking-[0.1em] text-white uppercase leading-none mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {ARTIST_INFO.name}
            </h1>

            {/* Frase / Lema */}
            <p 
              className="text-2xl sm:text-3xl text-neutral-300 font-light italic tracking-wide max-w-lg mb-8 leading-snug"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              &ldquo;{ARTIST_INFO.tagline}&rdquo;
            </p>

            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-md mb-10">
              Diseños originales adaptados a tu anatomía. Precisión técnica, higiene rigurosa y un enfoque artístico dedicado a cada pieza.
            </p>

            {/* Botones de acción en español */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#portfolio"
                className="px-8 py-4 bg-transparent border border-neutral-700 hover:border-white text-white text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>VER TRABAJOS</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href={ARTIST_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-black hover:bg-neutral-200 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-white/5"
              >
                <span>CONTACTAR</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Aviso directo */}
            <div className="mt-8 text-xs text-neutral-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Consultas abiertas por WhatsApp ({ARTIST_INFO.phoneDisplay})</span>
            </div>
          </div>

          {/* Columna Derecha: Cuadro Dinámico de Trabajos Seleccionados */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Marco de fotografía */}
              <div className="relative border border-neutral-800 bg-neutral-950 p-3 sm:p-4 shadow-2xl">
                
                {/* Barra superior del cuadro */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-900 text-xs text-neutral-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    <span className="uppercase tracking-[0.2em] font-semibold text-white text-[11px]">
                      Trabajos Seleccionados
                    </span>
                    <span className="text-neutral-600 font-mono">·</span>
                    <span className="font-mono text-[10px] text-neutral-400">
                      Pieza {currentIndex + 1} de {ALBERT_REAL_POSTS.length}
                    </span>
                  </div>

                  {/* Botón cambiar foto */}
                  <button
                    type="button"
                    onClick={handleNextRandom}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-neutral-800 hover:border-neutral-500 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white text-[10px] font-mono uppercase tracking-wider transition-colors"
                    title="Ver otra fotografía aleatoria de Albert"
                    aria-label="Ver otra fotografía de Albert"
                  >
                    <Shuffle className="w-3 h-3" />
                    <span>Cambiar</span>
                  </button>
                </div>

                {/* Contenedor de la foto real pura */}
                <div className="relative aspect-square sm:aspect-[4/3] overflow-hidden bg-black border border-neutral-900 group">
                  <img
                    key={selectedPost.id}
                    src={selectedPost.image}
                    alt={`Tatuaje de Albert: ${selectedPost.title}`}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105 ${
                      isFading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                    }`}
                    loading="eager"
                  />

                  {/* Degradado sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                  {/* Datos sobre la foto sin etiquetas forzadas */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-xs text-neutral-300 pointer-events-none">
                    <div className="max-w-[85%]">
                      <p className="font-bold tracking-wider uppercase text-sm text-white drop-shadow-md">
                        {selectedPost.title}
                      </p>
                      <p className="text-[11px] text-neutral-300 font-light mt-0.5 line-clamp-1 drop-shadow">
                        {selectedPost.details}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pie del cuadro con botones */}
                <div className="mt-3 pt-3 border-t border-neutral-900/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                  <a
                    href={selectedPost.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 border border-neutral-800 hover:border-neutral-600 text-neutral-300 hover:text-white text-xs uppercase tracking-wider transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Ver en Instagram</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                  </a>

                  <a
                    href={`https://wa.me/18099699707?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-white text-black hover:bg-neutral-200 text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Cotizar este diseño</span>
                  </a>
                </div>

              </div>

              {/* Texto al pie */}
              <div className="mt-3 flex items-center justify-between text-[11px] text-neutral-400 px-2 font-mono">
                <span>FOTOGRAFÍA REAL DE @ALBERT_TATTOO_RD</span>
                <button
                  type="button"
                  onClick={handleNextRandom}
                  className="hover:text-white underline underline-offset-2 transition-colors"
                >
                  Ver otra pieza ↻
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
