import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'integrationsSection',
  title: 'Integrations Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'integrations',
      title: 'Integrations',
      type: 'array',
      of: [{type: 'integrationItem'}],
    }),
    defineField({
      name: 'showWebhooks',
      title: 'Show Webhooks Card',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'footnote',
      title: 'Footnote Text',
      type: 'string',
      description: 'Text shown below integrations (e.g., "Don\'t see your CRM? Use our generic Webhooks...")',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Integrations Section',
        subtitle: 'Integrations',
      }
    },
  },
})
