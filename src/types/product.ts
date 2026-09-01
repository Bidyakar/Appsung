export type Category = 'Phones' | 'Foldables' | 'Tablets' | 'VR Headsets' | 'Wearables' | 'Audio' | 'Accessories';

export interface Product {
  id: string;
  name: string;
  brand?: 'Apple' | 'Samsung' | 'Google' | 'Asus' | 'Xiaomi' | 'Anker' | 'Meta';
  tagline: string;
  category: Category;
  price: number;
  compareAt?: number;
  image: string;
  rating: number;
  reviews: number;
  colors: string[];
  storage?: string[];
  highlights: string[];
  specs: { label: string; value: string }[];
  description: string;
  badge?: string;
  inStock: boolean;
}

export interface CartLine {
  product: Product;
  color: string;
  quantity: number;
}