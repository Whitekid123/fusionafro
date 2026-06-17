import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="bg-brand-dark py-32 md:py-48 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Text Side - Clean and Legible */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="font-heading text-5xl md:text-7xl leading-tight text-white mb-10 uppercase tracking-tight">
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

          {/* Image Grid Side - Structured and Elegant */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full h-[300px] md:h-[500px]"
            >
              <img
                src="/about-ambiance.png"
                alt="Warm interior of Fusion Afro restaurant"
                className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full h-[300px] md:h-[500px] mt-12 md:mt-24"
            >
              <img
                src="/jollof-rice.png"
                alt="Jollof rice"
                className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
