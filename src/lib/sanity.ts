// Reads content from Sanity at build time with a plain fetch to the HTTP API.
// The dataset is public (read-only), so no token is needed (see ADR 0003).

const projectId = import.meta.env.SANITY_PROJECT_ID;
const dataset = import.meta.env.SANITY_DATASET ?? 'production';
const apiVersion = '2025-02-19';

export const sanityEnabled = Boolean(projectId);

export async function sanityQuery<T>(query: string, params: Record<string, unknown> = {}): Promise<T> {
  if (!projectId) throw new Error('SANITY_PROJECT_ID is not set');

  const url = new URL(`https://${projectId}.apicdn.sanity.io/v${apiVersion}/data/query/${dataset}`);
  url.searchParams.set('query', query);
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(`$${key}`, JSON.stringify(value));
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Sanity query failed: ${response.status} ${await response.text()}`);
  }
  const { result } = (await response.json()) as { result: T };
  return result;
}

// Ask the Sanity image CDN for a resized, modern-format version of a photo.
export const sanityImage = (url: string, width = 1200) => `${url}?w=${width}&fit=max&auto=format`;
