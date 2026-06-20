import { ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y       = useTransform(scrollYProgress, [0, 1], ["0vh", "40vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
  };

  const textVariants: any = {
    hidden:  { y: "100%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      id="home"
      ref={container}
      className="relative h-screen flex items-center justify-start overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Afro-Caribbean dishes spread"
          className="w-full h-full object-cover scale-110"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0"
             style={{ background: 'linear-gradient(to right, rgba(20,40,22,0.82) 0%, rgba(20,40,22,0.65) 55%, rgba(20,40,22,0.30) 100%)' }} />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 px-8 md:px-16 w-full max-w-7xl mx-auto"
      >
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-body text-white/70 uppercase tracking-[0.4em] text-xs md:text-sm mb-5"
        >
          Dine In &bull; Take Away &bull; Catering Service
        </motion.p>

        {/* Main Headline — mixed serif + script */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="overflow-hidden"
        >
          <div className="overflow-hidden">
            <motion.h1
              variants={textVariants}
              className="font-heading text-white leading-[1.05]"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)', fontWeight: 900 }}
            >
              Family
            </motion.h1>
          </div>
          <div className="overflow-hidden flex items-baseline gap-4 flex-wrap">
            <motion.span
              variants={textVariants}
              style={{
                fontFamily: 'var(--font-script)',
                fontSize:   'clamp(2.4rem, 6vw, 5rem)',
                color:      'var(--color-gold)',
                lineHeight: 1.1,
              }}
            >
              flavours
            </motion.span>
            <motion.h1
              variants={textVariants}
              className="font-heading text-white leading-[1.05]"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)', fontWeight: 900 }}
            >
              from
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              variants={textVariants}
              className="font-heading leading-[1.05]"
              style={{
                fontSize:  'clamp(2.8rem, 7vw, 6rem)',
                fontWeight: 900,
                color:     'var(--color-red)',
              }}
            >
              Africa
            </motion.h1>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.9 }}
          className="font-body text-white/75 text-base md:text-lg mt-5 mb-8 max-w-md leading-relaxed"
        >
          Bold, soulful West African &amp; Caribbean cooking — served with the warmth of home.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#menu" className="btn-primary" id="hero-explore-btn">
            Explore Our Menu
          </a>
          <a href="#catering" className="btn-secondary" id="hero-catering-btn">
            Book Catering
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 group"
        id="hero-scroll-indicator"
      >
        <span className="font-body text-white/50 uppercase text-[10px] tracking-[0.3em] group-hover:text-white transition-colors">
          Scroll
        </span>
        <ChevronDown size={22} className="text-white/50 group-hover:text-white animate-bounce transition-colors" />
      </motion.a>
    </section>
  );
}
