import type { CategoryId, PlaceholderIcon, Tint } from './types';

export interface Category {
  id: CategoryId;
  label: string;
  description: string;
  placeholder: PlaceholderIcon;
  tint: Tint;
}

export const categories: Category[] = [
  {
    id: 'jewellery',
    label: 'Jewellery',
    description: 'Necklaces, bracelets and earrings',
    placeholder: 'necklace',
    tint: 'butter',
  },
  {
    id: 'hair',
    label: 'Hair bows & clips',
    description: 'Bows, clips and hair accessories',
    placeholder: 'bow',
    tint: 'blush',
  },
  {
    id: 'keychains',
    label: 'Keychains & charms',
    description: 'Charms, decoden and keychains',
    placeholder: 'charm',
    tint: 'petal',
  },
  {
    id: 'clothing',
    label: 'Clothing',
    description: 'Skirts, blouses and dresses',
    placeholder: 'skirt',
    tint: 'blush',
  },
];

export const getCategory = (id: CategoryId) => categories.find((c) => c.id === id)!;

export const tintColor: Record<Tint, string> = {
  cream: 'var(--cream)',
  butter: 'var(--butter-l)',
  blush: 'var(--blush)',
  petal: 'var(--petal)',
};

// Native size of each placeholder illustration (from the design).
export const placeholderSize: Record<PlaceholderIcon, { width: number; height: number }> = {
  bow: { width: 160, height: 110 },
  charm: { width: 124, height: 124 },
  heart: { width: 124, height: 124 },
  skirt: { width: 140, height: 140 },
  earring: { width: 130, height: 130 },
  necklace: { width: 140, height: 140 },
};

const priceFormat = new Intl.NumberFormat('nl-NL', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
});

// "€ 12,00", with a normal space like in the design.
export const formatPrice = (euros: number) => priceFormat.format(euros).replace(/\s/, ' ');
