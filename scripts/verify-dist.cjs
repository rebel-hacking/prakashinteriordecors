const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'dist');

const expectedRoutes = [
  { file: 'index.html', title: 'Prakash Interior Decors' },
  { file: 'about/index.html', title: 'About Prakash Interior Decors' },
  { file: 'bedroom-interiors/index.html', title: 'Bedroom Interiors Bengaluru' },
  { file: 'modular-kitchens/index.html', title: 'Modular Kitchens Bengaluru' },
  { file: 'wardrobe-designs/index.html', title: 'Customised Wardrobes Bengaluru' },
  { file: 'projects/index.html', title: 'Design Inspiration Gallery' },
  { file: 'reviews/index.html', title: 'Verified Customer Reviews' },
  { file: 'contact/index.html', title: 'Contact Prakash Interior Decors' },
  { file: '404.html', title: 'Page Not Found' }
];

console.log('--- STATIC AUDIT: VERIFYING ALL EIGHT ROUTES AND STATIC ARTIFACTS ---');

let allPassed = true;

expectedRoutes.forEach(({ file, title }) => {
  const fullPath = path.join(distDir, file);
  if (!fs.existsSync(fullPath)) {
    console.error(`✗ MISSING FILE: dist/${file}`);
    allPassed = false;
    return;
  }

  const stat = fs.statSync(fullPath);
  const content = fs.readFileSync(fullPath, 'utf8');

  const hasTitle = content.includes(title);
  const hasMetaDesc = content.includes('name="description"');
  const hasCanonical = content.includes('rel="canonical"');
  const hasOg = content.includes('property="og:title"');
  const hasSchema = content.includes('@type": "HomeGoodsStore"') || content.includes('@type": "PostalAddress"');
  const hasScripts = content.includes('/assets/index-') && content.includes('.js');
  const hasStyles = content.includes('/assets/index-') && content.includes('.css');

  if (stat.size > 1000 && hasTitle && hasMetaDesc && hasCanonical && hasOg && hasScripts && hasStyles) {
    console.log(`✓ dist/${file.padEnd(30)} Size: ${stat.size} bytes | Title: "${title}" | SEO & Assets Verified`);
  } else {
    console.error(`✗ AUDIT FAILED for dist/${file}: size=${stat.size}, hasTitle=${hasTitle}, hasMetaDesc=${hasMetaDesc}, hasCanonical=${hasCanonical}, hasScripts=${hasScripts}, hasStyles=${hasStyles}`);
    allPassed = false;
  }
});

// Check assets folder
const assetsDir = path.join(distDir, 'assets');
if (fs.existsSync(assetsDir)) {
  const assetFiles = fs.readdirSync(assetsDir);
  console.log(`\nAssets directory contents (${assetFiles.length} files):`);
  assetFiles.forEach(f => {
    const s = fs.statSync(path.join(assetsDir, f));
    console.log(`  • ${f.padEnd(35)} (${(s.size / 1024).toFixed(2)} KB)`);
  });
} else {
  console.error('✗ Assets directory missing');
  allPassed = false;
}

if (allPassed) {
  console.log('\n======================================================');
  console.log('✅ ALL EIGHT PRODUCTION ROUTES PASSED STATIC VALIDATION');
  console.log('======================================================');
  process.exit(0);
} else {
  process.exit(1);
}

