import { Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { operatingHours, restaurant } from '../data/restaurant';

export default function Hours() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <section id="hours" className="py-32 md:py-48 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-green font-semibold uppercase tracking-[0.4em] text-xs mb-6"
          >
            Opening Hours & Contact
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl leading-tight text-white mb-6 uppercase tracking-tight"
          >
            Visit <span className="text-brand-green">Us</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Hours */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-brand-charcoal p-10 md:p-16 rounded-xl"
          >
            <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-6">
              <Clock className="w-8 h-8 text-brand-green" />
              <span className="text-white font-heading text-3xl md:text-5xl uppercase tracking-widest">Schedule</span>
            </div>
            <div className="flex flex-col">
              {operatingHours.map((h, i) => (
                <div
                  key={h.day}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-5 border-b border-white/5 last:border-0 ${
                    h.day === today ? 'text-brand-green' : 'text-brand-text-muted'
                  }`}
                >
                  <span className="font-bold text-lg md:text-xl uppercase tracking-widest flex items-center gap-4">
                    {h.day}
                    {h.day === today && (
                      <span className="text-[10px] bg-brand-green text-brand-dark px-3 py-1 rounded-full font-bold uppercase tracking-[0.2em]">
                        Today
                      </span>
                    )}
                  </span>
                  <span className={`text-base md:text-lg font-medium ${h.isClosed ? 'text-brand-red' : ''}`}>
                    {h.hours}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            id="contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-brand-charcoal p-10 md:p-16 rounded-xl"
          >
            <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-6">
              <MapPin className="w-8 h-8 text-brand-green" />
              <span className="text-white font-heading text-3xl md:text-5xl uppercase tracking-widest">Contact</span>
            </div>
            
            <div className="flex flex-col gap-10">
              <div className="flex flex-col group border-b border-white/5 pb-6">
                <p className="text-brand-green font-bold text-xs uppercase tracking-[0.3em] mb-3">Location</p>
                <p className="text-white text-xl md:text-3xl font-heading tracking-wider">{restaurant.address}</p>
              </div>

              <div className="flex flex-col group border-b border-white/5 pb-6">
                <p className="text-brand-green font-bold text-xs uppercase tracking-[0.3em] mb-3">Phone</p>
                <a href={`tel:${restaurant.phone}`} className="text-white text-xl md:text-3xl font-heading tracking-wider hover:text-brand-green transition-colors">
                  {restaurant.phone}
                </a>
              </div>

              <div className="flex flex-col group">
                <p className="text-brand-green font-bold text-xs uppercase tracking-[0.3em] mb-3">Email</p>
                <a href={`mailto:${restaurant.email}`} className="text-white text-xl md:text-3xl font-heading tracking-wider hover:text-brand-green transition-colors">
                  {restaurant.email}
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
