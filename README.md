# Angel's Treasure

Website for Angel's Treasure, a small handmade Jfashion shop from Amsterdam.
Built with [Astro](https://astro.build) as a static site. Products and pop-ups come from Sanity.

## Getting started

Requires Node 22 (see `.nvmrc`).

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in ./dist
npm run preview   # preview the build
```

Without a `.env` the site uses the sample products in `src/data/sample-products.ts`.
To use real content, copy `.env.example` to `.env` and fill in the Sanity project id.

## Project structure

```text
public/images/        logo, icons and illustrations from the design
src/components/       header, footer, product card, sections
src/data/             shop settings, home slider texts, sample content
src/layouts/          page layout (fonts, meta tags, header, footer)
src/lib/              types, categories, content loading (Sanity or sample data)
src/pages/            home, shop, product pages, about, custom orders, thank you, terms
src/styles/global.css design tokens and shared styles
studio/               Sanity Studio where Sakura manages products (see studio/README.md)
```

## Pages

| Page | Path |
| --- | --- |
| Home | `/` |
| Shop (filter with `?category=new`, `jewellery`, `hair`, `keychains`, `clothing`) | `/shop/` |
| Product | `/shop/<slug>/` |
| About me | `/about/` |
| Custom orders | `/custom-orders/` |
| Thank you (after the wish form) | `/thank-you/` |
| Terms & privacy | `/terms/` |

## Still to do

- Sanity project on Sakura's account, then set `SANITY_PROJECT_ID`.
- `/api/wish` endpoint for the custom order form (Cloudflare Worker + Resend, see ADR 0007).
- Hosting on Cloudflare on Sakura's account, and `site` in `astro.config.mjs` once the domain is known.
- Fill in the `[invullen]` placeholders (delivery times, shipping costs, KvK number).
