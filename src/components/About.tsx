import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1    = useTransform(scrollYProgress, [0, 1], ["-5%", "10%"]);
  const y2    = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-48 md:py-72 overflow-hidden relative border-b border-dashed"
      style={{ backgroundColor: 'var(--color-cream)', borderColor: 'rgba(30, 58, 32, 0.15)' }}
    >
      {/* Subtle texture overlay */}
      <div className="sketch-overlay" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 md:order-1 space-y-8 text-center md:text-left"
          >
            {/* Label */}
            <p className="font-body text-sm font-semibold uppercase tracking-[0.4em]"
               style={{ color: 'var(--color-leaf)' }}>
              Welcome Home to
            </p>

            {/* Mixed-type heading */}
            <div className="space-y-2">
              <h2 className="font-heading leading-[1.1]"
                  style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', color: 'var(--color-forest)', fontWeight: 900 }}>
                Authentic
              </h2>
              <div className="flex items-baseline gap-4 flex-wrap justify-center md:justify-start">
                <span style={{
                  fontFamily: 'var(--font-script)',
                  fontSize:   'clamp(2.5rem, 5.5vw, 4rem)',
                  color:      'var(--color-gold)',
                  lineHeight: 1.1,
                }}>
                  Afro
                </span>
                <h2 className="font-heading leading-[1.1]"
                    style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', color: 'var(--color-forest)', fontWeight: 900 }}>
                  Flavours!
                </h2>
              </div>
            </div>

            {/* Body text */}
            <div className="space-y-5">
              <p className="font-body text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0"
                 style={{ color: 'var(--color-muted)' }}>
                We're a family rooted in the vibrant culture of West Africa and the Caribbean.
                At our table, you'll find the warmth of slow-cooked egusi, the smoky joy of suya,
                the crunch of golden plantain — all served with the spirit of home.
              </p>
              <p className="font-body text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0"
                 style={{ color: 'var(--color-muted)' }}>
                Every dish is a tribute to our heritage — handcrafted with fresh ingredients,
                bold spices, and love.
              </p>
            </div>

            <a href="#menu" className="btn-secondary inline-flex" id="about-learn-more-btn">
              Explore Our Menu
            </a>
          </motion.div>

          {/* Image Grid — stamp-bordered */}
          <div className="order-1 md:order-2 relative flex gap-6 md:gap-8">
            {/* Photo 1 — taller, left */}
            <motion.div
              style={{ y: y1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="stamp-border flex-1 mt-10"
            >
              <img
                src="/about-ambiance.png"
                alt="Warm, vibrant atmosphere at Fusion Afro"
                className="w-full h-64 md:h-80 object-cover"
              />
            </motion.div>

            {/* Photo 2 — shorter, right */}
            <motion.div
              style={{ y: y2 }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.35 }}
              className="stamp-border flex-1"
            >
              <img
                src="/jollof-rice.png"
                alt="Signature jollof rice at Fusion Afro"
                className="w-full h-64 md:h-80 object-cover"
              />
            </motion.div>

            {/* Decorative leaf element */}
            <div
              className="absolute -bottom-8 -left-6 font-script text-7xl md:text-9xl pointer-events-none select-none z-10"
              style={{ color: 'var(--color-leaf)', opacity: 0.18 }}
            >
              ✦
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
