import { ArrowRight, Phone } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function CateringCTA() {
  const ref = useScrollAnimation();

  return (
    <section id="catering" className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/catering-spread.png"
          alt="Catering spread"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/85 to-brand-dark/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="animate-on-scroll text-brand-green font-semibold uppercase tracking-[0.2em] text-sm mb-4">
            Catering Service
          </p>
          <h2 className="animate-on-scroll font-heading text-4xl md:text-5xl text-white mb-6 leading-tight">
            Let Us Bring the{' '}
            <span className="text-brand-green">Feast</span> to You
          </h2>
          <div className="animate-on-scroll section-divider mb-8" />
          <p className="animate-on-scroll text-brand-text-muted text-lg leading-relaxed mb-6">
            From intimate gatherings to grand celebrations, our catering service delivers
            the full Fusion Afro experience to your event. Customised menus, professional
            service, and flavours your guests will never forget.
          </p>
          <ul className="animate-on-scroll text-brand-text mb-8 space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-green" />
              Weddings, birthdays & corporate events
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-green" />
              Custom menus tailored to your taste
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-green" />
              Party platters from $35 — full spreads from $95
            </li>
          </ul>

          <div className="animate-on-scroll flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+15551234567"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-red text-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-brand-red-dark hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-red/25"
            >
              <Phone size={18} />
              Call to Book
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-brand-green/40 text-brand-green font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-brand-green hover:text-brand-dark transition-all duration-300"
            >
              View Platters
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
