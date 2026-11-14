export interface GalleryItem {
  id: string;
  title: string;
  category: 'bedroom' | 'kitchen' | 'wardrobe';
  categoryLabel: string;
  description: string;
  imageUrl: string;
  dimensions?: string;
  aspectRatio?: 'square' | 'wide' | 'tall';
  designHighlights: string[];
}

export const GALLERY_ITEMS: GalleryItem[] = [
  // Bedrooms
  {
    id: "bed-01",
    title: "Serene Minimalist Master Bedroom",
    category: "bedroom",
    categoryLabel: "Bedroom Interiors",
    description: "Neutral warm tones featuring an upholstered floor-standing headboard, acoustic wall battening, and integrated floating bedside ledges.",
    imageUrl: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "wide",
    designHighlights: [
      "Concealed warm 3000K cove lighting",
      "Matte champagne gold electrical switch plates",
      "Fluted wooden acoustic feature paneling",
      "Floating nightstands to preserve floor space"
    ]
  },
  {
    id: "bed-02",
    title: "Warm Contemporary Bedroom with Integrated Study",
    category: "bedroom",
    categoryLabel: "Bedroom Interiors",
    description: "Compact Bengaluru apartment bedroom designed with integrated study corner, floor-to-ceiling wardrobes, and soft ambient task lighting.",
    imageUrl: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "tall",
    designHighlights: [
      "Custom cantilevered work desk with wire-tuck channels",
      "Anti-scratch textured woodgrain laminates",
      "Linen finish sliding wardrobe doors",
      "Soft recessed ceiling spotlights"
    ]
  },
  {
    id: "bed-03",
    title: "Scandinavian Inspired Guest Suite",
    category: "bedroom",
    categoryLabel: "Bedroom Interiors",
    description: "Light oak finishes, earthy plaster texture, and breathable woven details create a relaxed, hospitable sanctuary for guests.",
    imageUrl: "https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "square",
    designHighlights: [
      "Solid ash edge-banding and tactile handles",
      "Low VOC eggshell finish wall paint",
      "Double curtain tracks with blackout linen blend",
      "Space-efficient wardrobe niche"
    ]
  },
  {
    id: "bed-04",
    title: "Modern Compact Apartment Bedroom",
    category: "bedroom",
    categoryLabel: "Bedroom Interiors",
    description: "Smart storage integration with hydraulic under-bed lift, upholstered headboard paneling, and mirrored reflection to expand visual space.",
    imageUrl: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "wide",
    designHighlights: [
      "Heavy-duty pneumatic gas-lift bed mechanism",
      "Tinted bronze mirror panelling",
      "Dual-toned suede and veneer headboard",
      "Concealed cable routing throughout"
    ]
  },

  // Modular Kitchens
  {
    id: "kit-01",
    title: "Ergonomic L-Shaped Modular Kitchen",
    category: "kitchen",
    categoryLabel: "Modular Kitchen",
    description: "Warm cashmere matte acrylic shutters paired with composite quartz countertop and intelligent tandem drawer systems.",
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "wide",
    designHighlights: [
      "Waterproof BWP Marine-grade plywood carcass",
      "Seamless soft-close tandem boxes rated for 45kg",
      "Continuous profile aluminum J-pull handles",
      "Dedicated spice pullout adjacent to hob"
    ]
  },
  {
    id: "kit-02",
    title: "Contemporary Parallel Galley Kitchen",
    category: "kitchen",
    categoryLabel: "Modular Kitchen",
    description: "High-efficiency parallel layout separating dry prep and wet wash zones, ideal for Bengaluru high-rise apartment footprints.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "tall",
    designHighlights: [
      "Full-height pantry tower with 6-tier pullout baskets",
      "Under-cabinet strip illumination for prep counters",
      "Built-in microwave and convection oven tall unit",
      "Scratch-resistant anti-fingerprint thermal laminate"
    ]
  },
  {
    id: "kit-03",
    title: "Two-Tone Timber & Navy Culinary Space",
    category: "kitchen",
    categoryLabel: "Modular Kitchen",
    description: "Refined midnight navy base cabinetry balanced by natural warm teak overhead shutters and pristine stone splashback.",
    imageUrl: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "square",
    designHighlights: [
      "Fluted glass lift-up upper shutter cabinets",
      "Heavy-duty blind corner carousel mechanism",
      "Integrated under-sink recycling and detergent rack",
      "Heat-tolerant 20mm engineered quartz surface"
    ]
  },
  {
    id: "kit-04",
    title: "Minimalist Open-Concept Breakfast Island Kitchen",
    category: "kitchen",
    categoryLabel: "Modular Kitchen",
    description: "Seamless open kitchen connecting dining and living zones with extended quartz breakfast bar and architectural pendant lighting.",
    imageUrl: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "wide",
    designHighlights: [
      "Waterfall edge quartz breakfast bar",
      "Concealed ducted chimney integration",
      "Double stainless steel undermount sink",
      "Soft ambient toe-kick accent lighting"
    ]
  },

  // Wardrobes
  {
    id: "ward-01",
    title: "Floor-to-Ceiling Sliding Glass & Laminate Wardrobe",
    category: "wardrobe",
    categoryLabel: "Wardrobe Designs",
    description: "Heavy-duty top-hung sliding wardrobe with tinted fluted glass inserts and matte charcoal laminate frames.",
    imageUrl: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "tall",
    designHighlights: [
      "Smooth silent sliding rollers tested for 100,000 cycles",
      "Loft storage tailored right up to 9ft ceiling height",
      "PIR motion sensor LED illuminated wardrobe rods",
      "Integrated velvet-lined watch and jewelry drawer"
    ]
  },
  {
    id: "ward-02",
    title: "Contemporary 4-Door Hinged Wardrobe with Dresser",
    category: "wardrobe",
    categoryLabel: "Wardrobe Designs",
    description: "Warm beige PU matte finish hinged doors with full-length integrated mirror, dresser drawers, and concealed vanity lighting.",
    imageUrl: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "wide",
    designHighlights: [
      "165-degree wide opening soft-close hinges",
      "Dedicated saree & trouser pull-out hanger rack",
      "Concealed locker drawer with digital code lock",
      "Built-in full-height grooming mirror with bevelled edge"
    ]
  },
  {
    id: "ward-03",
    title: "Walk-in Dressing Suite with Open Display",
    category: "wardrobe",
    categoryLabel: "Wardrobe Designs",
    description: "Bespoke dressing room module with shoe organizer shelves, bag cubbies, and dual-zone wardrobe hanging sections.",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "square",
    designHighlights: [
      "Modular shelf pin holes for adjustable heights",
      "Solid wood drawer dividers for accessories",
      "Warm ambient backlighting along vertical stiles",
      "Anti-dust sealing brushes on all sliding perimeter"
    ]
  },
  {
    id: "ward-04",
    title: "Textured Fabric Laminate Bedroom Wardrobe",
    category: "wardrobe",
    categoryLabel: "Wardrobe Designs",
    description: "Tactile linen-textured laminate shutters accented with warm brass edge profiles and integrated side display shelving.",
    imageUrl: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "wide",
    designHighlights: [
      "Curved open bookshelf ledge for decor display",
      "Finger-pull recessed vertical channels",
      "High-pressure waterproof laminate facing",
      "Dual level seasonal garment hanging rods"
    ]
  }
];

