import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '5awzi0t4',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
})

const blogIndexDocument = {
  _type: 'blogIndex',
  _id: 'blogIndex-en',
  language: 'en',
  title: 'Eazybe Blog',

  // SEO
  seo: {
    metaTitle: 'Eazybe Blog - WhatsApp CRM Tips, Guides & Resources',
    metaDescription: 'Learn how to boost sales and customer support with WhatsApp CRM integration. Tutorials, guides, and insights for HubSpot, Salesforce, Zoho, and more.',
  },

  // Hero Section
  hero: {
    badge: 'Knowledge Hub',
    headline: 'Explore Our',
    headlineHighlight: 'Resources',
    description: 'Guides, tutorials, and insights to help you master WhatsApp-powered customer engagement',
    searchPlaceholder: 'Search articles...',
  },

  // Hub-Spoke Categories
  categories: [
    // Hubs (Pillar Content)
    { _key: 'cat-1', name: 'CRM Integrations', value: 'CRM Integrations' },
    { _key: 'cat-2', name: 'Features', value: 'Features' },
    { _key: 'cat-3', name: 'WhatsApp for Sales', value: 'WhatsApp for Sales' },
    { _key: 'cat-4', name: 'WhatsApp for Support', value: 'WhatsApp for Support' },
    // Spokes (Supporting Content)
    { _key: 'cat-5', name: 'How-To Guides', value: 'How-To Guides' },
    // Supporting Content
    { _key: 'cat-6', name: 'Product Updates', value: 'Product Updates' },
    { _key: 'cat-7', name: 'Case Studies', value: 'Case Studies' },
    { _key: 'cat-8', name: 'Industry Insights', value: 'Industry Insights' },
  ],

  // Featured Section
  featuredSection: {
    title: 'Featured Article',
    badgeText: 'Featured',
  },

  // All Articles Section
  allArticlesSection: {
    badge: 'Browse',
    title: 'All Articles',
    emptyStateTitle: 'No articles match your filters',
    emptyStateButton: 'Clear Filters',
  },

  // Sidebar CTA (Blog Detail Page)
  sidebarCta: {
    badge: 'Free Trial',
    headline: 'Ready to boost your WhatsApp sales?',
    description: 'Connect WhatsApp to your CRM and never miss a lead again.',
    buttonText: 'Start Free Trial',
    buttonUrl: 'https://web.eazybe.com/signup',
    footnote: 'No credit card required',
  },

  // Newsletter CTA
  newsletterCta: {
    headline: 'Enjoyed this article?',
    description: 'Get the latest WhatsApp sales tips and CRM integration guides delivered to your inbox.',
    placeholder: 'your@email.com',
    buttonText: 'Subscribe',
  },

  // Related Posts Section
  relatedPostsSection: {
    badge: 'Keep Reading',
    title: 'Related Articles',
    viewAllText: 'View All',
  },

  // Blog Detail Page Labels
  detailLabels: {
    backToBlog: 'Back to Blog',
    tocTitle: 'In This Article',
    summaryTitle: 'Summary',
    summarySubtitle: 'Quick takeaways from this article',
    faqTitle: 'Frequently Asked Questions',
    authorLabel: 'Written by',
    minReadSuffix: 'min read',
  },

  // CTA Section
  ctaSection: {
    headline: 'Ready to transform your WhatsApp',
    headlineHighlight: 'into a sales powerhouse?',
    description: 'Join 1,000+ sales teams using Eazybe to close more deals through WhatsApp.',
    primaryCta: {
      label: 'Start Free Trial',
      url: 'https://web.eazybe.com/signup',
    },
    secondaryCta: {
      label: 'Book a Demo',
      url: 'https://calendly.com/eazybe/demo',
    },
    footnote: 'No credit card required • Free 14-day trial',
  },
}

async function createBlogIndex() {
  try {
    // Check if document already exists
    const existing = await client.fetch('*[_type == "blogIndex" && _id == "blogIndex-en"][0]')

    if (existing) {
      console.log('Blog Index document already exists. Updating...')
      const result = await client.createOrReplace(blogIndexDocument)
      console.log('Blog Index updated successfully:', result._id)
    } else {
      console.log('Creating new Blog Index document...')
      const result = await client.create(blogIndexDocument)
      console.log('Blog Index created successfully:', result._id)
    }
  } catch (error) {
    console.error('Error creating Blog Index:', error)
    process.exit(1)
  }
}

createBlogIndex()
