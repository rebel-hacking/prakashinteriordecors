import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { WhatsAppButton } from './WhatsAppButton';
import { PhoneButton } from './PhoneButton';

interface PageHeroProps {
  breadcrumbs: { label: string; path?: string }[];
  tag?: string;
  headline: string;
  description: string;
  whatsAppMessage?: string;
  whatsAppLabel?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  breadcrumbs,
  tag = "Prakash Interior Decors • Bengaluru",
  headline,
  description,
  whatsAppMessage,
  whatsAppLabel = "Inquire on WhatsApp",
  imageUrl,
  imageAlt = "Interior design visual"
}) => {
  return (
    <section className="relative bg-ivory pt-8 pb-14 lg:pb-20 border-b border-beigeGrey/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mt-6">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.22em] font-semibold text-mutedBlue mb-3">
              {tag}
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-normal text-navy leading-[1.12] tracking-tight">
              {headline}
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slateGrey max-w-2xl leading-relaxed">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <WhatsAppButton
                message={whatsAppMessage}
                label={whatsAppLabel}
                variant="primary"
              />
              <PhoneButton variant="outline" />
            </div>
          </div>

          {imageUrl && (
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-lg border border-beigeGrey">
                <img
                  src={imageUrl}
                  alt={imageAlt}
                  className="w-full h-full object-cover img-editorial"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 right-3 text-[10px] uppercase tracking-wider bg-navy/80 text-ivory/90 px-2.5 py-1 rounded backdrop-blur-sm">
                  Design Inspiration
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

