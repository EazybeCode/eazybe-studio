import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
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
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({name: 'headline', title: 'Headline', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text', rows: 4}),
      ],
    }),
    defineField({
      name: 'mission',
      title: 'Mission Section',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'content', title: 'Content', type: 'text', rows: 4}),
      ],
    }),
    defineField({
      name: 'values',
      title: 'Company Values',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Value Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text'}),
            defineField({name: 'icon', title: 'Icon Name', type: 'string'}),
          ],
        },
      ],
    }),
    defineField({
      name: 'team',
      title: 'Team Section',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Section Title', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text'}),
        defineField({
          name: 'members',
          title: 'Team Members',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'name', title: 'Name', type: 'string'}),
                defineField({name: 'role', title: 'Role', type: 'string'}),
                defineField({name: 'photo', title: 'Photo', type: 'image', options: {hotspot: true}}),
                defineField({name: 'linkedin', title: 'LinkedIn URL', type: 'url'}),
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
        {type: 'statsSection'},
        {type: 'testimonialSection'},
        {type: 'ctaSection'},
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
        title: 'About Page',
        subtitle: langLabels[language] || language,
      }
    },
  },
})
