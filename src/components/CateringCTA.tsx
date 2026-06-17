import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CateringCTA() {
  return (
    <section id="catering" className="py-32 md:py-48 bg-brand-dark overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <p className="text-brand-green font-semibold uppercase tracking-[0.4em] text-xs mb-6">
              Catering Service
            </p>
            <h2 className="font-heading text-5xl md:text-7xl leading-tight text-white mb-8 uppercase tracking-tight">
              Bring The <span className="text-brand-green">Feast</span>
            </h2>
            
            <p className="text-brand-text-muted text-lg md:text-xl leading-relaxed mb-8">
              From intimate gatherings to grand celebrations, our catering service delivers the full Fusion Afro experience to your event.
              Customised menus, professional service, and flavours your guests will never forget.
            </p>
            
            <ul className="space-y-4 mb-10 text-white font-medium">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-brand-green rounded-full" />
                Weddings, birthdays & corporate events
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-brand-green rounded-full" />
                Custom menus tailored to your taste
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-brand-green rounded-full" />
                Party platters from $35 &mdash; full spreads from $95
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row items-center gap-6 w-full md:w-auto">
              <a
                href="#contact"
                className="relative overflow-hidden group w-full sm:w-auto text-center px-10 py-4 border border-brand-green text-brand-green font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300"
              >
                <span className="relative z-10 group-hover:text-brand-dark transition-colors duration-300">Call to Book</span>
                <div className="absolute inset-0 bg-brand-green scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
              </a>
              <a
                href="#menu"
                className="relative overflow-hidden group w-full sm:w-auto text-center px-10 py-4 border border-white/20 text-white font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:border-brand-red"
              >
                <span className="relative z-10 group-hover:text-brand-red transition-colors duration-300">View Platters</span>
                <div className="absolute inset-0 bg-white/5 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[600px] w-full"
          >
            <img
              src="/catering-spread.png"
              alt="Catering spread"
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
