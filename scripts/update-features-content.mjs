import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Read token from .env file
const envPath = resolve(__dirname, '..', '.env')
const envContent = readFileSync(envPath, 'utf-8')
const tokenMatch = envContent.match(/SANITY_TOKEN=(.+)/)
const token = tokenMatch ? tokenMatch[1].trim() : null

if (!token) {
  throw new Error('SANITY_TOKEN not found in .env file')
}

const client = createClient({
  projectId: '5awzi0t4',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: token,
})

// ========================================
// FEATURES INDEX PAGE
// ========================================

const featuresIndexPage = {
  _type: 'categoryIndexPage',
  _id: 'categoryIndexPage-features-en',
  language: 'en',
  title: 'Product Features',
  slug: { _type: 'slug', current: 'features' },
  category: 'feature',
  seo: {
    metaTitle: 'WhatsApp Sales Features | Backup, Team Inbox, CRM & AI | Eazybe',
    metaDescription: 'Transform WhatsApp into a sales platform. Cloud backup, team inbox, CRM sync, and AI insights. Works with WhatsApp Business App—no API migration.',
  },
  hero: {
    badge: 'PRODUCT FEATURES',
    headline: 'Everything you need to',
    headlineHighlight: 'sell on WhatsApp',
    description: 'Your reps live in WhatsApp. Give them the tools to close more deals—cloud backup, team visibility, CRM sync, and AI insights. No workflow changes. No API migration.',
    primaryCta: { label: 'Start Free Trial', url: '/signup' },
    secondaryCta: { label: 'Watch Demo', url: '/demo' },
  },
  intro: {
    headline: 'WhatsApp wasn\'t built for sales teams. We fixed that.',
    description: 'Your sales team runs on WhatsApp—80% of customer conversations happen there. But WhatsApp was designed for personal messaging, not professional sales. Conversations disappear. Managers can\'t see what reps are doing. Handoffs fail when people leave.\n\nEazybe adds the missing pieces: automatic cloud backup, shared team inbox, CRM integration, and AI that spots deals going cold. All without changing how your team works.',
  },
  featuredItems: [
    {
      _key: 'cloud-backup',
      name: 'Cloud Backup',
      slug: 'cloud-backup',
      description: 'Never lose a conversation again. Every message, attachment, and voice note backed up automatically.',
      icon: 'cloud',
      color: '#3B82F6',
      isFeatured: true,
      tags: ['Essential', 'Automatic'],
    },
    {
      _key: 'team-inbox',
      name: 'Team Inbox',
      slug: 'team-inbox',
      description: 'See all team conversations in one dashboard. Route leads, track responses, spot problems.',
      icon: 'inbox',
      color: '#10B981',
      isFeatured: true,
      tags: ['Popular', 'Managers'],
    },
    {
      _key: 'whatsapp-crm',
      name: 'WhatsApp CRM',
      slug: 'whatsapp-crm',
      description: 'Labels, funnels, and deal stages inside WhatsApp. Track opportunities without switching apps.',
      icon: 'funnel',
      color: '#8B5CF6',
      isFeatured: true,
      tags: ['Sales', 'Organization'],
    },
    {
      _key: 'revenue-inbox',
      name: 'Revenue Inbox',
      slug: 'revenue-inbox',
      description: 'See deals sorted by health. Spot which opportunities are hot, stalled, or slipping away.',
      icon: 'revenue',
      color: '#14B8A6',
      isFeatured: true,
      tags: ['Intelligence', 'New'],
    },
    {
      _key: 'whatsapp-copilot',
      name: 'WhatsApp Copilot',
      slug: 'whatsapp-copilot',
      description: 'AI that drafts replies, summarizes conversations, and surfaces insights automatically.',
      icon: 'ai',
      color: '#0EA5E9',
      isFeatured: true,
      tags: ['AI', 'New'],
    },
    {
      _key: 'quick-reply',
      name: 'Quick Replies',
      slug: 'quick-reply',
      description: 'One-click access to pre-written messages. Save hours on repetitive responses.',
      icon: 'reply',
      color: '#F59E0B',
      isFeatured: false,
      tags: ['Productivity'],
    },
    {
      _key: 'scheduler',
      name: 'Message Scheduler',
      slug: 'scheduler',
      description: 'Schedule follow-ups for the perfect time. Never miss a touchpoint.',
      icon: 'clock',
      color: '#EC4899',
      isFeatured: false,
      tags: ['Automation'],
    },
    {
      _key: 'rep-radar',
      name: 'Rep Radar',
      slug: 'rep-radar',
      description: 'Real-time analytics on team activity. Response times, message volume, engagement.',
      icon: 'radar',
      color: '#6366F1',
      isFeatured: false,
      tags: ['Analytics'],
    },
  ],
  comparisonTable: {
    headline: 'Choose Your Plan',
    description: 'All plans include Chrome extension, CRM sync, and cloud backup.',
    columns: ['Feature', 'Starter', 'Scalar', 'Omnis'],
    rows: [
      { _key: 'backup', feature: 'Cloud Backup', values: [{ _key: 'v1', type: 'check' }, { _key: 'v2', type: 'check' }, { _key: 'v3', type: 'check' }] },
      { _key: 'team', feature: 'Team Inbox', values: [{ _key: 'v1', type: 'check' }, { _key: 'v2', type: 'check' }, { _key: 'v3', type: 'check' }] },
      { _key: 'crm', feature: 'CRM Integrations', values: [{ _key: 'v1', type: 'check' }, { _key: 'v2', type: 'check' }, { _key: 'v3', type: 'check' }] },
      { _key: 'labels', feature: 'Labels & Funnels', values: [{ _key: 'v1', type: 'check' }, { _key: 'v2', type: 'check' }, { _key: 'v3', type: 'check' }] },
      { _key: 'quick', feature: 'Quick Replies', values: [{ _key: 'v1', type: 'check' }, { _key: 'v2', type: 'check' }, { _key: 'v3', type: 'check' }] },
      { _key: 'schedule', feature: 'Scheduled Messages', values: [{ _key: 'v1', type: 'text', text: '3/day' }, { _key: 'v2', type: 'check' }, { _key: 'v3', type: 'check' }] },
      { _key: 'revenue', feature: 'Revenue Inbox', values: [{ _key: 'v1', type: 'cross' }, { _key: 'v2', type: 'check' }, { _key: 'v3', type: 'check' }] },
      { _key: 'radar', feature: 'Rep Radar Analytics', values: [{ _key: 'v1', type: 'cross' }, { _key: 'v2', type: 'check' }, { _key: 'v3', type: 'check' }] },
      { _key: 'copilot', feature: 'WhatsApp Copilot AI', values: [{ _key: 'v1', type: 'cross' }, { _key: 'v2', type: 'cross' }, { _key: 'v3', type: 'check' }] },
      { _key: 'auto', feature: 'Auto Deal Health Sync', values: [{ _key: 'v1', type: 'cross' }, { _key: 'v2', type: 'cross' }, { _key: 'v3', type: 'check' }] },
    ],
  },
  benefits: {
    badge: 'Why Eazybe?',
    headline: 'Built for teams who close deals on WhatsApp',
    items: [
      { _key: 'b1', icon: 'sync', title: 'Works With Your WhatsApp', description: 'Personal, Business App, or API—we work with all of them. No expensive migration required.' },
      { _key: 'b2', icon: 'security', title: 'Enterprise Security', description: 'SOC 2 Type II certified, GDPR compliant, Meta Business Partner. Your data is protected.' },
      { _key: 'b3', icon: 'speed', title: 'Live in 5 Minutes', description: 'Chrome extension install. No IT involvement. No API setup. Start today.' },
      { _key: 'b4', icon: 'team', title: 'Manager Visibility', description: 'See what\'s happening across all team conversations. No more blind spots.' },
      { _key: 'b5', icon: 'workflow', title: 'CRM Sync Built-In', description: 'Every conversation syncs to HubSpot, Salesforce, or Zoho automatically.' },
      { _key: 'b6', icon: 'inbox', title: 'No Workflow Changes', description: 'Your team keeps using WhatsApp Web exactly as they do now. Just with superpowers.' },
    ],
  },
  howItWorks: {
    badge: 'How It Works',
    headline: 'Setup takes 5 minutes',
    description: 'No developers. No IT tickets. No waiting.',
    steps: [
      { _key: 's1', number: '01', title: 'Install Extension', description: 'Add Eazybe to Chrome. Takes 60 seconds.' },
      { _key: 's2', number: '02', title: 'Connect Accounts', description: 'Sign in with Google. Connect your CRM if needed.' },
      { _key: 's3', number: '03', title: 'Start Working', description: 'Open WhatsApp Web. The sidebar appears automatically.' },
    ],
  },
  faq: {
    badge: 'FAQ',
    headline: 'Common questions',
    items: [
      { _key: 'f1', question: 'Do I need WhatsApp Business API?', answer: 'No. Eazybe works with personal WhatsApp, WhatsApp Business App, AND WhatsApp Business API. We work with whatever you already use—no migration needed.' },
      { _key: 'f2', question: 'How does cloud backup work?', answer: 'Every message, attachment, and voice note syncs to our secure cloud in real-time. Data is encrypted in transit and at rest. Search and access your entire history anytime.' },
      { _key: 'f3', question: 'Can managers see team conversations?', answer: 'Yes. Team Inbox gives managers visibility into all conversations without accessing personal phones. Filter by rep, time, or search across everything.' },
      { _key: 'f4', question: 'Which CRMs do you support?', answer: 'HubSpot, Salesforce, Zoho, LeadSquared, Bitrix24, Freshdesk, and more. Conversations sync automatically to contacts and deals.' },
      { _key: 'f5', question: 'Is my data secure?', answer: 'SOC 2 Type II certified, GDPR compliant, official Meta Business Partner. Used by healthcare, finance, and government customers.' },
      { _key: 'f6', question: 'What\'s in the free trial?', answer: '14 days of full Starter plan access. No credit card required. Cancel anytime.' },
    ],
  },
  cta: {
    headline: 'Stop losing deals in',
    headlineHighlight: 'chat chaos',
    description: 'Join 30,000+ companies who\'ve turned WhatsApp into a professional sales platform.',
    primaryCta: { label: 'Start Free Trial', url: '/signup' },
    secondaryCta: { label: 'See Pricing', url: '/pricing' },
    footnote: '14-day free trial • No credit card • Live in 5 minutes',
  },
}

