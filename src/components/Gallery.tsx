import { useScrollAnimation } from '../hooks/useScrollAnimation';

const galleryImages = [
  { src: '/jollof-rice.png', alt: 'Jollof rice with grilled chicken' },
  { src: '/suya-skewers.png', alt: 'Suya beef skewers' },
  { src: '/plantain-dish.png', alt: 'Golden fried plantain' },
  { src: '/about-ambiance.png', alt: 'Restaurant ambiance' },
];

export default function Gallery() {
  const ref = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 bg-brand-dark" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="animate-on-scroll text-brand-green font-semibold uppercase tracking-[0.2em] text-sm mb-4">
            Gallery
          </p>
          <h2 className="animate-on-scroll font-heading text-4xl md:text-5xl text-white mb-6">
            A Visual <span className="text-brand-green">Taste</span>
          </h2>
          <div className="animate-on-scroll section-divider mx-auto" />
        </div>

        {/* Gallery Grid */}
        <div className="stagger-children grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={img.alt}
              className={`animate-on-scroll scale-in rounded-xl overflow-hidden group cursor-pointer ${
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
