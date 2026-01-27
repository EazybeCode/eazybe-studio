import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'productPage',
  title: 'Product/Integration Page',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content'},
    {name: 'seo', title: 'SEO'},
    {name: 'settings', title: 'Settings'},
  ],
  fields: [
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
      name: 'seo',
      title: 'SEO',
      type: 'object',
      group: 'seo',
      fields: [
        defineField({name: 'metaTitle', title: 'Meta Title', type: 'string'}),
        defineField({name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3}),
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      group: 'settings',
      options: {
        list: [
          {title: 'CRM Integration', value: 'crm-integration'},
          {title: 'Product Feature', value: 'feature'},
          {title: 'WhatsApp API', value: 'whatsapp-api'},
        ],
      },
    }),
    // CRM Integration Settings
    defineField({
      name: 'crmName',
      title: 'CRM Name',
      type: 'string',
      group: 'settings',
      description: 'e.g., HubSpot, Salesforce, Zoho',
      hidden: ({document}) => document?.category !== 'crm-integration',
    }),
    defineField({
      name: 'crmSlug',
      title: 'CRM Slug',
      type: 'string',
      group: 'settings',
      description: 'e.g., hubspot, salesforce, zoho (used for logo mapping)',
      hidden: ({document}) => document?.category !== 'crm-integration',
    }),
    defineField({
      name: 'crmColor',
      title: 'CRM Brand Color',
      type: 'string',
      group: 'settings',
      description: 'Hex color code, e.g., #FF7A59 for HubSpot',
      hidden: ({document}) => document?.category !== 'crm-integration',
    }),
    // Modular Sections Array - The main content builder
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      group: 'content',
      description: 'Add and arrange page sections. Each section can be customized with its own content.',
      of: [
        {type: 'productHeroSection'},
        {type: 'benefitsSection'},
        {type: 'productFeaturesSection'},
        {type: 'howItWorksSection'},
        {type: 'useCasesSection'},
        {type: 'productTestimonialSection'},
        {type: 'faqSection'},
        {type: 'securitySection'},
        {type: 'ctaSection'},
      ],
    }),
    // ============ LEGACY FIELDS (kept for backward compatibility) ============
    // These will be used if 'sections' array is empty
    // Hero Section (Legacy)
    defineField({
      name: 'hero',
      title: 'Hero Section (Legacy)',
      type: 'object',
      group: 'content',
      description: 'Legacy field - use Sections array instead',
      hidden: ({document}) => (document?.sections as any[])?.length > 0,
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
        defineField({
          name: 'stats',
          title: 'Stats',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'value', title: 'Value', type: 'string'}),
                defineField({name: 'label', title: 'Label', type: 'string'}),
              ],
            },
          ],
        }),
        defineField({name: 'heroImage', title: 'Hero Image', type: 'image', options: {hotspot: true}}),
      ],
    }),
    // Benefits Section (Legacy)
    defineField({
      name: 'benefits',
      title: 'Benefits Section (Legacy)',
      type: 'object',
      group: 'content',
      hidden: ({document}) => (document?.sections as any[])?.length > 0,
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
                      {title: 'Sync', value: 'sync'},
                      {title: 'Workflow', value: 'workflow'},
                      {title: 'Inbox', value: 'inbox'},
                      {title: 'Team', value: 'team'},
                      {title: 'Security', value: 'security'},
                      {title: 'Support', value: 'support'},
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
                      {title: 'Analytics', value: 'analytics'},
                      {title: 'Speed', value: 'speed'},
                      {title: 'Global', value: 'global'},
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
    // Features Section (Legacy)
    defineField({
      name: 'features',
      title: 'Features Section (Legacy)',
      type: 'array',
      group: 'content',
      hidden: ({document}) => (document?.sections as any[])?.length > 0,
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'badge', title: 'Badge', type: 'string'}),
            defineField({name: 'headline', title: 'Headline', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
            defineField({
              name: 'points',
              title: 'Bullet Points',
              type: 'array',
              of: [{type: 'string'}],
            }),
            defineField({
              name: 'cta',
              title: 'CTA',
              type: 'object',
              fields: [
                defineField({name: 'label', title: 'Label', type: 'string'}),
                defineField({name: 'url', title: 'URL', type: 'string'}),
              ],
            }),
            defineField({
              name: 'image',
              title: 'Visual Type',
              type: 'string',
              options: {
                list: [
                  {title: 'Sync Visual', value: 'sync-visual'},
                  {title: 'Mini CRM Visual', value: 'mini-crm-visual'},
                  {title: 'Workflow Visual', value: 'workflow-visual'},
                ],
              },
            }),
            defineField({
              name: 'alignRight',
              title: 'Align Image Right',
              type: 'boolean',
              initialValue: false,
            }),
          ],
          preview: {
            select: {title: 'headline', subtitle: 'badge'},
          },
        },
      ],
    }),
    // How It Works Section (Legacy)
    defineField({
      name: 'howItWorks',
      title: 'How It Works Section (Legacy)',
      type: 'object',
      group: 'content',
      hidden: ({document}) => (document?.sections as any[])?.length > 0,
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
    // Use Cases Section (Legacy)
    defineField({
      name: 'useCases',
      title: 'Use Cases Section (Legacy)',
      type: 'object',
      group: 'content',
      hidden: ({document}) => (document?.sections as any[])?.length > 0,
      fields: [
        defineField({name: 'badge', title: 'Badge', type: 'string'}),
        defineField({name: 'headline', title: 'Headline', type: 'string'}),
        defineField({
          name: 'items',
          title: 'Use Case Items',
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
                      {title: 'Sales', value: 'sales'},
                      {title: 'Support', value: 'support'},
                      {title: 'Marketing', value: 'marketing'},
                    ],
                  },
                }),
                defineField({name: 'title', title: 'Title', type: 'string'}),
                defineField({name: 'description', title: 'Description', type: 'text', rows: 2}),
                defineField({
                  name: 'benefits',
                  title: 'Benefits',
                  type: 'array',
                  of: [{type: 'string'}],
                }),
              ],
              preview: {
                select: {title: 'title', subtitle: 'icon'},
              },
            },
          ],
        }),
      ],
    }),
    // Testimonial Section (Legacy)
    defineField({
      name: 'testimonial',
      title: 'Testimonial (Legacy)',
      type: 'object',
      group: 'content',
      hidden: ({document}) => (document?.sections as any[])?.length > 0,
      fields: [
        defineField({name: 'quote', title: 'Quote', type: 'text', rows: 3}),
        defineField({name: 'author', title: 'Author Name', type: 'string'}),
        defineField({name: 'title', title: 'Author Title', type: 'string'}),
        defineField({name: 'company', title: 'Company', type: 'string'}),
        defineField({name: 'avatar', title: 'Avatar', type: 'image', options: {hotspot: true}}),
      ],
    }),
    // FAQ Section (Legacy)
    defineField({
      name: 'faq',
      title: 'FAQ Section (Legacy)',
      type: 'object',
      group: 'content',
      hidden: ({document}) => (document?.sections as any[])?.length > 0,
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
    // CTA Section (Legacy)
    defineField({
      name: 'cta',
      title: 'CTA Section (Legacy)',
      type: 'object',
      group: 'content',
      hidden: ({document}) => (document?.sections as any[])?.length > 0,
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
      crmName: 'crmName',
    },
    prepare({title, language, category, crmName}) {
      const langLabels: Record<string, string> = {
        en: 'EN',
        es: 'ES',
        pt: 'PT',
        tr: 'TR',
      }
      const categoryLabel = crmName ? `${crmName} Integration` : category || 'Product'
      return {
        title: title || 'Product Page',
        subtitle: `${categoryLabel} · ${langLabels[language] || language}`,
      }
    },
  },
})
