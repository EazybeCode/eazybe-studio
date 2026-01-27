import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'integrationPage',
  title: 'Integration Page',
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
      name: 'title',
      title: 'Integration Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
    defineField({
      name: 'logo',
      title: 'Integration Logo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'CRM', value: 'crm'},
          {title: 'Account Management', value: 'account-management'},
          {title: 'Productivity', value: 'productivity'},
        ],
      },
    }),
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({name: 'headline', title: 'Headline', type: 'string'}),
        defineField({name: 'headlineHighlight', title: 'Headline Highlight', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
        defineField({name: 'primaryCta', title: 'Primary CTA', type: 'button'}),
        defineField({name: 'secondaryCta', title: 'Secondary CTA', type: 'button'}),
      ],
    }),
    defineField({
      name: 'features',
      title: 'Integration Features',
      type: 'array',
      of: [{type: 'feature'}],
    }),
    defineField({
      name: 'howItWorks',
      title: 'How It Works',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Section Title', type: 'string'}),
        defineField({
          name: 'steps',
          title: 'Steps',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'stepNumber', title: 'Step Number', type: 'number'}),
                defineField({name: 'title', title: 'Title', type: 'string'}),
                defineField({name: 'description', title: 'Description', type: 'text'}),
                defineField({name: 'image', title: 'Image', type: 'image', options: {hotspot: true}}),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'sections',
      title: 'Additional Sections',
      type: 'array',
      of: [
        {type: 'testimonialSection'},
        {type: 'ctaSection'},
        {type: 'featureSection'},
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      language: 'language',
      category: 'category',
      media: 'logo',
    },
    prepare({title, language, category, media}) {
      const langLabels: Record<string, string> = {
        en: 'EN',
        es: 'ES',
        pt: 'PT',
        tr: 'TR',
      }
      return {
        title: title || 'Integration',
        subtitle: `${category || 'crm'} · ${langLabels[language] || language}`,
        media,
      }
    },
  },
})
