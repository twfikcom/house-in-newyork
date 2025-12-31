
import React, { useState, useEffect, useMemo } from 'react';
import { Page, BlogPost } from './types';
import { BLOG_POSTS } from './constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BlogCard from './components/BlogCard';
import Sidebar from './components/Sidebar';
import DomainPopup from './components/DomainPopup';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ArticleView from './pages/ArticleView';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Simple hash-based routing simulation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('article/')) {
        const slug = hash.split('/')[1];
        const post = BLOG_POSTS.find(p => p.slug === slug);
        if (post) {
          setSelectedPost(post);
          setCurrentPage(Page.ARTICLE);
        } else {
          setCurrentPage(Page.HOME);
        }
      } else if (hash === 'contact') {
        setCurrentPage(Page.CONTACT);
      } else if (hash === 'privacy') {
        setCurrentPage(Page.PRIVACY);
      } else {
        setCurrentPage(Page.HOME);
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return BLOG_POSTS;
    const query = searchQuery.toLowerCase();
    return BLOG_POSTS.filter(post => 
      post.title.toLowerCase().includes(query) || 
      post.summary.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const navigateTo = (path: string) => {
    window.location.hash = path;
    if (path === '') {
      setSearchQuery('');
    }
  };

  const renderHomeContent = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Blog Feed */}
        <div className="lg:col-span-8">
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-4">
            <h2 className="text-3xl font-serif font-bold text-navy">
              {searchQuery ? (
                <>
                  {filteredPosts.length > 0 ? 'Search Results for' : 'No results for'}{' '}
                  <span className="text-gold italic">"{searchQuery}"</span>
                </>
              ) : (
                'Latest Insights'
              )}
            </h2>
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="text-xs font-bold text-slate uppercase tracking-widest mt-2 md:mt-0 hover:text-navy"
              >
                Clear Search &times;
              </button>
            )}
          </div>
          
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="bg-white p-12 text-center border border-dashed border-gray-300">
              <div className="text-gold mb-4 flex justify-center">
                <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-navy mb-2">Refine Your Search</h3>
              <p className="text-slate text-sm">We couldn't find any articles matching your criteria. Please try a different neighborhood or property type.</p>
            </div>
          )}
        </div>
        {/* Sidebar */}
        <div className="lg:col-span-4">
          <Sidebar />
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (currentPage) {
      case Page.HOME:
        return renderHomeContent();
      case Page.ARTICLE:
        return selectedPost ? <ArticleView post={selectedPost} /> : <div>Post not found</div>;
      case Page.CONTACT:
        return <Contact />;
      case Page.PRIVACY:
        return <PrivacyPolicy />;
      default:
        return <div className="p-20 text-center">Page Not Found</div>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar 
        searchQuery={searchQuery} 
        onSearchChange={setSearchQuery} 
        onNavigate={navigateTo}
      />
      
      {currentPage === Page.HOME && !searchQuery && <Hero />}

      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer />

      {/* Sticky Domain Call to Action */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsPopupOpen(true)}
          className="bg-gold hover:bg-yellow-600 text-navy font-bold py-3 px-6 rounded-full shadow-2xl transform transition hover:scale-105 active:scale-95 flex items-center gap-2 border-2 border-white"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-navy opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-navy"></span>
          </span>
          OWN THIS DOMAIN
        </button>
      </div>

      <DomainPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
};

export default App;
