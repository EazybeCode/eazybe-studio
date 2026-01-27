import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'categoryIndexPage',
  title: 'Category Index Page',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content'},
    {name: 'seo', title: 'SEO'},
    {name: 'settings', title: 'Settings'},
  ],
  fields: [
    // Settings
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      group: 'settings',
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
      name: 'title',
      title: 'Page Title',
      type: 'string',
      group: 'settings',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'settings',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      group: 'settings',
      description: 'Which category of products does this page list?',
      options: {
        list: [
          {title: 'CRM Integrations', value: 'crm-integration'},
          {title: 'Product Features', value: 'feature'},
          {title: 'WhatsApp API', value: 'whatsapp-api'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    // SEO
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      group: 'seo',
      fields: [
        defineField({name: 'metaTitle', title: 'Meta Title', type: 'string'}),
        defineField({name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3}),
      ],
    }),

    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      group: 'content',
      fields: [
        defineField({name: 'badge', title: 'Badge Text', type: 'string'}),
        defineField({name: 'headline', title: 'Headline', type: 'string'}),
        defineField({name: 'headlineHighlight', title: 'Headline Highlight', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
        defineField({
          name: 'primaryCta',
          title: 'Primary CTA',
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string'}),
            defineField({name: 'url', title: 'URL', type: 'string'}),
          ],
        }),
        defineField({
          name: 'secondaryCta',
          title: 'Secondary CTA',
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string'}),
            defineField({name: 'url', title: 'URL', type: 'string'}),
          ],
        }),
      ],
    }),

    // Introduction Section
    defineField({
      name: 'intro',
      title: 'Introduction Section',
      type: 'object',
      group: 'content',
      fields: [
        defineField({name: 'headline', title: 'Headline', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text', rows: 4}),
      ],
    }),

    // Featured Items (manually curated)
    defineField({
      name: 'featuredItems',
      title: 'Featured Items',
      type: 'array',
      group: 'content',
      description: 'Manually curated list of featured integrations/features',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'name', title: 'Name', type: 'string'}),
            defineField({name: 'slug', title: 'Slug', type: 'string', description: 'URL path, e.g., hubspot-whatsapp-integration'}),
            defineField({name: 'description', title: 'Short Description', type: 'text', rows: 2}),
            defineField({
              name: 'icon',
              title: 'Icon/Logo Key',
              type: 'string',
              description: 'Key for logo lookup (e.g., hubspot, salesforce, zoho)',
            }),
            defineField({name: 'color', title: 'Brand Color', type: 'string', description: 'Hex color code'}),
            defineField({name: 'isFeatured', title: 'Is Featured', type: 'boolean', initialValue: false}),
            defineField({
              name: 'tags',
              title: 'Tags',
              type: 'array',
              of: [{type: 'string'}],
              options: {layout: 'tags'},
            }),
          ],
          preview: {
            select: {title: 'name', subtitle: 'description'},
          },
        },
      ],
    }),

    // Comparison Table
    defineField({
      name: 'comparisonTable',
      title: 'Comparison Table',
      type: 'object',
      group: 'content',
      fields: [
        defineField({name: 'headline', title: 'Headline', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text', rows: 2}),
        defineField({
          name: 'columns',
          title: 'Column Headers',
          type: 'array',
          of: [{type: 'string'}],
          description: 'First column is feature name, rest are integration names',
        }),
        defineField({
          name: 'rows',
          title: 'Comparison Rows',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'feature', title: 'Feature Name', type: 'string'}),
                defineField({
                  name: 'values',
                  title: 'Values',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        defineField({
                          name: 'type',
                          title: 'Type',
                          type: 'string',
                          options: {
                            list: [
                              {title: 'Check (Yes)', value: 'check'},
                              {title: 'X (No)', value: 'x'},
                              {title: 'Text', value: 'text'},
                              {title: 'Partial', value: 'partial'},
                            ],
                          },
                        }),
                        defineField({name: 'text', title: 'Text (if type is text)', type: 'string'}),
                      ],
                    },
                  ],
                }),
              ],
              preview: {
                select: {title: 'feature'},
              },
            },
          ],
        }),
      ],
    }),

    // Benefits Section
    defineField({
      name: 'benefits',
      title: 'Benefits Section',
      type: 'object',
      group: 'content',
      fields: [
        defineField({name: 'badge', title: 'Badge', type: 'string'}),
        defineField({name: 'headline', title: 'Headline', type: 'string'}),
        defineField({
          name: 'items',
          title: 'Benefit Items',
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
                      // General
                      {title: 'Sync', value: 'sync'},
                      {title: 'Workflow', value: 'workflow'},
                      {title: 'Inbox', value: 'inbox'},
                      {title: 'Team', value: 'team'},
                      {title: 'Security', value: 'security'},
                      {title: 'Analytics', value: 'analytics'},
                      {title: 'Speed', value: 'speed'},
                      {title: 'Global', value: 'global'},
                      // Features
                      {title: 'Cloud', value: 'cloud'},
                      {title: 'Database', value: 'database'},
                      {title: 'Shield', value: 'shield'},
                      {title: 'Users', value: 'users'},
                      {title: 'Message Circle', value: 'message-circle'},
                      {title: 'Link', value: 'link'},
                      {title: 'Dollar Sign', value: 'dollar-sign'},
                      {title: 'Trending Up', value: 'trending-up'},
                      {title: 'Bar Chart', value: 'bar-chart'},
                      {title: 'Zap', value: 'zap'},
                      {title: 'Reply', value: 'reply'},
                      {title: 'Calendar', value: 'calendar'},
                      {title: 'Clock', value: 'clock'},
                      {title: 'Send', value: 'send'},
                      {title: 'Radar', value: 'radar'},
                      {title: 'Activity', value: 'activity'},
                      {title: 'Bot', value: 'bot'},
                      {title: 'Sparkles', value: 'sparkles'},
                      {title: 'Brain', value: 'brain'},
                      {title: 'Eye', value: 'eye'},
                      {title: 'Target', value: 'target'},
                      {title: 'Bell', value: 'bell'},
                      {title: 'Check Circle', value: 'check-circle'},
                    ],
                  },
                }),
                defineField({name: 'title', title: 'Title', type: 'string'}),
                defineField({name: 'description', title: 'Description', type: 'text', rows: 2}),
              ],
              preview: {
                select: {title: 'title', subtitle: 'description'},
              },
            },
          ],
        }),
      ],
    }),

    // How It Works Section
    defineField({
      name: 'howItWorks',
      title: 'How It Works Section',
      type: 'object',
      group: 'content',
      fields: [
        defineField({name: 'badge', title: 'Badge', type: 'string'}),
        defineField({name: 'headline', title: 'Headline', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text', rows: 2}),
        defineField({
          name: 'steps',
          title: 'Steps',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'number', title: 'Step Number', type: 'string'}),
                defineField({name: 'title', title: 'Title', type: 'string'}),
                defineField({name: 'description', title: 'Description', type: 'text', rows: 2}),
              ],
              preview: {
                select: {title: 'title', subtitle: 'number'},
                prepare({title, subtitle}) {
                  return {title, subtitle: `Step ${subtitle}`}
                },
              },
            },
          ],
        }),
      ],
    }),

    // FAQ Section
    defineField({
      name: 'faq',
      title: 'FAQ Section',
      type: 'object',
      group: 'content',
      fields: [
        defineField({name: 'badge', title: 'Badge', type: 'string'}),
        defineField({name: 'headline', title: 'Headline', type: 'string'}),
        defineField({
          name: 'items',
          title: 'FAQ Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'question', title: 'Question', type: 'string'}),
                defineField({name: 'answer', title: 'Answer', type: 'text', rows: 3}),
              ],
              preview: {
                select: {title: 'question'},
              },
            },
          ],
        }),
      ],
    }),

    // CTA Section
    defineField({
      name: 'cta',
      title: 'CTA Section',
      type: 'object',
      group: 'content',
      fields: [
        defineField({name: 'headline', title: 'Headline', type: 'string'}),
        defineField({name: 'headlineHighlight', title: 'Headline Highlight', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text', rows: 2}),
        defineField({
          name: 'primaryCta',
          title: 'Primary CTA',
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string'}),
            defineField({name: 'url', title: 'URL', type: 'string'}),
          ],
        }),
        defineField({
          name: 'secondaryCta',
          title: 'Secondary CTA',
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string'}),
            defineField({name: 'url', title: 'URL', type: 'string'}),
          ],
        }),
        defineField({name: 'footnote', title: 'Footnote', type: 'string'}),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      language: 'language',
      category: 'category',
    },
    prepare({title, language, category}) {
      const langLabels: Record<string, string> = {
        en: 'EN',
        es: 'ES',
        pt: 'PT',
        tr: 'TR',
      }
      const categoryLabels: Record<string, string> = {
        'crm-integration': 'CRM Integrations',
        feature: 'Features',
        'whatsapp-api': 'WhatsApp API',
      }
      return {
        title: title || 'Category Index',
        subtitle: `${categoryLabels[category] || category} · ${langLabels[language] || language}`,
      }
    },
  },
})
