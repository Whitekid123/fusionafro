import { motion } from "framer-motion";
import { operatingHours, restaurant } from "../data/restaurant";

export default function Hours() {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <section
      id="hours"
      className="py-48 md:py-72 relative border-b border-dashed"
      style={{ backgroundColor: 'var(--color-cream)', borderColor: 'rgba(30, 58, 32, 0.15)' }}
    >
      <div className="sketch-overlay" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">

          {/* Left: Heading */}
          <div className="md:col-span-5 flex flex-col justify-start space-y-8 text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-body text-sm font-semibold uppercase tracking-[0.4em]"
              style={{ color: 'var(--color-leaf)' }}
            >
              When &amp; Where
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 1 }}
              className="space-y-2"
            >
              <h2 className="font-heading font-black leading-tight"
                  style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', color: 'var(--color-forest)' }}>
                Visit
              </h2>
              <div className="flex items-baseline gap-3 justify-center md:justify-start">
                <span style={{
                  fontFamily: 'var(--font-script)',
                  fontSize:   'clamp(3rem, 7vw, 5.5rem)',
                  color:      'var(--color-gold)',
                  lineHeight: 1.1,
                }}>
                  us
                </span>
                <span className="font-heading font-black leading-tight"
                      style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', color: 'var(--color-red)' }}>
                  !
                </span>
              </div>
            </motion.div>

            {/* Services tags */}
            <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
              {restaurant.services.map((s) => (
                <span
                  key={s}
                  className="font-body text-xs font-semibold uppercase tracking-wider px-4 py-2 border"
                  style={{ borderColor: 'var(--color-forest)', color: 'var(--color-forest)' }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Hours + Contact */}
          <div className="md:col-span-7 flex flex-col gap-16 pt-2">
            {/* Hours */}
            <div className="flex flex-col w-full">
              <p className="font-body font-bold text-xs uppercase tracking-[0.4em] mb-6 pb-3 border-b"
                 style={{ color: 'var(--color-muted)', borderColor: 'rgba(30,58,32,0.15)' }}>
                Opening Hours
              </p>
              {operatingHours.map((h, i) => (
                <motion.div
                  key={h.day}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  className="flex items-center justify-between py-5 border-b"
                  style={{ borderColor: 'rgba(30,58,32,0.12)' }}
                >
                  <span
                    className="font-heading text-xl md:text-2xl font-bold"
                    style={{ color: h.day === today ? 'var(--color-red)' : 'var(--color-forest)' }}
                  >
                    {h.day}
                    {h.day === today && (
                      <span className="ml-3 font-body text-xs font-semibold uppercase tracking-wider"
                            style={{ color: 'var(--color-red)' }}>
                        · Today
                      </span>
                    )}
                  </span>
                  <span
                    className="font-body text-base tracking-wide"
                    style={{ color: h.isClosed ? 'var(--color-red)' : 'var(--color-muted)' }}
                  >
                    {h.hours}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Contact Details */}
            <div id="contact" className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-center sm:text-left">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="font-body font-bold text-xs uppercase tracking-[0.4em] mb-4"
                   style={{ color: 'var(--color-muted)' }}>
                  Location
                </p>
                <p className="font-body text-base md:text-lg leading-relaxed max-w-sm mx-auto sm:mx-0"
                   style={{ color: 'var(--color-charcoal)' }}>
                  {restaurant.address}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="flex flex-col gap-10"
              >
                <div>
                  <p className="font-body font-bold text-xs uppercase tracking-[0.4em] mb-4"
                     style={{ color: 'var(--color-muted)' }}>
                    Reservations
                  </p>
                  <a
                    href={`tel:${restaurant.phone}`}
                    className="font-body text-base md:text-lg font-medium transition-colors duration-200"
                    style={{ color: 'var(--color-forest)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-red)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-forest)')}
                  >
                    {restaurant.phone}
                  </a>
                </div>
                <div>
                  <p className="font-body font-bold text-xs uppercase tracking-[0.4em] mb-4"
                     style={{ color: 'var(--color-muted)' }}>
                    Inquiries
                  </p>
                  <a
                    href={`mailto:${restaurant.email}`}
                    className="font-body text-base md:text-lg font-medium transition-colors duration-200"
                    style={{ color: 'var(--color-forest)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-red)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-forest)')}
                  >
                    {restaurant.email}
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
