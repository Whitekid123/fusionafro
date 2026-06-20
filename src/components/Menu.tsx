import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { menuCategories } from "../data/menu";
import type { MenuItem } from "../data/menu";

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(menuCategories[0].id);
  const [page, setPage] = useState(0);
  const ITEMS_PER_PAGE = 6;

  const activeCategoryData = menuCategories.find((c) => c.id === activeCategory);
  const allItems: MenuItem[] = activeCategoryData ? activeCategoryData.items : [];
  const totalPages = Math.ceil(allItems.length / ITEMS_PER_PAGE);
  const visibleItems = allItems.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  const switchCategory = (id: string) => {
    setActiveCategory(id);
    setPage(0);
  };

  return (
    <section
      id="menu"
      className="py-48 md:py-72 overflow-hidden relative border-b border-dashed"
      style={{ backgroundColor: 'var(--color-forest)', borderColor: 'rgba(237, 232, 223, 0.15)' }}
    >
      <div className="sketch-overlay" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-sm font-semibold uppercase tracking-[0.4em] mb-5"
            style={{ color: 'var(--color-gold)' }}
          >
            Browse through our offerings
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-baseline justify-center gap-4 flex-wrap"
          >
            <h2 className="font-heading leading-tight"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: 'var(--color-cream)', fontWeight: 900 }}>
              Our
            </h2>
            <span style={{
              fontFamily: 'var(--font-script)',
              fontSize:   'clamp(2.2rem, 5.5vw, 3.6rem)',
              color:      'var(--color-gold)',
              lineHeight: 1.1,
            }}>
              menu
            </span>
          </motion.div>
        </div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 md:gap-5 mb-10"
        >
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => switchCategory(category.id)}
              id={`menu-tab-${category.id}`}
              className="relative font-body font-bold text-xs md:text-sm uppercase tracking-[0.15em] px-6 py-2.5 transition-all duration-300 rounded-none cursor-pointer"
              style={{
                color:            activeCategory === category.id ? 'var(--color-forest)' : 'var(--color-cream)',
                backgroundColor:  activeCategory === category.id ? 'var(--color-cream)' : 'transparent',
                border:           activeCategory === category.id ? '2px solid var(--color-cream)' : '2px solid rgba(237, 232, 223, 0.3)',
              }}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Divider with category name */}
        <div className="divider-line-light mb-10 text-center">
          <span className="font-heading text-2xl md:text-3xl font-bold whitespace-nowrap px-6"
                style={{ color: 'var(--color-cream)' }}>
            {activeCategoryData?.label}
          </span>
        </div>

        {/* Menu Items Grid */}
        <div className="max-w-4xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + page}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-16"
            >
              {visibleItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07 }}
                  className="flex items-baseline justify-between py-7 px-2 group border-b"
                  style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                  id={`menu-item-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="flex-1 pr-8">
                    <h3
                      className="font-heading text-lg md:text-xl font-bold mb-2 transition-colors duration-300 group-hover:underline"
                      style={{ color: 'var(--color-cream)', textDecorationColor: 'var(--color-gold)' }}
                    >
                      {item.name}
                    </h3>
                    <p className="font-body text-sm leading-relaxed line-clamp-2"
                       style={{ color: 'var(--color-cream-dark)', opacity: 0.85 }}>
                      {item.description}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <span className="font-heading text-xl md:text-2xl font-bold"
                          style={{ color: 'var(--color-gold-light)' }}>
                      {item.price}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-5 mt-12">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                className="p-3 rounded-full border-2 transition-all duration-200 disabled:opacity-30 cursor-pointer"
                style={{ borderColor: 'var(--color-cream)', color: 'var(--color-cream)' }}
                id="menu-prev-btn"
                aria-label="Previous page"
              >
                <ChevronLeft size={20} />
              </button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className="w-3 h-3 rounded-full transition-all duration-300 cursor-pointer"
                  style={{
                    backgroundColor: i === page ? 'var(--color-gold)' : 'rgba(255,255,255,0.2)',
                    transform:       i === page ? 'scale(1.3)' : 'scale(1)',
                  }}
                  id={`menu-page-${i}`}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={page === totalPages - 1}
                className="p-3 rounded-full border-2 transition-all duration-200 disabled:opacity-30 cursor-pointer"
                style={{ borderColor: 'var(--color-cream)', color: 'var(--color-cream)' }}
                id="menu-next-btn"
                aria-label="Next page"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}

          {/* CTA buttons — moved BELOW menu items */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-5 mt-16"
          >
            <a href="#contact" className="btn-secondary" id="menu-full-cta">
              View Full Menu
            </a>
            <a href="#catering" className="btn-primary" id="menu-catering-cta">
              Catering Enquiry
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