// ========================================
// INDIVIDUAL FEATURE PAGES
// ========================================

const cloudBackupPage = {
  _type: 'productPage',
  _id: 'productPage-cloud-backup-en',
  language: 'en',
  title: 'Cloud Backup',
  slug: { _type: 'slug', current: 'cloud-backup' },
  category: 'feature',
  seo: {
    metaTitle: 'WhatsApp Cloud Backup | Never Lose a Conversation | Eazybe',
    metaDescription: 'Automatic cloud backup for all WhatsApp conversations. Messages, attachments, voice notes—everything preserved and searchable forever.',
  },
  hero: {
    badge: 'CLOUD BACKUP',
    headline: 'Never lose a',
    headlineHighlight: 'conversation again',
    description: 'Reps leave. Phones break. Messages get deleted. With Eazybe, every WhatsApp conversation is automatically backed up to the cloud—searchable, secure, and yours forever.',
    primaryCta: { label: 'Start Free Trial', url: '/signup' },
    secondaryCta: { label: 'See How It Works', url: '/demo' },
    stats: [
      { _key: 's1', value: '100%', label: 'Automatic' },
      { _key: 's2', value: 'Forever', label: 'Retention' },
      { _key: 's3', value: 'Real-time', label: 'Sync' },
    ],
  },
  benefits: {
    badge: 'Why Cloud Backup?',
    headline: 'Your conversations are your company\'s memory',
    items: [
      { _key: 'b1', icon: 'cloud', title: 'Automatic Backup', description: 'Every message, image, document, and voice note synced in real-time. Zero manual effort.' },
      { _key: 'b2', icon: 'sync', title: 'Works Across Devices', description: 'Access your conversation history from any browser. Perfect for team handoffs.' },
      { _key: 'b3', icon: 'security', title: 'Encrypted & Secure', description: 'Bank-grade encryption in transit and at rest. SOC 2 certified, GDPR compliant.' },
      { _key: 'b4', icon: 'inbox', title: 'Searchable Archive', description: 'Find any message instantly. Search by keyword, contact, date, or content type.' },
      { _key: 'b5', icon: 'team', title: 'Rep Transition Ready', description: 'When reps leave, conversations stay. Customer history belongs to your company.' },
      { _key: 'b6', icon: 'analytics', title: 'Compliance Ready', description: 'Meet regulatory requirements with complete conversation records and audit trails.' },
    ],
  },
  features: [
    {
      _key: 'f1',
      badge: 'The Problem',
      headline: 'Critical conversations live on personal phones',
      description: 'Sales reps chat with customers on their personal WhatsApp. When they leave, those conversations go with them. Months of context, pricing discussions, and relationship history—gone. Eazybe ensures conversations belong to your company, not individual phones.',
      points: [
        'Reps leaving = lost customer history',
        'Phone damage = permanent data loss',
        'No way to search past conversations',
        'Compliance risk without records',
      ],
      cta: { label: 'Fix this now', url: '/signup' },
    },
    {
      _key: 'f2',
      badge: 'Real-Time Sync',
      headline: 'Every message backed up automatically',
      description: 'The moment a message is sent or received, it\'s synced to the cloud. Text messages, images, PDFs, voice notes—everything. No manual export. No remembering to backup. It just works.',
      points: [
        'Messages sync in real-time',
        'All attachment types included',
        'Works with groups and broadcasts',
        'Zero manual intervention',
      ],
      cta: { label: 'See it work', url: '/demo' },
    },
    {
      _key: 'f3',
      badge: 'Instant Search',
      headline: 'Find any message in seconds',
      description: 'Need to find that pricing quote from 6 months ago? Search across all conversations by keyword, contact name, date range, or attachment type. Your entire WhatsApp history, instantly searchable.',
      points: [
        'Full-text search across all chats',
        'Filter by date, contact, or type',
        'Jump directly to any message',
        'Export for compliance or handoff',
      ],
      cta: { label: 'Try search', url: '/demo' },
    },
  ],
  howItWorks: {
    badge: 'How It Works',
    headline: 'Backup starts in 60 seconds',
    description: 'No technical setup. No IT involvement.',
    steps: [
      { _key: 's1', number: '01', title: 'Install Extension', description: 'Add Eazybe to Chrome browser.' },
      { _key: 's2', number: '02', title: 'Open WhatsApp Web', description: 'Backup begins automatically.' },
      { _key: 's3', number: '03', title: 'Access Anywhere', description: 'Search and view from any device.' },
    ],
  },
  useCases: {
    badge: 'Use Cases',
    headline: 'Who needs cloud backup?',
    items: [
      { _key: 'u1', icon: 'team', title: 'Sales Teams', description: 'Preserve deal conversations. Never lose pricing discussions or customer context.', benefits: ['Complete deal history', 'Rep transition continuity', 'Quote and agreement records'] },
      { _key: 'u2', icon: 'inbox', title: 'Support Teams', description: 'Keep full ticket history. Reference past issues and resolutions instantly.', benefits: ['Issue history search', 'Resolution documentation', 'Quality assurance'] },
      { _key: 'u3', icon: 'security', title: 'Regulated Industries', description: 'Meet compliance requirements with complete, auditable conversation records.', benefits: ['Audit trail compliance', 'Regulatory documentation', 'Legal discovery ready'] },
    ],
  },
  faq: {
    badge: 'FAQ',
    headline: 'Cloud backup questions',
    items: [
      { _key: 'f1', question: 'How far back does backup go?', answer: 'Eazybe backs up new messages from the moment you install. For historical messages, we can sync visible conversations in WhatsApp Web.' },
      { _key: 'f2', question: 'What types of messages are backed up?', answer: 'Everything—text, images, videos, documents, voice notes, location shares, and contacts. All attachment types included.' },
      { _key: 'f3', question: 'Is the data encrypted?', answer: 'Yes. AES-256 encryption at rest, TLS 1.3 in transit. SOC 2 Type II certified, GDPR compliant.' },
      { _key: 'f4', question: 'Can I export my data?', answer: 'Yes. Export conversations in multiple formats for compliance, handoffs, or archival purposes.' },
    ],
  },
  cta: {
    headline: 'Stop risking your',
    headlineHighlight: 'customer relationships',
    description: 'One rep leaving shouldn\'t mean losing months of customer history.',
    primaryCta: { label: 'Start Free Trial', url: '/signup' },
    secondaryCta: { label: 'Talk to Sales', url: '/demo' },
    footnote: '14-day free trial • Instant backup • No credit card',
  },
}

