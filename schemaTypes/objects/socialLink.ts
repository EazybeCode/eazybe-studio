import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'socialLink',
  title: 'Social Link',
  type: 'object',
  fields: [
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          {title: 'LinkedIn', value: 'linkedin'},
          {title: 'Twitter/X', value: 'twitter'},
          {title: 'YouTube', value: 'youtube'},
          {title: 'Facebook', value: 'facebook'},
          {title: 'Instagram', value: 'instagram'},
        ],
      },
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'platform',
      subtitle: 'url',
    },
  },
})
