import {defineType, defineField} from 'sanity'

const iconOptions = [
  {title: 'Sync', value: 'sync'},
  {title: 'Workflow', value: 'workflow'},
  {title: 'Inbox', value: 'inbox'},
  {title: 'Team', value: 'team'},
  {title: 'Security', value: 'security'},
  {title: 'Support', value: 'support'},
  {title: 'Cloud', value: 'cloud'},
  {title: 'Database', value: 'database'},
  {title: 'Shield', value: 'shield'},
  {title: 'Users', value: 'users'},
  {title: 'Message Circle', value: 'message-circle'},
  {title: 'Link', value: 'link'},
  {title: 'Dollar Sign', value: 'dollar-sign'},
  {title: 'Trending Up', value: 'trending-up'},
  {title: 'Bar Chart', value: 'bar-chart'},
  {title: 'Zap', value: 'zap'},
  {title: 'Reply', value: 'reply'},
  {title: 'Calendar', value: 'calendar'},
  {title: 'Clock', value: 'clock'},
  {title: 'Send', value: 'send'},
  {title: 'Radar', value: 'radar'},
  {title: 'Activity', value: 'activity'},
  {title: 'Bot', value: 'bot'},
  {title: 'Sparkles', value: 'sparkles'},
  {title: 'Brain', value: 'brain'},
  {title: 'Eye', value: 'eye'},
  {title: 'Target', value: 'target'},
  {title: 'Bell', value: 'bell'},
  {title: 'Check Circle', value: 'check-circle'},
  {title: 'Analytics', value: 'analytics'},
  {title: 'Speed', value: 'speed'},
  {title: 'Global', value: 'global'},
]

export default defineType({
  name: 'benefitsSection',
  title: 'Benefits Section',
  type: 'object',
  fields: [
    defineField({name: 'badge', title: 'Badge', type: 'string'}),
    defineField({name: 'headline', title: 'Headline', type: 'string'}),
    defineField({
      name: 'items',
      title: 'Benefit Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {list: iconOptions},
            }),
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text', rows: 2}),
          ],
          preview: {
            select: {title: 'title', subtitle: 'description'},
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
        title: 'Benefits Section',
        subtitle: `${count} benefit${count !== 1 ? 's' : ''}`,
      }
    },
  },
})
