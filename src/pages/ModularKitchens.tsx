import React from 'react';
import { PageHero } from '../components/PageHero';
import { SeoHead } from '../components/SeoHead';
import { SectionHeading } from '../components/SectionHeading';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { PhoneButton } from '../components/PhoneButton';
import { ImageGallery } from '../components/ImageGallery';
import { Check, Flame, Droplets, Utensils, Grid, ShieldCheck } from 'lucide-react';
import { SERVICES_DATA } from '../data/services';

export const ModularKitchens: React.FC = () => {
  const service = SERVICES_DATA['modular-kitchens'];

  const layouts = [
    {
      title: "L-Shaped Modular Kitchen",
      bestFor: "Open-plan living & corner spaces",
      desc: "An adaptable layout utilizing two adjoining perpendicular walls, offering seamless workflow and easy interaction with dining areas."
    },
    {
      title: "Parallel / Galley Kitchen",
      bestFor: "High-efficiency & apartment layouts",
      desc: "Features two parallel counters dividing wet preparation (sink) and cooking (hob) zones. Ideal for Bengaluru apartments."
    },
    {
      title: "U-Shaped Kitchen Layout",
      bestFor: "Spacious cooking & maximal storage",
      desc: "Surrounds the chef with continuous perimeter cabinetry, providing expansive countertop surface and tall pantry unit opportunities."
    },
    {
      title: "Island / Breakfast Counter",
      bestFor: "Social homes & entertainer kitchens",
      desc: "Adds a standalone central or peninsula counter for informal family dining, kids' homework, and culinary prep."
    }
  ];

  return (
    <>
      <SeoHead
        title="Modular Kitchens Bengaluru | Modular Kitchen Design | Prakash Interior Decors"
        description="Plan your modular kitchen in Bengaluru with Prakash Interior Decors. Ergonomic L-shaped, parallel, and U-shaped kitchens built with water-resistant BWP marine ply and smooth soft-close storage."
        canonicalPath="/modular-kitchens"
      />

      <PageHero
        breadcrumbs={[
          { label: 'Services', path: '/modular-kitchens' },
          { label: 'Modular Kitchens' }
        ]}
        tag="Verified Interior Specialization"
        headline={service.heroHeadline}
        description={service.heroDescription}
        imageUrl={service.primaryImage}
        imageAlt="Modern modular kitchen interior design inspiration"
        whatsAppMessage={service.whatsAppMessage}
        whatsAppLabel="Plan Your Kitchen on WhatsApp"
      />

      {/* Editorial Quote Banner */}
      <section className="py-12 bg-cream/40 border-b border-beigeGrey/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-serif italic text-xl sm:text-2xl text-navy/90 leading-relaxed">
            "{service.editorialQuote}"
          </p>
        </div>
      </section>

      {/* Ergonomics & Work Triangle Section */}
      <section className="py-20 lg:py-28 bg-ivory border-b border-beigeGrey/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Culinary Ergonomics"
            title="Engineered for the Modern Indian Kitchen"
            description="A functional kitchen requires careful planning around steam, spices, heavy cookware, and natural movement patterns."
            align="asymmetric"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.features.map((feat, idx) => (
              <div key={idx} className="p-6 bg-white rounded-sm border border-beigeGrey shadow-sm space-y-3">
                <span className="text-xs uppercase tracking-wider font-bold text-champagne-dark block">
                  Pillar 0{idx + 1}
                </span>
                <h3 className="font-serif text-xl font-medium text-navy">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-slateGrey leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Kitchen Layout Considerations */}
          <div className="mt-20 pt-16 border-t border-beigeGrey/60">
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-navy text-center mb-10">
              Kitchen Layouts Tailored to Your Floor Plan
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {layouts.map((layout, i) => (
                <div key={i} className="p-5 bg-cream/30 rounded border border-beigeGrey/70 space-y-2">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-mutedBlue">
                    {layout.bestFor}
                  </span>
                  <h4 className="font-serif text-lg font-semibold text-navy">
                    {layout.title}
                  </h4>
                  <p className="text-xs text-slateGrey leading-relaxed">
                    {layout.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Inspiration Gallery for Kitchens */}
      <section className="py-20 lg:py-28 bg-cream/30 border-b border-beigeGrey/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Visual Inspiration"
            title="Modular Kitchen Gallery"
            description="Explore contemporary kitchen compositions featuring anti-fingerprint acrylic shutters, natural wood accents, and quartz countertops."
            align="center"
          />

          <ImageGallery initialCategory="kitchen" showFilters={false} limit={4} />

          <p className="text-xs text-slateGrey text-center mt-8">
            * Design inspiration imagery shown above. Layout specifications, drawer sizes, and shutter laminates are crafted to order.
          </p>
        </div>
      </section>

      {/* Storage Planning & Materials Deep Dive */}
      <section className="py-20 lg:py-28 bg-ivory border-b border-beigeGrey/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-mutedBlue block">
                Intelligent Storage
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy font-normal leading-tight">
                Every Utensil and Spice in Perfect Reach.
              </h2>
              <p className="text-sm text-slateGrey leading-relaxed">
                Indian cooking involves distinct utensils, tall oil dispensers, dry grain storage, and intense spice sets. We design cabinet interiors with purpose-built dividers, deep tandem drawers, and pull-out pantry modules.
              </p>

              <div className="pt-2">
                <WhatsAppButton
                  message={service.whatsAppMessage}
                  label="Plan Your Kitchen on WhatsApp"
                  variant="primary"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {service.processSteps.map((step) => (
                <div key={step.number} className="p-5 bg-white rounded border border-beigeGrey/80 shadow-sm flex items-start gap-4">
                  <span className="font-serif text-2xl font-bold text-champagne-dark shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-navy">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slateGrey mt-1 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Conversion CTA */}
      <section className="py-16 bg-navy text-ivory text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl text-ivory font-normal">
            Ready to Plan Your Modular Kitchen?
          </h2>
          <p className="text-sm sm:text-base text-ivory/80 leading-relaxed font-light">
            Send us your kitchen dimensions or builder blueprint on WhatsApp for layout advice and a transparent quote.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <WhatsAppButton
              message={service.whatsAppMessage}
              label="Plan on WhatsApp"
              variant="champagne"
            />
            <PhoneButton
              variant="outline"
              className="border-white/30 text-ivory hover:bg-white/10"
              label="Call Us"
            />
          </div>
        </div>
      </section>
    </>
  );
};

