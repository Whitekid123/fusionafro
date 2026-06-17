import { ChevronDown } from 'lucide-react';
import heroImg from '../assets/hero-food.png';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Zoom */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Afro-Caribbean dishes spread on a dark table"
          className="w-full h-full object-cover"
          style={{ animation: 'heroZoom 20s ease-in-out infinite alternate' }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/50 to-brand-dark" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Tagline */}
        <p className="text-brand-green font-semibold uppercase tracking-[0.3em] text-sm md:text-base mb-6 text-reveal">
          Dine In &bull; Take Away &bull; Catering
        </p>

        {/* Title */}
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-tight mb-6">
          Fusion{' '}
          <span className="text-brand-green">Afro</span>
        </h1>

        <p className="font-heading text-xl sm:text-2xl md:text-3xl text-brand-cream/80 italic mb-4">
          Caribbean Restaurant
        </p>

        {/* Description */}
        <p className="text-brand-text-muted text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          A bold celebration of African and Caribbean flavours. From smoky jollof to fiery suya,
          every dish tells a story of culture, community and soul.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            className="px-8 py-3.5 bg-brand-green text-brand-dark font-bold text-sm uppercase tracking-wider rounded-full hover:bg-brand-green-dark hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-green/25"
          >
            Explore Our Menu
          </a>
          <a
            href="#catering"
            className="px-8 py-3.5 border-2 border-white/20 text-white font-semibold text-sm uppercase tracking-wider rounded-full hover:border-brand-red hover:text-brand-red hover:scale-105 transition-all duration-300"
          >
            Book Catering
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-brand-green transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
