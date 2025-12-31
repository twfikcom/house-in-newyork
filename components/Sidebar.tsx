import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="space-y-10 sticky top-24">
      {/* Authority Badge */}
      <div className="bg-navy p-8 text-center border-t-4 border-gold shadow-lg">
        <div className="inline-block p-4 border-2 border-gold rounded-full mb-4">
          <div className="text-gold font-serif text-3xl font-bold">15</div>
          <div className="text-[10px] text-white uppercase tracking-tighter">Years</div>
        </div>
        <h3 className="text-white font-serif text-xl mb-2">Heritage of Trust</h3>
        <p className="text-slate text-sm mb-6 italic">
          "The definitive voice in New York real estate since 2009. Unmatched domain authority."
        </p>
        <div className="grid grid-cols-2 gap-2 text-[10px] uppercase font-bold tracking-widest">
          <div className="bg-slate/20 text-gold p-2 border border-gold/30">DA 45+</div>
          <div className="bg-slate/20 text-gold p-2 border border-gold/30">Clean Profile</div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-white p-8 border border-gray-100 shadow-sm">
        <h3 className="text-lg font-serif font-bold text-navy mb-4 uppercase tracking-wider">Insider Briefing</h3>
        <p className="text-sm text-gray-600 mb-6">
          Weekly analysis of NYC's most secretive luxury listings and investment data.
        </p>
        <form className="space-y-4">
          <input 
            type="email" 
            placeholder="Your Email Address" 
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-gold transition"
          />
          <button className="w-full bg-navy text-white font-bold py-3 uppercase text-xs tracking-[0.2em] hover:bg-gold hover:text-navy transition duration-300">
            Join the List
          </button>
        </form>
      </div>

      {/* Categories */}
      <div className="bg-white p-8 border border-gray-100 shadow-sm">
        <h3 className="text-lg font-serif font-bold text-navy mb-6 uppercase tracking-wider">Expertise</h3>
        <ul className="space-y-3">
          {['Market Analysis', 'Luxury Portfolios', 'Neighborhood Guides', 'Investment ROI', 'Legal & Tax'].map((cat) => (
            <li key={cat}>
              <a href="#" className="flex justify-between items-center text-sm text-gray-600 hover:text-gold transition">
                <span>{cat}</span>
                <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded-full text-gray-400 font-bold">12</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;