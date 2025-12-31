
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  author: string;
  image: string;
  alt: string;
  summary: string;
  content: string[];
  seoFocus: string;
}

export enum Page {
  HOME = 'home',
  ARTICLE = 'article',
  CONTACT = 'contact',
  PRIVACY = 'privacy'
}
