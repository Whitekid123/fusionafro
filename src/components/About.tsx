import { UtensilsCrossed, ShoppingBag, PartyPopper } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  { icon: UtensilsCrossed, label: 'Dine In', desc: 'An immersive dining experience' },
  { icon: ShoppingBag, label: 'Take Away', desc: 'Your favourites, ready to go' },
  { icon: PartyPopper, label: 'Catering', desc: 'Events of any size' },
];

export default function About() {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="py-24 md:py-32 bg-brand-dark" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Side */}
          <div>
            <p className="animate-on-scroll text-brand-green font-semibold uppercase tracking-[0.2em] text-sm mb-4">
              Our Story
            </p>
            <h2 className="animate-on-scroll font-heading text-4xl md:text-5xl text-white mb-6 leading-tight">
              Where Africa Meets{' '}
              <span className="text-brand-green">the Caribbean</span>
            </h2>
            <div className="animate-on-scroll section-divider mb-8" />
            <p className="animate-on-scroll text-brand-text-muted text-lg leading-relaxed mb-6">
              At Fusion Afro, we believe food is more than a meal — it's a journey.
              Our kitchen blends the bold, soulful flavours of West Africa with the vibrant
              spice and rhythm of the Caribbean to create dishes that nourish both body and spirit.
            </p>
            <p className="animate-on-scroll text-brand-text-muted text-lg leading-relaxed mb-10">
              Every recipe is rooted in tradition, perfected through passion, and served with
              the warmth of home. From the smoky heat of our jollof rice to the tender pull of
              our jerk chicken, each plate tells a story of heritage and pride.
            </p>

            {/* Services */}
            <div className="stagger-children grid grid-cols-1 sm:grid-cols-3 gap-4">
              {services.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="animate-on-scroll glass rounded-xl p-5 text-center hover:border-brand-green/30 transition-colors duration-300"
                >
                  <Icon className="w-7 h-7 text-brand-green mx-auto mb-3" />
                  <p className="text-white font-semibold text-sm mb-1">{label}</p>
                  <p className="text-brand-text-muted text-xs">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="animate-on-scroll slide-right relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/about-ambiance.png"
                alt="Warm interior of Fusion Afro restaurant"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Accent Border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-brand-green/20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
