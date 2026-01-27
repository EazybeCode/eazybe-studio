import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
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
      rows: 3,
    }),
    defineField({
      name: 'contactMethods',
      title: 'Contact Methods',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'type', title: 'Type', type: 'string', options: {list: ['email', 'phone', 'address', 'chat']}}),
            defineField({name: 'label', title: 'Label', type: 'string'}),
            defineField({name: 'value', title: 'Value', type: 'string'}),
            defineField({name: 'link', title: 'Link', type: 'url'}),
          ],
        },
      ],
    }),
    defineField({
      name: 'formSection',
      title: 'Contact Form Section',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Form Title', type: 'string'}),
        defineField({name: 'description', title: 'Form Description', type: 'text'}),
        defineField({name: 'submitButtonText', title: 'Submit Button Text', type: 'string'}),
        defineField({name: 'successMessage', title: 'Success Message', type: 'text'}),
      ],
    }),
    defineField({
      name: 'officeLocations',
      title: 'Office Locations',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'name', title: 'Office Name', type: 'string'}),
            defineField({name: 'address', title: 'Address', type: 'text'}),
            defineField({name: 'phone', title: 'Phone', type: 'string'}),
            defineField({name: 'email', title: 'Email', type: 'string'}),
          ],
        },
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
        title: 'Contact Page',
        subtitle: langLabels[language] || language,
      }
    },
  },
})
