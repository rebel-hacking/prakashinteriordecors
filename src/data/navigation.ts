export interface NavItem {
  label: string;
  path: string;
  children?: { label: string; path: string; description?: string }[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Services",
    path: "/bedroom-interiors",
    children: [
      {
        label: "Bedroom Interiors",
        path: "/bedroom-interiors",
        description: "Serene bedroom designs, headboard styling & smart space planning"
      },
      {
        label: "Modular Kitchens",
        path: "/modular-kitchens",
        description: "Ergonomic culinary layouts, smart storage & moisture-resistant finishes"
      },
      {
        label: "Wardrobe Designs",
        path: "/wardrobe-designs",
        description: "Floor-to-ceiling sliding & hinged wardrobes with custom carpentry"
      }
    ]
  },
  { label: "Design Gallery", path: "/projects" },
  { label: "Reviews", path: "/reviews" },
  { label: "Contact", path: "/contact" }
];

