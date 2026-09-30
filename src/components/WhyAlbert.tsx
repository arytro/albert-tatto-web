import { Compass, Eye, Sparkle } from 'lucide-react';

const REASONS = [
  {
    icon: Compass,
    title: 'Diseños Personalizados',
    description: 'Diseños pensados para cada cliente. Cada tatuaje se adapta armónicamente a la anatomía y al concepto de la persona.',
  },
  {
    icon: Eye,
    title: 'Atención al Detalle',
    description: 'Cuidado en cada detalle del trabajo. Máxima precisión en líneas, contrastes y sombreados duraderos.',
  },
  {
    icon: Sparkle,
    title: 'Experiencia Personalizada',
    description: 'Cada proyecto se trabaja de manera individual. Comunicación directa, tiempo dedicado y asesoría honesta en todo momento.',
  },
];

export default function WhyAlbert() {
  return (
    <section className="py-24 border-t border-neutral-900 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Encabezado */}
        <div className="max-w-xl mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-medium mb-3">
            03 · Compromiso con el arte
          </p>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.1em] text-white uppercase"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            ¿Por qué Albert?
          </h2>
        </div>

        {/* 3 Pilares en español */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REASONS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.title}
                className="border border-neutral-800/80 bg-neutral-950/50 p-8 sm:p-10 flex flex-col justify-between hover:border-neutral-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 font-mono mb-8">
                    <Icon className="w-5 h-5 text-neutral-300" />
                    <span>0{index + 1}</span>
                  </div>

                  <h3 
                    className="text-xl sm:text-2xl font-semibold tracking-wide text-white uppercase mb-4"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-sm text-neutral-400 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-8 border-t border-neutral-900/80 text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
                  CALIDAD & SERVICIO
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
