import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'securityBadge',
  title: 'Security Badge',
  type: 'object',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          {title: 'Meta', value: 'meta'},
          {title: 'Lock', value: 'lock'},
          {title: 'Shield', value: 'shield'},
          {title: 'File Check', value: 'file-check'},
          {title: 'Check Circle', value: 'check-circle'},
        ],
      },
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      description: 'Optional small badge (e.g., "Compliant")',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
      description: 'Highlight this badge',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
  },
})
