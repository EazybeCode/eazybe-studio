import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'integrationItem',
  title: 'Integration',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'logoUrl',
      title: 'Logo URL (alternative)',
      type: 'url',
      description: 'Use this if you want to reference an external logo URL',
    }),
    defineField({
      name: 'url',
      title: 'Integration Page URL',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
  },
})
