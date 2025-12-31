
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif text-white mb-4">Contact Our Strategists</h1>
          <p className="text-gold tracking-[0.2em] uppercase text-xs font-bold">Premium Consultation & Inquiry</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 -mt-10">
        <div className="bg-white shadow-2xl p-10 md:p-16 border-t-4 border-gold">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-serif text-navy mb-6">Direct Channels</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-4 rounded border border-gold/20 text-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-widest text-slate mb-1">Email Inquiry</h5>
                    <p className="text-navy font-bold text-lg">webseoar@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-4 rounded border border-gold/20 text-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-widest text-slate mb-1">WhatsApp Chat</h5>
                    <p className="text-navy font-bold text-lg">+201010373331</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-serif text-navy mb-6">Domain Acquisition</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                Interested in owning Houseinnewyork.com? This 15-year-old premium domain is currently available for private acquisition.
              </p>
              <div className="bg-navy text-white p-6 rounded border-l-4 border-gold">
                <p className="text-xs font-bold uppercase tracking-widest mb-2 text-gold">Status</p>
                <p className="text-lg">Accepting Private Offers</p>
              </div>
            </div>
          </div>

          <form className="space-y-6 pt-12 border-t border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-navy">Full Name</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 p-4 text-sm focus:outline-none focus:border-gold" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-navy">Email Address</label>
                <input type="email" className="w-full bg-gray-50 border border-gray-200 p-4 text-sm focus:outline-none focus:border-gold" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-navy">Message</label>
              <textarea rows={5} className="w-full bg-gray-50 border border-gray-200 p-4 text-sm focus:outline-none focus:border-gold"></textarea>
            </div>
            <button className="bg-navy text-white font-bold py-4 px-12 uppercase text-sm tracking-[0.2em] hover:bg-gold transition shadow-xl">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
