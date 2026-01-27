import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'faqSection',
  title: 'FAQ Section',
  type: 'object',
  fields: [
    defineField({name: 'badge', title: 'Badge', type: 'string'}),
    defineField({name: 'headline', title: 'Headline', type: 'string'}),
    defineField({
      name: 'items',
      title: 'FAQ Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'question', title: 'Question', type: 'string'}),
            defineField({name: 'answer', title: 'Answer', type: 'text', rows: 3}),
          ],
          preview: {
            select: {title: 'question'},
          },
        },
      ],
    }),
  ],
  preview: {
    select: {items: 'items'},
    prepare({items}) {
      const count = items?.length || 0
      return {
        title: 'FAQ Section',
        subtitle: `${count} question${count !== 1 ? 's' : ''}`,
      }
    },
  },
})
