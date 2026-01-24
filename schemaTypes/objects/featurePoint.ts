import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'featurePoint',
  title: 'Feature Point',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'text',
    },
  },
})
