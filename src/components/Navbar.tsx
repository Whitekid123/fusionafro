import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/restaurant';

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'shadow-xl py-3'
          : 'py-4'
      }`}
      style={{ backgroundColor: 'var(--color-forest)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group" aria-label="Fusion Afro Home">
          <div className="flex flex-col leading-none">
            <span
              className="font-display text-2xl md:text-3xl tracking-widest"
              style={{ color: 'var(--color-red)', letterSpacing: '0.12em' }}
            >
              FUSION
            </span>
            <span
              className="font-body text-[9px] md:text-[10px] font-bold tracking-[0.25em] uppercase mt-0.5"
              style={{ color: 'var(--color-gold)' }}
            >
              Afro Caribbean Restaurant
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-white/80 hover:text-white transition-colors duration-300 uppercase tracking-wider group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: 'var(--color-gold)' }} />
            </a>
          ))}
          <a href="#menu" className="btn-stamp ml-3" id="navbar-order-btn">
            Order Now
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileOpen}
          id="mobile-menu-toggle"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 transition-all duration-500 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: 'var(--color-forest)' }}
      >
        <button
          type="button"
          className="absolute top-6 right-6 text-white p-2"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <X size={32} />
        </button>

        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="font-heading text-3xl text-white hover:text-gold transition-colors duration-300"
            style={{ transitionDelay: `${i * 0.06}s` }}
          >
            {link.label}
          </a>
        ))}

        <a
          href="#menu"
          onClick={() => setMobileOpen(false)}
          className="btn-stamp mt-4"
        >
          Order Now
        </a>
      </div>
    </header>
  );
}
