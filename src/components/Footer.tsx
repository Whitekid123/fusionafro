import { restaurant, navLinks } from '../data/restaurant';

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-block mb-4">
              <span className="font-heading text-3xl text-white">
                {restaurant.name.split(' ')[0]}
                <span className="text-brand-green"> {restaurant.name.split(' ')[1]}</span>
              </span>
            </a>
            <p className="text-brand-text-muted text-sm leading-relaxed mb-6 max-w-xs">
              {restaurant.description}
            </p>
            <div className="flex gap-4">
              <a
                href={restaurant.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-gray flex items-center justify-center text-brand-text-muted hover:bg-brand-green hover:text-brand-dark transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={restaurant.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-gray flex items-center justify-center text-brand-text-muted hover:bg-brand-green hover:text-brand-dark transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-6">
              Quick Links
            </h3>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-brand-text-muted text-sm hover:text-brand-green hover:translate-x-1 transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Summary */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-6">
              Contact
            </h3>
            <div className="space-y-3 text-brand-text-muted text-sm">
              <p>{restaurant.address}</p>
              <a href={`tel:${restaurant.phone}`} className="block hover:text-brand-green transition-colors">
                {restaurant.phone}
              </a>
              <a href={`mailto:${restaurant.email}`} className="block hover:text-brand-green transition-colors">
                {restaurant.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-brand-text-muted text-xs">
            &copy; {year} {restaurant.fullName}. All rights reserved.
          </p>
          <p className="text-brand-text-muted text-xs">
            Crafted with <span className="text-brand-red">&hearts;</span> and bold spice
          </p>
        </div>
      </div>
    </footer>
  );
}
