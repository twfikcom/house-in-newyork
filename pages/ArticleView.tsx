
import React from 'react';
import { BlogPost } from '../types';
import Sidebar from '../components/Sidebar';

interface Props {
  post: BlogPost;
}

const ArticleView: React.FC<Props> = ({ post }) => {
  return (
    <div className="bg-white">
      {/* Article Header */}
      <div className="relative h-[400px]">
        <img 
          src={post.image} 
          alt={post.alt} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/40"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 w-full pb-12">
            <div className="bg-navy p-6 md:p-10 max-w-3xl border-l-8 border-gold shadow-2xl">
              <span className="bg-gold text-navy text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-4 inline-block">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
                {post.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-6 pb-8 mb-12 border-b border-gray-100 text-sm font-semibold text-slate uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <span className="text-gold">Published:</span>
                <span className="text-navy">{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold">By:</span>
                <span className="text-navy">{post.author}</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-8 font-light leading-relaxed">
              <p className="text-xl font-medium text-navy leading-relaxed border-l-4 border-gold pl-6 py-2 bg-gray-50 italic">
                {post.summary}
              </p>
              
              {post.content.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}

              <div className="bg-navy text-white p-10 rounded-sm my-12">
                <h3 className="text-gold font-serif text-2xl mb-4">SEO Focus: {post.seoFocus}</h3>
                <p className="text-slate text-sm">
                  This article utilizes hyper-local SEO strategies focusing on New York state regulations and 2026 market projections.
                </p>
              </div>

              <h2 className="text-3xl font-serif font-bold text-navy mt-12 mb-6">Expert Verdict</h2>
              <p>
                As New York continues to evolve post-pandemic, the demand for high-quality residential assets remains unprecedented. 
                Whether you're targeting the luxury corridor or emerging borough hubs, the key is data-driven entry.
              </p>
              
              <div className="mt-16 pt-8 border-t border-gray-100">
                <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-slate mb-6">Share this intelligence</h4>
                <div className="flex gap-4">
                  {['Facebook', 'Twitter', 'LinkedIn'].map(platform => (
                    <button key={platform} className="px-6 py-2 border border-gray-200 text-xs font-bold uppercase tracking-widest hover:border-gold hover:text-gold transition">
                      {platform}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleView;
