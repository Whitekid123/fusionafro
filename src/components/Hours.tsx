import { motion } from 'framer-motion';
import { operatingHours, restaurant } from '../data/restaurant';

export default function Hours() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <section id="hours" className="py-40 md:py-64 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          
          {/* Left: Huge Title */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-green font-semibold uppercase tracking-[0.4em] text-xs mb-10"
            >
              When & Where
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 1 }}
              className="font-heading text-6xl md:text-8xl leading-tight text-white uppercase tracking-wide"
            >
              Visit<br/>
              <span className="text-brand-green ml-[10%]">Us</span>
            </motion.h2>
          </div>

          {/* Right: Sparse Content */}
          <div className="lg:col-span-7 flex flex-col gap-32 pt-4">
            
            {/* Hours List */}
            <div className="flex flex-col w-full">
              {operatingHours.map((h, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  key={h.day}
                  className="flex flex-col sm:flex-row sm:items-end justify-between py-8 border-b border-white/10 group"
                >
                  <span className={`font-heading text-3xl md:text-5xl uppercase tracking-wider ${
                    h.day === today ? 'text-brand-green' : 'text-white'
                  }`}>
                    {h.day}
                  </span>
                  <span className={`text-lg md:text-xl font-light tracking-widest mt-2 sm:mt-0 ${
                    h.isClosed ? 'text-brand-red' : 'text-brand-text-muted'
                  }`}>
                    {h.hours}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Contact Details */}
            <div id="contact" className="grid grid-cols-1 sm:grid-cols-2 gap-16">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col"
              >
                <p className="text-white/40 font-bold text-xs uppercase tracking-[0.4em] mb-6">Location</p>
                <p className="text-white text-xl md:text-2xl font-light leading-relaxed max-w-xs">{restaurant.address}</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="flex flex-col gap-10"
              >
                <div>
                  <p className="text-white/40 font-bold text-xs uppercase tracking-[0.4em] mb-6">Inquiries</p>
                  <a href={`mailto:${restaurant.email}`} className="text-white text-xl md:text-2xl font-light hover:text-brand-green transition-colors">
                    {restaurant.email}
                  </a>
                </div>
                <div>
                  <p className="text-white/40 font-bold text-xs uppercase tracking-[0.4em] mb-6">Reservations</p>
                  <a href={`tel:${restaurant.phone}`} className="text-white text-xl md:text-2xl font-light hover:text-brand-green transition-colors">
                    {restaurant.phone}
                  </a>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
