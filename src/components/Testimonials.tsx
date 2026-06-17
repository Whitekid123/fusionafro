import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data/restaurant';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 md:py-48 bg-brand-charcoal relative flex items-center justify-center overflow-hidden min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-green font-semibold uppercase tracking-[0.4em] text-xs mb-12"
        >
          What They Say
        </motion.p>

        <div className="max-w-4xl mx-auto relative h-[500px] md:h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <h3 className="font-heading text-2xl md:text-4xl lg:text-5xl leading-relaxed text-white mb-12 italic font-light tracking-wide px-4">
                "{testimonials[index].text}"
              </h3>
              
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-px bg-brand-green mb-2" />
                <span className="text-white font-bold uppercase tracking-[0.3em] text-xs md:text-sm">
                  {testimonials[index].name}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                i === index ? 'bg-brand-green w-8' : 'bg-white/20 hover:bg-white/50'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
