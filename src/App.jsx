import React from 'react';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import InteractiveSpotlight from './components/InteractiveSpotlight.jsx';
import ProductShowcase from './components/ProductShowcase.jsx';

function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-200 selection:bg-orange-500/30 selection:text-orange-200">
      {/* Immersive hero with Spline 3D */}
      <Hero />

      {/* Value props with iconography */}
      <Features />

      {/* Scroll-reactive 3D-style spotlight */}
      <InteractiveSpotlight />

      {/* Product grid with rich visuals and CTA */}
      <ProductShowcase />
    </div>
  );
}

export default App;
