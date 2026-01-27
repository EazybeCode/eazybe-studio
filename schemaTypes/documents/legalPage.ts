import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'legalPage',
  title: 'Legal Page',
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
      name: 'pageType',
      title: 'Page Type',
      type: 'string',
      options: {
        list: [
          {title: 'Privacy Policy', value: 'privacy'},
          {title: 'Terms of Service', value: 'terms'},
          {title: 'Cookie Policy', value: 'cookies'},
          {title: 'Master Service Agreement', value: 'msa'},
          {title: 'Data Processing Agreement', value: 'dpa'},
          {title: 'Other', value: 'other'},
        ],
      },
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'date',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
          ],
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
              {title: 'Underline', value: 'underline'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      language: 'language',
      pageType: 'pageType',
    },
    prepare({title, language, pageType}) {
      const langLabels: Record<string, string> = {
        en: 'EN',
        es: 'ES',
        pt: 'PT',
        tr: 'TR',
      }
      return {
        title: title || 'Legal Page',
        subtitle: `${pageType || 'legal'} · ${langLabels[language] || language}`,
      }
    },
  },
})
