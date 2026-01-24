import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'testimonialSection',
  title: 'Testimonial Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{type: 'testimonial'}],
    }),
  ],
  preview: {
    select: {
      testimonials: 'testimonials',
    },
    prepare({testimonials}) {
      const count = testimonials?.length || 0
      return {
        title: `Testimonials (${count})`,
        subtitle: 'Testimonials',
      }
    },
  },
})
