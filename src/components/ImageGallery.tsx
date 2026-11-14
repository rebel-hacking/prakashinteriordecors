import React, { useState } from 'react';
import { Maximize2, MessageSquare } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/gallery';
import { Lightbox } from './Lightbox';
import { getWhatsAppLink } from '../data/business';

interface ImageGalleryProps {
  initialCategory?: 'all' | 'bedroom' | 'kitchen' | 'wardrobe';
  limit?: number;
  showFilters?: boolean;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  initialCategory = 'all',
  limit,
  showFilters = true
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'bedroom' | 'kitchen' | 'wardrobe'>(initialCategory);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems = GALLERY_ITEMS.filter(item => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const displayItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const categories = [
    { id: 'all', label: 'All Designs' },
    { id: 'bedroom', label: 'Bedrooms' },
    { id: 'kitchen', label: 'Modular Kitchens' },
    { id: 'wardrobe', label: 'Wardrobes' },
  ];

  const handleOpenLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handlePrevLightbox = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex - 1 + displayItems.length) % displayItems.length);
  };

  const handleNextLightbox = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex + 1) % displayItems.length);
  };

  return (
    <div>
      {/* Category Filter Tabs */}
      {showFilters && (
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-5 py-2.5 rounded text-xs uppercase tracking-wider font-semibold transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-navy text-ivory shadow-sm'
                  : 'bg-cream text-slateGrey hover:text-navy hover:bg-beigeGrey/60'
              }`}
              aria-pressed={selectedCategory === cat.id}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* Gallery Grid: Asymmetric Architectural Composition */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayItems.map((item, index) => {
          const isWide = item.aspectRatio === 'wide' && (index % 4 === 0);

          return (
            <div
              key={item.id}
              className={`group relative bg-white rounded-sm overflow-hidden border border-beigeGrey/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col ${
                isWide ? 'md:col-span-2' : ''
              }`}
            >
              {/* Image Frame */}
              <div
                className="relative aspect-[4/3] bg-navy-midnight overflow-hidden cursor-pointer"
                onClick={() => handleOpenLightbox(index)}
              >
                <img
                  src={item.imageUrl}
                  alt={`${item.title} - ${item.categoryLabel}`}
                  className="w-full h-full object-cover img-editorial group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 bg-ivory/95 text-navy px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider shadow-md transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Inspiration</span>
                  </span>
                </div>

                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider bg-navy/80 text-ivory/90 px-2.5 py-1 rounded backdrop-blur-sm">
                  {item.categoryLabel}
                </span>

                <span className="absolute bottom-3 right-3 text-[10px] uppercase tracking-wider bg-black/60 text-champagne px-2 py-0.5 rounded backdrop-blur-sm">
                  Inspiration
                </span>
              </div>

              {/* Caption & Metadata */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-ivory/30">
                <div>
                  <h3
                    onClick={() => handleOpenLightbox(index)}
                    className="font-serif text-xl font-medium text-navy group-hover:text-mutedBlue transition-colors cursor-pointer"
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-slateGrey line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-beigeGrey/40 flex items-center justify-between">
                  <button
                    onClick={() => handleOpenLightbox(index)}
                    className="text-xs font-semibold text-mutedBlue hover:text-navy uppercase tracking-wider transition-colors inline-flex items-center gap-1"
                  >
                    <span>View Details</span>
                  </button>

                  <a
                    href={getWhatsAppLink(`Hello Prakash Interior Decors, I am inquiring about the "${item.title}" design style in your gallery.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slateGrey hover:text-navy p-1 transition-colors"
                    aria-label={`Inquire about ${item.title} on WhatsApp`}
                  >
                    <MessageSquare className="w-4 h-4 text-champagne" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <Lightbox
          item={displayItems[activeLightboxIndex]}
          isOpen={activeLightboxIndex !== null}
          onClose={handleCloseLightbox}
          onPrev={handlePrevLightbox}
          onNext={handleNextLightbox}
        />
      )}
    </div>
  );
};

