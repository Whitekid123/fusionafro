import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/restaurant';

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-green font-semibold uppercase tracking-[0.4em] text-xs mb-6"
          >
            Testimonials
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl leading-tight text-white uppercase tracking-tight"
          >
            What Our Guests <span className="text-brand-green">Say</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              key={t.name}
              className="bg-brand-charcoal border border-white/5 rounded-2xl p-8 hover:border-brand-green/30 transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-green/10" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-brand-gold fill-brand-gold"
                  />
                ))}
              </div>

              <p className="text-brand-text-muted text-lg leading-relaxed mb-8 italic relative z-10">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center">
                  <span className="text-brand-green font-bold text-lg">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <span className="text-white font-semibold">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
