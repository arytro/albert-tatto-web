import { ARTIST_INFO } from '../data/portfolioData';
import { ArrowUpRight, ShieldCheck, Sparkles, UserCheck, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-neutral-900 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Encabezado de la Sección */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-medium mb-3">
            01 · Conoce al artista
          </p>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.1em] text-white uppercase"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Sobre Albert
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contenedor Principal de Biografía Auténtica */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border border-neutral-800 bg-neutral-950/60 p-8 sm:p-10 relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono block">
                  // DECLARACIÓN ARTÍSTICA & TRAYECTORIA
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
                  ESTUDIO PRIVADO
                </span>
              </div>

              {/* Biografía auténtica y profesional de Albert */}
              <div className="space-y-4 mb-8">
                <p className="text-lg sm:text-xl text-neutral-200 font-light leading-relaxed border-l-2 border-white pl-4">
                  Soy Albert, artista del tatuaje dedicado a transformar conceptos, recuerdos e identidades en piezas gráficas de alto impacto visual y durabilidad sobre la piel.
                </p>
                <p className="text-sm text-neutral-400 leading-relaxed font-light">
                  Especializado en técnicas de <strong>escala de grises (Black & Grey)</strong>, <strong>realismo sombreado</strong> y la sutileza de la <strong>línea fina</strong>, concibo cada sesión como un proceso artístico exclusivo. No trabajo con plantillas genéricas de catálogo: cada diseño se construye a partir de tu idea y se adapta con precisión milimétrica al flujo y movimiento natural de tu anatomía.
                </p>
                <p className="text-sm text-neutral-400 leading-relaxed font-light">
                  Mi estudio, ubicado en la <strong>{ARTIST_INFO.addressDisplay}</strong>, ofrece un espacio tranquilo, confidencial y bajo los estándares más exigentes de asepsia, para que vivas una experiencia cómoda y segura desde el primer trazo hasta el cuidado posterior.
                </p>
              </div>

              {/* Fila inferior con datos directos */}
              <div className="pt-6 mt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-neutral-400">
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{ARTIST_INFO.addressDisplay}</span>
                </div>
                <a
                  href={ARTIST_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-white hover:text-neutral-300 transition-colors underline underline-offset-4"
                >
                  <span>{ARTIST_INFO.handle} en Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Frase o filosofía */}
            <div className="px-2 pt-2">
              <p 
                className="text-neutral-300 italic text-lg sm:text-xl font-light"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                &ldquo;Cada piel es un lienzo irrepetible. El objetivo es crear una pieza que te acompañe con significado y orgullo.&rdquo;
              </p>
            </div>
          </div>

          {/* Pilares de trabajo */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            <div className="border border-neutral-900 bg-neutral-950/40 p-6 transition-colors hover:border-neutral-800">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="w-5 h-5 text-neutral-300" />
                <h3 className="text-sm uppercase tracking-wider text-white font-semibold">
                  Higiene & Bioseguridad
                </h3>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Materiales 100% esterilizados, desechables y de grado médico. Máxima prioridad en el cuidado de la salud en cada procedimiento.
              </p>
            </div>

            <div className="border border-neutral-900 bg-neutral-950/40 p-6 transition-colors hover:border-neutral-800">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-5 h-5 text-neutral-300" />
                <h3 className="text-sm uppercase tracking-wider text-white font-semibold">
                  Enfoque en la Calidad
                </h3>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Pigmentos de alta fidelidad y máquinas de precisión para lograr una cicatrización óptima y durabilidad con el paso de los años.
              </p>
            </div>

            <div className="border border-neutral-900 bg-neutral-950/40 p-6 transition-colors hover:border-neutral-800">
              <div className="flex items-center gap-3 mb-2">
                <UserCheck className="w-5 h-5 text-neutral-300" />
                <h3 className="text-sm uppercase tracking-wider text-white font-semibold">
                  Trato Directo y Personalizado
                </h3>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Comunicación directa sin intermediarios. Desde el primer mensaje por WhatsApp hasta la sesión final en el estudio.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
