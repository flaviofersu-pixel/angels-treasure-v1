# Sanity Studio

The place where Sakura adds products and pop-ups (see ADR 0003).
It lives in its own folder with its own dependencies, so the website itself stays small.

## Setup (once, together with Sakura)

1. Sakura creates a free Sanity account and a project (dataset `production`, public read access).
2. Put the project id in `studio/.env`:

   ```
   SANITY_STUDIO_PROJECT_ID=xxxxxxxx
   SANITY_STUDIO_DATASET=production
   ```

   and in the website's `.env` as `SANITY_PROJECT_ID` (see `.env.example` in the root).
3. `cd studio`, `npm install`, `npm run dev` to try it locally.
4. `npm run deploy` puts the Studio online at `<name>.sanity.studio`.

## Schemas

- `product`: name, category, price, photos, Depop / Vinted / Stripe links, sold out, options
- `popup`: name, date, time, address, links
