import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'pricingPlan',
  title: 'Pricing Plan',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Plan Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'icon',
      title: 'Icon Type',
      type: 'string',
      options: {
        list: [
          {title: 'Starter (Zap)', value: 'starter'},
          {title: 'Growth (Rocket)', value: 'growth'},
          {title: 'Enterprise (Building)', value: 'enterprise'},
        ],
      },
      initialValue: 'starter',
    }),
    defineField({
      name: 'monthlyPrice',
      title: 'Monthly Price',
      type: 'number',
      description: 'Leave 0 for custom/contact sales pricing',
    }),
    defineField({
      name: 'annualPrice',
      title: 'Annual Price (per month)',
      type: 'number',
      description: 'Leave 0 for custom/contact sales pricing',
    }),
    defineField({
      name: 'currency',
      title: 'Currency Symbol',
      type: 'string',
      initialValue: '$',
    }),
    defineField({
      name: 'isPopular',
      title: 'Is Popular/Recommended',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isEnterprise',
      title: 'Is Enterprise (Contact Sales)',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'text', title: 'Feature Text', type: 'string'}),
            defineField({name: 'included', title: 'Included', type: 'boolean', initialValue: true}),
            defineField({name: 'highlight', title: 'Highlight Feature', type: 'boolean', initialValue: false}),
          ],
          preview: {
            select: {
              title: 'text',
              included: 'included',
            },
            prepare({title, included}) {
              return {
                title: title || 'Feature',
                subtitle: included ? '✓ Included' : '✗ Not included',
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'cta',
      title: 'CTA Button',
      type: 'object',
      fields: [
        defineField({name: 'label', title: 'Button Label', type: 'string'}),
        defineField({name: 'url', title: 'Button URL', type: 'string'}),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      monthlyPrice: 'monthlyPrice',
      isEnterprise: 'isEnterprise',
    },
    prepare({title, monthlyPrice, isEnterprise}) {
      return {
        title: title || 'Pricing Plan',
        subtitle: isEnterprise ? 'Contact Sales' : monthlyPrice ? `$${monthlyPrice}/user/mo` : 'Free',
      }
    },
  },
})
