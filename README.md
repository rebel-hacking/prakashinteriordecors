# Prakash Interior Decors — Premium Multipage Website

A production-ready, contemporary luxury, fully responsive multipage website developed for **Prakash Interior Decors**, an interior design firm based in HRBR Layout, Kalyan Nagar, Bengaluru, Karnataka, India.

---

## 🌟 Verified Business Information
* **Business Name:** Prakash Interior Decors
* **Category:** Interior Decorator
* **Address:** 609, 3rd C Cross Road, HRBR Layout 2nd Block, HRBR Layout, Kalyan Nagar, Bengaluru, Karnataka 560043, India
* **Telephone:** +91 95913 44715
* **WhatsApp:** +91 95913 44715
* **Google Rating:** 5.0 / 5.0 (126 Verified Reviews)
* **Verified Core Services:**
  * Bedroom Interiors & Custom Bedroom Design
  * Modular Kitchen Design & Kitchen Interiors
  * Customised Wardrobes & Designer Wardrobe Carpentry

---

## 🎨 Visual Identity & Creative Direction
* **Aesthetic:** Contemporary luxury, architectural editorial layouts, generous whitespace, warm natural materials.
* **Palette:**
  * Primary Background: Warm Ivory (`#F5F1E8`)
  * Secondary Background: Soft Cream (`#EAE4D8`)
  * Primary Brand / Navigation / Headings: Deep Navy Blue (`#172B45`)
  * Dark Contrast / Editorial Sections: Midnight Navy (`#102238`)
  * Accent Colour: Muted Blue (`#526B87`)
  * Secondary Accent: Soft Champagne (`#C6B596`)
  * Body Text: Deep Navy & Slate Grey (`#697586`)
  * Borders: Warm Beige Grey (`#DED8CD`)
* **Typography:** Cormorant Garamond & Playfair Display (Headings) paired with Manrope (Body).

---

## 🗺️ Website Architecture & 8 Dedicated Routes
1. `/` — **Home** (Asymmetric hero, introduction, 3 distinctive service showcases, design philosophy, design inspiration gallery preview, customer trust & 5.0 rating, final CTA)
2. `/about` — **About Studio** (Residential interior focus, design tenets, laminate guidance, budget-conscious positioning)
3. `/bedroom-interiors` — **Bedroom Interiors** (Headboard styling, acoustic wall battens, floating nightstands, space planning)
4. `/modular-kitchens` — **Modular Kitchens** (Golden work triangle, L-shape, parallel, U-shape layouts, water-resistant BWP marine ply, tandem drawers)
5. `/wardrobe-designs` — **Wardrobe Designs** (Floor-to-ceiling sliding & hinged wardrobes, loft integration, internal accessory organization)
6. `/projects` — **Design Gallery** (Client-side category filtering, asymmetric grid, interactive lightbox modal with keyboard navigation)
7. `/reviews` — **Verified Reviews** (5.0 Google rating display, 126 reviews badge, 6 verified feedback themes, direct Google Maps link)
8. `/contact` — **Contact & Location** (Studio address, click-to-call, interactive WhatsApp inquiry builder form, embedded Google map)

---

## ⚡ WhatsApp & Conversion Architecture
* **Direct WhatsApp Integration:** Links directly to `https://wa.me/919591344715?text=...` with context-aware prefilled messages for each page.
* **Interactive Client-Side Form:** Validates user name and telephone number, formats an organized inquiry, and opens WhatsApp directly without storing data on an external server.
* **Click-to-Call:** All telephone numbers formatted as `tel:+919591344715`.
* **Floating Contact Button:** Floating action button with pulse animation and quick contact menu.

---

## 🚀 Static Production Build & Deployment
The website compiles to 100% static HTML, CSS, and JavaScript. Every route is pre-rendered into its own directory with dedicated SEO meta tags, title, OpenGraph tags, canonical link, and JSON-LD structured data.

### Commands:
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run production build and static pre-rendering
npm run build

# Verify all 8 static route files
node scripts/verify-dist.cjs
```

The output in `dist/` can be deployed directly to any static web host:
* Netlify
* Vercel
* GitHub Pages (includes `dist/404.html`)
* Cloudflare Pages
* AWS S3 / CloudFront
* Apache / Nginx / Cpanel

