import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Gallery from '../components/Gallery';

const HomePage: React.FC = () => {
  return (
    <main className="bg-black min-h-screen">
      <div className="max-w-[1400px] mx-auto relative">
        {/* Vertical Lines */}
        <div className="absolute inset-0 flex justify-between pointer-events-none">
          <div className="w-px bg-gray-800/20 h-full" />
          <div className="w-px bg-gray-800/20 h-full" />
        </div>

        {/* Content */}
        <div className="px-8 relative">
          <Hero />
          <About />
          <Gallery />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
