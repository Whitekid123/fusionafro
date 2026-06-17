import { ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import heroImg from '../assets/hero-food.png';

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });

  // Parallax for the background
  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '50vh']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  const textVariants: any = {
    hidden: { y: '100%', opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  return (
    <section
      id="home"
      ref={container}
      className="relative min-h-screen flex items-center justify-start overflow-hidden pt-20 bg-brand-dark"
    >
      {/* Background Image with Zoom and Parallax */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Afro-Caribbean dishes spread on a dark table"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-brand-dark/20" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 w-full max-w-7xl mx-auto flex flex-col justify-center h-full pt-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col mb-12"
        >
          {/* Tagline */}
          <div className="overflow-hidden mb-6 ml-2">
            <motion.p 
              variants={textVariants}
              className="text-brand-green font-semibold uppercase tracking-[0.4em] text-xs md:text-sm"
            >
              Restaurant &bull; Take Away &bull; Catering
            </motion.p>
          </div>

          <div className="overflow-hidden">
            <motion.h1 
              variants={textVariants}
              className="font-heading text-[20vw] md:text-[14vw] leading-[0.85] text-brand-cream uppercase tracking-tighter"
            >
              Fusion
            </motion.h1>
          </div>
          <div className="overflow-hidden md:ml-[10vw]">
            <motion.h1 
              variants={textVariants}
              className="font-heading text-[20vw] md:text-[14vw] leading-[0.85] text-brand-green uppercase tracking-tighter"
            >
              Afro
            </motion.h1>
          </div>
          <div className="overflow-hidden md:ml-[5vw] mt-4">
            <motion.h2 
              variants={textVariants}
              className="font-heading text-[8vw] md:text-[4vw] leading-[1.1] text-brand-cream/80 italic"
            >
              Caribbean Soul
            </motion.h2>
          </div>
        </motion.div>

        {/* Description & CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 border-t border-white/10 pt-8 w-full"
        >
          <p className="text-brand-text-muted text-base md:text-lg max-w-md leading-relaxed">
            A bold celebration of African and Caribbean flavours. Every dish tells a story of culture, community, and soul.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 w-full md:w-auto">
            <a
              href="#menu"
              className="relative overflow-hidden group w-full sm:w-auto text-center px-10 py-5 border border-brand-green text-brand-green font-bold text-xs uppercase tracking-[0.2em] rounded-full transition-all duration-300"
            >
              <span className="relative z-10 group-hover:text-brand-dark transition-colors duration-300">Explore Menu</span>
              <div className="absolute inset-0 bg-brand-green translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
            </a>
            <a
              href="#catering"
              className="relative overflow-hidden group w-full sm:w-auto text-center px-10 py-5 border border-white/20 text-white font-bold text-xs uppercase tracking-[0.2em] rounded-full transition-all duration-300 hover:border-brand-red"
            >
              <span className="relative z-10 group-hover:text-brand-red transition-colors duration-300">Book Catering</span>
              <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        href="#about"
        className="absolute bottom-12 right-12 z-10 text-white/50 hover:text-brand-green transition-colors uppercase text-xs tracking-[0.3em] flex items-center gap-2 group"
      >
        <span className="hidden md:block group-hover:-translate-y-1 transition-transform">Scroll</span>
        <ChevronDown size={24} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
