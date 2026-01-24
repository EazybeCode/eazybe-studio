import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'securitySection',
  title: 'Security Section',
  type: 'object',
  fields: [
    defineField({
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
    }),
    defineField({
      name: 'badges',
      title: 'Security Badges',
      type: 'array',
      of: [{type: 'securityBadge'}],
    }),
    defineField({
      name: 'footnote',
      title: 'Footnote',
      type: 'string',
      description: 'Text below badges (e.g., "Trusted by regulated industries...")',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Security Section',
        subtitle: 'Security',
      }
    },
  },
})
