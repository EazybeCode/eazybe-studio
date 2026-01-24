import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'problemCard',
  title: 'Problem Card',
  type: 'object',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          {title: 'Eye Off', value: 'eye-off'},
          {title: 'Clock', value: 'clock'},
          {title: 'User X', value: 'user-x'},
          {title: 'Log Out', value: 'log-out'},
          {title: 'Alert Triangle', value: 'alert-triangle'},
          {title: 'X Circle', value: 'x-circle'},
        ],
      },
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
