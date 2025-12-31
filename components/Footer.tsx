
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-serif font-bold text-gold mb-6">HouseInNewYork.com</h2>
            <p className="text-slate text-sm leading-relaxed max-w-sm mb-8">
              The premier authority on the New York real estate market. From Manhattan brownstones to emerging investments in Queens, we provide the data you need to move with confidence.
            </p>
            <div className="flex space-x-4">
              {['fb', 'tw', 'ig', 'li'].map(social => (
                <div key={social} className="w-10 h-10 border border-slate rounded-full flex items-center justify-center hover:bg-gold hover:border-gold transition cursor-pointer">
                  <span className="uppercase text-[10px] font-bold">{social}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-slate">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="#privacy" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#article/luxury-houses-for-sale-ny" className="hover:text-white transition">Luxury Listings</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-slate">
              <li className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-gray-500">Email</span>
                <span>webseoar@gmail.com</span>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-gray-500">WhatsApp</span>
                <span>+201010373331</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
          <div>&copy; 2024 HouseInNewYork.com. All Rights Reserved.</div>
          <div className="mt-4 md:mt-0 flex space-x-8">
            <a href="#privacy" className="hover:text-gold">Privacy</a>
            <a href="#contact" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