const teamInboxPage = {
  _type: 'productPage',
  _id: 'productPage-team-inbox-en',
  language: 'en',
  title: 'Team Inbox',
  slug: { _type: 'slug', current: 'team-inbox' },
  category: 'feature',
  seo: {
    metaTitle: 'Team Inbox | Manage All WhatsApp Conversations | Eazybe',
    metaDescription: 'One dashboard for your entire team\'s WhatsApp. Route leads, track responses, ensure nothing falls through the cracks.',
  },
  hero: {
    badge: 'TEAM INBOX',
    headline: 'All your team\'s WhatsApp,',
    headlineHighlight: 'one dashboard',
    description: 'Managing 10+ reps with individual WhatsApp numbers? Team Inbox brings every conversation into one view. Route leads, track responses, ensure coverage. Works with WhatsApp Business App—no API required.',
    primaryCta: { label: 'Start Free Trial', url: '/signup' },
    secondaryCta: { label: 'See Team Inbox', url: '/demo' },
    stats: [
      { _key: 's1', value: 'Unlimited', label: 'Numbers' },
      { _key: 's2', value: 'Real-time', label: 'Updates' },
      { _key: 's3', value: 'No API', label: 'Required' },
    ],
  },
  benefits: {
    badge: 'Why Team Inbox?',
    headline: 'Finally see what your team is doing on WhatsApp',
    items: [
      { _key: 'b1', icon: 'team', title: 'Unified Dashboard', description: 'See all team conversations in one place. No more checking individual phones or asking for updates.' },
      { _key: 'b2', icon: 'workflow', title: 'Lead Routing', description: 'Automatically route new conversations to the right rep based on territory, availability, or round-robin.' },
      { _key: 'b3', icon: 'inbox', title: 'Coverage Assurance', description: 'Spot unreplied messages before they become lost deals. Know who\'s responding and who\'s not.' },
      { _key: 'b4', icon: 'analytics', title: 'Performance Tracking', description: 'Compare response times and conversation volume across reps. Identify coaching opportunities.' },
      { _key: 'b5', icon: 'sync', title: 'No API Migration', description: 'Works with WhatsApp Business App. Each rep uses their existing number—no disruption.' },
      { _key: 'b6', icon: 'security', title: 'Role-Based Access', description: 'Managers see everything. Reps see their own. Customizable permissions for your org.' },
    ],
  },
  features: [
    {
      _key: 'f1',
      badge: 'The Visibility Problem',
      headline: 'Managers are flying blind on WhatsApp',
      description: 'Your reps talk to customers all day on WhatsApp, but you have no idea what\'s being said. Are leads being followed up? Are customers getting responses? Are reps saying the right things? Without Team Inbox, you\'re managing a black box.',
      points: [
        'No visibility into rep conversations',
        'Can\'t verify follow-up claims',
        'Unreplied leads slip away quietly',
        'No way to spot coaching needs',
      ],
      cta: { label: 'Get visibility', url: '/signup' },
    },
    {
      _key: 'f2',
      badge: 'Unified View',
      headline: 'Every conversation, one dashboard',
      description: 'Team Inbox aggregates WhatsApp conversations from all team members into a single view. Filter by rep, status, or priority. Search across all conversations. See who\'s responding and who\'s not—in real-time.',
      points: [
        'All numbers in one dashboard',
        'Filter by rep, status, priority',
        'Search across all conversations',
        'Real-time conversation updates',
      ],
      cta: { label: 'See unified view', url: '/demo' },
    },
    {
      _key: 'f3',
      badge: 'Lead Routing',
      headline: 'Get leads to the right rep, automatically',
      description: 'New conversations routed based on territory, availability, or round-robin. No leads sitting unassigned. No manual distribution. Every opportunity gets immediate attention.',
      points: [
        'Territory-based routing',
        'Round-robin distribution',
        'Availability-aware assignment',
        'Manual override when needed',
      ],
      cta: { label: 'Configure routing', url: '/demo' },
    },
  ],
  howItWorks: {
    badge: 'How It Works',
    headline: 'Team onboarding in a day',
    description: 'Each rep installs the extension. Dashboard populates automatically.',
    steps: [
      { _key: 's1', number: '01', title: 'Reps Install Extension', description: 'Each team member adds Eazybe to Chrome.' },
      { _key: 's2', number: '02', title: 'Conversations Sync', description: 'All chats flow to the Team Inbox dashboard.' },
      { _key: 's3', number: '03', title: 'Manage & Monitor', description: 'Route leads, track responses, ensure coverage.' },
    ],
  },
  useCases: {
    badge: 'Use Cases',
    headline: 'Who needs Team Inbox?',
    items: [
      { _key: 'u1', icon: 'team', title: 'Sales Managers', description: 'See every deal conversation. Ensure follow-ups happen. Spot coaching opportunities.', benefits: ['Pipeline visibility', 'Response tracking', 'Performance coaching'] },
      { _key: 'u2', icon: 'inbox', title: 'Support Leaders', description: 'Monitor response times. Ensure SLAs are met. Identify training needs.', benefits: ['SLA monitoring', 'Queue management', 'Quality assurance'] },
      { _key: 'u3', icon: 'workflow', title: 'Operations', description: 'Route leads efficiently. Balance workloads. Optimize team capacity.', benefits: ['Lead distribution', 'Workload balancing', 'Capacity planning'] },
    ],
  },
  testimonial: {
    quote: 'We have 40 sales reps across 3 countries. Before Team Inbox, I had no idea what was happening. Now I see every conversation and can ensure leads get handled.',
    author: 'Diego Fernandez',
    title: 'Regional Sales Director',
    company: 'LatAm Logistics',
  },
  faq: {
    badge: 'FAQ',
    headline: 'Team Inbox questions',
    items: [
      { _key: 'f1', question: 'Do I need WhatsApp Business API?', answer: 'No. Team Inbox works with regular WhatsApp Business App. Each rep uses their existing WhatsApp—no migration needed.' },
      { _key: 'f2', question: 'How many numbers can I manage?', answer: 'Unlimited. Whether you have 5 reps or 500, Team Inbox scales with your team.' },
      { _key: 'f3', question: 'Can I respond from the dashboard?', answer: 'The dashboard shows all conversations. Responses are sent through each rep\'s WhatsApp Web for authenticity.' },
      { _key: 'f4', question: 'What about rep privacy?', answer: 'Role-based access controls let you decide who sees what. Personal messages can be excluded from team view.' },
    ],
  },
  cta: {
    headline: 'Stop managing a',
    headlineHighlight: 'black box',
    description: 'One dashboard. All numbers. Complete visibility. No API required.',
    primaryCta: { label: 'Start Free Trial', url: '/signup' },
    secondaryCta: { label: 'Book Demo', url: '/demo' },
    footnote: '14-day free trial • Unlimited numbers • Works with Business App',
  },
}

