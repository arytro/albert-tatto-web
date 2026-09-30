import { ArrowRight } from 'lucide-react';

interface StyleCard {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  tag: string;
}

const STYLES_LIST: StyleCard[] = [
  {
    id: 'black-grey',
    name: 'Escala de Grises (Black & Grey)',
    subtitle: 'Gradientes monocromáticos',
    description: 'Transiciones de tonalidades desde el negro sólido hasta los grises más suaves, otorgando volumen, profundidad y elegancia atemporal.',
    tag: 'Técnica & Sombra'
  },
  {
    id: 'fine-line',
    name: 'Línea Fina (Fine Line)',
    subtitle: 'Precisión y sutileza',
    description: 'Trazos milimétricos ejecutados con agujas finas para motivos botánicos, geométricos y composiciones delicadas en piel.',
    tag: 'Minimalismo'
  },
  {
    id: 'realism',
    name: 'Realismo',
    subtitle: 'Fidelidad visual',
    description: 'Reproducción de rostros, elementos naturales y texturas con alto nivel de contraste y acabado fotorrealista.',
    tag: 'Detalle & Sombra'
  },
  {
    id: 'lettering',
    name: 'Caligrafía & Letras',
    subtitle: 'Tipografía personalizada',
    description: 'Frases, palabras y composiciones caligráficas exclusivas, adaptadas con fluidez al movimiento natural del músculo.',
    tag: 'Trazo Exclusivo'
  },
  {
    id: 'custom-tattoos',
    name: 'Tatuajes Personalizados',
    subtitle: 'Piezas originales',
    description: 'Desarrollo de piezas a medida a partir de tu concepto o referencia, diseñadas exclusivamente para que lleves un tatuaje único.',
    tag: 'Diseño Exclusivo'
  }
];

export default function Styles() {
  return (
    <section id="styles" className="py-24 border-t border-neutral-900 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-medium mb-3">
              02 · Disciplinas artísticas
            </p>
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.1em] text-white uppercase"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Estilos de Tatuaje
            </h2>
          </div>
          
          <div className="max-w-md">
            <p className="text-xs text-neutral-400 leading-relaxed border-l border-neutral-800 pl-4 font-light">
              Categorías de referencia preparadas para ser consultadas con el artista. La técnica y viabilidad de cada idea se evalúa de manera individual en cada proyecto.
            </p>
          </div>
        </div>

        {/* Cuadrícula de estilos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STYLES_LIST.map((style, index) => (
            <div
              key={style.id}
              className="border border-neutral-800/80 bg-neutral-950 p-8 flex flex-col justify-between hover:border-neutral-600 transition-colors duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-400 font-mono mb-6">
                  <span>0{index + 1}</span>
                  <span className="tracking-widest uppercase text-[10px] text-neutral-400">{style.tag}</span>
                </div>

                <h3 
                  className="text-xl sm:text-2xl font-semibold tracking-wide text-white uppercase mb-2 group-hover:text-neutral-200 transition-colors"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {style.name}
                </h3>
                <p className="text-xs text-neutral-400 mb-4 font-light italic">
                  {style.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                  {style.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-900 flex items-center justify-between text-xs text-neutral-400">
                <a
                  href="#portfolio"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <span>Ver trabajos relacionados</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}

          {/* Tarjeta de consulta personalizada */}
          <div className="border border-dashed border-neutral-800 bg-[#080808] p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono block mb-6">
                CONSULTA PERSONALIZADA
              </span>
              <h3 
                className="text-xl sm:text-2xl font-semibold tracking-wide text-white uppercase mb-3"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                ¿Tienes una idea en otro estilo?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                Puedes enviar tu idea o referencia directamente a Albert por WhatsApp para evaluar la composición, ubicación y estilo recomendado.
              </p>
            </div>

            <div className="pt-6 mt-6">
              <a
                href="https://wa.me/18099699707?text=Hola%20Albert,%20quiero%20consultar%20sobre%20una%20idea%20de%20tatuaje"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 border border-neutral-700 hover:border-white text-center text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-200 inline-block"
              >
                Consultar con Albert
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
