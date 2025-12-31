
/**
 * HouseInNewYork.com - Professional Intelligence Logic
 */

const BLOG_DATA = [
  { title: "Buying Your First House in New York in 2026", slug: "buying-first-house-ny-2026", cat: "Guides", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800", summ: "Master the 2026 market with specific grants for first-time buyers in NYC." },
  { title: "Top 10 Most Affordable Neighborhoods in NYC", slug: "affordable-nyc-neighborhoods", cat: "Market", img: "https://images.unsplash.com/photo-1568232109603-469036979603?auto=format&fit=crop&q=80&w=800", summ: "Detailed data on Queens and Staten Island value champions for the budget-conscious." },
  { title: "Luxury Living: NYC Most Expensive Houses", slug: "luxury-houses-for-sale-ny", cat: "Luxury", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800", summ: "A look inside the multi-million dollar townhouses defining prestige." },
  { title: "Navigating NYC for Out-of-State Buyers", slug: "out-of-state-buyer-tips", cat: "Relocation", img: "https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&q=80&w=800", summ: "The legal and financial intricacies of the New York housing market for out-of-staters." },
  { title: "Best Family-Friendly Neighborhoods in New York", slug: "family-friendly-nyc-neighborhoods", cat: "Lifestyle", img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=800", summ: "Ranking school districts and green spaces in Brooklyn and beyond." },
  { title: "New York Property Tax Explained", slug: "ny-property-tax-explained", cat: "Finance", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800", summ: "Essential guide to tax classes, assessments, and 421-a abatements." },
  { title: "Investing in NYC: ROI by Borough", slug: "nyc-real-estate-roi-by-borough", cat: "Investment", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800", summ: "A deep dive into multi-family home returns and rental yield projections." },
  { title: "Townhouse vs Condo in New York", slug: "townhouse-vs-condo-nyc", cat: "Guides", img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80&w=800", summ: "Comparing ownership rights, board approvals, and maintenance vs common charges." },
  { title: "Closing Checklist for NYC Home Sales", slug: "closing-on-house-ny-checklist", cat: "Legal", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800", summ: "A definitive step-by-step to the final 60-day closing gauntlet." },
  { title: "Future Trends: NYC Housing Market 5-Year Outlook", slug: "nyc-housing-market-future-trends", cat: "Market", img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=800", summ: "Sustainability, rezoning, and the impact of transit on values." }
];

document.addEventListener('DOMContentLoaded', () => {
    injectSharedUI();
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
                        <h2 class="text-2xl font-serif font-bold text-gold mb-6">HouseInNewYork.com</h2>
                        <p class="text-slate text-sm leading-relaxed max-w-sm">Authority NYC Real Estate insights since 2009. From Manhattan penthouses to Brooklyn brownstones.</p>
                    </div>
                    <div>
                        <h4 class="text-gold font-bold uppercase tracking-widest text-xs mb-6">Explore</h4>
                        <ul class="space-y-4 text-sm text-slate">
                            <li><a href="index.html" class="hover:text-white transition">Home</a></li>
                            <li><a href="contact.html" class="hover:text-white transition">Contact Us</a></li>
                            <li><a href="privacy.html" class="hover:text-white transition">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-gold font-bold uppercase tracking-widest text-xs mb-6">Contact</h4>
                        <p class="text-sm text-slate">webseoar@gmail.com<br>+201010373331</p>
                    </div>
                </div>
                <div class="border-t border-white/10 pt-10 text-[10px] uppercase tracking-widest text-gray-500 text-center">
                    &copy; 2024 HouseInNewYork.com. All Rights Reserved.
                </div>
            </div>`;
    }

    // 2. Sidebar Injection
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.innerHTML = `
            <div class="bg-navy p-8 text-center border-t-4 border-gold shadow-lg mb-10">
                <div class="inline-block p-4 border-2 border-gold rounded-full mb-4">
                    <div class="text-gold font-serif text-3xl font-bold">15</div>
                    <div class="text-[10px] text-white uppercase tracking-tighter">Years</div>
                </div>
                <h3 class="text-white font-serif text-xl mb-2">Heritage of Trust</h3>
                <p class="text-slate text-sm italic">"NYC's most authoritative digital real estate asset."</p>
                <div class="grid grid-cols-2 gap-2 mt-4 text-[10px] uppercase font-bold tracking-widest">
                    <div class="bg-slate/20 text-gold p-2 border border-gold/30">DA 45+</div>
                    <div class="bg-slate/20 text-gold p-2 border border-gold/30">0% Spam</div>
                </div>
            </div>
            <div class="bg-white p-8 border border-gray-100 shadow-sm">
                <h3 class="text-lg font-serif font-bold text-navy mb-4 uppercase tracking-wider">Insider Briefing</h3>
                <input type="email" placeholder="Email Address" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-sm mb-4 focus:outline-none focus:border-gold" />
                <button class="w-full bg-navy text-white font-bold py-3 uppercase text-xs tracking-widest hover:bg-gold hover:text-navy transition">Join the Elite</button>
            </div>`;
    }

    // 3. Domain Modal Logic
    const modal = document.getElementById('domain-modal');
    if (modal) {
        modal.innerHTML = `
            <div class="absolute inset-0 bg-navy/95 backdrop-blur-md" id="modal-overlay"></div>
            <div class="relative bg-white max-w-2xl w-full p-8 md:p-12 shadow-2xl border-t-8 border-gold animate-fade-in">
                <button id="close-modal" class="absolute top-4 right-4 text-slate hover:text-navy transition">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div class="text-center">
                    <div class="inline-block bg-gold/10 text-gold text-[10px] font-bold tracking-widest uppercase py-2 px-6 mb-6 rounded-full border border-gold/20">Domain Acquisition Inquiry</div>
                    <h2 class="text-3xl md:text-5xl font-serif font-bold text-navy mb-6 leading-tight">Acquire Houseinnewyork.com</h2>
                    <p class="text-lg text-gray-700 mb-8 font-light">This 15-year-old premium asset with <span class="text-navy font-bold">0 Spam Score</span> is perfect for NYC real estate dominance.</p>
                    <div class="bg-gray-50 p-6 border border-gray-100 mb-8 text-left space-y-4">
                        <div class="flex items-center gap-4 text-xs font-bold uppercase text-navy">
                            <span class="text-gold w-20">Email:</span> webseoar@gmail.com
                        </div>
                        <div class="flex items-center gap-4 text-xs font-bold uppercase text-navy">
                            <span class="text-gold w-20">WhatsApp:</span> +201010373331
                        </div>
                    </div>
                </div>
            </div>`;
        const openBtn = document.getElementById('open-domain-popup');
        const closeBtn = document.getElementById('close-modal');
        const overlay = document.getElementById('modal-overlay');
        const toggle = (show) => {
            modal.classList.toggle('hidden', !show);
            document.body.style.overflow = show ? 'hidden' : '';
        };
        openBtn?.addEventListener('click', () => toggle(true));
        [closeBtn, overlay].forEach(el => el?.addEventListener('click', () => toggle(false)));
    }
}

function initBlogGrid(grid) {
    grid.innerHTML = BLOG_DATA.map(p => `
        <article class="group bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in flex flex-col h-full">
            <div class="relative aspect-[16/10] overflow-hidden">
                <img src="${p.img}" alt="${p.title}" class="w-full h-full object-cover transform transition duration-1000 group-hover:scale-110" />
                <span class="absolute top-4 left-4 bg-navy text-gold text-[10px] font-bold uppercase tracking-widest px-3 py-1 shadow-lg">${p.cat}</span>
            </div>
            <div class="p-6 flex flex-col flex-grow">
                <h3 class="text-xl font-serif font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                    <a href="${p.slug}.html">${p.title}</a>
                </h3>
                <p class="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">${p.summ}</p>
                <a href="${p.slug}.html" class="mt-auto text-xs font-bold text-navy uppercase tracking-widest inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Full Analysis <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
            </div>
        </article>`).join('');
}
