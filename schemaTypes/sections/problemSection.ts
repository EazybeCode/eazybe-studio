import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'problemSection',
  title: 'Problem Section',
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
      name: 'subheadline',
      title: 'Subheadline',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'problems',
      title: 'Problem Cards',
      type: 'array',
      of: [{type: 'problemCard'}],
    }),
  ],
  preview: {
    select: {
      title: 'headline',
    },
    prepare({title}) {
      return {
        title: title || 'Problem Section',
        subtitle: 'Problems',
      }
    },
  },
})
