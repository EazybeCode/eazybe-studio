import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'feature',
  title: 'Feature',
  type: 'object',
  fields: [
    defineField({
      name: 'id',
      title: 'Feature ID',
      type: 'string',
      description: 'Unique identifier (e.g., "capture", "mini-crm")',
    }),
    defineField({
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      description: 'Category label (e.g., "Conversation Capture")',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'points',
      title: 'Feature Points',
      type: 'array',
      of: [{type: 'featurePoint'}],
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA Label',
      type: 'string',
    }),
    defineField({
      name: 'ctaUrl',
      title: 'CTA URL',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Feature Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'alignRight',
      title: 'Align Image Right',
      type: 'boolean',
      initialValue: false,
      description: 'If true, image appears on the right side',
    }),
  ],
  preview: {
    select: {
      title: 'headline',
      subtitle: 'badge',
      media: 'image',
    },
  },
})
