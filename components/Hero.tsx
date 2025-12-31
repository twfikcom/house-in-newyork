
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-110" 
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1496871455396-14e56815f1f4?auto=format&fit=crop&q=80&w=1600")' }}
      >
        <div className="absolute inset-0 bg-navy opacity-60"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
          Find Your Sanctuary in <span className="text-gold">New York</span>
        </h1>
        <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto mb-10 border-l-4 border-gold pl-6">
          Exclusive market insights, neighborhood deep-dives, and luxury property portfolios for the discerning New York homebuyer.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#article/buying-first-house-ny-2026" className="bg-gold text-navy font-bold px-8 py-4 rounded shadow-lg hover:bg-white transition uppercase tracking-widest text-sm">
            Explore 2026 Guide
          </a>
          <button onClick={() => window.location.hash = 'contact'} className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded hover:bg-white hover:text-navy transition uppercase tracking-widest text-sm">
            Consult Our Experts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
