import React from 'react';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import ProductShowcase from './components/ProductShowcase.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-200 selection:bg-orange-500/30 selection:text-orange-200">
      {/* Hero with Spline scene */}
      <Hero />

      {/* Feature highlights */}
      <Features />

      {/* Product showcase */}
      <ProductShowcase />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
