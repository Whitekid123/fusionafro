import { motion } from 'framer-motion';
import { restaurant, navLinks } from '../data/restaurant';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal pt-32 pb-10 overflow-hidden relative">
      
      {/* Massive Typographic Branding with Glowing Animation */}
      <div className="w-full flex justify-center items-center mb-24 px-6 select-none pointer-events-none">
        <motion.h1 
          animate={{ 
            textShadow: [
              "0px 0px 20px rgba(193,255,114,0.0)", 
              "0px 0px 100px rgba(193,255,114,0.6)", 
              "0px 0px 20px rgba(193,255,114,0.0)"
            ],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="font-heading text-[18vw] leading-[0.8] tracking-tighter text-brand-green whitespace-nowrap"
        >
          FUSION AFRO
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Navigation and Socials Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-b border-white/10 pb-16 mb-10">
          
          <nav className="flex flex-wrap justify-center gap-8 md:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white font-bold text-xs uppercase tracking-[0.3em] hover:text-brand-green transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-8">
            <a
              href={restaurant.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-text-muted font-bold text-xs uppercase tracking-[0.3em] hover:text-brand-green transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href={restaurant.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-text-muted font-bold text-xs uppercase tracking-[0.3em] hover:text-brand-green transition-colors duration-300"
            >
              Facebook
            </a>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-brand-text-muted text-xs uppercase tracking-[0.2em]">
          <p>
            &copy; {year} {restaurant.fullName}.
          </p>
          <p>
            Site by <span className="text-white font-bold">Studio</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