const whatsappCrmPage = {
  _type: 'productPage',
  _id: 'productPage-whatsapp-crm-en',
  language: 'en',
  title: 'WhatsApp CRM',
  slug: { _type: 'slug', current: 'whatsapp-crm' },
  category: 'feature',
  seo: {
    metaTitle: 'WhatsApp CRM | Labels, Funnels & Deal Tracking | Eazybe',
    metaDescription: 'Organize WhatsApp contacts with labels and funnels. Track deals through stages without leaving your chat window.',
  },
  hero: {
    badge: 'WHATSAPP CRM',
    headline: 'CRM superpowers',
    headlineHighlight: 'inside WhatsApp',
    description: 'Stop switching between WhatsApp and your CRM. Labels, funnels, deal stages, and contact management—all inside WhatsApp Web. Organize conversations like a pro without changing your workflow.',
    primaryCta: { label: 'Start Free Trial', url: '/signup' },
    secondaryCta: { label: 'See CRM Features', url: '/demo' },
    stats: [
      { _key: 's1', value: 'Unlimited', label: 'Labels' },
      { _key: 's2', value: 'Custom', label: 'Funnels' },
      { _key: 's3', value: 'Zero', label: 'Tab switching' },
    ],
  },
  benefits: {
    badge: 'Why WhatsApp CRM?',
    headline: 'Organize chaos without leaving chat',
    items: [
      { _key: 'b1', icon: 'funnel', title: 'Custom Labels', description: 'Create unlimited labels to categorize contacts. Hot lead, follow-up needed, VIP—whatever works for you.' },
      { _key: 'b2', icon: 'workflow', title: 'Deal Funnels', description: 'Track opportunities through stages. See your pipeline at a glance without opening another app.' },
      { _key: 'b3', icon: 'inbox', title: 'Contact Notes', description: 'Add notes and context to any contact. Never ask "who is this?" again.' },
      { _key: 'b4', icon: 'sync', title: 'CRM Sync', description: 'Changes sync to HubSpot, Salesforce, or Zoho automatically. Single source of truth.' },
      { _key: 'b5', icon: 'analytics', title: 'Pipeline Visibility', description: 'See how many deals are in each stage. Track conversion rates and bottlenecks.' },
      { _key: 'b6', icon: 'team', title: 'Team Collaboration', description: 'Share labels and funnels across your team. Everyone sees the same organization.' },
    ],
  },
  features: [
    {
      _key: 'f1',
      badge: 'The Problem',
      headline: 'WhatsApp is chaos without organization',
      description: 'Hundreds of conversations. No way to know who\'s a hot lead and who\'s a tire kicker. Important follow-ups buried in the chat list. Deals scattered across personal notes and memory. WhatsApp wasn\'t built for sales—but your team uses it anyway.',
      points: [
        'Leads buried in chat list',
        'No deal stage tracking',
        'Context lost between conversations',
        'Manual sync to CRM wastes hours',
      ],
      cta: { label: 'Get organized', url: '/signup' },
    },
    {
      _key: 'f2',
      badge: 'Labels & Funnels',
      headline: 'Organize contacts your way',
      description: 'Create custom labels that match how you work. Tag contacts instantly. Build funnels that mirror your sales process. Move deals through stages with a click. Finally, a system for the chaos.',
      points: [
        'Unlimited custom labels',
        'Color-coded organization',
        'Drag-and-drop funnel management',
        'Filter chats by label or stage',
      ],
      cta: { label: 'See labels in action', url: '/demo' },
    },
    {
      _key: 'f3',
      badge: 'Always Synced',
      headline: 'Updates flow to your CRM automatically',
      description: 'Change a deal stage in WhatsApp, it updates in HubSpot. Add a note in the sidebar, it appears in Salesforce. No double-entry. No forgotten updates. Your CRM finally reflects reality.',
      points: [
        'Two-way CRM sync',
        'Contact and deal updates',
        'Notes and activity logging',
        'Real-time synchronization',
      ],
      cta: { label: 'See CRM sync', url: '/demo' },
    },
  ],
  howItWorks: {
    badge: 'How It Works',
    headline: 'Start organizing in minutes',
    description: 'No setup required. Start labeling and tracking immediately.',
    steps: [
      { _key: 's1', number: '01', title: 'Create Labels', description: 'Build your label system in the sidebar.' },
      { _key: 's2', number: '02', title: 'Tag Contacts', description: 'One-click labeling on any conversation.' },
      { _key: 's3', number: '03', title: 'Track Pipeline', description: 'Watch deals move through your funnel.' },
    ],
  },
  useCases: {
    badge: 'Use Cases',
    headline: 'Who uses WhatsApp CRM?',
    items: [
      { _key: 'u1', icon: 'team', title: 'Sales Reps', description: 'Track deals without leaving WhatsApp. Know exactly where each opportunity stands.', benefits: ['Pipeline at a glance', 'No app switching', 'Context always visible'] },
      { _key: 'u2', icon: 'analytics', title: 'Sales Managers', description: 'See team pipeline health. Identify bottlenecks and coaching opportunities.', benefits: ['Team visibility', 'Stage analysis', 'Performance tracking'] },
      { _key: 'u3', icon: 'inbox', title: 'Account Managers', description: 'Organize customer relationships. Never lose track of who needs attention.', benefits: ['Customer segmentation', 'Renewal tracking', 'Relationship management'] },
    ],
  },
  faq: {
    badge: 'FAQ',
    headline: 'WhatsApp CRM questions',
    items: [
      { _key: 'f1', question: 'Does this replace my existing CRM?', answer: 'No. WhatsApp CRM works alongside HubSpot, Salesforce, or Zoho. It adds organization to WhatsApp and syncs with your main CRM.' },
      { _key: 'f2', question: 'How many labels can I create?', answer: 'Unlimited. Create as many labels as you need to match your workflow.' },
      { _key: 'f3', question: 'Can my team share labels?', answer: 'Yes. Labels and funnels can be shared across your team so everyone uses the same organization system.' },
      { _key: 'f4', question: 'Does it sync with my CRM?', answer: 'Yes. Changes in WhatsApp CRM automatically sync to HubSpot, Salesforce, Zoho, and other supported CRMs.' },
    ],
  },
  cta: {
    headline: 'Stop losing deals in',
    headlineHighlight: 'chat chaos',
    description: 'Organize your WhatsApp like a CRM. Track deals without switching apps.',
    primaryCta: { label: 'Start Free Trial', url: '/signup' },
    secondaryCta: { label: 'See Features', url: '/demo' },
    footnote: '14-day free trial • Unlimited labels • CRM sync included',
  },
}

