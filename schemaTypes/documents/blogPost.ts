import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
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
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Primary category for Hub-Spoke content model',
      options: {
        list: [
          // Hubs (Pillar Content)
          {title: 'CRM Integrations', value: 'CRM Integrations'},
          {title: 'Features', value: 'Features'},
          {title: 'WhatsApp for Sales', value: 'WhatsApp for Sales'},
          {title: 'WhatsApp for Support', value: 'WhatsApp for Support'},
          // Spokes (Supporting Content)
          {title: 'How-To Guides', value: 'How-To Guides'},
          // Supporting Content
          {title: 'Product Updates', value: 'Product Updates'},
          {title: 'Case Studies', value: 'Case Studies'},
          {title: 'Industry Insights', value: 'Industry Insights'},
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'parentHub',
      title: 'Parent Hub (for Spoke content)',
      type: 'reference',
      to: [{type: 'blogPost'}],
      description: 'If this is a How-To Guide (Spoke), link to the parent Hub article',
      hidden: ({document}) => document?.category !== 'How-To Guides',
    }),
    defineField({
      name: 'crmType',
      title: 'CRM Type',
      type: 'string',
      description: 'Links to Hub page: eazybe.com/{value}',
      options: {
        list: [
          {title: 'HubSpot', value: 'hubspot-whatsapp-integration'},
          {title: 'Salesforce', value: 'salesforce-whatsapp-integration'},
          {title: 'Zoho', value: 'zoho-whatsapp-integration'},
          {title: 'LeadSquared', value: 'leadsquared-whatsapp-integration'},
          {title: 'Freshdesk', value: 'freshdesk-whatsapp-integration'},
          {title: 'Bitrix24', value: 'bitrix24-whatsapp-integration'},
          {title: 'Webhooks', value: 'webhooks-whatsapp-integration'},
          {title: 'Pipedrive', value: 'pipedrive-whatsapp-integration'},
          {title: 'Monday', value: 'monday-whatsapp-integration'},
          {title: 'Google Sheets', value: 'google-sheets-whatsapp-integration'},
        ],
        layout: 'dropdown',
      },
      hidden: ({document}) => document?.category !== 'CRM Integrations' && document?.category !== 'How-To Guides',
    }),
    defineField({
      name: 'featureType',
      title: 'Feature Type',
      type: 'string',
      description: 'Links to Hub page: eazybe.com/{value}',
      options: {
        list: [
          {title: 'Quick Reply', value: 'quick-reply'},
          {title: 'Scheduler', value: 'scheduler'},
          {title: 'WhatsApp API', value: 'whatsapp-api'},
          {title: 'WhatsApp Templates', value: 'whatsapp-templates'},
          {title: 'Broadcast', value: 'whatsapp-broadcast'},
          {title: 'Coexistence', value: 'whatsapp-coexistence'},
          {title: 'Team Inbox', value: 'team-inbox'},
          {title: 'Labels', value: 'labels'},
          {title: 'Chat Backup', value: 'chat-backup'},
          {title: 'Analytics', value: 'analytics'},
        ],
        layout: 'dropdown',
      },
      hidden: ({document}) => document?.category !== 'Features' && document?.category !== 'How-To Guides',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'featuredImage',
      language: 'language',
    },
    prepare(selection) {
      const {author, language, title, media} = selection
      const langLabels: Record<string, string> = {en: 'EN', es: 'ES', pt: 'PT', tr: 'TR'}
      return {
        title,
        subtitle: `${author ? `by ${author}` : ''} · ${langLabels[language] || language}`,
        media,
      }
    },
  },
})
