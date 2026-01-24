import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'featureSection',
  title: 'Feature Section',
  type: 'object',
  fields: [
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'feature'}],
    }),
  ],
  preview: {
    select: {
      features: 'features',
    },
    prepare({features}) {
      const count = features?.length || 0
      return {
        title: `Features Section (${count} features)`,
        subtitle: 'Features',
      }
    },
  },
})
