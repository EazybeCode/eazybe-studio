import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
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
    },
  },
})
