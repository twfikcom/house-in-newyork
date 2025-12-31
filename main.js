/**
 * HouseInNewYork.com - Professional Intelligence Logic
 */

const BLOG_DATA = [
  { title: "Buying Your First House in New York in 2026", slug: "buying-first-house-ny-2026", date: "Jan 10, 2026", cat: "Guides", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800", summ: "Master the 2026 market with specific grants for first-time buyers in NYC." },
  { title: "Top 10 Most Affordable Neighborhoods in NYC", slug: "affordable-nyc-neighborhoods", date: "Jan 15, 2026", cat: "Market", img: "https://images.unsplash.com/photo-1513584684374-8bdb74a9fe2f?auto=format&fit=crop&q=80&w=800", summ: "Detailed data on Queens and Staten Island value champions for the budget-conscious." },
  { title: "Luxury Living: NYC Most Expensive Houses", slug: "luxury-houses-for-sale-ny", date: "Jan 20, 2026", cat: "Luxury", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800", summ: "A look inside the multi-million dollar townhouses defining prestige." },
  { title: "Navigating NYC for Out-of-State Buyers", slug: "out-of-state-buyer-tips", date: "Nov 05, 2025", cat: "Relocation", img: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=800", summ: "The legal and financial intricacies of the New York housing market for out-of-staters." },
  { title: "Best Family-Friendly Neighborhoods in New York", slug: "family-friendly-nyc-neighborhoods", date: "Nov 12, 2025", cat: "Lifestyle", img: "https://images.unsplash.com/photo-1527018601619-a508a2be00cd?auto=format&fit=crop&q=80&w=1200", summ: "Ranking school districts and green spaces in Brooklyn and beyond." },
  { title: "New York Property Tax Explained", slug: "ny-property-tax-explained", date: "Nov 18, 2025", cat: "Finance", img: "https://images.unsplash.com/photo-1554224155-8d0413a8c596?auto=format&fit=crop&q=80&w=800", summ: "Essential guide to tax classes, assessments, and 421-a abatements." },
  { title: "Investing in NYC: ROI by Borough", slug: "nyc-real-estate-roi-by-borough", date: "Nov 25, 2025", cat: "Investment", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600", summ: "A deep dive into multi-family home returns and rental yield projections." },
  { title: "Townhouse vs Condo in New York", slug: "townhouse-vs-condo-nyc", date: "Oct 05, 2025", cat: "Guides", img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80&w=1200", summ: "Comparing ownership rights, board approvals, and maintenance vs common charges." },
  { title: "Closing Checklist for NYC Home Sales", slug: "closing-on-house-ny-checklist", date: "Oct 15, 2025", cat: "Legal", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800", summ: "A definitive step-by-step to the final 60-day closing gauntlet." },
  { title: "Future Trends: NYC Housing Market 5-Year Outlook", slug: "nyc-housing-market-future-trends", date: "Oct 25, 2025", cat: "Market", img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=800", summ: "Sustainability, rezoning, and the impact of transit on values." }
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
                        <p class="text-slate text-sm leading-relaxed max-w-sm font-light">A strategic digital property portfolio established in 2009. This asset is engineered to provide brand dominance in the NYC real estate sector.</p>
                    </div>
                    <div>
                        <h4 class="text-gold font-bold uppercase tracking-[0.2em] text-[10px] mb-6">Asset Repository</h4>
                        <ul class="space-y-4 text-[11px] uppercase font-bold tracking-widest text-slate">
                            <li><a href="index.html" class="hover:text-gold transition">Intelligence Portfolio</a></li>
                            <li><a href="https://forsale.godaddy.com/forsale/houseinnewyork.com" target="_blank" class="hover:text-gold transition">Acquire This Domain</a></li>
                            <li><a href="privacy.html" class="hover:text-gold transition">Legal Status</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-gold font-bold uppercase tracking-[0.2em] text-[10px] mb-6">Contact Custodian</h4>
                        <p class="text-xs text-slate font-bold mb-2">webseoar@gmail.com</p>
                        <p class="text-xs text-slate font-bold">+201010373331</p>
                    </div>
                </div>
                <div class="border-t border-white/10 pt-10 text-[9px] uppercase tracking-[0.4em] text-gray-500 text-center">
                    <p class="mb-4 text-slate/50 max-w-2xl mx-auto">HouseInNewYork.com is a digital property offered for sale. This site is for informational and demonstration purposes and does not facilitate real estate transactions.</p>
                    &copy; 2024 HouseInNewYork.com &bull; Digital Asset Custodians
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
                    <h3 class="text-white font-serif text-2xl mb-4 italic">ASSET DATA</h3>
                    <p class="text-slate text-sm font-light leading-relaxed mb-8 uppercase tracking-widest">15YR ESTABLISHED AUTHORITY</p>
                    <div class="grid grid-cols-2 gap-3 text-[10px] uppercase font-bold tracking-[0.2em]">
                        <div class="bg-white/5 text-gold p-3 border border-gold/20 backdrop-blur-sm">DA 45+</div>
                        <div class="bg-white/5 text-gold p-3 border border-gold/20 backdrop-blur-sm">SEO MOAT</div>
                    </div>
                </div>
            </div>
            
            <div class="bg-white p-10 border border-gray-100 shadow-xl mb-10 text-center">
                <h3 class="text-xs font-bold text-navy mb-6 uppercase tracking-[0.3em] border-b border-gray-100 pb-4">Acquisition Features</h3>
                <ul class="space-y-4 text-[11px] font-medium text-slate uppercase tracking-widest mb-8 text-left">
                    <li class="flex items-start gap-3"><span class="text-gold">●</span> Historic Defensibility</li>
                    <li class="flex items-start gap-3"><span class="text-gold">●</span> Semantic Geo-String</li>
                    <li class="flex items-start gap-3"><span class="text-gold">●</span> Scalable Content Arch</li>
                </ul>
                <a href="https://forsale.godaddy.com/forsale/houseinnewyork.com" target="_blank" class="block w-full bg-gold text-navy font-bold py-4 uppercase text-[10px] tracking-[0.3em] hover:bg-navy hover:text-white transition-all duration-300 shadow-lg">ACQUIRE ASSET & DOMAIN</a>
            </div>

            <div class="bg-navy p-10 shadow-xl">
                <h3 class="text-xs font-bold text-white mb-6 uppercase tracking-[0.2em] text-center">Request Asset Briefing</h3>
                <p class="text-xs text-slate mb-6 text-center font-light leading-relaxed">Direct transmit to asset custodians for serious acquisition offers only.</p>
                <form class="space-y-4">
                    <input type="email" placeholder="Professional Email" class="w-full px-4 py-3 bg-white/5 border-b-2 border-white/10 text-white text-xs focus:outline-none focus:border-gold transition-all" />
                    <button class="w-full bg-navy border border-gold text-gold font-bold py-4 uppercase text-[10px] tracking-[0.3em] hover:bg-gold hover:text-navy transition-all duration-300">Transmit Briefing Request</button>
                </form>
            </div>`;
    }

    // 3. Floating Action Buttons Injection
    const floatingActions = document.getElementById('floating-actions');
    if (floatingActions) {
        floatingActions.innerHTML = `
            <div class="fixed bottom-8 right-8 z-40 group">
                <a href="https://forsale.godaddy.com/forsale/houseinnewyork.com" target="_blank" class="bg-gold hover:bg-navy hover:text-white text-navy font-bold py-4 px-8 rounded-sm shadow-2xl flex items-center gap-3 border border-white transition-all duration-500 transform hover:scale-105 active:scale-95">
                    <span class="relative flex h-2 w-2"><span class="animate-ping absolute h-full w-full rounded-full bg-navy group-hover:bg-gold opacity-75"></span><span class="relative rounded-full h-2 w-2 bg-navy group-hover:bg-gold"></span></span>
                    <span class="text-[10px] uppercase tracking-[0.3em]">ACQUIRE ASSET & DOMAIN</span>
                </a>
            </div>
        `;
    }
}

function initModals() {
    const domainModal = document.getElementById('domain-modal');
    if (domainModal) {
        domainModal.innerHTML = `
            <div class="absolute inset-0 bg-navy/95 backdrop-blur-xl modal-overlay"></div>
            <div class="relative bg-white max-w-2xl w-full p-12 md:p-16 shadow-[0_50px_100px_rgba(0,0,0,0.5)] border-t-8 border-gold animate-fade-in mx-4 text-center">
                <button class="close-modal absolute top-6 right-6 text-slate hover:text-navy transition-colors">
                    <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div class="inline-block bg-gold/5 text-gold text-[10px] font-bold tracking-[0.4em] uppercase py-2 px-8 mb-8 border border-gold/10">Private Placement Offering</div>
                <h2 class="text-4xl md:text-5xl font-serif font-bold text-navy mb-8 uppercase italic leading-tight">Acquire Houseinnewyork.com</h2>
                <p class="text-lg text-gray-700 mb-10 font-light leading-relaxed">This high-authority digital asset is now available via GoDaddy for immediate institutional or private acquisition.</p>
                <a href="https://forsale.godaddy.com/forsale/houseinnewyork.com" target="_blank" class="inline-block bg-gold text-navy font-bold px-12 py-5 rounded-sm shadow-xl hover:bg-navy hover:text-white transition-all uppercase tracking-widest text-xs mb-10">VIEW LISTING ON GODADDY</a>
                <p class="text-[9px] uppercase tracking-[0.3em] text-slate font-bold">Secure checkout handled by institutional escrow platforms.</p>
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
                <div class="text-[10px] font-bold text-slate uppercase tracking-widest mb-3">${p.date}</div>
                <h3 class="text-2xl font-serif font-bold text-navy mb-4 group-hover:text-gold transition-colors leading-tight italic">
                    <a href="${p.slug}.html">${p.title}</a>
                </h3>
                <p class="text-gray-600 text-sm leading-relaxed mb-8 flex-grow font-light">${p.summ}</p>
                <a href="${p.slug}.html" class="mt-auto text-[10px] font-bold text-navy uppercase tracking-[0.4em] inline-flex items-center gap-3 group-hover:gap-5 transition-all duration-500">
                    EVALUATE MARKET POSITIONING <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
            </div>
        </article>`).join('');
}