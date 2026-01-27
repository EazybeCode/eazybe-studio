import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'productHeroSection',
  title: 'Product Hero Section',
  type: 'object',
  fields: [
    defineField({name: 'badge', title: 'Badge Text', type: 'string'}),
    defineField({name: 'headline', title: 'Headline', type: 'string'}),
    defineField({name: 'headlineHighlight', title: 'Headline Highlight', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
    defineField({
      name: 'primaryCta',
      title: 'Primary CTA',
      type: 'object',
      fields: [
        defineField({name: 'label', title: 'Label', type: 'string'}),
        defineField({name: 'url', title: 'URL', type: 'string'}),
      ],
    }),
    defineField({
      name: 'secondaryCta',
      title: 'Secondary CTA',
      type: 'object',
      fields: [
        defineField({name: 'label', title: 'Label', type: 'string'}),
        defineField({name: 'url', title: 'URL', type: 'string'}),
      ],
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'value', title: 'Value', type: 'string'}),
            defineField({name: 'label', title: 'Label', type: 'string'}),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {headline: 'headline'},
    prepare({headline}) {
      return {
        title: 'Hero Section',
        subtitle: headline || 'No headline set',
      }
    },
  },
})
