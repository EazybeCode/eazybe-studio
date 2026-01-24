import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'footerLink',
  title: 'Footer Link',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'url',
    },
  },
})
