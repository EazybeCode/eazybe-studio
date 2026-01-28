import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'navItem',
  title: 'Navigation Item',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Text displayed in the navigation (e.g., "Platform")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Direct Link URL',
      type: 'string',
      description: 'Optional direct link. If empty, clicking opens the dropdown.',
    }),
    defineField({
      name: 'isMegaMenu',
      title: 'Has Mega Menu',
      type: 'boolean',
      description: 'Enable to show a mega menu dropdown with columns',
      initialValue: false,
    }),
    defineField({
      name: 'columns',
      title: 'Mega Menu Columns',
      type: 'array',
      of: [{type: 'navColumn'}],
      hidden: ({parent}) => !parent?.isMegaMenu,
      description: 'Columns displayed in the mega menu dropdown',
    }),
    defineField({
      name: 'isExternal',
      title: 'External Link',
      type: 'boolean',
      description: 'Opens in new tab if enabled',
      initialValue: false,
      hidden: ({parent}) => parent?.isMegaMenu,
    }),
  ],
  preview: {
    select: {
      title: 'label',
      isMegaMenu: 'isMegaMenu',
      href: 'href',
      columns: 'columns',
    },
    prepare({title, isMegaMenu, href, columns}) {
      let subtitle = ''
      if (isMegaMenu) {
        subtitle = `Mega Menu (${columns?.length || 0} columns)`
      } else if (href) {
        subtitle = href
      }
      return {
        title,
        subtitle,
      }
    },
  },
})
