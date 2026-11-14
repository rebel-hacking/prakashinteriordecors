import React from 'react';
import { PageHero } from '../components/PageHero';
import { SeoHead } from '../components/SeoHead';
import { SectionHeading } from '../components/SectionHeading';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { PhoneButton } from '../components/PhoneButton';
import { VERIFIED_FEEDBACK_DATA } from '../data/reviews';
import { BUSINESS_INFO } from '../data/business';
import { Star, ShieldCheck, CheckCircle2, ExternalLink, ThumbsUp } from 'lucide-react';

export const Reviews: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Verified Customer Reviews & Google Rating | Prakash Interior Decors Bengaluru"
        description="Read verified customer feedback themes and Google reviews for Prakash Interior Decors. Rated 5.0/5 across 126 reviews for residential bedrooms, wardrobes, and kitchens in Bengaluru."
        canonicalPath="/reviews"
      />

      <PageHero
        breadcrumbs={[{ label: 'Reviews' }]}
        tag="Verified Reputation & Client Trust"
        headline="Experiences That Speak for Themselves."
        description="At Prakash Interior Decors, our reputation is built on dependable execution, attentive laminate consultation, and genuine care for residential client satisfaction across Bengaluru."
        imageUrl="https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Verified customer satisfaction in residential interior decor"
        whatsAppMessage="Hello Prakash Interior Decors, I noticed your 5.0 Google rating and would like to consult with you about interior decoration for my home."
        whatsAppLabel="Discuss on WhatsApp"
      />

      {/* Verified Google Badge Hero Strip */}
      <section className="py-12 bg-cream/40 border-b border-beigeGrey/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 bg-white rounded-lg border border-champagne/50 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-navy text-champagne flex flex-col items-center justify-center shrink-0 border-2 border-champagne">
                <span className="font-serif text-3xl font-bold leading-none">5.0</span>
                <span className="text-[10px] text-ivory/80 uppercase tracking-widest mt-0.5">Rating</span>
              </div>
              <div>
                <div className="flex items-center gap-1 text-champagne-dark text-lg">
                  <span>★★★★★</span>
                  <span className="text-xs uppercase tracking-wider font-bold text-navy ml-2">
                    Verified Google Rating
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-navy mt-1">
                  126 Verified Customer Reviews
                </h3>
                <p className="text-xs text-slateGrey mt-0.5">
                  HRBR Layout 2nd Block, Kalyan Nagar, Bengaluru, Karnataka
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={VERIFIED_FEEDBACK_DATA.googleReviewsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-ivory px-5 py-3 rounded text-xs uppercase tracking-wider font-semibold shadow-sm transition-all"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-champagne" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Customer Feedback Themes Section */}
      <section className="py-20 lg:py-28 bg-ivory border-b border-beigeGrey/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Customer Themes"
            title="What Homeowners Consistently Highlight"
            description="Rather than displaying manufactured quotations, we present the recurring, authentic customer themes verified across 126 Google reviews for Prakash Interior Decors."
            align="asymmetric"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VERIFIED_FEEDBACK_DATA.feedbackThemes.map((theme, idx) => (
              <div
                key={theme.id}
                className="p-8 bg-white rounded-sm border border-beigeGrey shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-beigeGrey/40 mb-4">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-mutedBlue">
                      {theme.category}
                    </span>
                    <span className="text-xs font-semibold text-champagne-dark">
                      Theme 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-medium text-navy">
                    {theme.themeTitle}
                  </h3>

                  <p className="text-sm text-slateGrey mt-3 leading-relaxed">
                    {theme.highlightSummary}
                  </p>

                  <div className="mt-6 pt-5 border-t border-beigeGrey/40 space-y-2.5">
                    <p className="text-[11px] uppercase tracking-wider font-semibold text-navy">
                      Verified Review Observations:
                    </p>
                    <ul className="space-y-2">
                      {theme.verifiedObservations.map((obs, i) => (
                        <li key={i} className="text-xs text-slateGrey flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-champagne-dark shrink-0 mt-0.5" />
                          <span>{obs}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-6 bg-cream/40 rounded border border-beigeGrey text-xs text-slateGrey leading-relaxed text-center max-w-3xl mx-auto">
            <ShieldCheck className="w-5 h-5 text-champagne-dark mx-auto mb-2" />
            <strong className="text-navy">Authenticity Policy:</strong> In compliance with consumer protection and Google policy guidelines, Prakash Interior Decors presents only verified review statistics and factual customer themes. We do not fabricate testimonials or invent customer identities.
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-ivory text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <span className="text-xs uppercase tracking-widest text-champagne font-semibold block">
            Experience the Service Firsthand
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory font-normal leading-tight">
            Discuss Your Home with Bengaluru’s 5-Star Rated Decorators.
          </h2>
          <p className="text-sm sm:text-base text-ivory/80 leading-relaxed font-light max-w-xl mx-auto">
            Get personalized laminate recommendations, space-efficient wardrobe plans, and transparent pricing directly on WhatsApp.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <WhatsAppButton
              message="Hello Prakash Interior Decors, I would like to schedule a consultation for my home interiors."
              label="Chat on WhatsApp"
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

