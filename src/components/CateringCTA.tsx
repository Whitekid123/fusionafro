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

            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-green text-brand-dark hover:bg-white transition-colors font-bold text-sm uppercase tracking-[0.2em] rounded-sm"
              >
                Call to Book
              </a>
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white hover:border-white transition-colors font-bold text-sm uppercase tracking-[0.2em] rounded-sm group"
              >
                View Platters
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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
