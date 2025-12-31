
import React from 'react';
import { BlogPost } from '../types';

interface Props {
  post: BlogPost;
}

const BlogCard: React.FC<Props> = ({ post }) => {
  return (
    <article className="group cursor-pointer bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden aspect-[16/10]">
        <img 
          src={post.image} 
          alt={post.alt}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-navy text-gold text-[10px] font-bold uppercase tracking-widest px-3 py-1">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-[11px] text-slate font-semibold uppercase tracking-widest mb-3">
          <span>{post.date}</span>
          <span className="w-1 h-1 bg-gold rounded-full"></span>
          <span>By {post.author}</span>
        </div>
        <h3 className="text-xl font-serif font-bold text-navy mb-3 group-hover:text-gold transition-colors">
          <a href={`#article/${post.slug}`}>
            {post.title}
          </a>
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
          {post.summary}
        </p>
        <a 
          href={`#article/${post.slug}`}
          className="inline-flex items-center text-xs font-bold text-navy uppercase tracking-widest group-hover:gap-2 transition-all"
        >
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </article>
  );
};

export default BlogCard;
