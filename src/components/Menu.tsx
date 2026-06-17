import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuCategories } from '../data/menu';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);

  const activeCategoryData = menuCategories.find(c => c.id === activeCategory);
  const filteredItems = activeCategoryData ? activeCategoryData.items : [];

  return (
    <section id="menu" className="py-32 md:py-48 bg-brand-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-green font-semibold uppercase tracking-[0.4em] text-xs mb-6"
          >
            Our Menu
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl leading-tight text-white mb-6 uppercase tracking-tight"
          >
            A Feast of Flavours
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-text-muted text-lg"
          >
            Crafted with authentic spices and the freshest ingredients.
          </motion.p>
        </div>

        {/* Categories Tab */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative px-8 py-3 text-sm font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                activeCategory === category.id
                  ? 'text-brand-dark'
                  : 'text-white hover:text-brand-green'
              }`}
            >
              <span className="relative z-10">{category.name}</span>
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-brand-green rounded-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Menu Items List */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-10"
            >
              {filteredItems.map((item, index) => (
                <motion.div 
                  key={item.name} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-white/5 pb-8 group"
                >
                  <div className="flex-1 pr-8">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-brand-green transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-brand-text-muted text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-0 whitespace-nowrap">
                    <span className="font-heading text-2xl text-brand-green">
                      {item.price}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
