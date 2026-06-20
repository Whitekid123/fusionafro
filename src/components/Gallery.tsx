import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const foodItems = [
  { label: "Jollof Rice",  note: "The smoky soul of West Africa",    img: "/jollof-rice.png"    },
  { label: "Suya Skewers", note: "Grilled, spiced & irresistible",   img: "/suya-skewers.png"   },
  { label: "Fried Plantain",note: "Golden sweetness in every bite",  img: "/plantain-dish.png"  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yLeft  = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const yRight = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-48 md:py-72 overflow-hidden relative border-b border-dashed"
      style={{ backgroundColor: 'var(--color-charcoal)', borderColor: 'rgba(255, 255, 255, 0.12)' }}
    >
      <div className="sketch-overlay" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Left — stamp-bordered stacked photos */}
          <motion.div style={{ y: yLeft }} className="relative flex flex-col gap-8">
            {/* Large photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="stamp-border"
            >
              <img
                src="/jollof-rice.png"
                alt="Jollof rice — the soul of West Africa"
                className="w-full h-64 md:h-80 object-cover"
              />
            </motion.div>

            {/* Smaller photo, offset */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.15 }}
              className="stamp-border self-end w-4/5"
            >
              <img
                src="/plantain-dish.png"
                alt="Golden fried plantain — sweet and crispy"
                className="w-full h-52 md:h-64 object-cover"
              />
            </motion.div>

            {/* Decorative script label */}
            <div
              className="absolute -bottom-4 right-4 select-none pointer-events-none"
              style={{ fontFamily: 'var(--font-script)', fontSize: '1.4rem', color: 'var(--color-gold)', opacity: 0.8 }}
            >
              made with love ♥
            </div>
          </motion.div>

          {/* Right — big mixed-type headline + description */}
          <motion.div style={{ y: yRight }} className="space-y-8 text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-body text-sm font-semibold uppercase tracking-[0.4em]"
              style={{ color: 'var(--color-gold)' }}
            >
              Cooked to order
            </motion.p>

            {/* Mixed heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-2"
            >
              <h2 className="font-heading font-black leading-tight"
                  style={{ fontSize: 'clamp(2.8rem, 6vw, 4.2rem)', color: 'var(--color-cream)' }}>
                Afro
              </h2>
              <div className="flex items-baseline gap-4 flex-wrap justify-center md:justify-start">
                <span style={{
                  fontFamily: 'var(--font-script)',
                  fontSize:   'clamp(2.5rem, 5.5vw, 3.8rem)',
                  color:      'var(--color-gold)',
                  lineHeight: 1.1,
                }}>
                  cuisine
                </span>
              </div>
              <h2 className="font-heading font-black leading-tight"
                  style={{ fontSize: 'clamp(2.8rem, 6vw, 4.2rem)', color: 'var(--color-cream)' }}>
                Made
              </h2>
              <div className="flex items-baseline gap-4 flex-wrap justify-center md:justify-start">
                <span style={{
                  fontFamily: 'var(--font-script)',
                  fontSize:   'clamp(2.5rem, 5.5vw, 3.8rem)',
                  color:      'var(--color-gold)',
                  lineHeight: 1.1,
                }}>
                  fresh
                </span>
                <h2 className="font-heading font-black leading-tight"
                    style={{ fontSize: 'clamp(2.8rem, 6vw, 4.2rem)', color: 'var(--color-cream)' }}>
                  Daily
                </h2>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-body text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0"
              style={{ color: 'var(--color-cream-dark)', opacity: 0.85 }}
            >
              Every meal is a shared memory. Taste the authentic dishes we grew up loving —
              prepared daily with fresh ingredients and care, using recipes honoured through generations.
            </motion.p>

            {/* Food item annotations */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-5 mt-4 items-center md:items-start"
            >
              {foodItems.map((f) => (
                <div key={f.label} className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2"
                       style={{ borderColor: 'var(--color-gold)' }}>
                    <img src={f.img} alt={f.label} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm" style={{ color: 'var(--color-cream)' }}>
                      {f.label}
                    </p>
                    <p className="font-body text-xs mt-0.5" style={{ color: 'var(--color-cream-dark)', opacity: 0.7 }}>
                      {f.note}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
