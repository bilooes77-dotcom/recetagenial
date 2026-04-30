export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  content: string;
  keywords: string[];
  category: string;
  readTime: string;
  datePublished: string;
  pinterestDescription: string;
  hashtags: string[];
  featured?: boolean;
  trending?: boolean;
}

const modules = import.meta.glob('../content/articles/*.json', { eager: true });
export const articles = Object.values(modules)
  .map((m: any) => m.default || m)
  .filter((a: any) => a && typeof a === 'object' && a.slug)
  .sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()) as Article[];
