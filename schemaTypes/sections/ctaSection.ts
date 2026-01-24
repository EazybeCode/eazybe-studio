import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'ctaSection',
  title: 'CTA Section',
  type: 'object',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
    }),
    defineField({
      name: 'subheadline',
      title: 'Subheadline',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'primaryCta',
      title: 'Primary CTA',
      type: 'button',
    }),
    defineField({
      name: 'secondaryCta',
      title: 'Secondary CTA',
      type: 'button',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: [
          {title: 'Blue', value: 'blue'},
          {title: 'Dark', value: 'dark'},
          {title: 'White', value: 'white'},
          {title: 'Gray', value: 'gray'},
        ],
      },
      initialValue: 'blue',
    }),
  ],
  preview: {
    select: {
      title: 'headline',
    },
    prepare({title}) {
      return {
        title: title || 'CTA Section',
        subtitle: 'Call to Action',
      }
    },
  },
})
