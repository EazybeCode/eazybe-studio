import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'comparisonRow',
  title: 'Comparison Row',
  type: 'object',
  fields: [
    defineField({
      name: 'capability',
      title: 'Capability',
      type: 'string',
    }),
    defineField({
      name: 'otherTools',
      title: 'Other Tools Support',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'eazybe',
      title: 'Eazybe Support',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'capability',
      eazybe: 'eazybe',
      other: 'otherTools',
    },
    prepare({title, eazybe, other}) {
      return {
        title,
        subtitle: `Eazybe: ${eazybe ? 'Yes' : 'No'} | Others: ${other ? 'Yes' : 'No'}`,
      }
    },
  },
})
