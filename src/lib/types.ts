// Shape of the content the site works with. Mirrors the Sanity schemas,
// so swapping the sample data for Sanity data does not touch the pages.

export type CategoryId = 'jewellery' | 'hair' | 'keychains' | 'clothing';

export type PlaceholderIcon = 'bow' | 'charm' | 'heart' | 'skirt' | 'earring' | 'necklace';

export type Tint = 'cream' | 'butter' | 'blush' | 'petal';

export interface ProductImage {
  url: string;
  alt: string;
}

export interface ProductOption {
  // e.g. "Glow colour" or "Size"
  label: string;
  values: string[];
  note?: string;
}

export interface Product {
  slug: string;
  name: string;
  category: CategoryId;
  // Short type shown on cards, e.g. "Hair bow" or "Skirt · with pockets"
  kind: string;
  // Longer subtitle on the product page
  subtitle?: string;
  // Price in euros
  price: number;
  isNew: boolean;
  soldOut: boolean;
  // e.g. "Made to order · ready in about 5 days"
  availability?: string;
  description?: string;
  details: string[];
  options: ProductOption[];
  images: ProductImage[];
  // Illustration and background used while there is no photo yet
  placeholder: PlaceholderIcon;
  tint: Tint;
  depopUrl?: string;
  vintedUrl?: string;
  stripeUrl?: string;
  // ISO date, used for "newest first"
  publishedAt: string;
}

export interface PopUp {
  name: string;
  // ISO date-time
  date: string;
  time?: string;
  address: string;
  link?: string;
  photosUrl?: string;
}
