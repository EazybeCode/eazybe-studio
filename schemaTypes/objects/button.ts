import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'button',
  title: 'Button',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
    }),
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        list: [
          {title: 'Primary', value: 'primary'},
          {title: 'Secondary', value: 'secondary'},
          {title: 'Outline', value: 'outline'},
          {title: 'Ghost', value: 'ghost'},
        ],
      },
      initialValue: 'primary',
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
      options: {
        list: [
          {title: 'Small', value: 'sm'},
          {title: 'Medium', value: 'md'},
          {title: 'Large', value: 'lg'},
        ],
      },
      initialValue: 'md',
    }),
    defineField({
      name: 'showIcon',
      title: 'Show Arrow Icon',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'label',
      variant: 'variant',
    },
    prepare({title, variant}) {
      return {
        title: title || 'Button',
        subtitle: variant,
      }
    },
  },
})
