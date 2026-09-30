import { ARTIST_INFO } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Comparte Tu Idea',
    description: 'El cliente explica qué tiene en mente.',
    details: 'Envía tus referencias visuales, zona del cuerpo deseada y dimensiones aproximadas por WhatsApp.'
  },
  {
    step: '02',
    title: 'Hablemos del Diseño',
    description: 'Se conversa sobre el concepto y los detalles.',
    details: 'Albert evalúa la anatomía, estilo y composición para garantizar que la pieza funcione a la perfección en tu piel.'
  },
  {
    step: '03',
    title: 'Agenda Tu Sesión',
    description: 'Se coordina la sesión directamente con Albert.',
    details: 'Sin sistemas complejos ni intermediarios. Se fija la fecha y hora directamente con el artista.'
  },
  {
    step: '04',
    title: 'Sesión de Tatuaje',
    description: 'Se realiza el tatuaje.',
    details: 'Sesión en un ambiente seguro e higiénico, con las indicaciones completas para el cuidado posterior de tu piel.'
  }
];

export default function Process() {
  return (
    <section className="py-24 border-t border-neutral-900 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-medium mb-3">
              04 · Metodología clara
            </p>
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.1em] text-white uppercase"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              El Proceso
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              Un flujo simple y transparente. La coordinación de fechas se realiza de forma directa y personalizada a través de WhatsApp.
            </p>
          </div>
        </div>

        {/* 4 Pasos en español */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((item) => (
            <div
              key={item.step}
              className="border border-neutral-800/80 bg-neutral-950 p-8 flex flex-col justify-between relative group hover:border-neutral-700 transition-colors"
            >
              <div>
                <span 
                  className="text-3xl font-extrabold text-neutral-400 group-hover:text-white transition-colors block mb-6 font-mono"
                >
                  {item.step}
                </span>

                <h3 
                  className="text-lg font-bold tracking-wider text-white uppercase mb-3"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-200 font-medium mb-3">
                  {item.description}
                </p>

                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  {item.details}
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-neutral-900 text-[10px] text-neutral-400 uppercase tracking-widest font-mono">
                PASO {item.step}
              </div>
            </div>
          ))}
        </div>

        {/* Recordatorio directo */}
        <div className="mt-12 p-6 border border-neutral-900 bg-neutral-950/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm text-neutral-200 font-medium">¿Listo para iniciar el paso 01?</p>
            <p className="text-xs text-neutral-400 font-light">Escribe a Albert y cuéntale qué diseño o idea tienes en mente.</p>
          </div>
          <a
            href={ARTIST_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-black hover:bg-neutral-200 text-xs font-semibold uppercase tracking-widest inline-flex items-center gap-2 shrink-0 transition-colors"
          >
            <span>Iniciar por WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