const revenueInboxPage = {
  _type: 'productPage',
  _id: 'productPage-revenue-inbox-en',
  language: 'en',
  title: 'Revenue Inbox',
  slug: { _type: 'slug', current: 'revenue-inbox' },
  category: 'feature',
  seo: {
    metaTitle: 'Revenue Inbox | Deal Health Intelligence | Eazybe',
    metaDescription: 'See deals sorted by health. Know which opportunities are hot, stalled, or going cold—based on actual conversation data.',
  },
  hero: {
    badge: 'REVENUE INBOX',
    headline: 'See which deals are',
    headlineHighlight: 'actually alive',
    description: 'Your CRM says 50 deals are "in progress." But how many are actually active? Revenue Inbox analyzes conversation patterns to show you which deals are hot, which are stalled, and which are quietly dying.',
    primaryCta: { label: 'Start Free Trial', url: '/signup' },
    secondaryCta: { label: 'See Deal Health', url: '/demo' },
    stats: [
      { _key: 's1', value: 'Real-time', label: 'Deal Health' },
      { _key: 's2', value: 'Auto', label: 'Risk Detection' },
      { _key: 's3', value: 'Data-driven', label: 'Insights' },
    ],
  },
  benefits: {
    badge: 'Why Revenue Inbox?',
    headline: 'Your CRM pipeline isn\'t reality',
    items: [
      { _key: 'b1', icon: 'analytics', title: 'Deal Health Scoring', description: 'See at a glance which deals are healthy and which need attention—based on actual message patterns.' },
      { _key: 'b2', icon: 'inbox', title: 'Stalled Deal Detection', description: 'Automatically spot deals going quiet. Intervene before opportunities die from neglect.' },
      { _key: 'b3', icon: 'workflow', title: 'Engagement Signals', description: 'Know who\'s responsive and who\'s ghosting. Response time and engagement trends for every deal.' },
      { _key: 'b4', icon: 'team', title: 'Risk Prioritization', description: 'Focus on deals that need attention. Don\'t waste time on healthy opportunities.' },
      { _key: 'b5', icon: 'sync', title: 'CRM Reality Check', description: 'Compare CRM pipeline to actual conversation health. Find zombie deals before forecast calls.' },
      { _key: 'b6', icon: 'security', title: 'Manager Alerts', description: 'Get notified when key deals show warning signs. Proactive intervention, not reactive firefighting.' },
    ],
  },
  features: [
    {
      _key: 'f1',
      badge: 'The Pipeline Problem',
      headline: 'Your CRM is lying to you',
      description: 'Reps mark deals as "active" because they had one conversation 3 weeks ago. The CRM shows a healthy pipeline, but half those deals are zombies. You won\'t know until end of quarter when they don\'t close. Revenue Inbox shows you the truth now.',
      points: [
        'CRM shows optimistic pipeline',
        'Reality: deals going cold quietly',
        'No visibility into actual engagement',
        'Forecasts based on wishful thinking',
      ],
      cta: { label: 'See the truth', url: '/signup' },
    },
    {
      _key: 'f2',
      badge: 'Deal Health',
      headline: 'Every deal, scored automatically',
      description: 'Revenue Inbox analyzes conversation patterns—response times, message frequency, engagement trends—to calculate a health score for every deal. Hot deals bubble up. At-risk deals get flagged. You see reality, not rep optimism.',
      points: [
        'Automatic health scoring',
        'Based on actual conversations',
        'Response pattern analysis',
        'Engagement trend tracking',
      ],
      cta: { label: 'See scoring', url: '/demo' },
    },
    {
      _key: 'f3',
      badge: 'Early Warning',
      headline: 'Catch dying deals before they die',
      description: 'When a previously active customer goes quiet, Revenue Inbox spots it. When response times increase, you see it. When engagement drops, alerts fire. Intervene while there\'s still time to save the deal.',
      points: [
        'Stalled deal detection',
        'Engagement drop alerts',
        'Response time monitoring',
        'Proactive intervention triggers',
      ],
      cta: { label: 'Set up alerts', url: '/demo' },
    },
  ],
  howItWorks: {
    badge: 'How It Works',
    headline: 'Automatic deal intelligence',
    description: 'No manual tracking. AI analyzes conversations automatically.',
    steps: [
      { _key: 's1', number: '01', title: 'Connect WhatsApp', description: 'Conversations flow to Revenue Inbox.' },
      { _key: 's2', number: '02', title: 'AI Analyzes', description: 'Health scores calculated automatically.' },
      { _key: 's3', number: '03', title: 'Take Action', description: 'Focus on deals that need attention.' },
    ],
  },
  useCases: {
    badge: 'Use Cases',
    headline: 'Who needs Revenue Inbox?',
    items: [
      { _key: 'u1', icon: 'analytics', title: 'Sales Leaders', description: 'Get accurate pipeline visibility. Know which deals to focus on in 1:1s.', benefits: ['Real pipeline visibility', 'Coaching priorities', 'Forecast accuracy'] },
      { _key: 'u2', icon: 'team', title: 'Account Executives', description: 'Spot at-risk deals early. Prioritize outreach based on engagement signals.', benefits: ['Deal prioritization', 'Save at-risk deals', 'Time optimization'] },
      { _key: 'u3', icon: 'workflow', title: 'RevOps', description: 'Clean pipeline data. Identify process gaps and coaching needs.', benefits: ['Data accuracy', 'Process insights', 'Forecasting inputs'] },
    ],
  },
  faq: {
    badge: 'FAQ',
    headline: 'Revenue Inbox questions',
    items: [
      { _key: 'f1', question: 'How is deal health calculated?', answer: 'We analyze conversation patterns—response times, message frequency, engagement trends, and more—to score each deal\'s health automatically.' },
      { _key: 'f2', question: 'Does it work with my CRM?', answer: 'Yes. Revenue Inbox integrates with HubSpot, Salesforce, and Zoho. Health scores can sync to your CRM.' },
      { _key: 'f3', question: 'What about privacy?', answer: 'Revenue Inbox analyzes patterns, not content. We detect engagement signals without reading message content.' },
      { _key: 'f4', question: 'When do I get alerts?', answer: 'Customizable. Set thresholds for when deals should be flagged—days without response, engagement drop percentage, etc.' },
    ],
  },
  cta: {
    headline: 'Stop trusting',
    headlineHighlight: 'CRM fiction',
    description: 'See which deals are actually alive. Save the ones going cold.',
    primaryCta: { label: 'Start Free Trial', url: '/signup' },
    secondaryCta: { label: 'See Deal Health', url: '/demo' },
    footnote: '14-day free trial • Automatic scoring • CRM sync',
  },
}

