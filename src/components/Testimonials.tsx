import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/restaurant';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Testimonials() {
  const ref = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 bg-brand-charcoal" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="animate-on-scroll text-brand-green font-semibold uppercase tracking-[0.2em] text-sm mb-4">
            Testimonials
          </p>
          <h2 className="animate-on-scroll font-heading text-4xl md:text-5xl text-white mb-6">
            What Our Guests <span className="text-brand-green">Say</span>
          </h2>
          <div className="animate-on-scroll section-divider mx-auto" />
        </div>

        {/* Cards */}
        <div className="stagger-children grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="animate-on-scroll glass rounded-2xl p-8 hover:border-brand-green/30 hover:-translate-y-1 transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-green/15" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-brand-gold fill-brand-gold"
                  />
                ))}
              </div>

              <p className="text-brand-text text-base leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center">
                  <span className="text-brand-green font-bold text-sm">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <span className="text-white font-semibold text-sm">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
