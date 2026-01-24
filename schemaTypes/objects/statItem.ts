import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'statItem',
  title: 'Statistic',
  type: 'object',
  fields: [
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
      description: 'The number/stat (e.g., "2,000+", "50%", "$1M")',
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'What the stat represents (e.g., "Sales Teams", "Faster Response")',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'Optional additional context',
    }),
  ],
  preview: {
    select: {
      title: 'value',
      subtitle: 'label',
    },
  },
})