const quickReplyPage = {
  _type: 'productPage',
  _id: 'productPage-quick-reply-en',
  language: 'en',
  title: 'Quick Replies',
  slug: { _type: 'slug', current: 'quick-reply' },
  category: 'feature',
  seo: {
    metaTitle: 'Quick Replies | WhatsApp Message Templates | Eazybe',
    metaDescription: 'One-click access to pre-written messages. Save hours on repetitive WhatsApp responses with customizable templates.',
  },
  hero: {
    badge: 'QUICK REPLIES',
    headline: 'Stop typing the',
    headlineHighlight: 'same messages',
    description: 'Your reps type the same responses 50 times a day. Pricing info, meeting links, product details—always the same. Quick Replies gives them one-click access to pre-written messages. Respond faster, stay consistent.',
    primaryCta: { label: 'Start Free Trial', url: '/signup' },
    secondaryCta: { label: 'See Templates', url: '/demo' },
    stats: [
      { _key: 's1', value: 'Unlimited', label: 'Templates' },
      { _key: 's2', value: '1-click', label: 'Sending' },
      { _key: 's3', value: 'Hours', label: 'Saved weekly' },
    ],
  },
  benefits: {
    badge: 'Why Quick Replies?',
    headline: 'Save hours on repetitive messages',
    items: [
      { _key: 'b1', icon: 'reply', title: 'One-Click Templates', description: 'Pre-written messages ready to send instantly. No more typing the same things repeatedly.' },
      { _key: 'b2', icon: 'workflow', title: 'Variable Insertion', description: 'Templates with dynamic fields. Auto-fill names, dates, and details for personalization.' },
      { _key: 'b3', icon: 'team', title: 'Team Templates', description: 'Share approved messages across your team. Ensure consistent, on-brand communication.' },
      { _key: 'b4', icon: 'inbox', title: 'Keyboard Shortcuts', description: 'Type a shortcode, message appears. Even faster than clicking.' },
      { _key: 'b5', icon: 'analytics', title: 'Usage Tracking', description: 'See which templates are used most. Optimize your library over time.' },
      { _key: 'b6', icon: 'sync', title: 'Categories & Search', description: 'Organize templates into categories. Find the right message instantly.' },
    ],
  },
  features: [
    {
      _key: 'f1',
      badge: 'The Problem',
      headline: 'Repetitive typing kills productivity',
      description: 'How many times a day do your reps type out pricing information? Or meeting booking instructions? Or product details? All that repetitive typing adds up. Quick Replies gives them back hours every week.',
      points: [
        'Same messages typed repeatedly',
        'Inconsistent responses across team',
        'Time wasted on routine questions',
        'Typos and errors in rushed messages',
      ],
      cta: { label: 'Start saving time', url: '/signup' },
    },
    {
      _key: 'f2',
      badge: 'Template Library',
      headline: 'Your best messages, one click away',
      description: 'Create templates for every common scenario. Pricing, FAQs, meeting links, follow-ups—all accessible instantly. Use shortcuts to insert templates even faster. Personalize with variables before sending.',
      points: [
        'Unlimited template library',
        'Keyboard shortcut triggers',
        'Variable fields for personalization',
        'Rich text and emoji support',
      ],
      cta: { label: 'See templates', url: '/demo' },
    },
    {
      _key: 'f3',
      badge: 'Team Consistency',
      headline: 'Everyone sends approved messages',
      description: 'Create team templates that everyone uses. Ensure consistent pricing, accurate product info, and on-brand communication. Update a template once, it\'s updated for everyone.',
      points: [
        'Shared team templates',
        'Centralized template management',
        'Approval workflow for new templates',
        'Version control and updates',
      ],
      cta: { label: 'Set up team', url: '/demo' },
    },
  ],
  howItWorks: {
    badge: 'How It Works',
    headline: 'Set up templates in minutes',
    description: 'Create once, use forever.',
    steps: [
      { _key: 's1', number: '01', title: 'Create Templates', description: 'Write your common messages and add shortcuts.' },
      { _key: 's2', number: '02', title: 'Use Instantly', description: 'Type shortcut or click to insert.' },
      { _key: 's3', number: '03', title: 'Personalize & Send', description: 'Add names or details, then send.' },
    ],
  },
  useCases: {
    badge: 'Use Cases',
    headline: 'Who uses Quick Replies?',
    items: [
      { _key: 'u1', icon: 'team', title: 'Sales Reps', description: 'Instant access to pricing, product info, and follow-up templates.', benefits: ['Faster response times', 'Accurate information', 'More conversations'] },
      { _key: 'u2', icon: 'inbox', title: 'Support Teams', description: 'Common answers ready to go. Resolve tickets faster with consistent responses.', benefits: ['Faster resolution', 'Consistent answers', 'Knowledge sharing'] },
      { _key: 'u3', icon: 'workflow', title: 'Operations', description: 'Standardize communication across the team. Ensure brand consistency.', benefits: ['Brand compliance', 'Message accuracy', 'Training efficiency'] },
    ],
  },
  faq: {
    badge: 'FAQ',
    headline: 'Quick Replies questions',
    items: [
      { _key: 'f1', question: 'How many templates can I create?', answer: 'Unlimited. Create as many templates as you need for different scenarios.' },
      { _key: 'f2', question: 'Can I share templates with my team?', answer: 'Yes. Create team templates that everyone on your team can access and use.' },
      { _key: 'f3', question: 'Do templates support images and files?', answer: 'Yes. Templates can include text, images, documents, and even voice note placeholders.' },
      { _key: 'f4', question: 'Can I personalize templates before sending?', answer: 'Yes. Use variable fields like {name} or {company} that you fill in before sending.' },
    ],
  },
  cta: {
    headline: 'Stop typing the',
    headlineHighlight: 'same things',
    description: 'Create templates once. Send with one click forever.',
    primaryCta: { label: 'Start Free Trial', url: '/signup' },
    secondaryCta: { label: 'See Templates', url: '/demo' },
    footnote: '14-day free trial • Unlimited templates • Team sharing',
  },
}

const schedulerPage = {
  _type: 'productPage',
  _id: 'productPage-scheduler-en',
  language: 'en',
  title: 'Message Scheduler',
  slug: { _type: 'slug', current: 'scheduler' },
  category: 'feature',
  seo: {
    metaTitle: 'Message Scheduler | Schedule WhatsApp Messages | Eazybe',
    metaDescription: 'Schedule WhatsApp messages for the perfect time. Never miss a follow-up with automated message scheduling.',
  },
  hero: {
    badge: 'MESSAGE SCHEDULER',
    headline: 'Send messages at the',
    headlineHighlight: 'perfect time',
    description: 'Your customer is 12 time zones away. The follow-up needs to land at 9am their time. With Message Scheduler, write the message now, deliver it when it matters. Never miss a touchpoint.',
    primaryCta: { label: 'Start Free Trial', url: '/signup' },
    secondaryCta: { label: 'See Scheduling', url: '/demo' },
    stats: [
      { _key: 's1', value: 'Unlimited', label: 'Scheduled' },
      { _key: 's2', value: 'Any time', label: 'Zone' },
      { _key: 's3', value: 'Recurring', label: 'Messages' },
    ],
  },
  benefits: {
    badge: 'Why Schedule Messages?',
    headline: 'Right message, right time',
    items: [
      { _key: 'b1', icon: 'clock', title: 'Optimal Delivery', description: 'Schedule for when recipients are most likely to respond. Morning messages get 40% higher open rates.' },
      { _key: 'b2', icon: 'sync', title: 'Time Zone Support', description: 'Working with global customers? Schedule in their time zone. 9am is 9am wherever they are.' },
      { _key: 'b3', icon: 'workflow', title: 'Follow-up Automation', description: 'Set follow-up sequences. If they don\'t respond in 3 days, another message goes out automatically.' },
      { _key: 'b4', icon: 'inbox', title: 'Never Forget', description: 'Write the follow-up when it\'s fresh. Schedule it for when it matters. Never miss a touchpoint.' },
      { _key: 'b5', icon: 'team', title: 'Batch Scheduling', description: 'Schedule multiple messages to different contacts. Perfect for campaign follow-ups.' },
      { _key: 'b6', icon: 'analytics', title: 'Delivery Reports', description: 'See when scheduled messages were sent and delivered. Track your outreach.' },
    ],
  },
  features: [
    {
      _key: 'f1',
      badge: 'The Problem',
      headline: 'Follow-ups fall through the cracks',
      description: '"I\'ll follow up tomorrow" becomes never. Manual reminders get ignored. Sticky notes get lost. The result: deals die from neglect. Message Scheduler ensures every follow-up actually happens.',
      points: [
        'Forgotten follow-ups lose deals',
        'Wrong timing = ignored messages',
        'Manual tracking is unreliable',
        'Reps juggle too many threads',
      ],
      cta: { label: 'Never forget again', url: '/signup' },
    },
    {
      _key: 'f2',
      badge: 'Smart Scheduling',
      headline: 'Write now, send later',
      description: 'Draft your message when the context is fresh. Schedule it for the perfect moment—tomorrow morning, next Monday, or in exactly 72 hours. The message sends automatically. You never have to remember.',
      points: [
        'One-click scheduling',
        'Calendar picker or quick options',
        'Time zone awareness',
        'Edit before it sends',
      ],
      cta: { label: 'See scheduling', url: '/demo' },
    },
    {
      _key: 'f3',
      badge: 'Follow-up Sequences',
      headline: 'Automated persistence',
      description: 'Set up follow-up sequences. If they don\'t respond in 3 days, send reminder A. Still nothing? Reminder B goes out in a week. Persistent without being annoying.',
      points: [
        'Multi-step sequences',
        'Response-aware (stops if they reply)',
        'Customizable intervals',
        'Sequence templates',
      ],
      cta: { label: 'Set up sequences', url: '/demo' },
    },
  ],
  howItWorks: {
    badge: 'How It Works',
    headline: 'Schedule messages in seconds',
    description: 'Simple as send, just with a time attached.',
    steps: [
      { _key: 's1', number: '01', title: 'Write Message', description: 'Compose like you normally would.' },
      { _key: 's2', number: '02', title: 'Pick Time', description: 'Choose when it should send.' },
      { _key: 's3', number: '03', title: 'Done', description: 'Message sends automatically.' },
    ],
  },
  useCases: {
    badge: 'Use Cases',
    headline: 'Who uses Message Scheduler?',
    items: [
      { _key: 'u1', icon: 'team', title: 'Sales Reps', description: 'Schedule follow-ups while the conversation is fresh. Never miss a touchpoint.', benefits: ['Reliable follow-up', 'Optimal timing', 'More closes'] },
      { _key: 'u2', icon: 'workflow', title: 'Global Teams', description: 'Reach customers in their time zone. Morning messages when it\'s their morning.', benefits: ['Time zone respect', 'Higher response rates', 'Global coverage'] },
      { _key: 'u3', icon: 'inbox', title: 'Account Managers', description: 'Automated check-ins and renewal reminders. Stay proactive without manual tracking.', benefits: ['Proactive outreach', 'Renewal reminders', 'Customer success'] },
    ],
  },
  faq: {
    badge: 'FAQ',
    headline: 'Scheduler questions',
    items: [
      { _key: 'f1', question: 'How far in advance can I schedule?', answer: 'Up to 30 days in advance. Schedule follow-ups for next week or next month.' },
      { _key: 'f2', question: 'What if I need to cancel a scheduled message?', answer: 'View and manage all scheduled messages. Cancel or edit anytime before they send.' },
      { _key: 'f3', question: 'Does it work with time zones?', answer: 'Yes. Schedule in your time zone or the recipient\'s. We handle the conversion.' },
      { _key: 'f4', question: 'What happens if WhatsApp Web is closed?', answer: 'WhatsApp Web needs to be open for messages to send. We\'ll notify you if a scheduled message can\'t be delivered.' },
    ],
  },
  cta: {
    headline: 'Never miss a',
    headlineHighlight: 'follow-up again',
    description: 'Schedule now. Send at the perfect time. Close more deals.',
    primaryCta: { label: 'Start Free Trial', url: '/signup' },
    secondaryCta: { label: 'See Scheduling', url: '/demo' },
    footnote: '14-day free trial • Unlimited scheduling • Time zone support',
  },
}

