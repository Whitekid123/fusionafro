import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { restaurant, navLinks } from '../data/restaurant';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
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
          ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="font-heading text-2xl md:text-3xl text-white tracking-tight">
            {restaurant.name.split(' ')[0]}
            <span className="text-brand-green"> {restaurant.name.split(' ')[1]}</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-text-muted hover:text-brand-green transition-colors duration-300 uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#menu"
            className="ml-2 relative overflow-hidden group px-6 py-2 border border-brand-green text-brand-green font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300"
          >
            <span className="relative z-10 group-hover:text-brand-dark transition-colors duration-300">Order Now</span>
            <div className="absolute inset-0 bg-brand-green scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-brand-dark/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
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
            className="text-2xl font-heading text-white hover:text-brand-green transition-colors duration-300"
            style={{ transitionDelay: `${i * 0.05}s` }}
          >
            {link.label}
          </a>
        ))}

        <a
          href="#menu"
          onClick={() => setMobileOpen(false)}
          className="mt-4 relative overflow-hidden group px-10 py-4 border border-brand-green text-brand-green font-bold text-sm uppercase tracking-[0.2em] transition-all duration-300"
        >
          <span className="relative z-10 group-hover:text-brand-dark transition-colors duration-300">Order Now</span>
          <div className="absolute inset-0 bg-brand-green scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
        </a>
      </div>
    </header>
  );
}
