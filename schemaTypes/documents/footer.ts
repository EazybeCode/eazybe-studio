import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [{type: 'socialLink'}],
    }),
    defineField({
      name: 'columns',
      title: 'Footer Columns',
      type: 'array',
      of: [{type: 'footerColumn'}],
    }),
    defineField({
      name: 'badges',
      title: 'Trust Badges',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright Text',
      type: 'string',
    }),
    defineField({
      name: 'legalLinks',
      title: 'Legal Links',
      type: 'array',
      of: [{type: 'footerLink'}],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Footer',
      }
    },
  },
})
