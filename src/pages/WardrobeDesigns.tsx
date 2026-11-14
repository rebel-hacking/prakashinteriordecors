import React from 'react';
import { PageHero } from '../components/PageHero';
import { SeoHead } from '../components/SeoHead';
import { SectionHeading } from '../components/SectionHeading';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { PhoneButton } from '../components/PhoneButton';
import { ImageGallery } from '../components/ImageGallery';
import { Check, Maximize, Lock, Sparkles, SlidersHorizontal } from 'lucide-react';
import { SERVICES_DATA } from '../data/services';

export const WardrobeDesigns: React.FC = () => {
  const service = SERVICES_DATA['wardrobe-designs'];

  const wardrobeTypes = [
    {
      title: "Floor-to-Ceiling Sliding Wardrobes",
      bestFor: "Space-constrained bedrooms & sleek modern appeal",
      desc: "Top-hung sliding mechanisms require zero swing clearance, allowing effortless passage even when placed near beds or nightstands. Full-height loft integration utilizes vertical wall space completely."
    },
    {
      title: "Contemporary Hinged Door Wardrobes",
      bestFor: "Full aperture visibility & classic accessibility",
      desc: "Featuring 165-degree wide-opening soft-close hinges that display your entire wardrobe at a glance. Can be fitted with interior door organizers and integrated full-length grooming mirrors."
    },
    {
      title: "Walk-in Dressing Suites & Niches",
      bestFor: "Master bedroom dressing lobbies",
      desc: "Dedicated modular dressing zones tailored with handbag cubbies, tiered shoe racks, dual-height garment rails, and warm ambient backlighting."
    },
    {
      title: "Integrated Study & Dresser Wardrobes",
      bestFor: "Multi-functional bedroom wall units",
      desc: "Seamless cabinetry that merges wardrobe storage, a concealed or exposed dressing mirror, and a cantilevered study/laptop desk in one unified finish."
    }
  ];

  return (
    <>
      <SeoHead
        title="Customised Wardrobes Bengaluru | Wardrobe Carpentry | Prakash Interior Decors"
        description="Customised and designer wardrobe carpentry in Bengaluru by Prakash Interior Decors. Floor-to-ceiling sliding wardrobes, hinged wardrobes, and tailored storage organization."
        canonicalPath="/wardrobe-designs"
      />

      <PageHero
        breadcrumbs={[
          { label: 'Services', path: '/wardrobe-designs' },
          { label: 'Wardrobe Designs' }
        ]}
        tag="Verified Interior Specialization"
        headline={service.heroHeadline}
        description={service.heroDescription}
        imageUrl={service.primaryImage}
        imageAlt="Custom wardrobe design inspiration"
        whatsAppMessage={service.whatsAppMessage}
        whatsAppLabel="Discuss Your Wardrobe Requirements"
      />

      {/* Editorial Quote Banner */}
      <section className="py-12 bg-cream/40 border-b border-beigeGrey/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-serif italic text-xl sm:text-2xl text-navy/90 leading-relaxed">
            "{service.editorialQuote}"
          </p>
        </div>
      </section>

      {/* Wardrobe Styles & Configurations */}
      <section className="py-20 lg:py-28 bg-ivory border-b border-beigeGrey/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Wardrobe Configurations"
            title="Tailored to Your Bedroom Architecture"
            description="Every bedroom wall has unique breadth and ceiling heights. Our custom carpentry ensures zero dead gaps between your wardrobe and the ceiling."
            align="asymmetric"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {wardrobeTypes.map((type, i) => (
              <div key={i} className="p-6 bg-white rounded-sm border border-beigeGrey shadow-sm space-y-3">
                <span className="text-xs uppercase tracking-wider font-bold text-mutedBlue block">
                  {type.bestFor}
                </span>
                <h3 className="font-serif text-2xl font-medium text-navy">
                  {type.title}
                </h3>
                <p className="text-sm text-slateGrey leading-relaxed">
                  {type.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Key Engineering Features */}
          <div className="mt-16 pt-16 border-t border-beigeGrey/60 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feat, idx) => (
              <div key={idx} className="p-5 bg-cream/30 rounded border border-beigeGrey/60 space-y-2">
                <span className="text-xs font-bold text-champagne-dark">
                  0{idx + 1}
                </span>
                <h4 className="font-serif text-lg font-semibold text-navy">
                  {feat.title}
                </h4>
                <p className="text-xs text-slateGrey leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Inspiration Gallery for Wardrobes */}
      <section className="py-20 lg:py-28 bg-cream/30 border-b border-beigeGrey/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Visual Inspiration"
            title="Wardrobe Design Gallery"
            description="Explore sliding glass shutters, textured fabric laminates, and bespoke internal compartmentalization concepts."
            align="center"
          />

          <ImageGallery initialCategory="wardrobe" showFilters={false} limit={4} />

          <p className="text-xs text-slateGrey text-center mt-8">
            * Design inspiration imagery shown above. Internal partitions, drawer counts, and external shutter finishes are customized to homeowner needs.
          </p>
        </div>
      </section>

      {/* Custom Carpentry Process */}
      <section className="py-20 lg:py-28 bg-ivory border-b border-beigeGrey/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-mutedBlue block">
                Wardrobe Carpentry
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy font-normal leading-tight">
                Designed Around What You Wear.
              </h2>
              <p className="text-sm text-slateGrey leading-relaxed">
                Whether you need dedicated saree hanging rails that prevent crease marks, velvet-lined watch and jewelry trays, or lockable inner compartments, our carpentry accommodates your apparel collection with precision.
              </p>

              <div className="pt-2">
                <WhatsAppButton
                  message={service.whatsAppMessage}
                  label="Discuss Your Wardrobe Requirements"
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
            Ready to Build Your Custom Wardrobe?
          </h2>
          <p className="text-sm sm:text-base text-ivory/80 leading-relaxed font-light">
            Share your wall width and ceiling height on WhatsApp for instant guidance and an estimate.
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

