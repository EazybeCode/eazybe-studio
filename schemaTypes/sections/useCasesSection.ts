import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'useCasesSection',
  title: 'Use Cases Section',
  type: 'object',
  fields: [
    defineField({name: 'badge', title: 'Badge', type: 'string'}),
    defineField({name: 'headline', title: 'Headline', type: 'string'}),
    defineField({
      name: 'items',
      title: 'Use Case Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  {title: 'Sales', value: 'sales'},
                  {title: 'Support', value: 'support'},
                  {title: 'Marketing', value: 'marketing'},
                  {title: 'E-Commerce', value: 'ecommerce'},
                  {title: 'Healthcare', value: 'healthcare'},
                  {title: 'Finance', value: 'finance'},
                  {title: 'Education', value: 'education'},
                  {title: 'Real Estate', value: 'realestate'},
                ],
              },
            }),
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text', rows: 2}),
            defineField({
              name: 'benefits',
              title: 'Benefits',
              type: 'array',
              of: [{type: 'string'}],
            }),
          ],
          preview: {
            select: {title: 'title', subtitle: 'icon'},
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
        title: 'Use Cases Section',
        subtitle: `${count} use case${count !== 1 ? 's' : ''}`,
      }
    },
  },
})
