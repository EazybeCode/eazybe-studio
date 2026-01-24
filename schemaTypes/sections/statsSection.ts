import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'statsSection',
  title: 'Stats Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [{type: 'statItem'}],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Stats Section',
        subtitle: 'Statistics',
      }
    },
  },
})
