import type { CategoryId, PopUp, Product } from './types';
import { getCategory } from './catalog';
import { sanityEnabled, sanityImage, sanityQuery } from './sanity';
import { samplePopUps, sampleProducts } from '../data/sample-products';

// Single place where pages get their content from. Uses Sanity when
// SANITY_PROJECT_ID is set, otherwise the sample data (local development).

const newestFirst = (a: Product, b: Product) => b.publishedAt.localeCompare(a.publishedAt);

interface SanityProduct {
  slug: string;
  name: string;
  category: CategoryId;
  kind?: string;
  subtitle?: string;
  price: number;
  isNew?: boolean;
  soldOut?: boolean;
  availability?: string;
  description?: string;
  details?: string[];
  options?: { label: string; values: string[]; note?: string }[];
  images?: { url: string; alt?: string }[];
  depopUrl?: string;
  vintedUrl?: string;
  stripeUrl?: string;
  publishedAt: string;
}

const productQuery = /* groq */ `
  *[_type == "product" && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc) {
    "slug": slug.current,
    name,
    category,
    kind,
    subtitle,
    price,
    isNew,
    soldOut,
    availability,
    description,
    details,
    options[]{ label, values, note },
    "images": images[]{ "url": asset->url, alt },
    depopUrl,
    vintedUrl,
    stripeUrl,
    "publishedAt": coalesce(publishedAt, _createdAt)
  }
`;

const popUpQuery = /* groq */ `
  *[_type == "popup"] | order(date desc) { name, date, time, address, link, photosUrl }
`;

const toProduct = (p: SanityProduct): Product => {
  const category = getCategory(p.category);
  return {
    slug: p.slug,
    name: p.name,
    category: p.category,
    kind: p.kind ?? category.label,
    subtitle: p.subtitle,
    price: p.price,
    isNew: p.isNew ?? false,
    soldOut: p.soldOut ?? false,
    availability: p.availability,
    description: p.description,
    details: p.details ?? [],
    options: p.options ?? [],
    images: (p.images ?? []).map((image) => ({ url: sanityImage(image.url), alt: image.alt ?? p.name })),
    placeholder: category.placeholder,
    tint: category.tint,
    depopUrl: p.depopUrl,
    vintedUrl: p.vintedUrl,
    stripeUrl: p.stripeUrl,
    publishedAt: p.publishedAt,
  };
};

let productsCache: Promise<Product[]> | undefined;

export function getProducts(): Promise<Product[]> {
  productsCache ??= sanityEnabled
    ? sanityQuery<SanityProduct[]>(productQuery).then((list) => list.map(toProduct))
    : Promise.resolve([...sampleProducts].sort(newestFirst));
  return productsCache;
}

export async function getProduct(slug: string): Promise<Product | undefined> {
  return (await getProducts()).find((p) => p.slug === slug);
}

export async function getPopUps(): Promise<PopUp[]> {
  if (sanityEnabled) return sanityQuery<PopUp[]>(popUpQuery);
  return [...samplePopUps].sort((a, b) => b.date.localeCompare(a.date));
}
