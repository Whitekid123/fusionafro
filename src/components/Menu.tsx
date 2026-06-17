import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { menuCategories } from '../data/menu';

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState('starters');
  const ref = useScrollAnimation();

  const activeCategory = menuCategories.find((c) => c.id === activeTab)!;

  return (
    <section id="menu" className="py-24 md:py-32 bg-brand-charcoal" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="animate-on-scroll text-brand-green font-semibold uppercase tracking-[0.2em] text-sm mb-4">
            Our Menu
          </p>
          <h2 className="animate-on-scroll font-heading text-4xl md:text-5xl text-white mb-6">
            A Feast of <span className="text-brand-green">Flavours</span>
          </h2>
          <div className="animate-on-scroll section-divider mx-auto mb-6" />
          <p className="animate-on-scroll text-brand-text-muted text-lg max-w-2xl mx-auto">
            From bold starters to soul-warming mains, every dish is crafted with
            authentic spices and the freshest ingredients.
          </p>
        </div>

        {/* Tabs */}
        <div className="animate-on-scroll flex flex-wrap justify-center gap-2 mb-12">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-brand-green text-brand-dark shadow-lg shadow-brand-green/25'
                  : 'bg-brand-gray text-brand-text-muted hover:text-white hover:bg-brand-gray-light'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {activeCategory.items.map((item) => (
            <div
              key={item.name}
              className="animate-on-scroll is-visible glass rounded-xl p-6 hover:border-brand-green/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start gap-4 mb-3">
                <h3 className="font-heading text-xl text-white group-hover:text-brand-green transition-colors duration-300">
                  {item.name}
                </h3>
                <span className="text-brand-green font-bold text-lg whitespace-nowrap">
                  {item.price}
                </span>
              </div>
              {item.description && (
                <p className="text-brand-text-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
