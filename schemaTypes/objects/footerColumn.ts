import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'footerColumn',
  title: 'Footer Column',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Column Title',
      type: 'string',
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{type: 'footerLink'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      links: 'links',
    },
    prepare({title, links}) {
      return {
        title,
        subtitle: `${links?.length || 0} links`,
      }
    },
  },
})
