import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'landingPage',
  title: 'Landing Page',
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
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
    }),
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      of: [
        {type: 'heroSection'},
        {type: 'clientLogosSection'},
        {type: 'comparisonSection'},
        {type: 'problemSection'},
        {type: 'integrationsSection'},
        {type: 'featureSection'},
        {type: 'testimonialSection'},
        {type: 'statsSection'},
        {type: 'securitySection'},
        {type: 'ctaSection'},
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      language: 'language',
    },
    prepare({title, language}) {
      const langLabels: Record<string, string> = {
        en: 'English',
        es: 'Spanish',
        pt: 'Portuguese',
        tr: 'Turkish',
      }
      return {
        title: title || 'Landing Page',
        subtitle: langLabels[language] || language,
      }
    },
  },
})
