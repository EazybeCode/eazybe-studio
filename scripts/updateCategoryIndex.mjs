import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '5awzi0t4',
  dataset: 'production',
  token: process.env.SANITY_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

const result = await client.patch('categoryIndexPage-whatsapp-api-en').set({
  hero: {
    badge: 'WHATSAPP BUSINESS API',
    headline: 'Scale Your WhatsApp with',
    headlineHighlight: 'Official API Power',
    description: 'WhatsApp Business App caps you at 256 contacts and blocks messages after 24 hours. Eazybe connects your number to the official WhatsApp Business API — so you can broadcast at scale, send templates anytime, and keep using your app. All through one Chrome extension.',
    primaryCta: { label: 'Get Started Free', url: 'https://chromewebstore.google.com/detail/eazybe-best-whatsapp-crm/bmgbofakjpclgkgmgpjfaokbahkjdpfm' },
    secondaryCta: { label: 'Book a Demo', url: 'https://www.eazybe.com/demo' },
  },
  intro: {
    headline: 'Three API Features, One Chrome Extension',
    description: 'Eazybe gives you the power of the WhatsApp Business API without the complexity. No separate dashboards, no number migration, no code required. Choose the feature that fits your business — or use all three together.',
  },
  featuredItems: [
    {
      _key: 'coexistence',
      name: 'Coexistence',
      slug: 'coexistence',
      description: 'Use WhatsApp API and your phone app simultaneously on the same number. Broadcast at scale while chatting personally — zero compromise.',
      icon: 'coexistence',
      color: '#25D366',
      isFeatured: true,
      tags: ['API + App', 'Same Number', 'No Lockout'],
    },
    {
      _key: 'broadcast',
      name: 'Broadcast Campaigns',
      slug: 'broadcast',
      description: 'Send promotional campaigns to 10,000+ contacts through official API infrastructure. No 256-contact cap, no ban risk, full delivery analytics.',
      icon: 'broadcast',
      color: '#8B5CF6',
      isFeatured: true,
      tags: ['Bulk Sends', 'CRM Targeting', 'Analytics'],
    },
    {
      _key: 'templates',
      name: 'Message Templates',
      slug: 'templates',
      description: 'Reach customers outside the 24-hour session window with pre-approved templates. Trigger from your CRM workflows for automated follow-ups and notifications.',
      icon: 'templates',
      color: '#3B82F6',
      isFeatured: true,
      tags: ['24/7 Messaging', 'CRM Triggers', 'Pre-Approved'],
    },
  ],
  benefits: {
    badge: 'Why WhatsApp API via Eazybe',
    headline: 'API Power Without API Complexity',
    items: [
      {
        icon: 'zap',
        title: 'No Code, No Migration',
        description: 'Install a Chrome extension. Connect your existing number. Start using API features in under 30 minutes. No developers needed, no number migration required.',
      },
      {
        icon: 'shield',
        title: 'Zero Ban Risk',
        description: "All bulk messaging routes through Meta's official business infrastructure. Your number stays safe, your delivery rates stay high, and your account stays active.",
      },
      {
        icon: 'users',
        title: 'No Contact Limits',
        description: 'WhatsApp App caps broadcasts at 256 contacts who must save your number. API removes both restrictions — send to your entire database without limits.',
      },
      {
        icon: 'clock',
        title: 'Break the 24-Hour Window',
        description: "Template messages let you reach customers anytime — not just within 24 hours of their last reply. Follow up on cold leads, send reminders, deliver updates.",
      },
      {
        icon: 'bar-chart-2',
        title: 'Full Delivery Analytics',
        description: 'Track sent, delivered, read, and clicked metrics for every message. Export reports and sync engagement data to your CRM for complete visibility.',
      },
      {
        icon: 'git-merge',
        title: 'CRM-Native Automation',
        description: 'Native integrations with HubSpot, Salesforce, Zoho, LeadSquared, Bitrix24, and Freshdesk. Trigger messages from CRM workflows. Log every send as an activity.',
      },
    ],
  },
  faq: {
    badge: 'Frequently Asked Questions',
    headline: 'WhatsApp API FAQs',
    items: [
      {
        question: 'What is the difference between WhatsApp Business App and API?',
        answer: "WhatsApp Business App is designed for small businesses — it's free but limited to 256 broadcast contacts, has no automation, and blocks messages after 24 hours of inactivity. The WhatsApp Business API is built for scale — unlimited broadcasts, template messages, CRM automation, and delivery analytics. Eazybe makes the API accessible via a Chrome extension, no coding required.",
      },
      {
        question: 'Do I need a new phone number for the API?',
        answer: "No. With Eazybe's Coexistence mode, you use your existing WhatsApp Business number on both the API and your phone app simultaneously. No migration, no new number, no lost chat history.",
      },
      {
        question: 'How long does setup take?',
        answer: 'Under 30 minutes for most businesses. Install the Chrome extension, connect your WhatsApp number, and API access is provisioned automatically. No lengthy Meta verification queues.',
      },
      {
        question: 'What are template messages?',
        answer: "Pre-approved message formats that can be sent outside the 24-hour session window. They support dynamic variables (customer name, order ID, etc.), rich media, and interactive buttons. Meta reviews and approves templates to ensure quality — most approvals happen within 24 hours.",
      },
      {
        question: 'How much does the WhatsApp API cost?',
        answer: "WhatsApp charges per conversation (24-hour window), not per message. Rates vary by country and conversation type. For example, a marketing conversation in India costs approximately ₹0.82. Eazybe's plans start at $13/user/month and include API access — no hidden per-message fees on top.",
      },
    ],
  },
}).commit()

console.log('Category index page updated:', result._rev)
