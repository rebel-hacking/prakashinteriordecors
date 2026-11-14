import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import { GalleryItem } from '../data/gallery';
import { getWhatsAppLink } from '../data/business';

interface LightboxProps {
  item: GalleryItem;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  item,
  isOpen,
  onClose,
  onPrev,
  onNext
}) => {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onPrev();
    if (e.key === 'ArrowRight') onNext();
  }, [isOpen, onClose, onPrev, onNext]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const inquiryMsg = `Hello Prakash Interior Decors, I am viewing the "${item.title}" (${item.categoryLabel}) design inspiration in your gallery. Could we discuss tailoring a similar concept for my home?`;
  const whatsappUrl = getWhatsAppLink(inquiryMsg);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy-dark/95 backdrop-blur-md p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-ivory/70 hover:text-ivory bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-50 focus:outline-none"
        aria-label="Close image lightbox"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev / Next controls */}
      <button
        onClick={onPrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 text-ivory/70 hover:text-ivory bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-40 focus:outline-none"
        aria-label="Previous design inspiration"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-ivory/70 hover:text-ivory bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-40 focus:outline-none"
        aria-label="Next design inspiration"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Lightbox Content Card */}
      <div className="relative max-w-5xl w-full max-h-[90vh] bg-ivory rounded-lg overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-beigeGrey">
        {/* Image Preview Container */}
        <div className="relative lg:w-3/5 bg-navy-midnight flex items-center justify-center overflow-hidden min-h-[280px] sm:min-h-[360px] lg:min-h-[500px]">
          <img
            src={item.imageUrl}
            alt={`${item.title} - ${item.categoryLabel} design inspiration`}
            className="w-full h-full object-cover max-h-[500px] lg:max-h-[600px]"
          />
          <div className="absolute top-3 left-3 bg-navy/80 backdrop-blur-sm text-champagne text-xs px-3 py-1 rounded font-medium tracking-wide">
            Design Inspiration
          </div>
        </div>

        {/* Details & Specs Container */}
        <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[400px] lg:max-h-[600px] bg-ivory">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-mutedBlue">
                {item.categoryLabel}
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-navy mt-2 leading-snug">
              {item.title}
            </h3>

            <p className="mt-3 text-sm text-slateGrey leading-relaxed">
              {item.description}
            </p>

            {/* Design Highlights */}
            {item.designHighlights && item.designHighlights.length > 0 && (
              <div className="mt-6 pt-5 border-t border-beigeGrey/60">
                <p className="text-xs uppercase tracking-wider font-bold text-navy mb-3">
                  Key Design Features
                </p>
                <ul className="space-y-2">
                  {item.designHighlights.map((highlight, i) => (
                    <li key={i} className="text-xs text-slateGrey flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne mt-1.5 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-beigeGrey/60">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-dark text-ivory py-3 px-4 rounded text-xs uppercase tracking-wider font-semibold shadow-sm transition-all"
            >
              <MessageSquare className="w-4 h-4 text-champagne" />
              <span>Discuss This Design on WhatsApp</span>
            </a>
            <p className="text-[11px] text-slateGrey text-center mt-2">
              All concepts are customized to your room measurements & finish choices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

