import { defineField, defineType } from 'sanity';

export const popup = defineType({
  name: 'popup',
  title: 'Pop-up',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'date', title: 'Date', type: 'datetime', validation: (rule) => rule.required() }),
    defineField({ name: 'time', title: 'Time', description: 'For example "12:00 – 17:00".', type: 'string' }),
    defineField({ name: 'address', title: 'Address', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'link', title: 'Event link', type: 'url' }),
    defineField({ name: 'photosUrl', title: 'Photos link', description: 'Shown after the event.', type: 'url' }),
  ],
  orderings: [{ title: 'Date, newest first', name: 'dateDesc', by: [{ field: 'date', direction: 'desc' }] }],
  preview: { select: { title: 'name', subtitle: 'date' } },
});
