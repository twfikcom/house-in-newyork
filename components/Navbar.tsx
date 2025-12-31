
import React from 'react';

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onNavigate: (path: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ searchQuery, onSearchChange, onNavigate }) => {
  return (
    <nav className="bg-navy text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center py-4 md:h-24 gap-4 md:gap-0">
          <div className="flex items-center">
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate(''); }} className="flex flex-col group">
              <span className="text-2xl font-serif font-bold tracking-tighter text-gold leading-none group-hover:text-white transition">
                HOUSE IN NEW YORK
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-slate">
                Premium Real Estate Authority
              </span>
            </a>
          </div>

          <div className="flex flex-grow max-w-md w-full mx-4 order-3 md:order-2">
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search premium properties & insights..."
                className="block w-full pl-10 pr-3 py-2 border border-gold/30 bg-navy/50 text-white placeholder-slate text-sm rounded-none focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-all duration-300"
              />
              {searchQuery && (
                <button 
                  onClick={() => onSearchChange('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate hover:text-gold"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          <div className="hidden md:flex items-baseline space-x-6 text-[11px] font-bold uppercase tracking-widest order-2 md:order-3">
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate(''); }} className="hover:text-gold transition">Market</a>
            <a href="#contact" className="hover:text-gold transition">Contact</a>
            <a href="#contact" className="hover:text-gold transition border border-gold px-4 py-2 rounded-sm bg-gold/10">Inquiry</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
