import type { PopUp, Product } from './types';
import { samplePopUps, sampleProducts } from '../data/sample-products';

// Single place where pages get their content from.
// For now this returns the sample data; Sanity is plugged in here later.

const newestFirst = (a: Product, b: Product) => b.publishedAt.localeCompare(a.publishedAt);

export async function getProducts(): Promise<Product[]> {
  return [...sampleProducts].sort(newestFirst);
}

export async function getProduct(slug: string): Promise<Product | undefined> {
  return (await getProducts()).find((p) => p.slug === slug);
}

export async function getPopUps(): Promise<PopUp[]> {
  return [...samplePopUps].sort((a, b) => b.date.localeCompare(a.date));
}
