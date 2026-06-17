import { motion } from 'framer-motion';

const galleryImages = [
  { src: '/jollof-rice.png', alt: 'Jollof rice with grilled chicken' },
  { src: '/suya-skewers.png', alt: 'Suya beef skewers' },
  { src: '/plantain-dish.png', alt: 'Golden fried plantain' },
  { src: '/about-ambiance.png', alt: 'Restaurant ambiance' },
];

export default function Gallery() {
  return (
    <section className="py-24 md:py-32 bg-brand-charcoal relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-green font-semibold uppercase tracking-[0.4em] text-xs mb-6"
          >
            Gallery
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl leading-tight text-white uppercase tracking-tight"
          >
            A Visual <span className="text-brand-green">Taste</span>
          </motion.h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {galleryImages.map((img, i) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              key={img.alt}
              className={`rounded-xl overflow-hidden group cursor-pointer ${
                i === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                  i === 0 ? 'h-64 md:h-full' : 'h-48 md:h-64'
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
