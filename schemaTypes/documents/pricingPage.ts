import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'pricingPage',
  title: 'Pricing Page',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          {title: 'English', value: 'en'},
          {title: 'Spanish', value: 'es'},
          {title: 'Portuguese', value: 'pt'},
          {title: 'Turkish', value: 'tr'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),

    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({name: 'badge', title: 'Badge Text', type: 'string'}),
        defineField({name: 'headline', title: 'Headline', type: 'string'}),
        defineField({name: 'headlineHighlight', title: 'Headline Highlight (gradient text)', type: 'string'}),
        defineField({name: 'subheadline', title: 'Subheadline', type: 'text', rows: 2}),
        defineField({name: 'billingToggleMonthly', title: 'Monthly Label', type: 'string', initialValue: 'Monthly'}),
        defineField({name: 'billingToggleAnnual', title: 'Annual Label', type: 'string', initialValue: 'Annual'}),
        defineField({name: 'saveBadgeText', title: 'Save Badge Text', type: 'string', initialValue: 'Save 20%'}),
      ],
    }),

    // Pricing Plans
    defineField({
      name: 'plans',
      title: 'Pricing Plans',
      type: 'array',
      of: [{type: 'pricingPlan'}],
      validation: (Rule) => Rule.max(4),
    }),

    // Trust Signals
    defineField({
      name: 'trustSignals',
      title: 'Trust Signals',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({name: 'icon', title: 'Icon', type: 'string', options: {
            list: ['shield', 'zap', 'clock', 'message'],
          }}),
          defineField({name: 'text', title: 'Text', type: 'string'}),
        ],
      }],
    }),

    // Feature Comparison Section
    defineField({
      name: 'comparisonSection',
      title: 'Feature Comparison Section',
      type: 'object',
      fields: [
        defineField({name: 'badge', title: 'Badge Text', type: 'string'}),
        defineField({name: 'title', title: 'Section Title', type: 'string'}),
        defineField({name: 'subtitle', title: 'Section Subtitle', type: 'string'}),
        defineField({
          name: 'features',
          title: 'Comparison Features',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({name: 'feature', title: 'Feature Name', type: 'string'}),
              defineField({name: 'category', title: 'Category', type: 'string'}),
              defineField({name: 'starter', title: 'Starter Value', type: 'string', description: 'true, false, or text value'}),
              defineField({name: 'scaler', title: 'Scaler Value', type: 'string', description: 'true, false, or text value'}),
              defineField({name: 'omnis', title: 'Omnis Value', type: 'string', description: 'true, false, or text value'}),
            ],
            preview: {
              select: {title: 'feature', subtitle: 'category'},
            },
          }],
        }),
      ],
    }),

    // FAQ Section
    defineField({
      name: 'faqSection',
      title: 'FAQ Section',
      type: 'object',
      fields: [
        defineField({name: 'badge', title: 'Badge Text', type: 'string'}),
        defineField({name: 'title', title: 'Section Title', type: 'string'}),
        defineField({name: 'subtitle', title: 'Section Subtitle', type: 'string'}),
        defineField({name: 'contactLinkText', title: 'Contact Link Text', type: 'string'}),
        defineField({
          name: 'faqs',
          title: 'FAQs',
          type: 'array',
          of: [{type: 'faq'}],
        }),
      ],
    }),

    // Bottom CTA Section
    defineField({
      name: 'ctaSection',
      title: 'Bottom CTA Section',
      type: 'object',
      fields: [
        defineField({name: 'headline', title: 'Headline', type: 'string'}),
        defineField({name: 'headlineHighlight', title: 'Headline Highlight (gradient text)', type: 'string'}),
        defineField({name: 'subheadline', title: 'Subheadline', type: 'text', rows: 2}),
        defineField({name: 'primaryCta', title: 'Primary CTA', type: 'object', fields: [
          defineField({name: 'label', title: 'Label', type: 'string'}),
          defineField({name: 'url', title: 'URL', type: 'string'}),
        ]}),
        defineField({name: 'secondaryCta', title: 'Secondary CTA', type: 'object', fields: [
          defineField({name: 'label', title: 'Label', type: 'string'}),
          defineField({name: 'url', title: 'URL', type: 'string'}),
        ]}),
        defineField({name: 'footnote', title: 'Footnote', type: 'string'}),
      ],
    }),
  ],
  preview: {
    select: {
      language: 'language',
    },
    prepare({language}) {
      const langLabels: Record<string, string> = {
        en: 'English',
        es: 'Spanish',
        pt: 'Portuguese',
        tr: 'Turkish',
      }
      return {
        title: 'Pricing Page',
        subtitle: langLabels[language] || language,
      }
    },
  },
})