const repRadarPage = {
  _type: 'productPage',
  _id: 'productPage-rep-radar-en',
  language: 'en',
  title: 'Rep Radar',
  slug: { _type: 'slug', current: 'rep-radar' },
  category: 'feature',
  seo: {
    metaTitle: 'Rep Radar | WhatsApp Sales Analytics | Eazybe',
    metaDescription: 'Real-time analytics on team WhatsApp activity. Response times, message volume, and engagement metrics for sales managers.',
  },
  hero: {
    badge: 'REP RADAR',
    headline: 'See what your team is',
    headlineHighlight: 'actually doing',
    description: 'Are your reps responsive or letting leads go cold? Rep Radar gives you real-time visibility into response times, message volume, and engagement patterns. Data-driven coaching, not guesswork.',
    primaryCta: { label: 'Start Free Trial', url: '/signup' },
    secondaryCta: { label: 'See Analytics', url: '/demo' },
    stats: [
      { _key: 's1', value: 'Real-time', label: 'Analytics' },
      { _key: 's2', value: 'Per-rep', label: 'Metrics' },
      { _key: 's3', value: 'Trends', label: 'Over time' },
    ],
  },
  benefits: {
    badge: 'Why Rep Radar?',
    headline: 'Manage with data, not assumptions',
    items: [
      { _key: 'b1', icon: 'analytics', title: 'Response Time Tracking', description: 'See how quickly each rep responds. Identify who\'s fast and who\'s letting leads wait.' },
      { _key: 'b2', icon: 'team', title: 'Activity Metrics', description: 'Message volume, conversation counts, active hours. Know who\'s working and who\'s not.' },
      { _key: 'b3', icon: 'workflow', title: 'Engagement Analysis', description: 'Track conversation quality, not just quantity. Long exchanges vs. quick closes.' },
      { _key: 'b4', icon: 'inbox', title: 'Trend Visualization', description: 'See patterns over time. Spot declining activity before it becomes a problem.' },
      { _key: 'b5', icon: 'sync', title: 'Comparative Rankings', description: 'Stack rank reps by any metric. Identify top performers and those needing help.' },
      { _key: 'b6', icon: 'security', title: 'Custom Dashboards', description: 'Build views that matter to you. Save and share with your leadership team.' },
    ],
  },
  features: [
    {
      _key: 'f1',
      badge: 'The Visibility Gap',
      headline: 'You don\'t know what reps are doing',
      description: 'Your reps say they\'re following up. They claim leads are "just slow to respond." But you have no data. Are they actually working their leads? Are response times acceptable? Without Rep Radar, you\'re managing blind.',
      points: [
        'No visibility into actual activity',
        'Reps self-report (inaccurately)',
        'Can\'t identify coaching needs',
        'Top performers invisible',
      ],
      cta: { label: 'Get visibility', url: '/signup' },
    },
    {
      _key: 'f2',
      badge: 'Activity Metrics',
      headline: 'Real numbers, real insights',
      description: 'Rep Radar tracks everything automatically. Response times (average and by conversation), message volume, active hours, conversation length. See who\'s crushing it and who needs help—with data, not opinions.',
      points: [
        'Response time by rep',
        'Message volume tracking',
        'Active hour analysis',
        'Conversation metrics',
      ],
      cta: { label: 'See metrics', url: '/demo' },
    },
    {
      _key: 'f3',
      badge: 'Coaching Insights',
      headline: 'Know exactly where to focus',
      description: 'Rep A has great volume but slow response times. Rep B responds fast but has few conversations. Rep Radar shows you exactly what each person needs to improve. Targeted coaching, better results.',
      points: [
        'Individual strengths/weaknesses',
        'Trend analysis over time',
        'Peer comparison benchmarks',
        'Coaching priority scoring',
      ],
      cta: { label: 'Start coaching', url: '/demo' },
    },
  ],
  howItWorks: {
    badge: 'How It Works',
    headline: 'Automatic analytics',
    description: 'No manual tracking. Data flows automatically.',
    steps: [
      { _key: 's1', number: '01', title: 'Team Installs Extension', description: 'Each rep adds Eazybe to Chrome.' },
      { _key: 's2', number: '02', title: 'Activity Tracked', description: 'Metrics calculated automatically.' },
      { _key: 's3', number: '03', title: 'Dashboard Updates', description: 'View real-time team performance.' },
    ],
  },
  useCases: {
    badge: 'Use Cases',
    headline: 'Who uses Rep Radar?',
    items: [
      { _key: 'u1', icon: 'team', title: 'Sales Managers', description: 'Data-driven 1:1s. Know exactly what to discuss with each rep.', benefits: ['Performance visibility', 'Coaching priorities', 'Team optimization'] },
      { _key: 'u2', icon: 'analytics', title: 'VP Sales', description: 'Team-level metrics and trends. Identify systemic issues and wins.', benefits: ['Team health overview', 'Trend analysis', 'Capacity planning'] },
      { _key: 'u3', icon: 'workflow', title: 'RevOps', description: 'Activity data for process optimization. Identify bottlenecks.', benefits: ['Process insights', 'Benchmark data', 'Efficiency metrics'] },
    ],
  },
  faq: {
    badge: 'FAQ',
    headline: 'Rep Radar questions',
    items: [
      { _key: 'f1', question: 'What metrics do you track?', answer: 'Response times, message volume, conversation counts, active hours, engagement patterns, and more. All automatically calculated.' },
      { _key: 'f2', question: 'Can reps see their own data?', answer: 'Yes. Reps can see their own metrics. Managers see team-wide data. Role-based access throughout.' },
      { _key: 'f3', question: 'How far back does data go?', answer: 'Historical data from when the extension was installed. We don\'t retroactively analyze old messages.' },
      { _key: 'f4', question: 'Can I export reports?', answer: 'Yes. Export to CSV or PDF. Schedule automated reports to your inbox.' },
    ],
  },
  cta: {
    headline: 'Manage with data,',
    headlineHighlight: 'not guesswork',
    description: 'Real-time visibility into what your team is actually doing on WhatsApp.',
    primaryCta: { label: 'Start Free Trial', url: '/signup' },
    secondaryCta: { label: 'See Analytics', url: '/demo' },
    footnote: '14-day free trial • Real-time metrics • Team dashboards',
  },
}

