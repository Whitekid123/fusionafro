import React from "react";
import { motion } from "framer-motion";

const CateringCTA: React.FC = () => {
  return (
    <section
      id="catering"
      className="py-48 md:py-72 overflow-hidden relative border-b border-dashed"
      style={{ backgroundColor: 'var(--color-cream-dark)', borderColor: 'rgba(30, 58, 32, 0.15)' }}
    >
      <div className="sketch-overlay" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="flex flex-col gap-8 text-center md:text-left"
          >
            <p className="font-body text-sm font-semibold uppercase tracking-[0.4em]"
               style={{ color: 'var(--color-leaf)' }}>
              Catering Service
            </p>

            <div className="space-y-2">
              <h2 className="font-heading font-black leading-tight"
                  style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', color: 'var(--color-forest)' }}>
                Bring the
              </h2>
              <div className="flex items-baseline gap-4 flex-wrap justify-center md:justify-start">
                <span style={{
                  fontFamily: 'var(--font-script)',
                  fontSize:   'clamp(2.5rem, 5.5vw, 4rem)',
                  color:      'var(--color-gold)',
                  lineHeight: 1.1,
                }}>
                  feast
                </span>
                <h2 className="font-heading font-black leading-tight"
                    style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', color: 'var(--color-forest)' }}>
                  to you
                </h2>
              </div>
            </div>

            <p className="font-body text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0"
               style={{ color: 'var(--color-muted)' }}>
              From intimate gatherings to grand celebrations, our catering service delivers
              the full Fusion Afro experience to your event. Customised menus, professional
              service, and flavours your guests will never forget.
            </p>

            <ul className="space-y-4 max-w-md md:max-w-none mx-auto md:mx-0 text-left">
              {[
                'Weddings, birthdays & corporate events',
                'Custom menus tailored to your taste',
                'Party platters from $35 — full spreads from $95',
                'Dine In · Take Away · Catering — all available',
              ].map((item) => (
                <li key={item} className="flex items-start gap-4 font-body text-base"
                    style={{ color: 'var(--color-charcoal-mid)' }}>
                  <span className="mt-2 w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: 'var(--color-gold)' }} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-5 mt-4 justify-center md:justify-start">
              <a href="#contact" className="btn-primary" id="catering-book-btn">
                Enquire to Book
              </a>
              <a href="#menu" className="btn-secondary" id="catering-menu-btn">
                View Our Menu
              </a>
            </div>
          </motion.div>

          {/* Right: Image with stamp border */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="stamp-border"
          >
            <img
              src="/catering-spread.png"
              alt="Fusion Afro catering spread for events"
              className="w-full h-80 md:h-[480px] object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CateringCTA;
