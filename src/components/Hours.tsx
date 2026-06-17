import { Clock, MapPin, Phone, Mail } from 'lucide-react';
import { operatingHours, restaurant } from '../data/restaurant';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Hours() {
  const ref = useScrollAnimation();

  // Get current day to highlight
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <section id="hours" className="py-24 md:py-32 bg-brand-dark" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Hours Card */}
          <div>
            <p className="animate-on-scroll text-brand-green font-semibold uppercase tracking-[0.2em] text-sm mb-4">
              Opening Hours
            </p>
            <h2 className="animate-on-scroll font-heading text-4xl md:text-5xl text-white mb-6">
              Visit <span className="text-brand-green">Us</span>
            </h2>
            <div className="animate-on-scroll section-divider mb-10" />

            <div className="animate-on-scroll glass rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-brand-green" />
                <span className="text-white font-semibold text-lg">Weekly Schedule</span>
              </div>

              <div className="space-y-3">
                {operatingHours.map((h) => (
                  <div
                    key={h.day}
                    className={`flex justify-between items-center py-3 px-4 rounded-lg transition-colors ${
                      h.day === today
                        ? 'bg-brand-green/10 border border-brand-green/30'
                        : 'border border-transparent'
                    }`}
                  >
                    <span
                      className={`font-medium ${
                        h.day === today ? 'text-brand-green' : 'text-white'
                      }`}
                    >
                      {h.day}
                      {h.day === today && (
                        <span className="ml-2 text-xs bg-brand-green text-brand-dark px-2 py-0.5 rounded-full font-bold">
                          TODAY
                        </span>
                      )}
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        h.isClosed
                          ? 'text-brand-red'
                          : 'text-brand-text-muted'
                      }`}
                    >
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div id="contact">
            <p className="animate-on-scroll text-brand-green font-semibold uppercase tracking-[0.2em] text-sm mb-4">
              Get in Touch
            </p>
            <h2 className="animate-on-scroll font-heading text-4xl md:text-5xl text-white mb-6">
              Contact <span className="text-brand-green">Us</span>
            </h2>
            <div className="animate-on-scroll section-divider mb-10" />

            <div className="animate-on-scroll space-y-6">
              <div className="glass rounded-2xl p-6 flex items-start gap-4 hover:border-brand-green/30 transition-colors duration-300">
                <MapPin className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold mb-1">Location</p>
                  <p className="text-brand-text-muted">{restaurant.address}</p>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 flex items-start gap-4 hover:border-brand-green/30 transition-colors duration-300">
                <Phone className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold mb-1">Phone</p>
                  <a href={`tel:${restaurant.phone}`} className="text-brand-text-muted hover:text-brand-green transition-colors">
                    {restaurant.phone}
                  </a>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 flex items-start gap-4 hover:border-brand-green/30 transition-colors duration-300">
                <Mail className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold mb-1">Email</p>
                  <a href={`mailto:${restaurant.email}`} className="text-brand-text-muted hover:text-brand-green transition-colors">
                    {restaurant.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
