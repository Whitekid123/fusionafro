import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["5%", "-15%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.05]);

  return (
    <section id="about" ref={containerRef} className="bg-brand-dark py-32 md:py-48 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Text Side - Clean and Legible */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1"
          >
            <h2 className="font-heading text-5xl md:text-7xl leading-tight text-white mb-12 uppercase tracking-wide">
              Our <span className="text-brand-green">Story</span>
            </h2>
            
            <p className="text-brand-text-muted text-lg md:text-xl leading-relaxed mb-8">
              At Fusion Afro, we believe food is more than a meal — it's a journey.
              Our kitchen blends the bold, soulful flavours of West Africa with the vibrant
              spice and rhythm of the Caribbean to create dishes that nourish both body and spirit.
            </p>
            <p className="text-brand-text-muted text-lg md:text-xl leading-relaxed mb-12">
              Every recipe is rooted in tradition, perfected through passion, and served with
              the warmth of home. From the smoky heat of our jollof rice to the tender pull of
              our jerk chicken, each plate tells a story of heritage and pride.
            </p>

            <a
              href="#menu"
              className="inline-block border-b border-brand-green text-brand-green font-bold text-sm uppercase tracking-[0.2em] pb-2 hover:text-white hover:border-white transition-colors"
            >
              Discover Our Roots
            </a>
          </motion.div>

          {/* Image Grid Side - Crazy Parallax Motion */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-6 relative">
            <motion.div
              style={{ y: y1, scale }}
              className="w-full h-[300px] md:h-[500px] overflow-hidden rounded-sm"
            >
              <motion.img
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src="/about-ambiance.png"
                alt="Warm interior of Fusion Afro restaurant"
                className="w-full h-full object-cover grayscale hover:grayscale-0"
              />
            </motion.div>

            <motion.div
              style={{ y: y2 }}
              className="w-full h-[300px] md:h-[500px] mt-12 md:mt-24 overflow-hidden rounded-sm"
            >
              <motion.img
                whileHover={{ scale: 1.1, rotate: -2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src="/jollof-rice.png"
                alt="Jollof rice"
                className="w-full h-full object-cover grayscale hover:grayscale-0"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
