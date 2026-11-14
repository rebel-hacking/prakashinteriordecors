import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { BedroomInteriors } from './pages/BedroomInteriors';
import { ModularKitchens } from './pages/ModularKitchens';
import { WardrobeDesigns } from './pages/WardrobeDesigns';
import { Projects } from './pages/Projects';
import { Reviews } from './pages/Reviews';
import { Contact } from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior
    });
  }, [pathname]);

  return null;
}

// 404 Page Component
function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-ivory py-20 px-4">
      <div className="text-center max-w-md mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest text-mutedBlue font-semibold block">
          404 — Page Not Found
        </span>
        <h1 className="font-serif text-4xl text-navy">
          Looking for a Specific Space?
        </h1>
        <p className="text-sm text-slateGrey">
          The requested page could not be located. You can return to our homepage or explore our design gallery below.
        </p>
        <div className="pt-4 flex items-center justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 bg-navy text-ivory text-xs uppercase tracking-wider font-semibold rounded"
          >
            Return Home
          </Link>
          <Link
            to="/projects"
            className="px-6 py-3 border border-navy/30 text-navy text-xs uppercase tracking-wider font-semibold rounded hover:bg-navy/5"
          >
            View Gallery
          </Link>
        </div>
      </div>
    </div>
  );
}

export function App() {
  return (
    <div className="flex flex-col min-h-screen bg-ivory text-navy font-sans selection:bg-champagne selection:text-navy-dark">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bedroom-interiors" element={<BedroomInteriors />} />
          <Route path="/modular-kitchens" element={<ModularKitchens />} />
          <Route path="/wardrobe-designs" element={<WardrobeDesigns />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;

