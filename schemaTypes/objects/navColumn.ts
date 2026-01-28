import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'navColumn',
  title: 'Navigation Column',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Column Title',
      type: 'string',
      description: 'Header text for this column (e.g., "Core Features")',
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'navLink',
          title: 'Navigation Link',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'URL',
              type: 'string',
              description: 'Internal path (e.g., /features/cloud-backup) or external URL',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'string',
              description: 'Optional short description shown below the link',
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'Optional Lucide icon name (e.g., "Cloud", "Users", "Zap")',
            }),
            defineField({
              name: 'isExternal',
              title: 'External Link',
              type: 'boolean',
              description: 'Opens in new tab if enabled',
              initialValue: false,
            }),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'href',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      links: 'links',
    },
    prepare({title, links}) {
      return {
        title: title || 'Untitled Column',
        subtitle: `${links?.length || 0} links`,
      }
    },
  },
})
