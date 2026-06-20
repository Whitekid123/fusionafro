import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "../data/restaurant";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="testimonials"
      className="py-48 md:py-72 relative flex items-center justify-center overflow-hidden border-b border-dashed"
      style={{ backgroundColor: 'var(--color-gold)', borderColor: 'rgba(30, 58, 32, 0.15)' }}
    >
      {/* Large decorative quote mark */}
      <div
        className="absolute left-1/2 -translate-x-1/2 font-heading text-[16rem] md:text-[22rem] leading-none pointer-events-none select-none"
        style={{ color: 'rgba(30,58,32,0.06)', top: '-2rem' }}
        aria-hidden="true"
      >
        "
      </div>

      <div className="max-w-4xl mx-auto px-8 md:px-12 relative z-10 w-full text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-body text-sm font-semibold uppercase tracking-[0.4em] mb-12"
          style={{ color: 'var(--color-forest)' }}
        >
          What Our Guests Say
        </motion.p>

        <div className="relative overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center gap-8 py-6 w-full"
            >
              <p className="font-heading text-xl md:text-2xl lg:text-3xl leading-relaxed text-forest italic font-normal px-6 max-w-3xl mx-auto"
                 style={{ color: 'var(--color-forest)' }}>
                &ldquo;{testimonials[index].text}&rdquo;
              </p>

              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-px" style={{ backgroundColor: 'var(--color-forest)' }} />
                <span className="font-body font-bold uppercase tracking-[0.3em] text-xs md:text-sm"
                      style={{ color: 'var(--color-forest)' }}>
                  {testimonials[index].name}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="h-2 rounded-full transition-all duration-500 cursor-pointer"
              style={{
                width:           i === index ? '2rem' : '0.5rem',
                backgroundColor: i === index ? 'var(--color-forest)' : 'rgba(30,58,32,0.25)',
              }}
              id={`testimonial-dot-${i}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
