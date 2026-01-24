import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'comparisonSection',
  title: 'Comparison Section',
  type: 'object',
  fields: [
    defineField({
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'whatsappTypes',
      title: 'WhatsApp Types',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'name', title: 'Name', type: 'string'}),
            defineField({name: 'icon', title: 'Icon URL', type: 'url'}),
          ],
        },
      ],
    }),
    defineField({
      name: 'comparisonRows',
      title: 'Comparison Rows',
      type: 'array',
      of: [{type: 'comparisonRow'}],
    }),
  ],
  preview: {
    select: {
      title: 'headline',
    },
    prepare({title}) {
      return {
        title: title || 'Comparison Section',
        subtitle: 'Comparison',
      }
    },
  },
})
