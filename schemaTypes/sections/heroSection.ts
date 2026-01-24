import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      description: 'Small text above the headline (e.g., "For HubSpot, Salesforce, Zoho...")',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headlineHighlight',
      title: 'Headline Highlight',
      type: 'string',
      description: 'The part of the headline to highlight in brand color (e.g., "CRM Teams")',
    }),
    defineField({
      name: 'subheadline',
      title: 'Subheadline',
      type: 'text',
      rows: 3,
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
      name: 'socialProof',
      title: 'Social Proof Text',
      type: 'string',
      description: 'Text like "Trusted by 2,000+ sales teams at..."',
    }),
    defineField({
      name: 'trustedLogos',
      title: 'Trusted Company Names',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Company names to show in social proof',
    }),
  ],
  preview: {
    select: {
      title: 'headline',
    },
    prepare({title}) {
      return {
        title: title || 'Hero Section',
        subtitle: 'Hero',
      }
    },
  },
})
