import React from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const DomainPopup: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-navy/90 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white max-w-2xl w-full p-8 md:p-12 shadow-2xl border-t-8 border-gold">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate hover:text-navy transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center">
          <div className="inline-block bg-gold/10 text-gold text-xs font-bold tracking-[0.3em] uppercase py-2 px-6 mb-6 rounded-full border border-gold/20">
            Exclusive Opportunity
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
            Acquire Houseinnewyork.com
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-8"></div>
          
          <div className="space-y-6 text-gray-700 leading-relaxed mb-10">
            <p className="text-lg">
              This premium digital asset and authority website is <span className="font-bold text-navy underline decoration-gold">15 years old</span> with an <span className="font-bold text-navy">Impeccable Historical Record</span>.
            </p>
            <p>
              It possesses high and rapidly growing Domain Authority (DA) and Page Authority (PA). Perfect for SEO dominance in the hyper-competitive NYC real estate market. Own the entire platform today.
            </p>
          </div>

          <div className="bg-gray-50 p-8 border border-gray-100 mb-10 text-left">
            <h4 className="text-navy font-bold uppercase tracking-widest text-xs mb-4 text-center">Acquisition Inquiry</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-gold p-3 rounded text-navy">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] text-slate font-bold uppercase">Email Us</div>
                  <div className="text-navy font-bold text-lg select-all">webseoar@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-gold p-3 rounded text-navy">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] text-slate font-bold uppercase">WhatsApp</div>
                  <div className="text-navy font-bold text-lg select-all">+201010373331</div>
                </div>
              </div>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="text-slate uppercase text-xs tracking-widest font-bold hover:text-gold transition"
          >
            Continue Browsing Market Reports
          </button>
        </div>
      </div>
    </div>
  );
};

export default DomainPopup;