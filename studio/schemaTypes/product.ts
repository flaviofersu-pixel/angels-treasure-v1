import { defineArrayMember, defineField, defineType } from 'sanity';

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required() }),
    defineField({
      name: 'slug',
      title: 'Web address',
      description: 'Click "Generate" to make it from the name.',
      type: 'slug',
      options: { source: 'name', maxLength: 80 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Jewellery', value: 'jewellery' },
          { title: 'Hair bows & clips', value: 'hair' },
          { title: 'Keychains & charms', value: 'keychains' },
          { title: 'Clothing', value: 'clothing' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'kind',
      title: 'Type',
      description: 'Short, shown on the product card. For example "Hair bow" or "Skirt · with pockets".',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      description: 'Shown under the name on the product page.',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price (€)',
      type: 'number',
      validation: (rule) => rule.required().min(0).precision(2),
    }),
    defineField({ name: 'isNew', title: 'Show "New" label', type: 'boolean', initialValue: true }),
    defineField({
      name: 'soldOut',
      title: 'Sold out',
      description: 'Turn on when it is sold. Also remove it from Depop and Vinted.',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'images',
      title: 'Photos',
      description: 'Up to 4. The first photo is used on the product card and in link previews.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Description',
              description: 'What is in the photo, for people who cannot see it.',
              type: 'string',
            }),
          ],
        }),
      ],
      validation: (rule) => rule.max(4),
    }),
    defineField({
      name: 'availability',
      title: 'Availability',
      description: 'For example "Made to order · ready in about 5 days" or "One of a kind · made by hand".',
      type: 'string',
    }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
    defineField({
      name: 'details',
      title: 'Details & materials',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'options',
      title: 'Options',
      description: 'For example colours or sizes.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'option',
          fields: [
            defineField({ name: 'label', title: 'Name', description: 'For example "Size".', type: 'string' }),
            defineField({
              name: 'values',
              title: 'Choices',
              type: 'array',
              of: [defineArrayMember({ type: 'string' })],
            }),
            defineField({ name: 'note', title: 'Note', description: 'For example the measurements.', type: 'string' }),
          ],
          preview: { select: { title: 'label' } },
        }),
      ],
    }),
    defineField({ name: 'depopUrl', title: 'Depop link', type: 'url' }),
    defineField({ name: 'vintedUrl', title: 'Vinted link', type: 'url' }),
    defineField({
      name: 'stripeUrl',
      title: 'Stripe Payment Link',
      description: 'Optional. Adds a "Buy now" button. For one-of-a-kind items, limit the link to 1 payment.',
      type: 'url',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date added',
      description: 'Used for "newest first".',
      type: 'date',
      initialValue: () => new Date().toISOString().slice(0, 10),
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'kind', media: 'images.0', soldOut: 'soldOut' },
    prepare: ({ title, subtitle, media, soldOut }) => ({
      title,
      subtitle: soldOut ? `SOLD OUT · ${subtitle ?? ''}` : subtitle,
      media,
    }),
  },
});
