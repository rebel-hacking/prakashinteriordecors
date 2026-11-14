import React from 'react';
import { PageHero } from '../components/PageHero';
import { SeoHead } from '../components/SeoHead';
import { ContactForm } from '../components/ContactForm';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { PhoneButton } from '../components/PhoneButton';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/business';
import { MapPin, Phone, MessageSquare, Clock, Navigation, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Contact Prakash Interior Decors | HRBR Layout Kalyan Nagar Bengaluru"
        description="Contact Prakash Interior Decors in HRBR Layout 2nd Block, Kalyan Nagar, Bengaluru. Phone: +91 95913 44715. Direct WhatsApp consultations for bedroom, kitchen, and wardrobe interiors."
        canonicalPath="/contact"
      />

      <PageHero
        breadcrumbs={[{ label: 'Contact' }]}
        tag="Bengaluru Studio & Consultations"
        headline="Let's Talk About Your Home."
        description="Whether you have an upcoming apartment handover, need custom bedroom wardrobes, or want to redesign your kitchen, we are available directly on WhatsApp and phone."
        imageUrl="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Consultation with Prakash Interior Decors Bengaluru"
        whatsAppMessage="Hello Prakash Interior Decors, I would like to enquire about your residential interior design services."
        whatsAppLabel="Direct WhatsApp Chat"
      />

      {/* Main Contact Details & Form Section */}
      <section className="py-20 lg:py-28 bg-ivory border-b border-beigeGrey/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Studio & Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-mutedBlue block mb-2">
                  Studio Location
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-navy font-normal">
                  Prakash Interior Decors
                </h2>
                <p className="text-sm text-slateGrey mt-2 leading-relaxed">
                  Professional residential interior design firm providing budget-friendly and high-quality residential furnishing services across Bengaluru.
                </p>
              </div>

              {/* Verified Contact Details Cards */}
              <div className="space-y-4">
                <div className="p-6 bg-white rounded-sm border border-beigeGrey shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-navy text-champagne flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-navy">Studio Address</h3>
                    <p className="text-sm text-slateGrey mt-1 leading-relaxed">
                      {BUSINESS_INFO.address.full}
                    </p>
                    <a
                      href={BUSINESS_INFO.googleReviews.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-mutedBlue hover:text-navy mt-3 transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Get Directions on Google Maps</span>
                    </a>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-sm border border-beigeGrey shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-navy text-champagne flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-navy">Direct Telephone</h3>
                    <p className="text-xs text-slateGrey mt-0.5">Direct line to interior consultants</p>
                    <a
                      href={`tel:${BUSINESS_INFO.phone.tel}`}
                      className="text-base font-semibold text-navy hover:text-mutedBlue mt-1 block transition-colors"
                    >
                      {BUSINESS_INFO.phone.display}
                    </a>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-sm border border-beigeGrey shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-navy text-champagne flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-navy">Instant WhatsApp</h3>
                    <p className="text-xs text-slateGrey mt-0.5">Quick responses, share photos & floor plans</p>
                    <a
                      href={getWhatsAppLink("Hello Prakash Interior Decors, I would like to inquire about your residential interior design services.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-champagne-dark hover:underline mt-1 block"
                    >
                      +91 95913 44715 (Click to Chat)
                    </a>
                  </div>
                </div>
              </div>

              {/* Areas Served in Bengaluru */}
              <div className="p-6 bg-cream/40 rounded-sm border border-beigeGrey space-y-2">
                <h3 className="font-serif text-lg font-medium text-navy">
                  Key Neighborhoods Served
                </h3>
                <p className="text-xs text-slateGrey leading-relaxed">
                  HRBR Layout, Kalyan Nagar, Kammanahalli, Banaswadi, Hennur, Horamavu, Ramamurthy Nagar, and residences across Greater Bengaluru.
                </p>
              </div>
            </div>

            {/* Right Column: WhatsApp Inquiry Form */}
            <div className="lg:col-span-7">
              <ContactForm preselectedService="Bedroom Interiors" />
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Google Map / Location Frame */}
      <section className="bg-cream/40 py-16 border-b border-beigeGrey/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-widest text-mutedBlue font-semibold block mb-1">
              Visit or Route
            </span>
            <h2 className="font-serif text-3xl text-navy font-normal">
              Find Our Studio on the Map
            </h2>
          </div>

          <div className="aspect-[16/9] sm:aspect-[21/9] rounded-sm overflow-hidden border border-beigeGrey shadow-md relative bg-navy-midnight">
            <iframe
              title="Prakash Interior Decors Location HRBR Layout Bengaluru"
              src="https://maps.google.com/maps?q=609,+3rd+C+Cross+Road,+HRBR+Layout+2nd+Block,+Kalyan+Nagar,+Bengaluru,+Karnataka+560043&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
};

