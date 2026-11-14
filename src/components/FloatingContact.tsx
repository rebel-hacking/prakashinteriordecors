import React, { useState } from 'react';
import { MessageSquare, Phone, X } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/business';

export const FloatingContact: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const defaultWhatsAppLink = getWhatsAppLink("Hello Prakash Interior Decors, I would like to inquire about your residential interior design services in Bengaluru.");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 print:hidden">
      {/* Expanded quick contact options */}
      {isExpanded && (
        <div className="bg-white/95 backdrop-blur-md p-4 rounded-lg shadow-xl border border-beigeGrey/60 w-72 mb-2 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-beigeGrey/40">
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-slateGrey">Direct Inquiries</p>
              <p className="text-sm font-serif font-bold text-navy">{BUSINESS_INFO.name}</p>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-slateGrey hover:text-navy p-1 transition-colors"
              aria-label="Close contact drawer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-3 space-y-2">
            <a
              href={defaultWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2.5 rounded bg-navy text-ivory hover:bg-navy-dark transition-colors text-sm font-medium"
            >
              <div className="w-8 h-8 rounded bg-champagne/20 flex items-center justify-center text-champagne shrink-0">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-xs uppercase tracking-wider text-champagne font-semibold">Instant Response</p>
                <p className="text-xs text-ivory/90">Chat on WhatsApp</p>
              </div>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phone.tel}`}
              className="flex items-center gap-3 p-2.5 rounded border border-beigeGrey hover:bg-cream/40 transition-colors text-sm font-medium text-navy"
            >
              <div className="w-8 h-8 rounded bg-mutedBlue/10 flex items-center justify-center text-mutedBlue shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-xs uppercase tracking-wider text-slateGrey font-semibold">Direct Call</p>
                <p className="text-xs text-navy font-semibold">{BUSINESS_INFO.phone.display}</p>
              </div>
            </a>
          </div>

          <p className="text-[11px] text-slateGrey mt-3 pt-2 border-t border-beigeGrey/30 text-center">
            HRBR Layout 2nd Block, Kalyan Nagar, Bengaluru
          </p>
        </div>
      )}

      {/* Primary Floating Action Button */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="hidden sm:flex items-center gap-2 bg-navy/90 hover:bg-navy text-ivory px-3.5 py-2 rounded-full shadow-lg text-xs font-medium tracking-wide transition-all border border-champagne/30"
          aria-expanded={isExpanded}
          aria-label="Toggle contact menu"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Quick Inquiries</span>
        </button>

        <a
          href={defaultWhatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-navy hover:bg-navy-dark text-champagne shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 border-champagne/40"
          aria-label="Direct WhatsApp Consultation with Prakash Interior Decors"
        >
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border border-white"></span>
          </span>
          <MessageSquare className="w-6 h-6 text-champagne group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </div>
  );
};