const whatsappCopilotPage = {
  _type: 'productPage',
  _id: 'productPage-whatsapp-copilot-en',
  language: 'en',
  title: 'WhatsApp Copilot',
  slug: { _type: 'slug', current: 'whatsapp-copilot' },
  category: 'feature',
  seo: {
    metaTitle: 'WhatsApp Copilot | AI Assistant for Sales | Eazybe',
    metaDescription: 'AI that drafts replies, summarizes conversations, and surfaces insights. Your intelligent assistant for WhatsApp sales.',
  },
  hero: {
    badge: 'WHATSAPP COPILOT',
    headline: 'AI that helps you',
    headlineHighlight: 'sell faster',
    description: 'Copilot reads your conversations and helps you respond. Smart reply suggestions, instant summaries, objection handling tips. Like having a sales coach watching every conversation.',
    primaryCta: { label: 'Start Free Trial', url: '/signup' },
    secondaryCta: { label: 'See AI in Action', url: '/demo' },
    stats: [
      { _key: 's1', value: 'Instant', label: 'Suggestions' },
      { _key: 's2', value: 'Context', label: 'Aware' },
      { _key: 's3', value: 'Always', label: 'Learning' },
    ],
  },
  benefits: {
    badge: 'Why Copilot?',
    headline: 'AI that understands your conversations',
    items: [
      { _key: 'b1', icon: 'ai', title: 'Smart Reply Suggestions', description: 'Copilot analyzes the conversation and suggests responses. One click to insert. Edit if needed.' },
      { _key: 'b2', icon: 'inbox', title: 'Conversation Summaries', description: 'Jumping into a long thread? Get an instant summary. Know the context without reading everything.' },
      { _key: 'b3', icon: 'analytics', title: 'Objection Handling', description: 'Customer raises a concern? Copilot suggests how to address it based on what works.' },
      { _key: 'b4', icon: 'workflow', title: 'Follow-up Reminders', description: 'AI notices when conversations need follow-up. Proactive suggestions, not just reactive.' },
      { _key: 'b5', icon: 'team', title: 'Sentiment Analysis', description: 'Know when customers are happy or frustrated. Adjust your approach accordingly.' },
      { _key: 'b6', icon: 'sync', title: 'Deal Insights', description: 'AI extracts key information—pricing discussed, timeline mentioned, decision makers identified.' },
    ],
  },
  features: [
    {
      _key: 'f1',
      badge: 'The Challenge',
      headline: 'Reps spend too much time crafting messages',
      description: 'Staring at a message, wondering how to respond. Looking up information. Trying to remember what was discussed. All that thinking time adds up. Copilot does the heavy lifting so reps can focus on relationships.',
      points: [
        'Time wasted crafting responses',
        'Inconsistent message quality',
        'Context lost in long threads',
        'Best practices not shared',
      ],
      cta: { label: 'Let AI help', url: '/signup' },
    },
    {
      _key: 'f2',
      badge: 'Smart Suggestions',
      headline: 'AI-powered responses, human approved',
      description: 'Copilot analyzes the conversation—what was asked, the tone, the context—and suggests a response. Insert with one click. Edit to add your voice. Send when you\'re ready. You stay in control.',
      points: [
        'Context-aware suggestions',
        'Multiple options to choose from',
        'One-click insertion',
        'Easy to edit and personalize',
      ],
      cta: { label: 'See suggestions', url: '/demo' },
    },
    {
      _key: 'f3',
      badge: 'Instant Summaries',
      headline: 'Catch up on any conversation instantly',
      description: 'Inheriting a customer from another rep? Returning to a conversation after a week? Copilot summarizes the key points—what was discussed, what was promised, what\'s pending. Full context in seconds.',
      points: [
        'Instant thread summaries',
        'Key points highlighted',
        'Action items extracted',
        'Perfect for handoffs',
      ],
      cta: { label: 'See summaries', url: '/demo' },
    },
  ],
  howItWorks: {
    badge: 'How It Works',
    headline: 'AI that learns your style',
    description: 'Copilot gets smarter over time.',
    steps: [
      { _key: 's1', number: '01', title: 'Conversation Flows', description: 'Copilot observes your conversations.' },
      { _key: 's2', number: '02', title: 'AI Analyzes', description: 'Context, tone, and intent understood.' },
      { _key: 's3', number: '03', title: 'Suggestions Appear', description: 'Smart replies ready when you need them.' },
    ],
  },
  useCases: {
    badge: 'Use Cases',
    headline: 'Who uses Copilot?',
    items: [
      { _key: 'u1', icon: 'team', title: 'New Reps', description: 'Learn best practices through AI suggestions. Ramp faster with intelligent guidance.', benefits: ['Faster onboarding', 'Best practice learning', 'Confidence boost'] },
      { _key: 'u2', icon: 'inbox', title: 'High-volume Teams', description: 'Handle more conversations without sacrificing quality. AI handles the thinking.', benefits: ['Faster responses', 'Consistent quality', 'Scale communication'] },
      { _key: 'u3', icon: 'workflow', title: 'Account Managers', description: 'Never lose context on customer relationships. AI tracks everything.', benefits: ['Relationship memory', 'Proactive insights', 'Customer intelligence'] },
    ],
  },
  faq: {
    badge: 'FAQ',
    headline: 'Copilot questions',
    items: [
      { _key: 'f1', question: 'Does AI send messages automatically?', answer: 'No. Copilot suggests responses. You review, edit if needed, and decide when to send. You\'re always in control.' },
      { _key: 'f2', question: 'How does it learn my style?', answer: 'Copilot observes how you write and responds accordingly. Suggestions match your tone and vocabulary over time.' },
      { _key: 'f3', question: 'Is my data used to train AI?', answer: 'Your conversation data is used only for your Copilot. We don\'t train models on customer data.' },
      { _key: 'f4', question: 'What languages are supported?', answer: 'Copilot works in English, Spanish, Portuguese, and Hindi. More languages coming soon.' },
    ],
  },
  cta: {
    headline: 'Sell smarter with',
    headlineHighlight: 'AI assistance',
    description: 'Let AI handle the thinking. You focus on relationships.',
    primaryCta: { label: 'Start Free Trial', url: '/signup' },
    secondaryCta: { label: 'See AI in Action', url: '/demo' },
    footnote: '14-day free trial • Intelligent suggestions • Always learning',
  },
}

// ========================================
// MAIN EXECUTION
// ========================================

async function updateContent() {
  console.log('Starting content update...')

  const documents = [
    featuresIndexPage,
    cloudBackupPage,
    teamInboxPage,
    whatsappCrmPage,
    revenueInboxPage,
    quickReplyPage,
    schedulerPage,
    repRadarPage,
    whatsappCopilotPage,
  ]

  for (const doc of documents) {
    try {
      console.log(`Updating: ${doc.title}...`)
      await client.createOrReplace(doc)
      console.log(`✓ Updated: ${doc.title}`)
    } catch (error) {
      console.error(`✗ Failed to update ${doc.title}:`, error.message)
    }
  }

  console.log('\nContent update complete!')
}

updateContent()
