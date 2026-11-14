export interface ServiceDetail {
  slug: string;
  route: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  heroHeadline: string;
  heroDescription: string;
  primaryImage: string;
  secondaryImage: string;
  editorialQuote: string;
  features: {
    title: string;
    description: string;
  }[];
  processSteps: {
    number: string;
    title: string;
    description: string;
  }[];
  designConsiderations: {
    heading: string;
    details: string;
  }[];
  whatsAppMessage: string;
}

export const SERVICES_DATA: Record<string, ServiceDetail> = {
  "bedroom-interiors": {
    slug: "bedroom-interiors",
    route: "/bedroom-interiors",
    title: "Bedroom Interiors & Custom Bedroom Design",
    shortTitle: "Bedroom Interiors",
    subtitle: "Calm, functional sanctuaries crafted around your everyday lifestyle",
    heroHeadline: "Bedrooms Designed Around Your Lifestyle.",
    heroDescription: "Thoughtful space planning, tailored headboards, warm acoustic palettes, and seamlessly integrated wardrobe storage designed for restful living in modern Bengaluru homes.",
    primaryImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
    editorialQuote: "A bedroom should never feel crowded or purely utilitarian. True luxury lies in proportion, gentle illumination, and waking up to an uncluttered, peaceful environment.",
    features: [
      {
        title: "Space-Conscious Space Planning",
        description: "Optimizing circulation zones, bedside clearances, and natural ventilation for contemporary Bengaluru apartment layouts."
      },
      {
        title: "Tailored Headboards & Accent Paneling",
        description: "Fluted acoustic panels, tactile linen-wrapped headboards, and warm timber veneers that anchor the bed as the room's serene focal point."
      },
      {
        title: "Wardrobe & Vanity Integration",
        description: "Custom floor-to-ceiling wardrobes aligned with integrated dresser mirrors, compact study ledges, and cable-managed bedside consoles."
      },
      {
        title: "Layered Lighting Schemes",
        description: "Balanced ambient cove lighting (3000K warm white), low-glare reading spots, and soft night lights designed for relaxation."
      }
    ],
    processSteps: [
      {
        number: "01",
        title: "Lifestyle & Space Evaluation",
        description: "Understanding room dimensions, natural light angles, wardrobe storage needs, and personal daily routines."
      },
      {
        number: "02",
        title: "Design & Finish Selection",
        description: "Curating harmonious laminate textures, wall treatments, headboard fabrics, and spatial layouts."
      },
      {
        number: "03",
        title: "Precision Carpentry & Fitment",
        description: "Careful on-site or modular assembly with precise edge-banding, level alignments, and clean hardware installation."
      },
      {
        number: "04",
        title: "Handover & Finishing Review",
        description: "Thorough inspection of drawer runners, soft-close hinges, and electrical cutouts for seamless everyday living."
      }
    ],
    designConsiderations: [
      {
        heading: "Acoustic Softness & Rest",
        details: "Employing fabric textures, fluted wall battens, and layered drapery to absorb ambient city noise and create a restorative haven."
      },
      {
        heading: "Under-Bed & Vertical Storage",
        details: "Pneumatic hydraulic storage beds and full-height lofts provide generous containment for seasonal linens without visual clutter."
      },
      {
        heading: "Compact Work & Reading Desks",
        details: "Floating cantilevered workstations integrated alongside wardrobe panels for hybrid work-from-home comfort without sacrificing room elegance."
      }
    ],
    whatsAppMessage: "Hello, I am interested in bedroom interior design. I would like to discuss my requirements."
  },

  "modular-kitchens": {
    slug: "modular-kitchens",
    route: "/modular-kitchens",
    title: "Modular Kitchen Interiors & Custom Layouts",
    shortTitle: "Modular Kitchens",
    subtitle: "Ergonomic culinary spaces engineered with resilient materials and intelligent storage",
    heroHeadline: "Beautiful Kitchens. Thoughtfully Designed.",
    heroDescription: "Balancing timeless aesthetic warmth with daily culinary ergonomics. Tailored modular cabinetry, heavy-duty drawer systems, and durable moisture-resistant finishes for modern living.",
    primaryImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    editorialQuote: "A well-designed kitchen is an orchestrated harmony of reach, movement, and enduring resilience. Every spice jar, pan, and plate has its natural place.",
    features: [
      {
        title: "The Golden Work Triangle",
        description: "Precise ergonomic alignment between the refrigerator, prep sink, and cooking hob to minimize footsteps and maximize culinary efficiency."
      },
      {
        title: "Moisture & Termite Resistant Carcass",
        description: "Constructed using high-density calibrated BWP (Boiling Water Proof) marine-grade ply to withstand daily Indian cooking demands."
      },
      {
        title: "Intelligent Pull-Out Systems",
        description: "Heavy-duty tandem boxes, pull-out spice racks, bottle pullouts, cutlery dividers, and blind corner carousels for zero dead space."
      },
      {
        title: "Refined Shutter Finishes",
        description: "Options spanning anti-fingerprint acrylics, warm woodgrain laminates, PU matte lacquers, and fluted glass profiles."
      }
    ],
    processSteps: [
      {
        number: "01",
        title: "Kitchen Layout & Work Triangle Planning",
        description: "Analyzing your available footprint—whether L-shape, Parallel, or U-shape—and plumbing/gas pipeline positions."
      },
      {
        number: "02",
        title: "Shutter & Countertop Pairing",
        description: "Matching durable laminate/acrylic tones with complementary quartz or granite countertops and splashbacks."
      },
      {
        number: "03",
        title: "Cabinet Assembly & Alignment",
        description: "Precision installation of base units, wall cabinets, lift-up doors, and soft-close drawer slides."
      },
      {
        number: "04",
        title: "Chimney & Appliance Integration",
        description: "Seamless fitting of built-in hobs, ducted chimneys, sinks, and electrical points ready for cooking."
      }
    ],
    designConsiderations: [
      {
        heading: "Heat & Steam Management",
        details: "Careful spacing between cooking ranges and overhead cabinetry, paired with dedicated ducting routes for efficient ventilation."
      },
      {
        heading: "Heavy-Duty Deep Pan Drawers",
        details: "Bottom drawers reinforced with 45kg load-rated ball-bearing runners designed specifically for heavy pressure cookers and kadhais."
      },
      {
        heading: "Under-Cabinet Task Lighting",
        details: "Warm 3500K LED profile strips illuminating chopping surfaces without casting awkward shadows from overhead ceiling lights."
      }
    ],
    whatsAppMessage: "Hello, I am interested in modular kitchen interiors. I would like to discuss my kitchen design requirements."
  },

  "wardrobe-designs": {
    slug: "wardrobe-designs",
    route: "/wardrobe-designs",
    title: "Customised Wardrobes & Designer Wardrobe Carpentry",
    shortTitle: "Wardrobe Designs",
    subtitle: "Floor-to-ceiling storage tailored to your personal garments and vertical dimensions",
    heroHeadline: "Storage That Complements Your Space.",
    heroDescription: "From sleek sliding wardrobes for compact bedrooms to expansive hinged wardrobes with integrated dressing suites. Custom wardrobe carpentry made to elevate your bedroom.",
    primaryImage: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80",
    editorialQuote: "Storage should feel effortless. When your wardrobe is custom planned for your specific apparel, dressing every morning becomes a peaceful ritual.",
    features: [
      {
        title: "Floor-to-Ceiling Loft Integration",
        description: "Utilizing full room height up to 9 or 10 feet to provide ample loft containment for luggage, seasonal quilts, and infrequently used essentials."
      },
      {
        title: "Sliding & Hinged Door Configurations",
        description: "Space-saving top-hung sliding systems with soft-closing dampers or 165-degree wide-aperture hinged doors with dust-protection brushes."
      },
      {
        title: "Tailored Internal Organization",
        description: "Custom compartmentalization with dual hanging rails, saree pull-outs, velvet-lined accessory drawers, and built-in safe lockers."
      },
      {
        title: "Tactile Laminate & Glass Aesthetics",
        description: "Sophisticated palettes combining textured fabric laminates, fluted glass, tinted bronze mirrors, and champagne aluminum trim."
      }
    ],
    processSteps: [
      {
        number: "01",
        title: "Wardrobe Inventory & Dimension Audit",
        description: "Measuring wall breadth, ceiling height, and documenting personal wardrobe mix (hanging suits, folded garments, sarees, shoes)."
      },
      {
        number: "02",
        title: "Internal Partition Blueprint",
        description: "Customizing drawer heights, hanging rods, pull-out trouser racks, and concealed safety compartments."
      },
      {
        number: "03",
        title: "Craftsmanship & Door Mounting",
        description: "High-precision edge banding, sturdy carcass squaring, and smooth sliding track or European hinge calibration."
      },
      {
        number: "04",
        title: "Handles & Motion Sensor Illumination",
        description: "Installing ergonomic handles, magnetic catches, and battery or wired internal LED sensor strips."
      }
    ],
    designConsiderations: [
      {
        heading: "Internal Visibility & Illumination",
        details: "Vertical strip lighting along the carcass stiles activates automatically as doors slide or swing open."
      },
      {
        heading: "Integrated Dressing Mirror & Vanity",
        details: "Concealed or exterior full-length bevelled mirrors positioned to catch natural bedroom daylight for effortless grooming."
      },
      {
        heading: "Anti-Bend Structural Stiffeners",
        details: "Heavy-duty aluminum straightening rods embedded in tall shutter doors to prevent warping across Bangalore's seasonal climate shifts."
      }
    ],
    whatsAppMessage: "Hello, I am interested in customised wardrobe design. I would like to discuss my requirements."
  }
};

