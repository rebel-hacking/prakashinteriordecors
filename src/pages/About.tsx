import React from 'react';
import { PageHero } from '../components/PageHero';
import { SeoHead } from '../components/SeoHead';
import { SectionHeading } from '../components/SectionHeading';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { PhoneButton } from '../components/PhoneButton';
import { Compass, Sparkles, Sliders, CheckCircle2, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const About: React.FC = () => {
  return (
    <>
      <SeoHead
        title="About Prakash Interior Decors | Residential Interior Studio Bengaluru"
        description="Learn about Prakash Interior Decors, a dedicated residential interior decorator in HRBR Layout, Kalyan Nagar, Bengaluru, offering budget-conscious, high-quality bedroom, wardrobe, and kitchen interiors."
        canonicalPath="/about"
      />

      <PageHero
        breadcrumbs={[{ label: 'About' }]}
        tag="Design Philosophy & Studio Identity"
        headline="Thoughtful Interiors for the Way You Live."
        description="Prakash Interior Decors provides residential furnishing services in Bengaluru, specializing in bedrooms, customized wardrobes, and modular kitchens that unite aesthetic charm with practical everyday comfort."
        imageUrl="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Modern residential architectural interior"
        whatsAppMessage="Hello Prakash Interior Decors, I am reading about your studio and would like to discuss interior decoration for my residence."
        whatsAppLabel="Discuss Your Space on WhatsApp"
      />

      {/* Editorial Storytelling Section: Approach & Residential Focus */}
      <section className="py-20 lg:py-28 bg-ivory border-b border-beigeGrey/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-mutedBlue block">
                Residential Specialization
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy font-normal leading-tight">
                Crafting Spaces with Intent, Balance & Care.
              </h2>
              <div className="w-12 h-0.5 bg-champagne" />
              <p className="text-sm text-slateGrey leading-relaxed">
                A home should reflect the rhythms of the people who occupy it. We approach each apartment and independent residence with a commitment to balanced proportions, sensible storage, and tactile warmth.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-6 text-slateGrey text-sm sm:text-base leading-relaxed">
              <div className="p-6 bg-cream/50 rounded-sm border border-beigeGrey/60 space-y-3">
                <h3 className="font-serif text-xl text-navy font-semibold">
                  A Balanced Vision for Modern Urban Living
                </h3>
                <p>
                  In Bengaluru’s fast-evolving urban landscape, homeowners need interiors that offer visual tranquility without sacrificing daily functional demands. Whether planning a compact 2BHK master bedroom or a spacious open-concept kitchen, we prioritize layouts that feel spacious, organized, and welcoming.
                </p>
              </div>

              <div className="p-6 bg-white rounded-sm border border-beigeGrey/60 space-y-3">
                <h3 className="font-serif text-xl text-navy font-semibold">
                  Helpful Material & Laminate Guidance
                </h3>
                <p>
                  One of the most praised aspects of our service is our proactive assistance with finishes, color palettes, and laminates. Choosing the right textures—whether matte anti-fingerprint acrylics, warm oak woodgrains, or linen-embossed laminates—transforms a space from ordinary to refined while maintaining durability against daily wear.
                </p>
              </div>

              <div className="p-6 bg-cream/50 rounded-sm border border-beigeGrey/60 space-y-3">
                <h3 className="font-serif text-xl text-navy font-semibold">
                  Budget-Friendly & Value-Oriented
                </h3>
                <p>
                  High design does not require inflated costs. We specialize in budget-friendly residential furnishing, matching premium hardware, durable plywood grades, and refined craftsmanship with transparent, honest pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Studio Pillars */}
      <section className="py-20 lg:py-28 bg-cream/40 border-b border-beigeGrey/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Our Approach"
            title="Four Tenets of Our Design Process"
            description="How we translate homeowner ideas into practical, eye-catching residential interiors."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-sm border border-beigeGrey shadow-sm space-y-3">
              <div className="w-10 h-10 rounded bg-navy text-champagne flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-serif text-xl text-navy font-medium">Spatial Listening</h3>
              <p className="text-xs sm:text-sm text-slateGrey leading-relaxed">
                Understanding your wardrobe storage volumes, kitchen cooking habits, and natural light conditions before suggesting layouts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm border border-beigeGrey shadow-sm space-y-3">
              <div className="w-10 h-10 rounded bg-navy text-champagne flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-serif text-xl text-navy font-medium">Laminate Curation</h3>
              <p className="text-xs sm:text-sm text-slateGrey leading-relaxed">
                Helping you select complementary tones, textures, edge-banding profiles, and hardware finishes that age gracefully.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm border border-beigeGrey shadow-sm space-y-3">
              <div className="w-10 h-10 rounded bg-navy text-champagne flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-serif text-xl text-navy font-medium">Precision Fitment</h3>
              <p className="text-xs sm:text-sm text-slateGrey leading-relaxed">
                Careful attention to level alignment, soft-close dampers, door gaps, and concealed electrical wiring across every installation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm border border-beigeGrey shadow-sm space-y-3">
              <div className="w-10 h-10 rounded bg-navy text-champagne flex items-center justify-center font-bold text-sm">
                04
              </div>
              <h3 className="font-serif text-xl text-navy font-medium">Timely Handover</h3>
              <p className="text-xs sm:text-sm text-slateGrey leading-relaxed">
                Sticking to promised timelines so you can occupy or renovate your home with peace of mind and minimal disruption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Bengaluru Commitment & CTA */}
      <section className="py-20 lg:py-24 bg-navy text-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-champagne font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            <span>Kalyan Nagar • HRBR Layout • Bengaluru</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-ivory">
            Ready to Talk About Your Home?
          </h2>
          <p className="text-base sm:text-lg text-ivory/80 max-w-xl mx-auto leading-relaxed font-light">
            We are accessible via WhatsApp and telephone to review floor plans, offer finish advice, and provide transparent estimates.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <WhatsAppButton
              message="Hello Prakash Interior Decors, I would like to consult with you about residential interior design for my home."
              label="Start WhatsApp Consultation"
              variant="champagne"
            />
            <PhoneButton
              variant="outline"
              className="border-white/30 text-ivory hover:bg-white/10"
              label="Call +91 95913 44715"
            />
          </div>
        </div>
      </section>
    </>
  );
};

