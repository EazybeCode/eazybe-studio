import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'howItWorksSection',
  title: 'How It Works Section',
  type: 'object',
  fields: [
    defineField({name: 'badge', title: 'Badge', type: 'string'}),
    defineField({name: 'headline', title: 'Headline', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 2}),
    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'number', title: 'Step Number', type: 'string'}),
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text', rows: 2}),
          ],
          preview: {
            select: {title: 'title', subtitle: 'number'},
            prepare({title, subtitle}) {
              return {title, subtitle: `Step ${subtitle}`}
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {steps: 'steps'},
    prepare({steps}) {
      const count = steps?.length || 0
      return {
        title: 'How It Works Section',
        subtitle: `${count} step${count !== 1 ? 's' : ''}`,
      }
    },
  },
})
