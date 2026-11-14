export interface BusinessInfo {
  name: string;
  tagline: string;
  category: string;
  description: string;
  address: {
    street: string;
    subLocality: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
  };
  phone: {
    display: string;
    tel: string;
    raw: string;
  };
  googleReviews: {
    rating: number;
    count: number;
    maxRating: number;
    badgeText: string;
    googleMapsUrl: string;
    reviewUrlPlaceholder: string;
  };
  verifiedServices: string[];
  feedbackThemes: {
    title: string;
    description: string;
  }[];
}

export const BUSINESS_INFO: BusinessInfo = {
  name: "Prakash Interior Decors",
  tagline: "Spaces That Feel Like Home. Designed to Inspire.",
  category: "Interior Decorator",
  description: "Professional Bangalore-based interior design firm providing budget-friendly and high-quality residential furnishing services.",
  address: {
    street: "609, 3rd C Cross Road",
    subLocality: "HRBR Layout 2nd Block",
    locality: "HRBR Layout, Kalyan Nagar",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560043",
    country: "India",
    full: "609, 3rd C Cross Road, HRBR Layout 2nd Block, HRBR Layout, Kalyan Nagar, Bengaluru, Karnataka 560043, India."
  },
  phone: {
    display: "+91 95913 44715",
    tel: "+919591344715",
    raw: "919591344715"
  },
  googleReviews: {
    rating: 5.0,
    count: 126,
    maxRating: 5.0,
    badgeText: "5.0 ★ Google Rated (126 Verified Reviews)",
    googleMapsUrl: "https://maps.google.com/?q=609,+3rd+C+Cross+Road,+HRBR+Layout+2nd+Block,+Kalyan+Nagar,+Bengaluru,+Karnataka+560043",
    reviewUrlPlaceholder: "https://maps.google.com/?q=609,+3rd+C+Cross+Road,+HRBR+Layout+2nd+Block,+Kalyan+Nagar,+Bengaluru,+Karnataka+560043"
  },
  verifiedServices: [
    "Bedroom Interiors",
    "Interior Bedroom Design",
    "Bedroom Designs",
    "Wardrobe Design",
    "Customised Wardrobes",
    "Designer Wardrobes",
    "Wardrobe Carpentry",
    "Kitchen Interiors",
    "Modular Kitchen Design"
  ],
  feedbackThemes: [
    {
      title: "Trendy & Eye-Catching Designs",
      description: "Homeowners frequently appreciate clean contemporary aesthetics, smart space utilization, and visually appealing residential styles tailored to modern living."
    },
    {
      title: "Helpful Colour & Laminate Suggestions",
      description: "Personalized guidance on tactile finishes, laminate palettes, textures, and lighting balances that elevate rooms while remaining timeless."
    },
    {
      title: "Precise Installation & Finish",
      description: "Thorough attention to alignment, clean edge-banding, seamless joint carpentry, and reliable fit-and-finish in every cabinet and wardrobe."
    },
    {
      title: "Timely Project Execution",
      description: "Reliable schedules and timely handover experiences that allow families to move into or renovate their homes without prolonged disruption."
    },
    {
      title: "Reasonable & Honest Pricing",
      description: "High-end visual refinement delivered with sensible, transparent, and budget-friendly pricing structures without hidden costs."
    },
    {
      title: "Professional & Genuine Service",
      description: "Courteous communication, direct responsiveness on WhatsApp and phone, and dedicated care for residential client satisfaction."
    }
  ]
};

/**
 * Builds a direct WhatsApp web/app link with properly encoded contextual message.
 */
export function getWhatsAppLink(customMessage?: string): string {
  const defaultMessage = "Hello Prakash Interior Decors, I am interested in your interior design services. I would like to discuss my home interior requirements.";
  const message = customMessage || defaultMessage;
  return `https://wa.me/${BUSINESS_INFO.phone.raw}?text=${encodeURIComponent(message)}`;
}

