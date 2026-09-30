import { useState, useEffect } from 'react';
import { ARTIST_INFO } from '../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'El Artista', href: '#about' },
    { name: 'Estilos', href: '#styles' },
    { name: 'Portafolio', href: '#portfolio' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080808]/90 backdrop-blur-md border-b border-neutral-900 py-4 shadow-xl'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Zona 1: Nombre / Marca */}
          <a
            href="#home"
            className="text-xl sm:text-2xl font-bold tracking-[0.25em] text-white hover:text-neutral-300 transition-colors uppercase select-none"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {ARTIST_INFO.name}
          </a>

          {/* Zona 2: Enlaces en español */}
          <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.18em] uppercase text-neutral-400 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zona 3: Botón de acción WhatsApp */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={ARTIST_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-black bg-white hover:bg-neutral-200 transition-colors duration-200"
            >
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Botón hamburguesa móvil */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Abrir menú de navegación"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Menú Drawer Móvil en español */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-[#080808]/98 backdrop-blur-xl flex flex-col justify-between p-8 animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-6">
            <span
              className="text-xl font-bold tracking-[0.25em] text-white uppercase"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {ARTIST_INFO.name}
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-neutral-400 hover:text-white"
              aria-label="Cerrar menú"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 my-auto py-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-light tracking-[0.15em] text-neutral-300 hover:text-white uppercase transition-colors"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-neutral-900 flex flex-col gap-3">
            <a
              href={ARTIST_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3.5 bg-white text-black font-semibold text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2 hover:bg-neutral-200"
            >
              <span>Contactar por WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={ARTIST_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 border border-neutral-800 text-neutral-300 text-xs tracking-[0.15em] uppercase hover:text-white hover:border-neutral-600 transition-colors"
            >
              {ARTIST_INFO.handle}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
