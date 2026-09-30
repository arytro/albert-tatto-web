import { useState } from 'react';
import { ARTIST_INFO } from '../data/portfolioData';
import { Instagram, Phone, MapPin, ArrowUpRight, Send, Check, Clock } from 'lucide-react';

export default function Contact() {
  const [ideaMessage, setIdeaMessage] = useState('');
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(ARTIST_INFO.phoneDisplay);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(ARTIST_INFO.addressDisplay);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = ideaMessage.trim() 
      ? `Hola Albert, te escribo desde tu página web: ${ideaMessage}`
      : 'Hola Albert, me gustaría consultar la cotización y disponibilidad para un tatuaje en tu estudio de la Calle Bonó.';
    window.open(`https://wa.me/18099699707?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 border-t border-neutral-900 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Encabezado */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-medium mb-3">
            06 · Canales oficiales & Ubicación
          </p>
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-[0.08em] text-white uppercase"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Contacto & Estudio
          </h2>
          <p className="text-sm text-neutral-400 font-light mt-4">
            Comunícate directamente con Albert para consultar ideas, coordinar diseños o visitar el estudio previa cita.
          </p>
        </div>

        {/* 3 Tarjetas Principales: WhatsApp, Instagram, y Dirección del Estudio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Tarjeta 1: WHATSAPP (Canal Primario) */}
          <div className="border border-neutral-700 bg-neutral-900/40 p-8 flex flex-col justify-between hover:border-white transition-colors relative">
            <div className="absolute top-0 right-0 transform translate-x-1 -translate-y-2.5">
              <span className="bg-emerald-600 text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 font-mono">
                Recomendado
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
                  ATENCIÓN DIRECTA
                </span>
                <Phone className="w-5 h-5 text-emerald-400" />
              </div>

              <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-1">
                WhatsApp
              </h3>

              <p className="text-2xl font-bold text-white mb-3 font-mono">
                {ARTIST_INFO.phoneDisplay}
              </p>

              <p className="text-xs text-neutral-400 leading-relaxed font-light mb-6">
                Canal principal para consultas de cotización, citas, asesoría de tamaño y dudas técnicas.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href={ARTIST_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-white text-black hover:bg-neutral-200 text-center text-xs font-semibold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Escribir al WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={handleCopyPhone}
                className="w-full py-2 border border-neutral-800 text-[10px] text-neutral-400 hover:text-white uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Número copiado</span>
                  </>
                ) : (
                  <span>Copiar número</span>
                )}
              </button>
            </div>
          </div>

          {/* Tarjeta 2: INSTAGRAM */}
          <div className="border border-neutral-800 bg-neutral-950 p-8 flex flex-col justify-between hover:border-neutral-600 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
                  RED SOCIAL OFICIAL
                </span>
                <Instagram className="w-5 h-5 text-neutral-300" />
              </div>

              <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-1">
                Instagram
              </h3>

              <p 
                className="text-2xl font-bold text-white mb-3"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {ARTIST_INFO.handle}
              </p>

              <p className="text-xs text-neutral-400 leading-relaxed font-light mb-6">
                Descubre publicaciones diarias, historias con procesos en vivo y nuevos trabajos finalizados por Albert.
              </p>
            </div>

            <a
              href={ARTIST_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 border border-neutral-700 hover:border-white text-center text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
            >
              <span>Abrir Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Tarjeta 3: DIRECCIÓN & ESTUDIO */}
          <div className="border border-neutral-800 bg-neutral-950 p-8 flex flex-col justify-between hover:border-neutral-600 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
                  ESTUDIO FÍSICO
                </span>
                <MapPin className="w-5 h-5 text-neutral-300" />
              </div>

              <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-1">
                Ubicación
              </h3>

              <p className="text-base sm:text-lg font-bold text-white mb-1 leading-snug">
                {ARTIST_INFO.addressDisplay}
              </p>
              <p className="text-xs text-neutral-400 font-mono mb-4">
                {ARTIST_INFO.city}
              </p>

              <div className="flex items-center gap-2 text-xs text-neutral-400 mb-6 bg-[#080808] p-3 border border-neutral-900">
                <Clock className="w-4 h-4 text-neutral-400 shrink-0" />
                <span className="text-[11px] leading-tight">{ARTIST_INFO.schedule}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href={ARTIST_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 border border-neutral-700 hover:border-white text-center text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
              >
                <span>Ver en Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={handleCopyAddress}
                className="w-full py-2 border border-neutral-800 text-[10px] text-neutral-400 hover:text-white uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                {copiedAddress ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Dirección copiada</span>
                  </>
                ) : (
                  <span>Copiar dirección</span>
                )}
              </button>
            </div>
          </div>

        </div>

        {/* Formulario iniciador para WhatsApp */}
        <div className="border border-neutral-800 bg-neutral-950 p-8 sm:p-10 max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-2">
              MENSAJE DIRECTO AL ARTISTA
            </span>
            <h3 
              className="text-2xl font-bold text-white uppercase tracking-wide"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Envía tu idea directamente a Albert
            </h3>
            <p className="text-xs text-neutral-400 mt-2 font-light">
              Escribe brevemente tu proyecto y se abrirá WhatsApp listo para enviar tu consulta.
            </p>
          </div>

          <form onSubmit={handleSendWhatsApp} className="space-y-4">
            <div>
              <label htmlFor="idea-input" className="sr-only">Idea o consulta para el tatuaje</label>
              <textarea
                id="idea-input"
                rows={3}
                value={ideaMessage}
                onChange={(e) => setIdeaMessage(e.target.value)}
                placeholder="Ejemplo: Hola Albert, quiero tatuarme un diseño realista en el antebrazo de unos 12cm. ¿Tienes disponibilidad estas semanas en tu estudio de la Calle Bonó?"
                className="w-full bg-[#080808] border border-neutral-800 p-4 text-xs sm:text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors resize-none"
              />
            </div>
            
            <button
              type="submit"
              className="w-full py-4 bg-white text-black hover:bg-neutral-200 text-xs font-semibold uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Continuar en WhatsApp</span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
