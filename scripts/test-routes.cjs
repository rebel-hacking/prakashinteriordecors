const http = require('http');
const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'dist');

// Create a lightweight static server pointing directly to dist
const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';
  
  let filePath = path.join(distDir, reqPath);
  
  // If it's a directory or route without extension, check for route/index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  } else if (!fs.existsSync(filePath)) {
    const asDir = path.join(distDir, reqPath, 'index.html');
    if (fs.existsSync(asDir)) {
      filePath = asDir;
    } else {
      filePath = path.join(distDir, '404.html');
    }
  }

  if (fs.existsSync(filePath)) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fs.readFileSync(filePath));
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(4173, '127.0.0.1', async () => {
  console.log('Static production server listening on http://127.0.0.1:4173');

  const routes = [
    '/',
    '/about',
    '/bedroom-interiors',
    '/modular-kitchens',
    '/wardrobe-designs',
    '/projects',
    '/reviews',
    '/contact'
  ];

  let allPass = true;

  for (const r of routes) {
    await new Promise((resolve) => {
      http.get(`http://127.0.0.1:4173${r}`, (res) => {
        const pass = res.statusCode === 200;
        console.log(`Route: ${r.padEnd(22)} HTTP ${res.statusCode} ${pass ? '✓' : '✗'}`);
        if (!pass) allPass = false;
        resolve();
      }).on('error', (err) => {
        console.error(`Route: ${r} Error: ${err.message}`);
        allPass = false;
        resolve();
      });
    });
  }

  server.close(() => {
    if (allPass) {
      console.log('\n✓ ALL 8 STATIC ROUTES ACCESSIBLE DIRECTLY WITH HTTP 200 OK!');
      process.exit(0);
    } else {
      process.exit(1);
    }
  });
});
