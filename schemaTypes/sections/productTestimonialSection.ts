import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'productTestimonialSection',
  title: 'Product Testimonial Section',
  type: 'object',
  fields: [
    defineField({name: 'quote', title: 'Quote', type: 'text', rows: 3}),
    defineField({name: 'author', title: 'Author Name', type: 'string'}),
    defineField({name: 'title', title: 'Author Title', type: 'string'}),
    defineField({name: 'company', title: 'Company', type: 'string'}),
    defineField({name: 'avatar', title: 'Avatar', type: 'image', options: {hotspot: true}}),
  ],
  preview: {
    select: {author: 'author', company: 'company'},
    prepare({author, company}) {
      return {
        title: 'Testimonial Section',
        subtitle: author ? `${author}, ${company || ''}` : 'No author set',
      }
    },
  },
})
