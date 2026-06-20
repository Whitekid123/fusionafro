import React from "react";
import { restaurant, navLinks } from "../data/restaurant";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-20 md:py-28 overflow-hidden relative"
      style={{ backgroundColor: 'var(--color-forest)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Top Row: Logo + Nav + Socials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 pb-16 border-b text-center md:text-left"
             style={{ borderColor: 'rgba(255,255,255,0.1)' }}>

          {/* Brand */}
          <div className="flex flex-col gap-5 items-center md:items-start">
            <div>
              <div className="font-display text-3xl tracking-widest"
                   style={{ color: 'var(--color-red)' }}>
                FUSION
              </div>
              <div className="font-body text-xs font-bold tracking-[0.25em] uppercase mt-1"
                   style={{ color: 'var(--color-gold)' }}>
                Afro Caribbean Restaurant
              </div>
            </div>
            <p className="font-body text-sm leading-relaxed max-w-xs mx-auto md:mx-0"
               style={{ color: 'rgba(255,255,255,0.6)' }}>
              Bold, soulful West African &amp; Caribbean cooking — served with the warmth of home.
            </p>
            <div className="flex gap-8 mt-3 justify-center md:justify-start">
              <a href={restaurant.social.instagram} target="_blank" rel="noopener noreferrer"
                 className="font-body text-xs font-bold uppercase tracking-[0.25em] transition-colors duration-200"
                 style={{ color: 'rgba(255,255,255,0.5)' }}
                 onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-gold)')}
                 onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >
                Instagram
              </a>
              <a href={restaurant.social.facebook} target="_blank" rel="noopener noreferrer"
                 className="font-body text-xs font-bold uppercase tracking-[0.25em] transition-colors duration-200"
                 style={{ color: 'rgba(255,255,255,0.5)' }}
                 onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-gold)')}
                 onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >
                Facebook
              </a>
              <a href={restaurant.social.tiktok} target="_blank" rel="noopener noreferrer"
                 className="font-body text-xs font-bold uppercase tracking-[0.25em] transition-colors duration-200"
                 style={{ color: 'rgba(255,255,255,0.5)' }}
                 onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-gold)')}
                 onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >
                TikTok
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <p className="font-body text-xs font-bold uppercase tracking-[0.3em] mb-8"
               style={{ color: 'rgba(255,255,255,0.35)' }}>
              Navigation
            </p>
            <nav className="flex flex-col gap-4" aria-label="Footer navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm font-medium transition-colors duration-200"
                  style={{ color: 'rgba(255,255,255,0.65)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-gold)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <p className="font-body text-xs font-bold uppercase tracking-[0.3em] mb-8"
               style={{ color: 'rgba(255,255,255,0.35)' }}>
              Get in Touch
            </p>
            <div className="flex flex-col gap-6 items-center md:items-start">
              <div>
                <p className="font-body text-xs uppercase tracking-wider mb-2"
                   style={{ color: 'rgba(255,255,255,0.35)' }}>Address</p>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {restaurant.address}
                </p>
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-wider mb-2"
                   style={{ color: 'rgba(255,255,255,0.35)' }}>Phone</p>
                <a href={`tel:${restaurant.phone}`}
                   className="font-body text-sm transition-colors duration-200"
                   style={{ color: 'rgba(255,255,255,0.7)' }}
                   onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-gold)')}
                   onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                >
                  {restaurant.phone}
                </a>
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-wider mb-2"
                   style={{ color: 'rgba(255,255,255,0.35)' }}>Email</p>
                <a href={`mailto:${restaurant.email}`}
                   className="font-body text-sm transition-colors duration-200"
                   style={{ color: 'rgba(255,255,255,0.7)' }}
                   onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-gold)')}
                   onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                >
                  {restaurant.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-10"
             style={{ color: 'rgba(255,255,255,0.3)' }}>
          <p className="font-body text-xs uppercase tracking-[0.2em]">
            &copy; {year} {restaurant.fullName}. All rights reserved.
          </p>
          <p className="font-body text-xs uppercase tracking-[0.2em]">
            Dine In &bull; Take Away &bull; Catering Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
