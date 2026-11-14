import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Phone, MapPin, Star, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/business';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-ivory/80 pt-16 pb-12 border-t border-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Verified Rating */}
          <div className="space-y-5">
            <div>
              <span className="font-serif text-2xl text-ivory font-semibold tracking-tight block">
                PRAKASH
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-champagne block mt-0.5">
                Interior Decors • Bengaluru
              </span>
            </div>
            <p className="text-sm text-ivory/70 leading-relaxed font-light">
              {BUSINESS_INFO.description}
            </p>

            {/* Verified Google Rating Box */}
            <div className="inline-block p-3.5 bg-navy-dark/90 rounded border border-champagne/30">
              <div className="flex items-center gap-1.5 text-champagne font-semibold text-sm">
                <span className="text-base">★</span>
                <span>5.0 / 5.0 Google Rating</span>
              </div>
              <p className="text-xs text-ivory/60 mt-0.5">
                Based on 126 verified customer reviews
              </p>
            </div>
          </div>

          {/* Column 2: Verified Services */}
          <div>
            <h3 className="font-serif text-lg text-ivory mb-4 tracking-wide">
              Interior Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/bedroom-interiors"
                  className="hover:text-champagne transition-colors flex items-center justify-between group"
                >
                  <span>Bedroom Interiors</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/modular-kitchens"
                  className="hover:text-champagne transition-colors flex items-center justify-between group"
                >
                  <span>Modular Kitchens</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/wardrobe-designs"
                  className="hover:text-champagne transition-colors flex items-center justify-between group"
                >
                  <span>Customised Wardrobes</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/bedroom-interiors"
                  className="hover:text-champagne transition-colors flex items-center justify-between group"
                >
                  <span>Interior Bedroom Design</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/wardrobe-designs"
                  className="hover:text-champagne transition-colors flex items-center justify-between group"
                >
                  <span>Designer Wardrobe Carpentry</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Studio & Navigation */}
          <div>
            <h3 className="font-serif text-lg text-ivory mb-4 tracking-wide">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-champagne transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-champagne transition-colors">
                  About Studio
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-champagne transition-colors">
                  Design Inspiration Gallery
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-champagne transition-colors">
                  Verified Reviews & Feedback
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-champagne transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Studio Location */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg text-ivory tracking-wide">
              Bengaluru Studio
            </h3>
            <div className="flex items-start gap-3 text-sm text-ivory/70">
              <MapPin className="w-4 h-4 text-champagne shrink-0 mt-1" />
              <p className="leading-relaxed">
                {BUSINESS_INFO.address.full}
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm text-ivory/70">
              <Phone className="w-4 h-4 text-champagne shrink-0" />
              <a
                href={`tel:${BUSINESS_INFO.phone.tel}`}
                className="hover:text-champagne transition-colors"
              >
                {BUSINESS_INFO.phone.display}
              </a>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppLink("Hello Prakash Interior Decors, I would like to consult with you about interior decoration for my home.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-champagne hover:bg-champagne-dark text-navy font-semibold px-4 py-2.5 rounded text-xs uppercase tracking-wider transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Start WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>

        {/* Lower Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-ivory/50 gap-4">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. Registered Interior Decorator in Bengaluru, Karnataka.
          </p>
          <p className="text-center md:text-right max-w-xl">
            Design Gallery photography serves as curated design inspiration. All residential wardrobes, modular kitchens, and bedroom furnishings are custom tailored to individual homeowner room specifications.
          </p>
        </div>
      </div>
    </footer>
  );
};

