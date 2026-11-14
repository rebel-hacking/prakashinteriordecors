import React from 'react';
import { PageHero } from '../components/PageHero';
import { SeoHead } from '../components/SeoHead';
import { SectionHeading } from '../components/SectionHeading';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { PhoneButton } from '../components/PhoneButton';
import { ImageGallery } from '../components/ImageGallery';
import { Check, Moon, Layers, Sparkles, SlidersHorizontal, ShieldCheck } from 'lucide-react';
import { SERVICES_DATA } from '../data/services';

export const BedroomInteriors: React.FC = () => {
  const service = SERVICES_DATA['bedroom-interiors'];

  return (
    <>
      <SeoHead
        title="Bedroom Interiors Bengaluru | Custom Bedroom Design | Prakash Interior Decors"
        description="Transform your bedroom with Prakash Interior Decors in Bengaluru. Specialized in space-conscious bedroom design, custom headboards, fluted wall accents, and seamless wardrobe integration."
        canonicalPath="/bedroom-interiors"
      />

      <PageHero
        breadcrumbs={[
          { label: 'Services', path: '/bedroom-interiors' },
          { label: 'Bedroom Interiors' }
        ]}
        tag="Verified Interior Specialization"
        headline={service.heroHeadline}
        description={service.heroDescription}
        imageUrl={service.primaryImage}
        imageAlt="Modern bedroom interior design inspiration"
        whatsAppMessage={service.whatsAppMessage}
        whatsAppLabel="Discuss Your Bedroom Design on WhatsApp"
      />

      {/* Editorial Quote Banner */}
      <section className="py-12 bg-cream/40 border-b border-beigeGrey/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-serif italic text-xl sm:text-2xl text-navy/90 leading-relaxed">
            "{service.editorialQuote}"
          </p>
        </div>
      </section>

      {/* Bedroom Design Concepts & Practical Considerations */}
      <section className="py-20 lg:py-28 bg-ivory border-b border-beigeGrey/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Design Concepts"
            title="A Balanced Approach to Bedroom Interiors"
            description="Modern apartment bedrooms require a sensitive touch: maximizing storage efficiency while keeping the atmosphere calm, uncluttered, and restful."
            align="asymmetric"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.features.map((feat, idx) => (
              <div key={idx} className="p-6 bg-white rounded-sm border border-beigeGrey shadow-sm space-y-3">
                <span className="text-xs uppercase tracking-wider font-bold text-champagne-dark block">
                  Concept 0{idx + 1}
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

          {/* Deep-dive spatial considerations */}
          <div className="mt-16 pt-16 border-t border-beigeGrey/60 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {service.designConsiderations.map((item, idx) => (
              <div key={idx} className="p-6 bg-cream/30 rounded-sm border border-beigeGrey/60 space-y-2">
                <h4 className="font-serif text-lg font-semibold text-navy">
                  {item.heading}
                </h4>
                <p className="text-xs sm:text-sm text-slateGrey leading-relaxed">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Inspiration Gallery for Bedrooms */}
      <section className="py-20 lg:py-28 bg-cream/30 border-b border-beigeGrey/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Visual Inspiration"
            title="Bedroom Design Gallery"
            description="Browse curated bedroom concepts showcasing fluted headboard paneling, floating nightstands, and integrated wardrobe solutions."
            align="center"
          />

          <ImageGallery initialCategory="bedroom" showFilters={false} limit={4} />

          <p className="text-xs text-slateGrey text-center mt-8">
            * Design inspiration imagery shown above. Bedroom dimensions, wardrobe configurations, and laminate textures are personalized for every client.
          </p>
        </div>
      </section>

      {/* How to Consult & Plan Your Bedroom */}
      <section className="py-20 lg:py-28 bg-ivory border-b border-beigeGrey/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-mutedBlue block">
                The Consultation Journey
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy font-normal leading-tight">
                How We Collaborate on Your Bedroom.
              </h2>
              <p className="text-sm text-slateGrey leading-relaxed">
                We make the design process straightforward. Simply share your room dimensions or floor plan over WhatsApp to begin discussing layouts, laminate palettes, and wardrobe storage options.
              </p>

              <div className="pt-2">
                <WhatsAppButton
                  message={service.whatsAppMessage}
                  label="Discuss Your Bedroom Design on WhatsApp"
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

      {/* Bottom CTA */}
      <section className="py-16 bg-navy text-ivory text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl text-ivory font-normal">
            Ready to Design Your Bedroom Sanctuary?
          </h2>
          <p className="text-sm sm:text-base text-ivory/80 leading-relaxed font-light">
            Contact us today for friendly advice on laminates, bed back styling, and custom wardrobe carpentry in Bengaluru.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <WhatsAppButton
              message={service.whatsAppMessage}
              label="Discuss on WhatsApp"
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

