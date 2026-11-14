export interface FeedbackTheme {
  id: string;
  themeTitle: string;
  category: string;
  highlightSummary: string;
  verifiedObservations: string[];
}

export const VERIFIED_FEEDBACK_DATA = {
  rating: 5.0,
  maxRating: 5.0,
  reviewCount: 126,
  platform: "Google Reviews",
  verifiedStatus: "100% Verified Customer Rating",
  summaryHeadline: "Experiences That Speak for Themselves.",
  summarySubtext: "Across 126 verified Google reviews, homeowners throughout Bengaluru consistently highlight Prakash Interior Decors for balanced aesthetics, dependable timelines, attentive colour guidance, and honest residential pricing.",
  googleReviewsLink: "https://maps.google.com/?q=609,+3rd+C+Cross+Road,+HRBR+Layout+2nd+Block,+Kalyan+Nagar,+Bengaluru,+Karnataka+560043",
  
  feedbackThemes: [
    {
      id: "theme-1",
      themeTitle: "Trendy & Eye-Catching Designs",
      category: "Aesthetic Direction",
      highlightSummary: "Consistent appreciation for fresh, contemporary concepts that look elegant without feeling impractical.",
      verifiedObservations: [
        "Modern bedroom aesthetics tailored to urban Bengaluru apartments",
        "Clean architectural lines, fluted profiles, and uncluttered spatial balance",
        "Thoughtful balance between contemporary trends and timeless residential charm"
      ]
    },
    {
      id: "theme-2",
      themeTitle: "Helpful Colour & Laminate Suggestions",
      category: "Design Consultation",
      highlightSummary: "Proactive guidance on material finishes, lighting temperatures, and harmonious colour palettes.",
      verifiedObservations: [
        "Patience during shade selection, texture matching, and laminate samples comparison",
        "Expert advice on light-reflective finishes for compact or north-facing rooms",
        "Assistance in pairing woodgrain laminates with subtle cream and champagne tones"
      ]
    },
    {
      id: "theme-3",
      themeTitle: "Precise Installation & Finish",
      category: "Workmanship & Carpentry",
      highlightSummary: "High standard of carpentry, door alignments, seamless edge-banding, and hardware operation.",
      verifiedObservations: [
        "Clean, gap-free shutter alignment on multi-door wardrobes",
        "Smooth, silent operation of soft-close drawers and sliding runners",
        "Attention to detail around switch cutouts, ceiling skirting, and wall junctions"
      ]
    },
    {
      id: "theme-4",
      themeTitle: "Timely Installation Experiences",
      category: "Project Reliability",
      highlightSummary: "Committed adherence to promised project timelines and prompt on-site execution.",
      verifiedObservations: [
        "Clear communication of manufacturing and installation milestones",
        "Organized installation process that respects homeowners' move-in dates",
        "Responsive updates throughout the bedroom and modular kitchen carpentry phases"
      ]
    },
    {
      id: "theme-5",
      themeTitle: "Reasonable & Honest Pricing",
      category: "Value for Money",
      highlightSummary: "Premium interior quality delivered at transparent, budget-friendly rates without surprise escalations.",
      verifiedObservations: [
        "Direct quotes that reflect actual residential requirements without hidden add-ons",
        "Smart material recommendations that maximize durability within allocated budgets",
        "Clear breakdown of modular units, carpentry, and hardware choices"
      ]
    },
    {
      id: "theme-6",
      themeTitle: "Professional & Genuine Customer Service",
      category: "Client Relationship",
      highlightSummary: "Courteous, direct, and accessible communication via phone and WhatsApp at every step.",
      verifiedObservations: [
        "Accessible consultation directly addressing homeowner questions and concerns",
        "Constructive problem-solving for tricky apartment corners and structural beams",
        "Long-term post-installation responsiveness and genuine care for homeowner satisfaction"
      ]
    }
  ]
};

