import React from 'react';
import { PageHero } from '../components/PageHero';
import { SeoHead } from '../components/SeoHead';
import { ImageGallery } from '../components/ImageGallery';
import { SectionHeading } from '../components/SectionHeading';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { PhoneButton } from '../components/PhoneButton';
import { Info, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const Projects: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Design Inspiration Gallery | Bedrooms, Kitchens, Wardrobes | Prakash Interior Decors"
        description="Explore curated interior design inspiration for modern residential bedrooms, modular kitchens, and custom wardrobes in Bengaluru by Prakash Interior Decors."
        canonicalPath="/projects"
      />

      <PageHero
        breadcrumbs={[{ label: 'Design Gallery' }]}
        tag="Curated Portfolio & Inspiration"
        headline="Architectural Vision. Real Living."
        description="Browse our curated collection of contemporary residential interior inspiration. Filter through bedroom sanctuaries, ergonomic modular kitchens, and precision floor-to-ceiling wardrobes."
        imageUrl="https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Interior design inspiration gallery"
        whatsAppMessage="Hello Prakash Interior Decors, I am exploring your design gallery and would like to consult with you about interior decoration for my home."
        whatsAppLabel="Discuss Inspiration on WhatsApp"
      />

      {/* Clear Transparency Banner */}
      <section className="bg-cream/60 py-6 border-b border-beigeGrey/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start sm:items-center gap-3 p-4 bg-white/80 rounded border border-champagne/40 text-xs text-slateGrey">
            <Info className="w-4 h-4 text-mutedBlue shrink-0 mt-0.5 sm:mt-0" />
            <p>
              <strong className="text-navy font-semibold">Design Inspiration Notice:</strong> The imagery presented below showcases curated architectural concepts and contemporary design direction. Every actual residential project completed by Prakash Interior Decors is custom engineered to the homeowner's specific floor plan, laminate selection, and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Main Gallery Section with Category Filter & Lightbox */}
      <section className="py-16 lg:py-24 bg-ivory border-b border-beigeGrey/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl text-navy font-normal">
              Explore by Space
            </h2>
            <p className="text-sm text-slateGrey mt-2">
              Select a category below to filter through specific room concepts. Click any design to inspect details or initiate a WhatsApp discussion.
            </p>
          </div>

          <ImageGallery initialCategory="all" showFilters={true} />
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="py-20 bg-navy text-ivory text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <span className="text-xs uppercase tracking-widest text-champagne font-semibold block">
            Have a Reference Photo?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory font-normal leading-tight">
            Share Your Own Inspiration with Us.
          </h2>
          <p className="text-sm sm:text-base text-ivory/80 leading-relaxed font-light max-w-xl mx-auto">
            Found an interior photo on Pinterest or Instagram that you love? Send it to us on WhatsApp. We will evaluate how to execute a similar aesthetic within your residential layout and budget.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <WhatsAppButton
              message="Hello Prakash Interior Decors, I have some interior design reference images I'd like to share and discuss."
              label="Share Photos on WhatsApp"
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

