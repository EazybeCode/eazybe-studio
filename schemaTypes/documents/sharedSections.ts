import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'sharedSections',
  title: 'Shared Sections',
  type: 'document',
  fields: [
    defineField({
      name: 'security',
      title: 'Security Section',
      type: 'object',
      fields: [
        defineField({
          name: 'badge',
          title: 'Badge Text',
          type: 'string',
          initialValue: 'Enterprise-Ready Security',
        }),
        defineField({
          name: 'cards',
          title: 'Security Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'icon',
                  title: 'Icon',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Meta', value: 'meta'},
                      {title: 'GDPR', value: 'gdpr'},
                      {title: 'Security', value: 'security'},
                    ],
                  },
                }),
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),
                defineField({
                  name: 'subtitle',
                  title: 'Subtitle',
                  type: 'string',
                }),
                defineField({
                  name: 'showCompliantBadge',
                  title: 'Show Compliant Badge',
                  type: 'boolean',
                  initialValue: false,
                }),
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'subtitle',
                },
              },
            },
          ],
        }),
        defineField({
          name: 'footnote',
          title: 'Footnote',
          type: 'string',
          description: 'Text below cards (e.g., "Trusted by regulated industries...")',
        }),
      ],
    }),
    defineField({
      name: 'cta',
      title: 'CTA Section',
      type: 'object',
      fields: [
        defineField({
          name: 'badge',
          title: 'Badge Text',
          type: 'string',
          initialValue: 'READY FOR LIFT OFF',
        }),
        defineField({
          name: 'headline',
          title: 'Headline',
          type: 'string',
          initialValue: 'Turn WhatsApp into your',
        }),
        defineField({
          name: 'headlineHighlight',
          title: 'Headline Highlight',
          type: 'string',
          description: 'The highlighted part of the headline (shown in gradient)',
          initialValue: 'Revenue Engine',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'primaryCta',
          title: 'Primary CTA',
          type: 'button',
        }),
        defineField({
          name: 'secondaryCta',
          title: 'Secondary CTA',
          type: 'button',
        }),
        defineField({
          name: 'footnote',
          title: 'Footnote',
          type: 'string',
          description: 'Small text below buttons',
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Shared Sections',
        subtitle: 'Security & CTA sections used across all pages',
      }
    },
  },
})
