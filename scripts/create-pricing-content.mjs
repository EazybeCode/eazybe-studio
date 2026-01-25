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

const pricingPageEN = {
  _type: 'pricingPage',
  _id: 'pricingPage-en',
  language: 'en',
  seo: {
    metaTitle: 'Pricing - Eazybe WhatsApp CRM Integration',
    metaDescription: 'Simple, transparent pricing for WhatsApp CRM integration. Start free with Starter, scale with Scaler, or go all-in with Omnis.',
  },
  hero: {
    badge: 'Simple, Transparent Pricing',
    headline: 'Start free. Scale as',
    headlineHighlight: 'you grow.',
    subheadline: 'No hidden fees. No per-message charges. Just simple per-user pricing that scales with your team.',
    billingToggleMonthly: 'Monthly',
    billingToggleAnnual: 'Annual',
    saveBadgeText: 'Save 20%',
  },
  plans: [
    {
      _key: 'starter',
      name: 'Starter',
      description: 'Perfect for individuals and small teams getting started with WhatsApp CRM integration.',
      icon: 'starter',
      monthlyPrice: 13,
      annualPrice: 10,
      currency: '$',
      isPopular: false,
      isEnterprise: false,
      features: [
        { _key: 'f1', text: 'Team Inbox', included: true, highlight: true },
        { _key: 'f2', text: 'Unlimited labels & funnels', included: true, highlight: false },
        { _key: 'f3', text: 'Unlimited quick replies', included: true, highlight: false },
        { _key: 'f4', text: 'Unlimited scheduled messages', included: true, highlight: false },
        { _key: 'f5', text: 'WhatsApp chat backup', included: true, highlight: false },
        { _key: 'f6', text: 'HubSpot, Zoho, Bitrix, Google Sheets', included: true, highlight: true },
        { _key: 'f7', text: 'Send messages from CRM', included: true, highlight: false },
        { _key: 'f8', text: 'Salesforce integration', included: false, highlight: false },
        { _key: 'f9', text: 'Revenue Inbox', included: false, highlight: false },
      ],
      cta: { label: 'Start Free Trial', url: '/signup?plan=starter' },
    },
    {
      _key: 'scaler',
      name: 'Scaler',
      description: 'For growing teams that need advanced integrations and AI-powered automation.',
      icon: 'growth',
      monthlyPrice: 19,
      annualPrice: 15,
      currency: '$',
      isPopular: true,
      isEnterprise: false,
      features: [
        { _key: 'f1', text: 'Everything in Starter', included: true, highlight: false },
        { _key: 'f2', text: 'Salesforce integration', included: true, highlight: true },
        { _key: 'f3', text: 'Webhook integrations', included: true, highlight: true },
        { _key: 'f4', text: 'Custom objects in mini CRM view', included: true, highlight: false },
        { _key: 'f5', text: 'CRM property-to-WhatsApp labeling', included: true, highlight: false },
        { _key: 'f6', text: 'AI unreplied chats agent', included: true, highlight: true },
        { _key: 'f7', text: 'Dedicated APIs', included: true, highlight: false },
        { _key: 'f8', text: 'CRM workflow integration', included: true, highlight: false },
        { _key: 'f9', text: 'RevOps Agent', included: false, highlight: false },
      ],
      cta: { label: 'Start Free Trial', url: '/signup?plan=scaler' },
    },
    {
      _key: 'omnis',
      name: 'Omnis',
      description: 'Full-stack revenue operations with AI agents and complete WhatsApp intelligence.',
      icon: 'enterprise',
      monthlyPrice: 0,
      annualPrice: 0,
      currency: '$',
      isPopular: false,
      isEnterprise: true,
      features: [
        { _key: 'f1', text: 'Everything in Scaler', included: true, highlight: false },
        { _key: 'f2', text: 'Revenue Inbox', included: true, highlight: true },
        { _key: 'f3', text: 'RevOps Agent (AI)', included: true, highlight: true },
        { _key: 'f4', text: 'WhatsApp Web Copilot', included: true, highlight: true },
        { _key: 'f5', text: 'WhatsApp group chat backup', included: true, highlight: false },
        { _key: 'f6', text: 'Unlimited message sync', included: true, highlight: false },
        { _key: 'f7', text: 'Sync messages to deals/tickets', included: true, highlight: false },
        { _key: 'f8', text: 'Dedicated account manager', included: true, highlight: false },
      ],
      cta: { label: 'Contact Sales', url: '/contact?plan=omnis' },
    },
  ],
  trustSignals: [
    { _key: 't1', icon: 'shield', text: 'GDPR Compliant' },
    { _key: 't2', icon: 'zap', text: 'Setup in 5 minutes' },
    { _key: 't3', icon: 'clock', text: '14-day free trial' },
    { _key: 't4', icon: 'message', text: 'No credit card required' },
  ],
  comparisonSection: {
    badge: 'Full Comparison',
    title: 'Compare all features',
    subtitle: "Everything you need to know about what's included in each plan.",
    features: [
      { _key: 'c1', feature: 'Team Inbox', category: 'Core Features', starter: 'true', scaler: 'true', omnis: 'true' },
      { _key: 'c2', feature: 'Unlimited labels & funnels', category: 'Core Features', starter: 'true', scaler: 'true', omnis: 'true' },
      { _key: 'c3', feature: 'Unlimited quick replies', category: 'Core Features', starter: 'true', scaler: 'true', omnis: 'true' },
      { _key: 'c4', feature: 'Unlimited scheduled messages', category: 'Core Features', starter: 'true', scaler: 'true', omnis: 'true' },
      { _key: 'c5', feature: 'WhatsApp chat backup', category: 'Core Features', starter: 'true', scaler: 'true', omnis: 'true' },
      { _key: 'c6', feature: 'WhatsApp group chat backup', category: 'Core Features', starter: 'false', scaler: 'false', omnis: 'true' },
      { _key: 'c7', feature: 'Unlimited message sync', category: 'Core Features', starter: 'Limited', scaler: 'Limited', omnis: 'true' },
      { _key: 'c8', feature: 'HubSpot', category: 'CRM Integrations', starter: 'true', scaler: 'true', omnis: 'true' },
      { _key: 'c9', feature: 'Zoho CRM', category: 'CRM Integrations', starter: 'true', scaler: 'true', omnis: 'true' },
      { _key: 'c10', feature: 'Bitrix24', category: 'CRM Integrations', starter: 'true', scaler: 'true', omnis: 'true' },
      { _key: 'c11', feature: 'Google Sheets', category: 'CRM Integrations', starter: 'true', scaler: 'true', omnis: 'true' },
      { _key: 'c12', feature: 'Salesforce', category: 'CRM Integrations', starter: 'false', scaler: 'true', omnis: 'true' },
      { _key: 'c13', feature: 'Webhook integrations', category: 'CRM Integrations', starter: 'false', scaler: 'true', omnis: 'true' },
      { _key: 'c14', feature: 'Dedicated APIs', category: 'CRM Integrations', starter: 'false', scaler: 'true', omnis: 'true' },
      { _key: 'c15', feature: 'Sync to deals/tickets', category: 'CRM Integrations', starter: 'false', scaler: 'false', omnis: 'true' },
      { _key: 'c16', feature: 'Send messages from CRM', category: 'Intelligence & AI', starter: 'true', scaler: 'true', omnis: 'true' },
      { _key: 'c17', feature: 'CRM property-to-WhatsApp labeling', category: 'Intelligence & AI', starter: 'false', scaler: 'true', omnis: 'true' },
      { _key: 'c18', feature: 'Custom objects in mini CRM view', category: 'Intelligence & AI', starter: 'false', scaler: 'true', omnis: 'true' },
      { _key: 'c19', feature: 'AI unreplied chats agent', category: 'Intelligence & AI', starter: 'false', scaler: 'true', omnis: 'true' },
      { _key: 'c20', feature: 'Revenue Inbox', category: 'Intelligence & AI', starter: 'false', scaler: 'false', omnis: 'true' },
      { _key: 'c21', feature: 'RevOps Agent (AI)', category: 'Intelligence & AI', starter: 'false', scaler: 'false', omnis: 'true' },
      { _key: 'c22', feature: 'WhatsApp Web Copilot', category: 'Intelligence & AI', starter: 'false', scaler: 'false', omnis: 'true' },
      { _key: 'c23', feature: 'CRM workflow integration', category: 'Automation', starter: 'false', scaler: 'true', omnis: 'true' },
      { _key: 'c24', feature: 'Bulk messaging', category: 'Automation', starter: 'true', scaler: 'true', omnis: 'true' },
      { _key: 'c25', feature: 'Auto-create contacts', category: 'Automation', starter: 'true', scaler: 'true', omnis: 'true' },
      { _key: 'c26', feature: 'Email support', category: 'Support', starter: 'true', scaler: 'true', omnis: 'true' },
      { _key: 'c27', feature: 'Priority support', category: 'Support', starter: 'false', scaler: 'true', omnis: 'true' },
      { _key: 'c28', feature: 'Dedicated account manager', category: 'Support', starter: 'false', scaler: 'false', omnis: 'true' },
      { _key: 'c29', feature: 'WhatsApp group assistance', category: 'Support', starter: 'false', scaler: 'false', omnis: 'true' },
    ],
  },
  faqSection: {
    badge: 'Questions & Answers',
    title: 'Frequently asked questions',
    subtitle: "Can't find what you're looking for?",
    contactLinkText: 'Contact our team',
    faqs: [
      {
        _key: 'faq1',
        question: 'Can I try Eazybe for free?',
        answer: 'Yes! We offer a 14-day free trial on Starter and Scaler plans. No credit card required. You can explore all features and see how Eazybe integrates with your existing workflow before committing.',
      },
      {
        _key: 'faq2',
        question: 'What is Revenue Inbox?',
        answer: 'Revenue Inbox is our intelligent dashboard that surfaces the most important WhatsApp conversations that need attention. It uses AI to identify hot deals, escalations, and opportunities you might miss in a busy inbox.',
      },
      {
        _key: 'faq3',
        question: 'What is RevOps Agent?',
        answer: 'RevOps Agent is our AI-powered assistant that automates revenue operations tasks. It can analyze conversations, update CRM records, identify deal risks, and provide actionable insights to help you close more deals.',
      },
      {
        _key: 'faq4',
        question: 'What is WhatsApp Web Copilot?',
        answer: 'WhatsApp Web Copilot is our AI assistant that works directly in your WhatsApp Web interface. It helps you draft responses, summarize conversations, and provides real-time suggestions to improve your customer communication.',
      },
      {
        _key: 'faq5',
        question: 'How does per-user pricing work?',
        answer: "You pay for each team member who actively uses Eazybe. A user is anyone who syncs their WhatsApp conversations to your CRM. Admins who only view data don't count as users.",
      },
      {
        _key: 'faq6',
        question: 'Which CRMs do you integrate with?',
        answer: 'Starter integrates with HubSpot, Zoho CRM, Bitrix24, and Google Sheets. Scaler adds Salesforce and webhook integrations for custom CRMs. Omnis includes dedicated APIs and sync to deals/tickets.',
      },
      {
        _key: 'faq7',
        question: 'Can I switch plans later?',
        answer: 'Absolutely! You can upgrade or downgrade your plan at any time. When upgrading, you get immediate access to new features. When downgrading, the change takes effect at your next billing cycle.',
      },
      {
        _key: 'faq8',
        question: 'Is my data secure?',
        answer: 'Yes. We use bank-grade 256-bit encryption for all data in transit and at rest. We are GDPR compliant, Meta Business Partner verified, and undergo regular security audits.',
      },
    ],
  },
  ctaSection: {
    headline: 'Ready to turn WhatsApp into your',
    headlineHighlight: 'revenue engine?',
    subheadline: 'Join 2,000+ teams who sync every conversation, automate follow-ups, and close deals faster.',
    primaryCta: { label: 'Start Free Trial', url: '/signup' },
    secondaryCta: { label: 'Book a Demo', url: '/demo' },
    footnote: 'Free 14-day trial • No credit card required • Cancel anytime',
  },
}

async function createPricingContent() {
  console.log('Creating pricing page content in Sanity...')

  try {
    // Create or replace the English pricing page
    const result = await client.createOrReplace(pricingPageEN)
    console.log('✅ Created pricing page (EN):', result._id)

    console.log('\n✅ Pricing content created successfully!')
    console.log('You can now view and edit it in the Sanity Studio.')
  } catch (error) {
    console.error('❌ Error creating pricing content:', error)
    throw error
  }
}

createPricingContent()
