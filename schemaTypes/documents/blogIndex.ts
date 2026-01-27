import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'blogIndex',
  title: 'Blog Index Page',
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
      name: 'headline',
      title: 'Headline',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'featuredPosts',
      title: 'Featured Posts',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'blogPost'}]}],
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: 'categories',
      title: 'Blog Categories',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'name', title: 'Category Name', type: 'string'}),
            defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'name'}}),
            defineField({name: 'description', title: 'Description', type: 'string'}),
          ],
        },
      ],
    }),
    defineField({
      name: 'ctaSection',
      title: 'CTA Section',
      type: 'ctaSection',
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
        title: 'Blog Index',
        subtitle: langLabels[language] || language,
      }
    },
  },
})
