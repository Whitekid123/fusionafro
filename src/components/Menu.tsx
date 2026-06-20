import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { menuCategories } from "../data/menu";
import type { MenuItem } from "../data/menu";

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(menuCategories[0].id);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [page, setPage] = useState(0);
  const ITEMS_PER_PAGE = 6;

  const activeCategoryData = menuCategories.find((c) => c.id === activeCategory);
  const allItems: MenuItem[] = activeCategoryData ? activeCategoryData.items : [];

  // Filter items based on activeFilter
  const filteredItems = allItems.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'gf') return item.dietary?.includes('gf');
    if (activeFilter === 'vegetarian') return item.dietary?.includes('vegetarian') || item.dietary?.includes('vegan');
    if (activeFilter === 'vegan') return item.dietary?.includes('vegan');
    if (activeFilter === 'spicy') return item.spice === 'medium' || item.spice === 'hot';
    return true;
  });

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const visibleItems = filteredItems.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  const switchCategory = (id: string) => {
    setActiveCategory(id);
    setActiveFilter('all');
    setPage(0);
  };

  const switchFilter = (filter: string) => {
    setActiveFilter(filter);
    setPage(0);
  };

  return (
    <section
      id="menu"
      className="py-48 md:py-72 overflow-hidden relative border-b border-dashed"
      style={{ backgroundColor: 'var(--color-forest)', borderColor: 'rgba(237, 232, 223, 0.15)' }}
    >
      <div className="sketch-overlay" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center w-full">
        
        {/* Section Header */}
        <div className="text-center w-full max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-sm font-semibold uppercase tracking-[0.4em] mb-6 animate-on-scroll"
            style={{ color: 'var(--color-gold)' }}
          >
            Browse through our offerings
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center gap-5 md:gap-7 flex-wrap w-full"
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
              paddingTop: '0.2em'
            }}>
              menu
            </span>
          </motion.div>
        </div>

        {/* Category Tabs & Filters Container */}
        <div className="max-w-4xl mx-auto w-full flex flex-col items-center gap-12 md:gap-16 mb-24">
          
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-5 md:gap-8 w-full"
          >
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => switchCategory(category.id)}
                id={`menu-tab-${category.id}`}
                className="relative font-body font-bold text-xs md:text-sm uppercase tracking-[0.2em] px-8 py-3.5 md:px-10 md:py-4 transition-all duration-300 rounded-none cursor-pointer"
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

          {/* Dietary / Tag Filters */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 w-full"
          >
            {[
              { id: 'all', label: 'All Dishes' },
              { id: 'gf', label: 'Gluten-Free' },
              { id: 'vegetarian', label: 'Vegetarian & Vegan' },
              { id: 'spicy', label: 'Spicy' }
            ].map((filter) => {
              // Check if activeCategory actually has items matching this filter
              const hasItems = allItems.some(item => {
                if (filter.id === 'all') return true;
                if (filter.id === 'gf') return item.dietary?.includes('gf');
                if (filter.id === 'vegetarian') return item.dietary?.includes('vegetarian') || item.dietary?.includes('vegan');
                if (filter.id === 'spicy') return item.spice === 'medium' || item.spice === 'hot';
                return false;
              });

              if (!hasItems) return null;

              return (
                <button
                  key={filter.id}
                  onClick={() => switchFilter(filter.id)}
                  className="text-[10px] md:text-xs font-body font-bold uppercase tracking-[0.2em] px-6 py-2.5 md:px-8 md:py-3.5 transition-all duration-300 cursor-pointer border rounded-full"
                  style={{
                    color:           activeFilter === filter.id ? 'var(--color-gold)' : 'rgba(237, 232, 223, 0.6)',
                    borderColor:     activeFilter === filter.id ? 'var(--color-gold)' : 'rgba(237, 232, 223, 0.15)',
                    backgroundColor: activeFilter === filter.id ? 'rgba(212, 137, 26, 0.08)' : 'transparent',
                  }}
                >
                  {filter.label}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Divider with category name */}
        <div className="divider-line-light mb-10 text-center w-full">
          <span className="font-heading text-2xl md:text-3xl font-bold whitespace-nowrap px-6"
                style={{ color: 'var(--color-cream)' }}>
            {activeCategoryData?.label}
          </span>
        </div>

        {/* Menu Items Grid */}
        <div className="w-full max-w-4xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + activeFilter + page}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 w-full"
            >
              {visibleItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07 }}
                  className="flex flex-col items-center justify-center text-center py-8 px-4 group border-b cursor-pointer transition-all duration-300 hover:bg-white/3"
                  style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                  id={`menu-item-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setSelectedItem(item)}
                >
                  {/* Name */}
                  <h3
                    className="font-heading text-lg md:text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-gold-light"
                    style={{ color: 'var(--color-cream)' }}
                  >
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm leading-relaxed max-w-md mb-4"
                     style={{ color: 'var(--color-cream-dark)', opacity: 0.8 }}>
                    {item.description}
                  </p>

                  {/* Price */}
                  <span className="font-heading text-lg md:text-xl font-bold"
                        style={{ color: 'var(--color-gold-light)' }}>
                    {item.price}
                  </span>
                </motion.div>
              ))}

              {visibleItems.length === 0 && (
                <div className="col-span-full text-center py-12">
                  <p className="font-body text-sm" style={{ color: 'var(--color-cream-dark)' }}>
                    No items in this category match the selected filter.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-5 mt-12 w-full">
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
            className="flex flex-wrap justify-center gap-5 mt-16 w-full"
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

      {/* Details Modal Popup */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg overflow-hidden bg-forest border border-cream/20 shadow-2xl p-6 md:p-8 rounded-none"
              style={{ backgroundColor: 'var(--color-forest)', borderColor: 'rgba(237, 232, 223, 0.2)' }}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 text-cream/70 hover:text-white transition-colors duration-200 cursor-pointer p-1"
                aria-label="Close details"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Title & Price */}
              <div className="text-center mb-4 mt-4">
                <h3 className="font-heading text-2xl md:text-3xl font-black text-cream mb-1">
                  {selectedItem.name}
                </h3>
                <span className="font-heading text-xl font-bold text-gold-light" style={{ color: 'var(--color-gold-light)' }}>
                  {selectedItem.price}
                </span>
              </div>

              {/* Badges: Dietary & Spice */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {selectedItem.dietary?.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-body font-bold uppercase tracking-wider px-2.5 py-1 border rounded-sm"
                    style={{
                      color: 'var(--color-gold)',
                      borderColor: 'rgba(212, 137, 26, 0.4)',
                      backgroundColor: 'rgba(212, 137, 26, 0.08)'
                    }}
                  >
                    {tag === 'gf' ? 'Gluten-Free' : tag}
                  </span>
                ))}
                {selectedItem.spice && selectedItem.spice !== 'none' && (
                  <span
                    className="text-[9px] font-body font-bold uppercase tracking-wider px-2.5 py-1 border rounded-sm"
                    style={{
                      color: 'var(--color-red)',
                      borderColor: 'rgba(204, 32, 32, 0.4)',
                      backgroundColor: 'rgba(204, 32, 32, 0.08)'
                    }}
                  >
                    Spice: {selectedItem.spice === 'hot' ? '🔥🔥🔥 Hot' : selectedItem.spice === 'medium' ? '🔥🔥 Medium' : '🔥 Mild'}
                  </span>
                )}
              </div>

              {/* Cooking Story Details */}
              <p className="font-body text-sm md:text-base leading-relaxed text-center"
                 style={{ color: 'var(--color-cream-dark)' }}>
                {selectedItem.details || selectedItem.description}
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Menu;
