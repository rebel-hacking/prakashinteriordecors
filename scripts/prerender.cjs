const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'dist');

if (!fs.existsSync(distDir)) {
  console.error('Dist directory does not exist. Please run vite build first.');
  process.exit(1);
}

const templatePath = path.join(distDir, 'index.html');
const templateHtml = fs.readFileSync(templatePath, 'utf8');

const routes = [
  {
    path: '/',
    dir: '',
    title: 'Prakash Interior Decors | Premium Residential Interiors & Modular Living in Bengaluru',
    description: 'Prakash Interior Decors offers thoughtful residential bedroom interiors, customised designer wardrobes, and modular kitchens in Bengaluru (HRBR Layout, Kalyan Nagar). 5.0 Google Rated.'
  },
  {
    path: '/about',
    dir: 'about',
    title: 'About Prakash Interior Decors | Residential Interior Studio Bengaluru',
    description: 'Learn about Prakash Interior Decors, a dedicated residential interior decorator in HRBR Layout, Kalyan Nagar, Bengaluru, offering budget-conscious, high-quality bedroom, wardrobe, and kitchen interiors.'
  },
  {
    path: '/bedroom-interiors',
    dir: 'bedroom-interiors',
    title: 'Bedroom Interiors Bengaluru | Custom Bedroom Design | Prakash Interior Decors',
    description: 'Transform your bedroom with Prakash Interior Decors in Bengaluru. Specialized in space-conscious bedroom design, custom headboards, fluted wall accents, and seamless wardrobe integration.'
  },
  {
    path: '/modular-kitchens',
    dir: 'modular-kitchens',
    title: 'Modular Kitchens Bengaluru | Modular Kitchen Design | Prakash Interior Decors',
    description: 'Plan your modular kitchen in Bengaluru with Prakash Interior Decors. Ergonomic L-shaped, parallel, and U-shaped kitchens built with water-resistant BWP marine ply and smooth soft-close storage.'
  },
  {
    path: '/wardrobe-designs',
    dir: 'wardrobe-designs',
    title: 'Customised Wardrobes Bengaluru | Wardrobe Carpentry | Prakash Interior Decors',
    description: 'Customised and designer wardrobe carpentry in Bengaluru by Prakash Interior Decors. Floor-to-ceiling sliding wardrobes, hinged wardrobes, and tailored storage organization.'
  },
  {
    path: '/projects',
    dir: 'projects',
    title: 'Design Inspiration Gallery | Bedrooms, Kitchens, Wardrobes | Prakash Interior Decors',
    description: 'Explore curated interior design inspiration for modern residential bedrooms, modular kitchens, and custom wardrobes in Bengaluru by Prakash Interior Decors.'
  },
  {
    path: '/reviews',
    dir: 'reviews',
    title: 'Verified Customer Reviews & Google Rating | Prakash Interior Decors Bengaluru',
    description: 'Read verified customer feedback themes and Google reviews for Prakash Interior Decors. Rated 5.0/5 across 126 reviews for residential bedrooms, wardrobes, and kitchens in Bengaluru.'
  },
  {
    path: '/contact',
    dir: 'contact',
    title: 'Contact Prakash Interior Decors | HRBR Layout Kalyan Nagar Bengaluru',
    description: 'Contact Prakash Interior Decors in HRBR Layout 2nd Block, Kalyan Nagar, Bengaluru. Phone: +91 95913 44715. Direct WhatsApp consultations for bedroom, kitchen, and wardrobe interiors.'
  }
];

const baseUrl = 'https://prakashinteriordecors.com';

console.log('Generating static HTML files for all eight routes...');

routes.forEach(route => {
  let html = templateHtml;
  const canonicalUrl = `${baseUrl}${route.path === '/' ? '' : route.path}`;

  // Replace Title
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${route.title}</title>`);

  // Replace Meta Description
  html = html.replace(
    /<meta name="description" content="[\s\S]*?" \/>/i,
    `<meta name="description" content="${route.description}" />`
  );

  // Replace Canonical Link
  html = html.replace(
    /<link rel="canonical" href="[\s\S]*?" \/>/i,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );

  // Replace OpenGraph Title & Description
  html = html.replace(
    /<meta property="og:title" content="[\s\S]*?" \/>/i,
    `<meta property="og:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[\s\S]*?" \/>/i,
    `<meta property="og:description" content="${route.description}" />`
  );
  html = html.replace(
    /<meta property="og:url" content="[\s\S]*?" \/>/i,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );

  if (route.dir === '') {
    // Root index.html
    fs.writeFileSync(templatePath, html, 'utf8');
    console.log(`✓ Generated root: dist/index.html`);
  } else {
    // Sub-route directory
    const targetDir = path.join(distDir, route.dir);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    const targetFile = path.join(targetDir, 'index.html');
    fs.writeFileSync(targetFile, html, 'utf8');
    console.log(`✓ Generated route: dist/${route.dir}/index.html`);
  }
});

// Also create 404.html fallback for static hosts
const notFoundHtml = templateHtml
  .replace(/<title>[\s\S]*?<\/title>/i, `<title>Page Not Found | Prakash Interior Decors</title>`)
  .replace(/<meta name="description" content="[\s\S]*?" \/>/i, `<meta name="description" content="Page not found - Prakash Interior Decors" />`);

fs.writeFileSync(path.join(distDir, '404.html'), notFoundHtml, 'utf8');
console.log(`✓ Generated static fallback: dist/404.html`);

console.log('All static route HTML files successfully created!');

