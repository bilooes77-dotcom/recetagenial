export interface Recipe {
  id: string;
  title: string;
  slug: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  prepTime: string;
  cookTime: string;
  totalTime: string;
  servings: string;
  difficulty: string;
  image: string;
  pinterestDescription: string;
  hashtags: string[];
  ingredients: string[];
  instructions: string[];
  tips: string[];
  category: string;
  keywords: string[];
  featured?: boolean;
  trending?: boolean;
  datePublished: string;
}

const modules = import.meta.glob('../content/recipes/*.json', { eager: true, import: 'default' });
export const recipes = Object.values(modules)
  .filter((r: any) => r && r.id && r.slug) // Filter out malformed or empty data
  .sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()) as Recipe[];
