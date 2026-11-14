import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  MessageSquare,
  Phone,
  Home,
  Info,
  BedDouble,
  UtensilsCrossed,
  Layers,
  Sparkles,
  Star,
  MapPin,
  ArrowRight
} from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/business';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isServicesActive = ['/bedroom-interiors', '/modular-kitchens', '/wardrobe-designs'].includes(location.pathname);

  return (
    <>
      {/* Top micro banner for phone & rating on desktop */}
      <div className="bg-navy-dark text-ivory/80 text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-champagne font-medium">
              <span>★</span>
              <span>5.0 / 5.0 Google Rated (126 Reviews)</span>
            </span>
            <span className="text-white/40">•</span>
            <span className="text-ivory/70">Residential Interior Decorators in HRBR Layout, Kalyan Nagar, Bengaluru</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone.tel}`}
              className="flex items-center gap-1.5 hover:text-champagne transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-champagne" />
              <span>{BUSINESS_INFO.phone.display}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-ivory/95 backdrop-blur-md shadow-sm border-b border-beigeGrey/70 py-3.5'
            : 'bg-ivory border-b border-beigeGrey/40 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Wordmark */}
            <Link
              to="/"
              className="flex flex-col group focus-visible:outline-none"
              aria-label="Prakash Interior Decors Homepage"
            >
              <span className="font-serif text-2xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-navy group-hover:text-mutedBlue transition-colors">
                PRAKASH
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-slateGrey -mt-1 font-medium">
                Interior Decors • Bengaluru
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <Link
                to="/"
                className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                  isActive('/') && location.pathname === '/'
                    ? 'text-navy font-semibold border-b-2 border-navy'
                    : 'text-slateGrey hover:text-navy'
                }`}
              >
                Home
              </Link>

              <Link
                to="/about"
                className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                  isActive('/about')
                    ? 'text-navy font-semibold border-b-2 border-navy'
                    : 'text-slateGrey hover:text-navy'
                }`}
              >
                About
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className={`px-3 py-2 text-sm font-medium tracking-wide inline-flex items-center gap-1 transition-colors ${
                    isServicesActive
                      ? 'text-navy font-semibold border-b-2 border-navy'
                      : 'text-slateGrey hover:text-navy'
                  }`}
                  aria-expanded={servicesDropdownOpen}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 w-72 bg-white rounded-md shadow-xl border border-beigeGrey/60 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <Link
                      to="/bedroom-interiors"
                      className="block px-4 py-3 hover:bg-ivory/60 transition-colors"
                    >
                      <p className="text-sm font-semibold text-navy">Bedroom Interiors</p>
                      <p className="text-xs text-slateGrey mt-0.5">Headboards, wardrobes & calm layouts</p>
                    </Link>
                    <Link
                      to="/modular-kitchens"
                      className="block px-4 py-3 hover:bg-ivory/60 transition-colors"
                    >
                      <p className="text-sm font-semibold text-navy">Modular Kitchens</p>
                      <p className="text-xs text-slateGrey mt-0.5">Ergonomic cabinetry & moisture-resistant finishes</p>
                    </Link>
                    <Link
                      to="/wardrobe-designs"
                      className="block px-4 py-3 hover:bg-ivory/60 transition-colors"
                    >
                      <p className="text-sm font-semibold text-navy">Wardrobe Designs</p>
                      <p className="text-xs text-slateGrey mt-0.5">Sliding & hinged floor-to-ceiling carpentry</p>
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/projects"
                className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                  isActive('/projects')
                    ? 'text-navy font-semibold border-b-2 border-navy'
                    : 'text-slateGrey hover:text-navy'
                }`}
              >
                Design Gallery
              </Link>

              <Link
                to="/reviews"
                className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                  isActive('/reviews')
                    ? 'text-navy font-semibold border-b-2 border-navy'
                    : 'text-slateGrey hover:text-navy'
                }`}
              >
                Reviews
              </Link>

              <Link
                to="/contact"
                className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                  isActive('/contact')
                    ? 'text-navy font-semibold border-b-2 border-navy'
                    : 'text-slateGrey hover:text-navy'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Header Right Action CTA on Desktop */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={getWhatsAppLink("Hello Prakash Interior Decors, I would like to discuss my home interior requirements.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-ivory px-4 py-2.5 rounded text-xs uppercase tracking-wider font-semibold shadow-sm hover:shadow transition-all"
                aria-label="Direct WhatsApp consultation"
              >
                <MessageSquare className="w-3.5 h-3.5 text-champagne" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Mobile Header Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-navy hover:text-mutedBlue flex items-center justify-center"
                aria-label="Chat on WhatsApp"
              >
                <MessageSquare className="w-5 h-5 text-champagne-dark" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 text-navy hover:text-mutedBlue focus:outline-none rounded-md bg-cream/60 border border-beigeGrey/60"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-navy" /> : <Menu className="w-6 h-6 text-navy" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* FULL-SCREEN MOBILE NAVIGATION OVERLAY DRAWER */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-ivory flex flex-col lg:hidden animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Mobile Top Header Bar with Brand & Close Button */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-beigeGrey bg-ivory shadow-sm shrink-0">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex flex-col"
            >
              <span className="font-serif text-2xl font-bold tracking-tight text-navy">
                PRAKASH
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-slateGrey -mt-1 font-semibold">
                Interior Decors • Bengaluru
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-navy hover:text-navy-dark bg-cream rounded-full border border-beigeGrey focus:outline-none"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6 text-navy" />
            </button>
          </div>

          {/* Scrollable Nav Items */}
          <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
            {/* Verified Google Rating Pill */}
            <div className="p-3 bg-cream/70 rounded-md border border-champagne/40 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-champagne-dark font-bold text-sm">★★★★★</span>
                <span className="text-xs font-bold text-navy">5.0 / 5.0 Google Rated</span>
              </div>
              <span className="text-[11px] text-slateGrey font-medium">126 Reviews</span>
            </div>

            {/* Main Navigation Links */}
            <nav className="space-y-1">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3.5 rounded-md text-base font-medium transition-colors ${
                  isActive('/') && location.pathname === '/'
                    ? 'bg-navy text-ivory font-semibold'
                    : 'text-navy hover:bg-cream/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Home className="w-5 h-5 text-champagne" />
                  <span>Home</span>
                </div>
                <ArrowRight className="w-4 h-4 opacity-40" />
              </Link>

              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3.5 rounded-md text-base font-medium transition-colors ${
                  isActive('/about')
                    ? 'bg-navy text-ivory font-semibold'
                    : 'text-navy hover:bg-cream/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Info className="w-5 h-5 text-mutedBlue" />
                  <span>About Studio</span>
                </div>
                <ArrowRight className="w-4 h-4 opacity-40" />
              </Link>

              {/* Services Sub-Group */}
              <div className="pt-2 pb-2">
                <div className="px-4 py-1.5 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-slateGrey">
                    Our Interior Services
                  </span>
                </div>

                <div className="space-y-1 mt-1 pl-2 border-l-2 border-champagne/60 ml-2">
                  <Link
                    to="/bedroom-interiors"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-md text-sm transition-colors ${
                      isActive('/bedroom-interiors')
                        ? 'bg-cream text-navy font-bold'
                        : 'text-navy hover:bg-cream/50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <BedDouble className="w-4 h-4 text-mutedBlue shrink-0" />
                      <div>
                        <p className="font-semibold leading-tight">Bedroom Interiors</p>
                        <p className="text-[11px] text-slateGrey font-normal">Headboards & space planning</p>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                  </Link>

                  <Link
                    to="/modular-kitchens"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-md text-sm transition-colors ${
                      isActive('/modular-kitchens')
                        ? 'bg-cream text-navy font-bold'
                        : 'text-navy hover:bg-cream/50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <UtensilsCrossed className="w-4 h-4 text-mutedBlue shrink-0" />
                      <div>
                        <p className="font-semibold leading-tight">Modular Kitchens</p>
                        <p className="text-[11px] text-slateGrey font-normal">Ergonomic cabinetry & storage</p>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                  </Link>

                  <Link
                    to="/wardrobe-designs"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-md text-sm transition-colors ${
                      isActive('/wardrobe-designs')
                        ? 'bg-cream text-navy font-bold'
                        : 'text-navy hover:bg-cream/50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Layers className="w-4 h-4 text-mutedBlue shrink-0" />
                      <div>
                        <p className="font-semibold leading-tight">Wardrobe Designs</p>
                        <p className="text-[11px] text-slateGrey font-normal">Sliding & hinged carpentry</p>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                  </Link>
                </div>
              </div>

              <Link
                to="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3.5 rounded-md text-base font-medium transition-colors ${
                  isActive('/projects')
                    ? 'bg-navy text-ivory font-semibold'
                    : 'text-navy hover:bg-cream/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-champagne-dark" />
                  <span>Design Inspiration Gallery</span>
                </div>
                <ArrowRight className="w-4 h-4 opacity-40" />
              </Link>

              <Link
                to="/reviews"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3.5 rounded-md text-base font-medium transition-colors ${
                  isActive('/reviews')
                    ? 'bg-navy text-ivory font-semibold'
                    : 'text-navy hover:bg-cream/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-champagne-dark" />
                  <span>Customer Reviews</span>
                </div>
                <ArrowRight className="w-4 h-4 opacity-40" />
              </Link>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3.5 rounded-md text-base font-medium transition-colors ${
                  isActive('/contact')
                    ? 'bg-navy text-ivory font-semibold'
                    : 'text-navy hover:bg-cream/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-mutedBlue" />
                  <span>Contact & Studio Location</span>
                </div>
                <ArrowRight className="w-4 h-4 opacity-40" />
              </Link>
            </nav>

            {/* Direct Quick Conversion Actions */}
            <div className="pt-4 border-t border-beigeGrey space-y-3">
              <a
                href={getWhatsAppLink("Hello Prakash Interior Decors, I would like to discuss my home interior requirements.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 bg-navy text-ivory py-4 px-4 rounded-md text-xs uppercase tracking-widest font-semibold shadow-md active:scale-[0.99] transition-transform"
              >
                <MessageSquare className="w-4 h-4 text-champagne" />
                <span>Chat on WhatsApp (+91 95913 44715)</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone.tel}`}
                className="w-full flex items-center justify-center gap-2.5 border border-navy/40 text-navy bg-white py-3.5 px-4 rounded-md text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                <Phone className="w-4 h-4 text-mutedBlue" />
                <span>Call {BUSINESS_INFO.phone.display}</span>
              </a>

              <p className="text-[11px] text-slateGrey text-center leading-relaxed pt-2">
                Studio: 609, 3rd C Cross Rd, HRBR Layout 2nd Block, Kalyan Nagar, Bengaluru 560043
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
