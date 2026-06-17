import { motion } from 'framer-motion';
import { testimonials } from '../data/restaurant';

export default function Testimonials() {
  // Just showcase the most impactful testimonial in a massive, sprawling way.
  const featured = testimonials[0];

  return (
    <section className="py-40 md:py-64 bg-brand-charcoal relative flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-green font-semibold uppercase tracking-[0.4em] text-xs mb-16"
        >
          What They Say
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="font-heading text-4xl md:text-6xl lg:text-8xl leading-tight text-white mb-16 italic font-light tracking-tight">
            "{featured.text}"
          </h3>
          
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-px bg-brand-green mb-2" />
            <span className="text-white font-bold uppercase tracking-[0.3em] text-sm md:text-base">
              {featured.name}
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
