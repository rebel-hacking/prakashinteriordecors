import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight, ArrowUpRight, Check, Compass, Sliders, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/business';
import { SERVICES_DATA } from '../data/services';
import { GALLERY_ITEMS } from '../data/gallery';
import { VERIFIED_FEEDBACK_DATA } from '../data/reviews';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { PhoneButton } from '../components/PhoneButton';
import { SectionHeading } from '../components/SectionHeading';
import { SeoHead } from '../components/SeoHead';

export const Home: React.FC = () => {
  const featuredInspirations = GALLERY_ITEMS.slice(0, 4);

  return (
    <>
      <SeoHead
        title="Prakash Interior Decors | Thoughtful Residential Interiors in Bengaluru"
        description="Bangalore-based residential interior design firm providing budget-friendly and high-quality bedroom interiors, customised wardrobes, and modular kitchens. Rated 5.0 on Google (126 reviews)."
        canonicalPath="/"
      />

      {/* HERO SECTION — Asymmetric Architectural Editorial Composition */}
      <section className="relative bg-ivory pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-beigeGrey/60 overflow-hidden">
        {/* Subtle background architectural line */}
        <div className="absolute top-0 right-1/3 w-px h-full bg-beigeGrey/40 pointer-events-none hidden lg:block" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 lg:pr-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream border border-champagne/40">
                <span className="w-2 h-2 rounded-full bg-champagne animate-pulse" />
                <span className="text-xs uppercase tracking-widest font-semibold text-navy">
                  Residential Interiors • Bengaluru
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-normal text-navy leading-[1.08] tracking-tight">
                Spaces That Feel Like Home. <br />
                <span className="italic font-light text-mutedBlue">Designed to Inspire.</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slateGrey max-w-xl leading-relaxed">
                Thoughtfully designed bedrooms, customised wardrobes and beautiful modular kitchens for modern living in Bengaluru.
              </p>

              {/* Verified Trust Strip */}
              <div className="pt-2 flex items-center gap-4 text-xs text-navy font-medium">
                <div className="flex items-center gap-1 text-champagne-dark font-bold">
                  <span>★★★★★</span>
                  <span className="text-navy ml-1">5.0 / 5.0</span>
                </div>
                <span className="text-beigeGrey">•</span>
                <span className="text-slateGrey">126 Verified Google Reviews</span>
                <span className="text-beigeGrey hidden sm:inline">•</span>
                <span className="text-slateGrey hidden sm:inline">HRBR Layout, Kalyan Nagar</span>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <WhatsAppButton
                  message="Hello Prakash Interior Decors, I am interested in your interior design services. I would like to discuss my home interior requirements."
                  label="Discuss Your Home on WhatsApp"
                  variant="primary"
                />
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center font-medium px-6 py-3.5 border border-navy/25 hover:border-navy text-navy text-sm tracking-wide rounded-sm hover:bg-navy/5 transition-all group"
                >
                  <span>Explore Our Designs</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Asymmetric Image Composition */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative">
                {/* Main Hero Architectural Photo */}
                <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl border border-beigeGrey relative bg-navy-midnight">
                  <img
                    src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80"
                    alt="Prakash Interior Decors - Serene modern residential bedroom interior"
                    className="w-full h-full object-cover img-editorial"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent pointer-events-none" />

                  {/* Overlaid Editorial Stamp */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-sm border border-beigeGrey/60 shadow-lg">
                    <p className="text-[10px] uppercase tracking-widest text-mutedBlue font-bold">
                      Design Inspiration
                    </p>
                    <p className="font-serif text-base text-navy font-semibold mt-0.5">
                      Warm Tonal Bedroom & Custom Wardrobe
                    </p>
                    <p className="text-xs text-slateGrey mt-1">
                      Balanced spatial planning tailored to modern apartment footprints.
                    </p>
                  </div>
                </div>

                {/* Secondary Floating Accent Card */}
                <div className="hidden sm:block absolute -bottom-6 -left-8 bg-navy text-ivory p-4 rounded-sm shadow-xl max-w-[220px] border border-champagne/30">
                  <p className="text-champagne text-xs font-semibold uppercase tracking-wider">
                    Bengaluru Focus
                  </p>
                  <p className="text-xs text-ivory/80 mt-1 leading-snug">
                    Specialized in HRBR Layout, Kalyan Nagar & surrounding neighborhoods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — INTRODUCTION */}
      <section className="py-20 lg:py-28 bg-cream/40 border-b border-beigeGrey/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-mutedBlue block">
                About the Studio
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy font-normal leading-tight">
                Budget-Friendly Living, <br />
                <span className="italic font-light text-mutedBlue">Uncompromised Finish.</span>
              </h2>
              <div className="w-12 h-0.5 bg-champagne" />
            </div>

            <div className="lg:col-span-7 space-y-6 text-slateGrey text-base leading-relaxed">
              <p className="text-lg text-navy font-medium leading-relaxed">
                Prakash Interior Decors is a Bengaluru-based residential interior design firm based in HRBR Layout 2nd Block, Kalyan Nagar. We specialize in bedroom interiors, customized wardrobes, and modular kitchens.
              </p>
              <p>
                We believe exceptional living spaces do not require extravagant spending. By focusing on practical design considerations, thoughtful space optimization, eye-catching aesthetics, and precision carpentry installation, we craft residential interiors that are durable, visually refined, and suited to the way your family lives.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-beigeGrey/60">
                <div>
                  <p className="font-serif text-2xl text-navy font-bold">5.0 ★</p>
                  <p className="text-xs uppercase tracking-wider text-slateGrey mt-1 font-semibold">Google Rating</p>
                  <p className="text-xs text-slateGrey/80 mt-0.5">126 verified reviews</p>
                </div>
                <div>
                  <p className="font-serif text-2xl text-navy font-bold">Custom</p>
                  <p className="text-xs uppercase tracking-wider text-slateGrey mt-1 font-semibold">Wardrobe Carpentry</p>
                  <p className="text-xs text-slateGrey/80 mt-0.5">Floor-to-ceiling fitment</p>
                </div>
                <div>
                  <p className="font-serif text-2xl text-navy font-bold">Direct</p>
                  <p className="text-xs uppercase tracking-wider text-slateGrey mt-1 font-semibold">WhatsApp Quotes</p>
                  <p className="text-xs text-slateGrey/80 mt-0.5">Prompt consultation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — VERIFIED SERVICES (Distinctive Editorial Layouts) */}
      <section className="py-20 lg:py-28 bg-ivory border-b border-beigeGrey/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Core Specializations"
            title="Tailored Residential Craftsmanship"
            description="Explore our three specialized interior disciplines, each planned with precision dimensions, moisture-resistant materials, and modern Indian residential living in mind."
            align="asymmetric"
          />

          <div className="space-y-20 lg:space-y-28">
            {/* Service 1: Bedroom Interiors (Left-heavy image) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 relative">
                <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-lg border border-beigeGrey bg-navy-midnight">
                  <img
                    src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80"
                    alt="Bedroom interior design inspiration"
                    className="w-full h-full object-cover img-editorial"
                    loading="lazy"
                  />
                </div>
                <span className="absolute bottom-4 left-4 text-[10px] uppercase tracking-wider bg-navy/80 text-ivory px-2.5 py-1 rounded backdrop-blur-sm">
                  Design Inspiration
                </span>
              </div>
              <div className="lg:col-span-6 lg:pl-6 space-y-5">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-mutedBlue">
                  01 / Bedroom Specialization
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-navy font-medium leading-tight">
                  Bedroom Interiors & Custom Bedroom Design
                </h3>
                <p className="text-slateGrey text-sm sm:text-base leading-relaxed">
                  Transforming bedrooms into serene retreats. From acoustic fluted wall panels and upholstered headboards to bedside wire routing and natural lighting harmony.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-navy/90 pt-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-champagne-dark shrink-0" />
                    <span>Space-conscious bedroom floorplans and circulation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-champagne-dark shrink-0" />
                    <span>Integrated bedside ledges, dressing mirrors and study tables</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-champagne-dark shrink-0" />
                    <span>Gentle 3000K warm white ambient cove and reading lighting</span>
                  </li>
                </ul>
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    to="/bedroom-interiors"
                    className="inline-flex items-center gap-1.5 text-navy font-semibold text-xs uppercase tracking-wider hover:text-mutedBlue transition-colors group"
                  >
                    <span>Explore Bedroom Designs</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                  <span className="text-beigeGrey">•</span>
                  <WhatsAppButton
                    message="Hello, I am interested in bedroom interior design. I would like to discuss my requirements."
                    label="Inquire on WhatsApp"
                    variant="compact"
                  />
                </div>
              </div>
            </div>

            {/* Service 2: Modular Kitchens (Right-heavy image, reversed) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 lg:order-2 relative">
                <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-lg border border-beigeGrey bg-navy-midnight">
                  <img
                    src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80"
                    alt="Modular kitchen design inspiration"
                    className="w-full h-full object-cover img-editorial"
                    loading="lazy"
                  />
                </div>
                <span className="absolute bottom-4 left-4 text-[10px] uppercase tracking-wider bg-navy/80 text-ivory px-2.5 py-1 rounded backdrop-blur-sm">
                  Design Inspiration
                </span>
              </div>
              <div className="lg:col-span-6 lg:order-1 lg:pr-6 space-y-5">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-mutedBlue">
                  02 / Culinary Ergonomics
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-navy font-medium leading-tight">
                  Modular Kitchen Interiors & Layouts
                </h3>
                <p className="text-slateGrey text-sm sm:text-base leading-relaxed">
                  Balancing high-traffic daily cooking with seamless modern aesthetics. Engineered with water-resistant BWP marine ply, durable quartz surfaces, and intelligent tandem drawers.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-navy/90 pt-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-champagne-dark shrink-0" />
                    <span>L-Shaped, Parallel Galley, and U-Shaped modular layouts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-champagne-dark shrink-0" />
                    <span>Heavy-duty soft-close drawers for Indian cookware (45kg rated)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-champagne-dark shrink-0" />
                    <span>Anti-fingerprint matte acrylics and moisture-sealed edge banding</span>
                  </li>
                </ul>
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    to="/modular-kitchens"
                    className="inline-flex items-center gap-1.5 text-navy font-semibold text-xs uppercase tracking-wider hover:text-mutedBlue transition-colors group"
                  >
                    <span>Explore Kitchen Layouts</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                  <span className="text-beigeGrey">•</span>
                  <WhatsAppButton
                    message="Hello, I am interested in modular kitchen interiors. I would like to discuss my kitchen design requirements."
                    label="Plan on WhatsApp"
                    variant="compact"
                  />
                </div>
              </div>
            </div>

            {/* Service 3: Customised Wardrobes (Left-heavy image) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 relative">
                <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-lg border border-beigeGrey bg-navy-midnight">
                  <img
                    src="https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=80"
                    alt="Custom wardrobe design inspiration"
                    className="w-full h-full object-cover img-editorial"
                    loading="lazy"
                  />
                </div>
                <span className="absolute bottom-4 left-4 text-[10px] uppercase tracking-wider bg-navy/80 text-ivory px-2.5 py-1 rounded backdrop-blur-sm">
                  Design Inspiration
                </span>
              </div>
              <div className="lg:col-span-6 lg:pl-6 space-y-5">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-mutedBlue">
                  03 / Precision Storage
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-navy font-medium leading-tight">
                  Customised Wardrobes & Wardrobe Carpentry
                </h3>
                <p className="text-slateGrey text-sm sm:text-base leading-relaxed">
                  Precision-built vertical storage that maximizes every inch from floor to ceiling. Configured with dual hanging rails, integrated saree pull-outs, and contemporary finishes.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-navy/90 pt-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-champagne-dark shrink-0" />
                    <span>Floor-to-ceiling sliding wardrobes with smooth damped tracks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-champagne-dark shrink-0" />
                    <span>Hinged designer wardrobes with 165° aperture hinges</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-champagne-dark shrink-0" />
                    <span>Linen textures, tinted fluted glass, and velvet accessory drawers</span>
                  </li>
                </ul>
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    to="/wardrobe-designs"
                    className="inline-flex items-center gap-1.5 text-navy font-semibold text-xs uppercase tracking-wider hover:text-mutedBlue transition-colors group"
                  >
                    <span>Explore Wardrobes</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                  <span className="text-beigeGrey">•</span>
                  <WhatsAppButton
                    message="Hello, I am interested in customised wardrobe design. I would like to discuss my requirements."
                    label="Discuss on WhatsApp"
                    variant="compact"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — DESIGN PHILOSOPHY */}
      <section className="py-20 lg:py-28 bg-navy text-ivory border-b border-navy-midnight relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-champagne block mb-3">
              Design Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.18] text-ivory">
              Beautiful Design. Thoughtful Living.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-ivory/80 leading-relaxed font-light">
              We approach residential interiors with an architectural mindset: every elevation must harmonize aesthetic serenity with real everyday utility. In a bustling city like Bengaluru, your home is a sanctuary where calm proportions, warm tactile textures, and effortless storage create enduring daily peace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded bg-champagne/10 border border-champagne/30 flex items-center justify-center text-champagne">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-ivory font-medium">Aesthetic Harmony</h3>
              <p className="text-xs sm:text-sm text-ivory/70 leading-relaxed">
                Warm ivory tones, soft wood grains, and tasteful accent finishes that resist passing trends and feel timeless year after year.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded bg-champagne/10 border border-champagne/30 flex items-center justify-center text-champagne">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-ivory font-medium">Practical Functionality</h3>
              <p className="text-xs sm:text-sm text-ivory/70 leading-relaxed">
                Smart spatial planning that accounts for room movement, wire routing, easy dust maintenance, and realistic storage volumes.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded bg-champagne/10 border border-champagne/30 flex items-center justify-center text-champagne">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-ivory font-medium">Honest Value</h3>
              <p className="text-xs sm:text-sm text-ivory/70 leading-relaxed">
                Delivering high-end interior studio aesthetics at accessible, budget-conscious price points without compromising core structural materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — FEATURED DESIGN INSPIRATION */}
      <section className="py-20 lg:py-28 bg-ivory border-b border-beigeGrey/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-mutedBlue block mb-2">
                Curated Aesthetics
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy font-normal">
                Design Inspiration Gallery
              </h2>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-navy hover:text-mutedBlue transition-colors group"
              >
                <span>View Complete Gallery</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredInspirations.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-sm overflow-hidden border border-beigeGrey shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="aspect-[4/3] bg-navy-midnight overflow-hidden relative">
                  <img
                    src={item.imageUrl}
                    alt={`${item.title} inspiration`}
                    className="w-full h-full object-cover img-editorial group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <span className="absolute top-2.5 left-2.5 text-[9px] uppercase tracking-wider bg-navy/80 text-ivory px-2 py-0.5 rounded backdrop-blur-sm">
                    {item.categoryLabel}
                  </span>
                  <span className="absolute bottom-2.5 right-2.5 text-[9px] uppercase tracking-wider bg-black/60 text-champagne px-2 py-0.5 rounded backdrop-blur-sm">
                    Inspiration
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-navy group-hover:text-mutedBlue transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-slateGrey line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-beigeGrey/40 flex items-center justify-between">
                    <Link
                      to="/projects"
                      className="text-[11px] font-semibold text-mutedBlue uppercase tracking-wider"
                    >
                      View Specs
                    </Link>
                    <a
                      href={getWhatsAppLink(`Hello Prakash Interior Decors, I am interested in discussing the "${item.title}" design style.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slateGrey hover:text-navy p-1"
                      aria-label="Inquire about this style on WhatsApp"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-champagne" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-slateGrey text-center mt-8">
            * Photography presented for design inspiration. Every residential interior is customized to homeowner dimensions and finish preferences.
          </p>
        </div>
      </section>

      {/* SECTION 6 — CUSTOMER TRUST (5.0 Google Rating & 126 Reviews) */}
      <section className="py-20 lg:py-28 bg-cream/50 border-b border-beigeGrey/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-mutedBlue block">
                Verified Reputation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy font-normal leading-tight">
                Trust Built on Consistent Execution.
              </h2>
              <div className="p-6 bg-white rounded-md border border-champagne/40 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-champagne-dark font-bold text-2xl">
                  <span>★ 5.0 / 5.0</span>
                </div>
                <p className="text-sm font-semibold text-navy">
                  126 Verified Google Reviews
                </p>
                <p className="text-xs text-slateGrey leading-relaxed">
                  Homeowners across Bengaluru consistently share positive feedback on our design recommendations, material selections, and carpentry fitment.
                </p>
                <div className="pt-2">
                  <Link
                    to="/reviews"
                    className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-navy hover:text-mutedBlue"
                  >
                    <span>Read Verified Feedback Themes</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {VERIFIED_FEEDBACK_DATA.feedbackThemes.slice(0, 4).map((theme) => (
                <div key={theme.id} className="p-5 bg-white rounded border border-beigeGrey shadow-sm space-y-2">
                  <span className="text-[10px] uppercase tracking-wider text-mutedBlue font-bold block">
                    {theme.category}
                  </span>
                  <h3 className="font-serif text-lg font-medium text-navy">
                    {theme.themeTitle}
                  </h3>
                  <p className="text-xs text-slateGrey leading-relaxed">
                    {theme.highlightSummary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — FINAL CONVERSION CTA */}
      <section className="py-20 lg:py-28 bg-navy text-ivory text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="text-xs uppercase tracking-[0.22em] font-semibold text-champagne block">
            Start Your Home Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-normal text-ivory leading-tight">
            Let's Create a Space You'll Love Coming Home To.
          </h2>
          <p className="text-base sm:text-lg text-ivory/80 max-w-2xl mx-auto leading-relaxed font-light">
            Whether you are planning a modern bedroom sanctuary, custom floor-to-ceiling wardrobes, or an ergonomic modular kitchen, we are here to assist with friendly advice and transparent pricing.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <WhatsAppButton
              message="Hello Prakash Interior Decors, I would like to discuss my home interior requirements."
              label="Start a WhatsApp Conversation"
              variant="champagne"
            />
            <PhoneButton
              variant="outline"
              className="border-white/30 text-ivory hover:bg-white/10 hover:border-white"
              label="Call +91 95913 44715"
            />
          </div>

          <p className="text-xs text-ivory/60 pt-4">
            Studio: 609, 3rd C Cross Road, HRBR Layout 2nd Block, Kalyan Nagar, Bengaluru
          </p>
        </div>
      </section>
    </>
  );
};

