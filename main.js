
/**
 * HouseInNewYork.com - Professional Intelligence Logic
 */

const BLOG_DATA = [
  { title: "Buying Your First House in New York in 2026", slug: "buying-first-house-ny-2026", cat: "Guides", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800", summ: "Master the 2026 market with specific grants for first-time buyers in NYC." },
  { title: "Top 10 Most Affordable Neighborhoods in NYC", slug: "affordable-nyc-neighborhoods", cat: "Market", img: "https://images.unsplash.com/photo-1568232109603-469036979603?auto=format&fit=crop&q=80&w=800", summ: "Detailed data on Queens and Staten Island value champions for the budget-conscious." },
  { title: "Luxury Living: NYC Most Expensive Houses", slug: "luxury-houses-for-sale-ny", cat: "Luxury", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800", summ: "A look inside the multi-million dollar townhouses defining prestige." },
  { title: "Navigating NYC for Out-of-State Buyers", slug: "out-of-state-buyer-tips", cat: "Relocation", img: "https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&q=80&w=800", summ: "The legal and financial intricacies of the New York housing market for out-of-staters." },
  { title: "Best Family-Friendly Neighborhoods in New York", slug: "family-friendly-nyc-neighborhoods", cat: "Lifestyle", img: "https://images.unsplash.com/photo-1491147334573-44cbb4602074?auto=format&fit=crop&q=80&w=1200", summ: "Ranking school districts and green spaces in Brooklyn and beyond." },
  { title: "New York Property Tax Explained", slug: "ny-property-tax-explained", cat: "Finance", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800", summ: "Essential guide to tax classes, assessments, and 421-a abatements." },
  { title: "Investing in NYC: ROI by Borough", slug: "nyc-real-estate-roi-by-borough", cat: "Investment", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600", summ: "A deep dive into multi-family home returns and rental yield projections." },
  { title: "Townhouse vs Condo in New York", slug: "townhouse-vs-condo-nyc", cat: "Guides", img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80&w=1200", summ: "Comparing ownership rights, board approvals, and maintenance vs common charges." },
  { title: "Closing Checklist for NYC Home Sales", slug: "closing-on-house-ny-checklist", cat: "Legal", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800", summ: "A definitive step-by-step to the final 60-day closing gauntlet." },
  { title: "Future Trends: NYC Housing Market 5-Year Outlook", slug: "nyc-housing-market-future-trends", cat: "Market", img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1600", summ: "Sustainability, rezoning, and the impact of transit on values." }
];

document.addEventListener('DOMContentLoaded', () => {
    injectSharedUI();
    initModals();
    const blogGrid = document.getElementById('blog-grid');
    if (blogGrid) {
        initBlogGrid(blogGrid);
    }
});

function injectSharedUI() {
    // 1. Footer Injection
    const footer = document.getElementById('global-footer');
    if (footer) {
        footer.innerHTML = `
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div class="col-span-1 md:col-span-2">
                        <h2 class="text-2xl font-serif font-bold text-gold mb-6 tracking-tighter uppercase">HouseInNewYork.com</h2>
                        <p class="text-slate text-sm leading-relaxed max-w-sm font-light">The premier authority on the New York real estate landscape since 2009. From Manhattan brownstones to high-yield outer borough multi-family assets.</p>
                    </div>
                    <div>
                        <h4 class="text-gold font-bold uppercase tracking-[0.2em] text-[10px] mb-6">Explore</h4>
                        <ul class="space-y-4 text-[11px] uppercase font-bold tracking-widest text-slate">
                            <li><a href="index.html" class="hover:text-gold transition">Market Analysis</a></li>
                            <li><a href="contact.html" class="hover:text-gold transition">Consultation</a></li>
                            <li><a href="privacy.html" class="hover:text-gold transition">Data Privacy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-gold font-bold uppercase tracking-[0.2em] text-[10px] mb-6">Connect</h4>
                        <p class="text-xs text-slate font-bold mb-2">webseoar@gmail.com</p>
                        <p class="text-xs text-slate font-bold">+201010373331</p>
                    </div>
                </div>
                <div class="border-t border-white/10 pt-10 text-[9px] uppercase tracking-[0.4em] text-gray-500 text-center">
                    &copy; 2024 HouseInNewYork.com &bull; Authority Portfolios
                </div>
            </div>`;
    }

    // 2. Sidebar Injection
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.innerHTML = `
            <div class="bg-navy p-10 text-center border-b-4 border-gold shadow-2xl mb-10 relative overflow-hidden">
                <div class="absolute inset-0 opacity-5 pointer-events-none">
                    <div class="absolute inset-0" style="background-image: url('https://www.transparenttextures.com/patterns/carbon-fibre.png');"></div>
                </div>
                <div class="relative z-10">
                    <div class="inline-block p-5 border-2 border-gold rounded-full mb-6">
                        <div class="text-gold font-serif text-4xl font-bold">15</div>
                        <div class="text-[9px] text-white uppercase tracking-[0.3em]">Years</div>
                    </div>
                    <h3 class="text-white font-serif text-2xl mb-4 italic">Heritage Status</h3>
                    <p class="text-slate text-sm font-light leading-relaxed mb-8">"Providing institutional-grade market intelligence for over a decade."</p>
                    <div class="grid grid-cols-2 gap-3 text-[10px] uppercase font-bold tracking-[0.2em]">
                        <div class="bg-white/5 text-gold p-3 border border-gold/20 backdrop-blur-sm">DA 45+</div>
                        <div class="bg-white/5 text-gold p-3 border border-gold/20 backdrop-blur-sm">0% Spam</div>
                    </div>
                </div>
            </div>
            <div class="bg-white p-10 border border-gray-100 shadow-xl">
                <h3 class="text-sm font-bold text-navy mb-6 uppercase tracking-[0.2em] text-center border-b border-gray-100 pb-4">Insider Intelligence</h3>
                <p class="text-xs text-slate mb-6 text-center font-light">Join the elite 5% receiving off-market briefings every Tuesday.</p>
                <form class="space-y-4">
                    <input type="email" placeholder="Acquisition Email" class="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-100 text-xs focus:outline-none focus:border-gold transition-all" />
                    <button class="w-full bg-navy text-white font-bold py-4 uppercase text-[10px] tracking-[0.3em] hover:bg-gold hover:text-navy transition-all duration-300">Join the Registry</button>
                </form>
            </div>`;
    }

    // 3. Floating Action Buttons Injection
    const floatingActions = document.getElementById('floating-actions');
    if (floatingActions) {
        floatingActions.innerHTML = `
            <div class="fixed bottom-8 left-8 z-40 group">
                <button id="open-search-popup" class="bg-navy hover:bg-gold hover:text-navy text-white font-bold py-4 px-8 rounded-sm shadow-2xl flex items-center gap-3 border border-gold/50 transition-all duration-500 transform hover:scale-105 active:scale-95">
                    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    <span class="text-[10px] uppercase tracking-[0.3em]">SEARCH FOR HOUSE</span>
                </button>
            </div>
            <div class="fixed bottom-8 right-8 z-40 group">
                <button id="open-domain-popup" class="bg-gold hover:bg-navy hover:text-white text-navy font-bold py-4 px-8 rounded-sm shadow-2xl flex items-center gap-3 border border-white transition-all duration-500 transform hover:scale-105 active:scale-95">
                    <span class="relative flex h-2 w-2"><span class="animate-ping absolute h-full w-full rounded-full bg-navy group-hover:bg-gold opacity-75"></span><span class="relative rounded-full h-2 w-2 bg-navy group-hover:bg-gold"></span></span>
                    <span class="text-[10px] uppercase tracking-[0.3em]">OWN THIS DOMAIN</span>
                </button>
            </div>
        `;
    }
}

function initModals() {
    const domainModal = document.getElementById('domain-modal');
    if (domainModal) {
        domainModal.innerHTML = `
            <div class="absolute inset-0 bg-navy/95 backdrop-blur-xl modal-overlay"></div>
            <div class="relative bg-white max-w-2xl w-full p-12 md:p-16 shadow-[0_50px_100px_rgba(0,0,0,0.5)] border-t-8 border-gold animate-fade-in mx-4">
                <button class="close-modal absolute top-6 right-6 text-slate hover:text-navy transition-colors">
                    <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div class="text-center">
                    <div class="inline-block bg-gold/5 text-gold text-[10px] font-bold tracking-[0.4em] uppercase py-2 px-8 mb-8 border border-gold/10">Strategic Asset Transfer</div>
                    <h2 class="text-4xl md:text-6xl font-serif font-bold text-navy mb-8 leading-tight uppercase tracking-tighter italic">Acquire Houseinnewyork.com</h2>
                    <p class="text-lg text-gray-700 mb-10 font-light leading-relaxed">This <span class="text-navy font-bold italic underline decoration-gold decoration-2">15-year established</span> digital authority with <span class="text-navy font-bold">Zero Spam Score</span> is now available for institutional or private acquisition.</p>
                    
                    <div class="bg-gray-50 p-10 border border-gray-100 mb-10 text-left space-y-6">
                        <div class="flex items-center gap-6">
                            <div class="text-gold font-bold uppercase text-[10px] tracking-widest w-24">Direct Email</div>
                            <div class="text-navy font-bold text-lg select-all border-b border-navy/10">webseoar@gmail.com</div>
                        </div>
                        <div class="flex items-center gap-6">
                            <div class="text-gold font-bold uppercase text-[10px] tracking-widest w-24">WhatsApp</div>
                            <div class="text-navy font-bold text-lg select-all border-b border-navy/10">+201010373331</div>
                        </div>
                    </div>
                    <p class="text-[9px] uppercase tracking-[0.3em] text-slate font-bold">Strictly confidential inquiries only.</p>
                </div>
            </div>`;
    }

    const searchModal = document.getElementById('search-modal');
    if (searchModal) {
        searchModal.innerHTML = `
            <div class="absolute inset-0 bg-navy/95 backdrop-blur-xl modal-overlay"></div>
            <div class="relative bg-white max-w-2xl w-full p-12 md:p-16 shadow-[0_50px_100px_rgba(0,0,0,0.5)] border-t-8 border-navy animate-fade-in mx-4">
                <button class="close-modal absolute top-6 right-6 text-slate hover:text-navy transition-colors">
                    <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div class="text-center mb-10">
                    <div class="text-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4">Concierge Services</div>
                    <h2 class="text-3xl md:text-5xl font-serif font-bold text-navy uppercase mb-4 italic">Find Your Sanctuary</h2>
                    <p class="text-sm text-slate font-light leading-relaxed">Leverage our proprietary database of off-market listings and deep neighborhood ROI data.</p>
                </div>
                <form action="https://formspree.io/f/xblpnbep" method="POST" class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" name="name" placeholder="Full Name" required class="w-full bg-gray-50 border-b-2 border-gray-100 p-4 text-xs focus:outline-none focus:border-gold transition-all font-light">
                        <input type="email" name="email" placeholder="Professional Email" required class="w-full bg-gray-50 border-b-2 border-gray-100 p-4 text-xs focus:outline-none focus:border-gold transition-all font-light">
                    </div>
                    <textarea name="message" placeholder="Describe your ideal New York residence or investment criteria..." rows="4" required class="w-full bg-gray-50 border-b-2 border-gray-100 p-4 text-xs focus:outline-none focus:border-gold transition-all font-light leading-relaxed"></textarea>
                    <button type="submit" class="w-full bg-navy text-white font-bold py-5 uppercase text-[10px] tracking-[0.4em] hover:bg-gold hover:text-navy transition-all duration-500 shadow-xl">Transmit Search Criteria</button>
                </form>
                <div class="mt-10 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div class="text-[9px] font-bold uppercase tracking-widest text-slate">Immediate WhatsApp Response:</div>
                    <a href="https://wa.me/201010373331" target="_blank" class="bg-green-600 hover:bg-green-700 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-3 rounded-full flex items-center gap-2 shadow-lg transition-all duration-300 transform hover:scale-105">
                        <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                        Secure Line
                    </a>
                </div>
            </div>`;
    }

    const setupModal = (modalId, triggerId) => {
        const modal = document.getElementById(modalId);
        const trigger = document.getElementById(triggerId);
        if (!modal || !trigger) return;

        const toggle = (show) => {
            modal.classList.toggle('hidden', !show);
            document.body.style.overflow = show ? 'hidden' : '';
        };

        trigger.addEventListener('click', () => toggle(true));
        modal.querySelector('.modal-overlay')?.addEventListener('click', () => toggle(false));
        modal.querySelectorAll('.close-modal').forEach(btn => btn.addEventListener('click', () => toggle(false)));
    };

    setupModal('domain-modal', 'open-domain-popup');
    setupModal('search-modal', 'open-search-popup');
}

function initBlogGrid(grid) {
    grid.innerHTML = BLOG_DATA.map(p => `
        <article class="group bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-700 animate-fade-in flex flex-col h-full">
            <div class="relative aspect-[16/10] overflow-hidden">
                <img src="${p.img}" alt="${p.title}" class="w-full h-full object-cover transform transition duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" onerror="this.src='https://images.unsplash.com/photo-1496871455396-14e56815f1f4?auto=format&fit=crop&q=80&w=800'" />
                <div class="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-all duration-700"></div>
                <span class="absolute top-6 left-6 bg-navy/90 backdrop-blur-md text-gold text-[9px] font-bold uppercase tracking-[0.3em] px-4 py-2 border border-gold/20 shadow-2xl">${p.cat}</span>
            </div>
            <div class="p-8 md:p-10 flex flex-col flex-grow">
                <h3 class="text-2xl font-serif font-bold text-navy mb-4 group-hover:text-gold transition-colors leading-tight italic">
                    <a href="${p.slug}.html">${p.title}</a>
                </h3>
                <p class="text-gray-600 text-sm leading-relaxed mb-8 flex-grow font-light">${p.summ}</p>
                <a href="${p.slug}.html" class="mt-auto text-[10px] font-bold text-navy uppercase tracking-[0.4em] inline-flex items-center gap-3 group-hover:gap-5 transition-all duration-500">
                    Acquire Intelligence <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
            </div>
        </article>`).join('');
}
