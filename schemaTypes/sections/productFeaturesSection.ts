import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'productFeaturesSection',
  title: 'Product Features Section',
  type: 'object',
  fields: [
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'badge', title: 'Badge', type: 'string'}),
            defineField({name: 'headline', title: 'Headline', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
            defineField({
              name: 'points',
              title: 'Bullet Points',
              type: 'array',
              of: [{type: 'string'}],
            }),
            defineField({
              name: 'cta',
              title: 'CTA',
              type: 'object',
              fields: [
                defineField({name: 'label', title: 'Label', type: 'string'}),
                defineField({name: 'url', title: 'URL', type: 'string'}),
              ],
            }),
            defineField({
              name: 'visualType',
              title: 'Visual Type',
              type: 'string',
              options: {
                list: [
                  {title: 'Sync Visual', value: 'sync-visual'},
                  {title: 'Mini CRM Visual', value: 'mini-crm-visual'},
                  {title: 'Workflow Visual', value: 'workflow-visual'},
                  {title: 'Template Visual', value: 'template-visual'},
                  {title: 'Broadcast Visual', value: 'broadcast-visual'},
                  {title: 'API Visual', value: 'api-visual'},
                ],
              },
            }),
            defineField({
              name: 'alignRight',
              title: 'Align Image Right',
              type: 'boolean',
              initialValue: false,
            }),
          ],
          preview: {
            select: {title: 'headline', subtitle: 'badge'},
          },
        },
      ],
    }),
  ],
  preview: {
    select: {features: 'features'},
    prepare({features}) {
      const count = features?.length || 0
      return {
        title: 'Features Section',
        subtitle: `${count} feature${count !== 1 ? 's' : ''}`,
      }
    },
  },
})
