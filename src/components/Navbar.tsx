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
            className="ml-2 px-6 py-2.5 bg-brand-green text-brand-dark font-semibold text-sm rounded-full hover:bg-brand-green-dark transition-colors duration-300 uppercase tracking-wider"
          >
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
          className="mt-4 px-8 py-3 bg-brand-green text-brand-dark font-semibold rounded-full text-lg hover:bg-brand-green-dark transition-colors"
        >
          Order Now
        </a>
      </div>
    </header>
  );
}
