import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'clientLogosSection',
  title: 'Client Logos Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Optional title above logos',
    }),
    defineField({
      name: 'logos',
      title: 'Client Logos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Company Name',
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
          ],
          preview: {
            select: {
              title: 'name',
              media: 'logo',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Client Logos Section',
        subtitle: 'Logos',
      }
    },
  },
})
