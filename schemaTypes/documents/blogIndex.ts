import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'blogIndex',
  title: 'Blog Index Page',
  type: 'document',
  groups: [
    {name: 'hero', title: 'Hero Section'},
    {name: 'listing', title: 'Listing Section'},
    {name: 'sidebar', title: 'Sidebar CTA'},
    {name: 'newsletter', title: 'Newsletter CTA'},
    {name: 'relatedPosts', title: 'Related Posts Section'},
    {name: 'seo', title: 'SEO'},
  ],
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
      title: 'Page Title',
      type: 'string',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),

    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      group: 'hero',
      fields: [
        defineField({
          name: 'badge',
          title: 'Badge Text',
          type: 'string',
          description: 'e.g., "Knowledge Hub"',
        }),
        defineField({
          name: 'headline',
          title: 'Headline',
          type: 'string',
          description: 'Main headline text',
        }),
        defineField({
          name: 'headlineHighlight',
          title: 'Headline Highlight',
          type: 'string',
          description: 'Text to highlight with color (e.g., "Resources")',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'searchPlaceholder',
          title: 'Search Placeholder',
          type: 'string',
          description: 'e.g., "Search articles..."',
        }),
      ],
    }),

    // Categories
    defineField({
      name: 'categories',
      title: 'Blog Categories',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'name', title: 'Display Name', type: 'string'}),
            defineField({name: 'value', title: 'Value (for filtering)', type: 'string'}),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'value',
            },
          },
        },
      ],
    }),

    // Featured Section
    defineField({
      name: 'featuredSection',
      title: 'Featured Section',
      type: 'object',
      group: 'listing',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          description: 'e.g., "Featured Article"',
        }),
        defineField({
          name: 'badgeText',
          title: 'Featured Badge Text',
          type: 'string',
          description: 'Badge shown on featured card (e.g., "Featured")',
        }),
        defineField({
          name: 'featuredPosts',
          title: 'Featured Posts',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'blogPost'}]}],
          validation: (Rule) => Rule.max(3),
        }),
      ],
    }),

    // All Articles Section
    defineField({
      name: 'allArticlesSection',
      title: 'All Articles Section',
      type: 'object',
      group: 'listing',
      fields: [
        defineField({
          name: 'badge',
          title: 'Badge Text',
          type: 'string',
          description: 'e.g., "Browse"',
        }),
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          description: 'e.g., "All Articles"',
        }),
        defineField({
          name: 'emptyStateTitle',
          title: 'Empty State Title',
          type: 'string',
          description: 'Text when no articles match filters',
        }),
        defineField({
          name: 'emptyStateButton',
          title: 'Empty State Button Text',
          type: 'string',
          description: 'e.g., "Clear Filters"',
        }),
      ],
    }),

    // Sidebar CTA (for Blog Detail Page)
    defineField({
      name: 'sidebarCta',
      title: 'Sidebar CTA',
      type: 'object',
      group: 'sidebar',
      description: 'CTA shown in blog post sidebar',
      fields: [
        defineField({
          name: 'badge',
          title: 'Badge Text',
          type: 'string',
          description: 'e.g., "Free Trial"',
        }),
        defineField({
          name: 'headline',
          title: 'Headline',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
        }),
        defineField({
          name: 'buttonUrl',
          title: 'Button URL',
          type: 'string',
        }),
        defineField({
          name: 'footnote',
          title: 'Footnote',
          type: 'string',
          description: 'e.g., "No credit card required"',
        }),
      ],
    }),

    // Newsletter CTA (for Blog Detail Page)
    defineField({
      name: 'newsletterCta',
      title: 'Newsletter CTA',
      type: 'object',
      group: 'newsletter',
      description: 'Newsletter signup section in blog posts',
      fields: [
        defineField({
          name: 'headline',
          title: 'Headline',
          type: 'string',
          description: 'e.g., "Enjoyed this article?"',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'placeholder',
          title: 'Email Placeholder',
          type: 'string',
          description: 'e.g., "your@email.com"',
        }),
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          description: 'e.g., "Subscribe"',
        }),
      ],
    }),

    // Related Posts Section (for Blog Detail Page)
    defineField({
      name: 'relatedPostsSection',
      title: 'Related Posts Section',
      type: 'object',
      group: 'relatedPosts',
      fields: [
        defineField({
          name: 'badge',
          title: 'Badge Text',
          type: 'string',
          description: 'e.g., "Keep Reading"',
        }),
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          description: 'e.g., "Related Articles"',
        }),
        defineField({
          name: 'viewAllText',
          title: 'View All Button Text',
          type: 'string',
          description: 'e.g., "View All"',
        }),
      ],
    }),

    // Blog Detail Page Labels
    defineField({
      name: 'detailLabels',
      title: 'Blog Detail Page Labels',
      type: 'object',
      fields: [
        defineField({
          name: 'backToBlog',
          title: 'Back to Blog Text',
          type: 'string',
          description: 'e.g., "Back to Blog"',
        }),
        defineField({
          name: 'tocTitle',
          title: 'Table of Contents Title',
          type: 'string',
          description: 'e.g., "In This Article"',
        }),
        defineField({
          name: 'summaryTitle',
          title: 'Summary Box Title',
          type: 'string',
          description: 'e.g., "Summary"',
        }),
        defineField({
          name: 'summarySubtitle',
          title: 'Summary Box Subtitle',
          type: 'string',
          description: 'e.g., "Quick takeaways from this article"',
        }),
        defineField({
          name: 'faqTitle',
          title: 'FAQ Section Title',
          type: 'string',
          description: 'e.g., "Frequently Asked Questions"',
        }),
        defineField({
          name: 'authorLabel',
          title: 'Author Label',
          type: 'string',
          description: 'e.g., "Written by"',
        }),
        defineField({
          name: 'minReadSuffix',
          title: 'Min Read Suffix',
          type: 'string',
          description: 'e.g., "min read"',
        }),
      ],
    }),

    // CTA Section (Bottom of listing page)
    defineField({
      name: 'ctaSection',
      title: 'CTA Section',
      type: 'ctaSection',
    }),
  ],
  preview: {
    select: {
      language: 'language',
    },
    prepare({language}) {
      const langLabels: Record<string, string> = {
        en: 'English',
        es: 'Spanish',
        pt: 'Portuguese',
        tr: 'Turkish',
      }
      return {
        title: 'Blog Index',
        subtitle: langLabels[language] || language,
      }
    },
  },
})
