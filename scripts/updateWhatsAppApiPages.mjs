import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '5awzi0t4',
  dataset: 'production',
  token: process.env.SANITY_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

// =============================================
// BROADCAST PAGE
// =============================================
const broadcastContent = {
  title: 'WhatsApp Broadcast Campaigns',
  hero: {
    badge: 'WHATSAPP BROADCAST',
    headline: 'Broadcast to Thousands,',
    headlineHighlight: 'Without Getting Banned',
    description:
      'WhatsApp Business App caps broadcasts at 256 contacts and risks banning your number. Eazybe routes campaigns through the official WhatsApp Business API — so you can reach your entire customer base safely, track every delivery, and manage it all from your Chrome extension.',
    primaryCta: { label: 'Start Broadcasting Free', url: 'https://chromewebstore.google.com/detail/eazybe-best-whatsapp-crm/bmgbofakjpclgkgmgpjfaokbahkjdpfm' },
    secondaryCta: { label: 'Book a Demo', url: 'https://www.eazybe.com/demo' },
    stats: [
      { value: '10,000+', label: 'Contacts per broadcast' },
      { value: '0%', label: 'Ban risk via API' },
      { value: '98%', label: 'Average delivery rate' },
    ],
  },
  benefits: {
    badge: 'Why Switch to API Broadcasts',
    headline: 'Everything WhatsApp App Broadcasts Can\'t Do',
    items: [
      {
        icon: 'users',
        title: 'No 256-Contact Limit',
        description:
          'WhatsApp App restricts broadcasts to 256 contacts who must have your number saved. API broadcasts have no contact limit and no save-number requirement — reach your entire database in one send.',
      },
      {
        icon: 'shield',
        title: 'Zero Ban Risk',
        description:
          'App-based bulk messaging triggers WhatsApp spam detection and can permanently ban your number. API broadcasts route through Meta\'s official business infrastructure — designed for high-volume messaging.',
      },
      {
        icon: 'bar-chart-2',
        title: 'Full Delivery Analytics',
        description:
          'See exactly which messages were sent, delivered, read, and clicked — in real time. No more guessing whether your broadcast actually reached anyone. Export reports to your CRM.',
      },
    ],
  },
  features: [
    {
      badge: 'The Problem',
      headline: 'WhatsApp App Broadcasts Are Broken',
      description:
        'You built your customer list on WhatsApp. But every time you try to broadcast, you hit walls — contact limits, ban warnings, and zero visibility into who actually received your message.',
      points: [
        'Hard 256-contact cap per broadcast list',
        'Recipients must save your number first',
        'No delivery or read tracking whatsoever',
        'Repeated bulk sends risk permanent number ban',
      ],
      image: 'workflow-visual',
    },
    {
      badge: 'The Solution',
      headline: 'API-Powered Broadcasts via Eazybe',
      description:
        'Eazybe connects your existing WhatsApp number to the Business API. Build campaigns with our visual editor, segment audiences from your CRM, and send — all without leaving your Chrome extension.',
      points: [
        'Send to 10,000+ contacts in a single campaign',
        'No save-number requirement for recipients',
        'Rich media: images, videos, documents, and buttons',
        'Schedule sends for optimal delivery windows',
      ],
      image: 'sync-visual',
    },
    {
      badge: 'CRM-Powered Targeting',
      headline: 'Segment Audiences from Your CRM',
      description:
        'Pull contact lists directly from HubSpot, Salesforce, Zoho, or Google Sheets. Segment by deal stage, last interaction, tags, or custom fields — then send targeted messages that convert.',
      points: [
        'Native integrations with HubSpot, Salesforce, Zoho, LeadSquared',
        'Import segments from Google Sheets or CSV',
        'Filter by deal stage, tags, last activity, or custom properties',
        'Log every broadcast as a CRM activity for full visibility',
      ],
      image: 'mini-crm-visual',
    },
    {
      badge: 'Real-Time Analytics',
      headline: 'Track Every Message End to End',
      description:
        'Monitor campaign performance as it happens. Sent, delivered, read, clicked — every metric synced to your CRM timeline so sales reps see what each contact received.',
      points: [
        'Real-time sent, delivered, and read receipts',
        'Button click tracking for CTAs and quick replies',
        'Engagement metrics synced to CRM deal records',
        'Export campaign reports for team reviews',
      ],
      image: 'workflow-visual',
    },
  ],
  howItWorks: {
    badge: 'How It Works',
    headline: 'Your First Campaign in Under 30 Minutes',
    description: 'No new app to learn. No WhatsApp migration. Just install the Chrome extension and start broadcasting.',
    steps: [
      {
        number: '01',
        title: 'Install Eazybe Extension',
        description: 'Add the Eazybe Chrome extension and connect your existing WhatsApp Business number. Your app keeps working normally.',
      },
      {
        number: '02',
        title: 'Connect Your CRM',
        description: 'Link HubSpot, Salesforce, Zoho, or Google Sheets. Import your contact lists and segments automatically.',
      },
      {
        number: '03',
        title: 'Build Your Campaign',
        description: 'Use the visual campaign builder to compose your message with images, buttons, and personalization variables from your CRM.',
      },
      {
        number: '04',
        title: 'Send and Track',
        description: 'Hit send or schedule for later. Watch delivery, read, and click metrics in real time. Every send logs to your CRM.',
      },
    ],
  },
  useCases: {
    badge: 'Who Uses This',
    headline: 'Built for Teams That Sell on WhatsApp',
    items: [
      {
        icon: 'trending-up',
        title: 'Sales Teams',
        description:
          'Blast product announcements or limited-time offers to your entire prospect list, then handle replies as personal conversations — all from the same number.',
        benefits: [
          'Reach entire pipeline in one broadcast',
          'Follow up personally from the same thread',
          'Track engagement in CRM deal timelines',
        ],
      },
      {
        icon: 'shopping-bag',
        title: 'E-Commerce & D2C Brands',
        description:
          'Send flash sale alerts, restock notifications, and abandoned cart reminders to thousands of customers with 98% delivery rates — far outperforming email or SMS.',
        benefits: [
          'Flash sale and promotion alerts at scale',
          'Abandoned cart recovery messages',
          'New collection and restock notifications',
        ],
      },
      {
        icon: 'briefcase',
        title: 'Marketing Agencies',
        description:
          'Manage WhatsApp campaigns across multiple client accounts. Segment audiences, schedule sends, and deliver detailed analytics reports — all from one dashboard.',
        benefits: [
          'Multi-client campaign management',
          'CRM-based audience segmentation per client',
          'White-label analytics reports',
        ],
      },
    ],
  },
  faq: {
    badge: 'Frequently Asked Questions',
    headline: 'Broadcast Campaign FAQs',
    items: [
      {
        question: 'How many contacts can I broadcast to?',
        answer:
          'There is no hard cap with the WhatsApp Business API. Your sending volume depends on your Meta-assigned messaging tier, which starts at 1,000 unique contacts per day and automatically scales as your quality rating improves. Most active users reach the unlimited tier within weeks.',
      },
      {
        question: 'Will my WhatsApp number get banned?',
        answer:
          'No. API broadcasts go through Meta\'s official business messaging infrastructure, which is designed for high-volume sends. As long as you follow Meta\'s commerce and messaging policies (no spam, opt-in required), your number is fully protected.',
      },
      {
        question: 'Do recipients need to save my number?',
        answer:
          'No. Unlike WhatsApp App broadcasts, API messages are delivered regardless of whether the recipient has saved your number. This is one of the biggest advantages of API-based broadcasting.',
      },
      {
        question: 'Can I send promotional content?',
        answer:
          'Yes. The WhatsApp Business API supports marketing messages including promotions, product launches, and re-engagement campaigns. Recipients must have opted in to receive messages from your business. Eazybe helps you manage opt-in compliance.',
      },
      {
        question: 'How does broadcast pricing work?',
        answer:
          'WhatsApp charges per conversation, not per message. Pricing varies by country and conversation type (marketing, utility, service). A marketing conversation in India costs roughly $0.01 USD. Eazybe does not add per-message fees on top of Meta\'s charges.',
      },
      {
        question: 'Can I schedule broadcasts?',
        answer:
          'Yes. Schedule campaigns for specific dates and times to reach customers during peak engagement windows. You can also set up recurring broadcasts for weekly or monthly updates.',
      },
      {
        question: 'Which CRMs can I connect?',
        answer:
          'Eazybe integrates natively with HubSpot, Salesforce, Zoho, LeadSquared, Bitrix24, and Freshdesk. For other CRMs, connect via Google Sheets or Webhooks for fully custom workflows.',
      },
    ],
  },
}

// =============================================
// COEXISTENCE PAGE
// =============================================
const coexistenceContent = {
  title: 'WhatsApp Coexistence',
  hero: {
    badge: 'COEXISTENCE',
    headline: 'API Power. App Freedom.',
    headlineHighlight: 'Same Number, Both.',
    description:
      'Every other WhatsApp API provider locks you out of your phone app. Eazybe\'s Coexistence mode connects your number to the API while keeping your WhatsApp app fully functional — so you can broadcast at scale and chat personally, all from the same number.',
    primaryCta: { label: 'Try Coexistence Free', url: 'https://chromewebstore.google.com/detail/eazybe-best-whatsapp-crm/bmgbofakjpclgkgmgpjfaokbahkjdpfm' },
    secondaryCta: { label: 'See How It Works', url: '#how-it-works' },
    stats: [
      { value: '10,000+', label: 'Weekly broadcasts' },
      { value: '0%', label: 'Number ban risk' },
      { value: '100%', label: 'App functionality retained' },
    ],
  },
  benefits: {
    badge: 'The Problem',
    headline: 'The Impossible Choice Every Business Faces',
    items: [
      {
        icon: 'x-circle',
        title: 'Option A: Stay on WhatsApp App',
        description:
          'Broadcasts capped at 256 contacts. Recipients must save your number. Bulk sends risk a permanent ban. No analytics. No automation. Cannot scale.',
      },
      {
        icon: 'x-circle',
        title: 'Option B: Migrate to WhatsApp API',
        description:
          'You gain scale — but lose your app entirely. No more phone-based chats. No voice or video calls. A new dashboard to learn. Your team loses the tool they know.',
      },
      {
        icon: 'check-circle',
        title: 'Option C: Eazybe Coexistence',
        description:
          'API-powered broadcasts for scale. Full WhatsApp app access for conversations. Same number on both. No migration, no lockout, no compromise.',
      },
    ],
  },
  features: [
    {
      badge: 'Dual-Channel Access',
      headline: 'One Number, Two Channels, Zero Conflict',
      description:
        'Eazybe links your existing WhatsApp Business number to the API without removing it from your phone. Your team continues chatting on the app while campaigns run through the API in parallel.',
      points: [
        'WhatsApp app stays fully functional — chats, calls, media, groups',
        'API broadcasts run in parallel on the same number',
        'Every API message appears in your app conversation history',
        'No new dashboard to learn — manage everything from WhatsApp Web',
      ],
      image: 'sync-visual',
    },
    {
      badge: 'Ban-Free Broadcasting',
      headline: 'Send 10,000+ Messages Without Risking Your Number',
      description:
        'Regular WhatsApp broadcasts use consumer infrastructure with aggressive spam detection. Coexistence routes bulk messages through Meta\'s official API infrastructure — purpose-built for business messaging at volume.',
      points: [
        'Official Meta API infrastructure handles all bulk sends',
        'No spam detection triggers — your number stays safe',
        'No 256-contact cap or save-number requirement',
        'Meta messaging tiers scale automatically with good engagement',
      ],
      image: 'workflow-visual',
    },
    {
      badge: 'CRM-Connected',
      headline: 'Every Conversation Syncs to Your CRM',
      description:
        'Whether a message is sent via API broadcast or personal app chat, Eazybe captures it and syncs to your CRM. Your sales managers see the full picture — broadcasts, replies, and follow-ups — in one timeline.',
      points: [
        'Native sync with HubSpot, Salesforce, Zoho, LeadSquared, Bitrix24',
        'Broadcast sends logged as CRM activities automatically',
        'App conversations synced via Chrome extension',
        'Google Sheets and Webhook integrations for custom setups',
      ],
      image: 'mini-crm-visual',
    },
  ],
  howItWorks: {
    badge: 'How It Works',
    headline: 'Live in Under 30 Minutes',
    description: 'No number migration. No WhatsApp downtime. Just connect and start broadcasting.',
    steps: [
      {
        number: '01',
        title: 'Install Eazybe',
        description:
          'Add the Eazybe Chrome extension and connect your WhatsApp Business number. Your app stays fully operational throughout.',
      },
      {
        number: '02',
        title: 'Enable API Access',
        description:
          'Eazybe provisions API access for your number in minutes — not the usual days of waiting. Your phone app continues working normally.',
      },
      {
        number: '03',
        title: 'Connect Your CRM',
        description:
          'Link HubSpot, Salesforce, Zoho, or any CRM via webhooks. Import contacts, segments, and deal data for targeted campaigns.',
      },
      {
        number: '04',
        title: 'Broadcast with Confidence',
        description:
          'Send campaigns through the API while your team continues personal conversations on the app. Same number, both channels, zero conflict.',
      },
    ],
  },
  useCases: {
    badge: 'Who Is This For',
    headline: 'Built for Teams That Can\'t Afford to Choose',
    items: [
      {
        icon: 'trending-up',
        title: 'Sales Teams',
        description:
          'Broadcast product announcements to thousands via API, then follow up personally on the app — all from the same number. Prospects never see a seam between broadcast and conversation.',
        benefits: [
          'Bulk outreach without ban risk',
          'Personal follow-ups from the same thread',
          'Full conversation history synced to CRM',
        ],
      },
      {
        icon: 'shopping-bag',
        title: 'E-Commerce Brands',
        description:
          'Send flash sale alerts and restock notifications at scale via API. Handle customer queries about orders directly on the app. One number for marketing and support.',
        benefits: [
          '10,000+ promotional sends per week',
          'Order inquiry handling on WhatsApp app',
          'Cart recovery and post-purchase campaigns',
        ],
      },
      {
        icon: 'headphones',
        title: 'Support + Marketing Teams',
        description:
          'Marketing broadcasts updates to the full customer base. Support agents handle individual tickets on their phones. Same number, no stepping on each other.',
        benefits: [
          'Broadcast service updates to all customers',
          'Individual support conversations on app',
          'Shared number without team conflicts',
        ],
      },
      {
        icon: 'briefcase',
        title: 'Agencies Managing Multiple Clients',
        description:
          'Run API campaigns for clients who refuse to give up their WhatsApp app access. Coexistence means no client pushback — they keep chatting, you keep sending.',
        benefits: [
          'Client retains full app functionality',
          'Agency manages API campaigns remotely',
          'Per-client analytics and CRM sync',
        ],
      },
    ],
  },
  faq: {
    badge: 'Frequently Asked Questions',
    headline: 'Coexistence FAQs',
    items: [
      {
        question: 'Will I lose access to my WhatsApp app?',
        answer:
          'No — that is the entire point. Your WhatsApp app works exactly as before. You can chat, make voice and video calls, send media, manage groups, and see all your messages. The API runs in parallel without affecting app functionality.',
      },
      {
        question: 'How is this different from a regular API provider?',
        answer:
          'Standard WhatsApp API providers (like Twilio, MessageBird, or Gupshup) require you to migrate your number to their platform, which disconnects it from the WhatsApp app. Eazybe\'s Coexistence mode keeps your app connected while adding API capabilities on top.',
      },
      {
        question: 'Do I need a new WhatsApp number?',
        answer:
          'No. You use your existing WhatsApp Business number. Your customers see the same number they already know and trust. No number change, no re-verification, no lost chat history.',
      },
      {
        question: 'Will customers know I\'m using an API?',
        answer:
          'No. Messages sent via API look identical to regular WhatsApp messages. There is no "sent via API" label or any visible difference. Recipients experience it as a normal WhatsApp conversation.',
      },
      {
        question: 'What happens to my existing chats and contacts?',
        answer:
          'Everything stays intact. Your chat history, contacts, groups, and media remain exactly as they are. Enabling Coexistence does not modify, delete, or migrate any existing data on your phone.',
      },
      {
        question: 'How long does setup take?',
        answer:
          'Most users are up and running in under 30 minutes. Install the Chrome extension, connect your number, and API access is provisioned in minutes — not the days typical of other providers.',
      },
      {
        question: 'Which CRMs are supported?',
        answer:
          'Eazybe integrates natively with HubSpot, Salesforce, Zoho, LeadSquared, Bitrix24, and Freshdesk. You can also connect any CRM via Google Sheets or custom Webhooks.',
      },
    ],
  },
}

// =============================================
// TEMPLATES PAGE
// =============================================
const templatesContent = {
  title: 'WhatsApp Message Templates',
  hero: {
    badge: 'MESSAGE TEMPLATES',
    headline: 'Reach Customers Anytime,',
    headlineHighlight: 'Not Just Within 24 Hours',
    description:
      'WhatsApp only allows free-form messages within 24 hours of the customer\'s last reply. After that, you need pre-approved message templates. Eazybe lets you create, manage, and automate template messages — triggered directly from your CRM workflows.',
    primaryCta: { label: 'Start Using Templates', url: 'https://chromewebstore.google.com/detail/eazybe-best-whatsapp-crm/bmgbofakjpclgkgmgpjfaokbahkjdpfm' },
    secondaryCta: { label: 'View Template Gallery', url: 'https://www.eazybe.com/demo' },
    stats: [
      { value: '98%', label: 'Delivery rate' },
      { value: '24/7', label: 'Send outside session window' },
      { value: '50+', label: 'Pre-built templates' },
    ],
  },
  benefits: {
    badge: 'Why Templates Matter',
    headline: 'The 24-Hour Window Problem — Solved',
    items: [
      {
        icon: 'clock',
        title: 'Break the 24-Hour Limit',
        description:
          'Without templates, you cannot message a customer who hasn\'t replied in 24 hours. Templates let you re-engage dormant leads, send appointment reminders, and deliver order updates — anytime.',
      },
      {
        icon: 'shield-check',
        title: 'Pre-Approved by Meta',
        description:
          'Every template goes through Meta\'s review process, ensuring compliance with WhatsApp commerce policies. This means higher delivery rates and zero risk of policy violations.',
      },
      {
        icon: 'zap',
        title: 'Trigger from Your CRM',
        description:
          'Connect templates to HubSpot workflows, Salesforce automations, or Zoho blueprints. Automatically send the right message when a deal moves stages, a ticket is created, or an appointment is booked.',
      },
    ],
  },
  features: [
    {
      badge: 'The Problem',
      headline: 'Your Best Leads Go Cold After 24 Hours',
      description:
        'A prospect visits your website, starts a WhatsApp chat, asks about pricing — and then goes silent. After 24 hours, WhatsApp blocks you from following up. Without templates, that lead is lost.',
      points: [
        'Free-form messaging blocked after 24-hour session window',
        'No way to re-engage leads who went silent',
        'Appointment reminders and order updates can\'t be sent proactively',
        'Manual follow-ups miss the optimal timing window',
      ],
      image: 'workflow-visual',
    },
    {
      badge: 'The Solution',
      headline: 'Pre-Approved Templates That Send Automatically',
      description:
        'Eazybe gives you a library of 50+ pre-approved templates for common scenarios — plus a builder for custom templates. Personalize with CRM data, add buttons and media, and set up automated triggers.',
      points: [
        'Pre-built templates for sales follow-ups, reminders, and updates',
        'Custom template builder with Meta submission and approval tracking',
        'Dynamic variables: customer name, order ID, appointment time, deal value',
        'Rich media support: images, documents, and interactive buttons',
      ],
      image: 'sync-visual',
    },
    {
      badge: 'CRM-Triggered Automation',
      headline: 'Right Message, Right Moment, Zero Manual Work',
      description:
        'Connect templates to your CRM workflows. When a deal moves to "Proposal Sent," auto-send a pricing template. When a ticket is resolved, trigger a feedback request. Your team focuses on conversations, not copy-paste.',
      points: [
        'HubSpot workflow triggers for deal stage changes',
        'Salesforce process builder and flow integration',
        'Zoho CRM blueprint and automation support',
        'Custom triggers via Webhooks for any system',
      ],
      image: 'mini-crm-visual',
    },
  ],
  howItWorks: {
    badge: 'How It Works',
    headline: 'From Setup to Automated Messages in 4 Steps',
    description: 'Use pre-built templates immediately. Submit custom templates for approval in minutes.',
    steps: [
      {
        number: '01',
        title: 'Install Eazybe',
        description:
          'Add the Chrome extension and connect your WhatsApp Business number. API access is provisioned automatically.',
      },
      {
        number: '02',
        title: 'Choose or Create Templates',
        description:
          'Browse 50+ pre-approved templates or create custom ones. Eazybe submits them to Meta for review — most are approved within 24 hours.',
      },
      {
        number: '03',
        title: 'Connect Your CRM',
        description:
          'Link HubSpot, Salesforce, Zoho, or any CRM. Map template variables to CRM fields so messages are personalized automatically.',
      },
      {
        number: '04',
        title: 'Set Up Triggers or Send Manually',
        description:
          'Configure CRM workflow triggers for automated sends, or use the Chrome extension to fire templates manually during conversations.',
      },
    ],
  },
  useCases: {
    badge: 'Use Cases',
    headline: 'Templates for Every Business Scenario',
    items: [
      {
        icon: 'trending-up',
        title: 'Sales Follow-Ups',
        description:
          'Prospect went quiet after a demo? Send a personalized follow-up template with the proposal attached — even weeks after the last conversation.',
        benefits: [
          'Re-engage cold leads outside the 24-hour window',
          'Attach proposals, pricing sheets, and case studies',
          'Auto-trigger when deals stall in your CRM pipeline',
        ],
      },
      {
        icon: 'shopping-bag',
        title: 'Order Updates & Delivery Alerts',
        description:
          'Send order confirmations, shipping updates, and delivery notifications automatically. Customers get real-time updates on WhatsApp — where they actually check.',
        benefits: [
          'Order confirmation with order ID and details',
          'Shipping and tracking number notifications',
          'Delivery confirmation and review requests',
        ],
      },
      {
        icon: 'calendar',
        title: 'Appointment Reminders',
        description:
          'Reduce no-shows by sending automated reminders 24 hours and 1 hour before appointments. Include rescheduling buttons so customers can adjust without calling.',
        benefits: [
          'Automated reminders at configurable intervals',
          'One-tap rescheduling via interactive buttons',
          'Confirmation receipts synced to your calendar',
        ],
      },
    ],
  },
  faq: {
    badge: 'Frequently Asked Questions',
    headline: 'Template FAQs',
    items: [
      {
        question: 'What is a WhatsApp message template?',
        answer:
          'A message template is a pre-approved message format that businesses can use to send notifications outside the 24-hour session window. Templates can include text, media, buttons, and dynamic variables. They must be submitted to and approved by Meta before use.',
      },
      {
        question: 'How long does template approval take?',
        answer:
          'Most templates are approved by Meta within minutes to 24 hours. Eazybe provides 50+ pre-approved templates you can use immediately while custom templates are under review. Rejection feedback is provided so you can adjust and resubmit.',
      },
      {
        question: 'What are the character limits for templates?',
        answer:
          'Header: 60 characters. Body: 1,024 characters. Footer: 60 characters. You can also include up to 3 buttons (quick reply or URL), images, videos, documents, or location data.',
      },
      {
        question: 'Can I use dynamic variables in templates?',
        answer:
          'Yes. Templates support dynamic placeholders like {{1}}, {{2}}, etc. that get replaced with actual values at send time. Eazybe maps these to CRM fields — so {{1}} becomes the customer\'s name, {{2}} becomes their order ID, and so on.',
      },
      {
        question: 'How much do template messages cost?',
        answer:
          'WhatsApp charges per conversation (24-hour window), not per message. Rates vary by country and conversation category: marketing, utility, authentication, or service. For example, a marketing conversation in India costs approximately ₹0.82. Eazybe does not charge additional per-message fees.',
      },
      {
        question: 'Can I send promotional content via templates?',
        answer:
          'Yes. WhatsApp supports marketing templates for promotions, product launches, and re-engagement. These templates have a slightly higher cost than utility templates and require that recipients have opted in to receive marketing communications.',
      },
      {
        question: 'What happens if a template is rejected?',
        answer:
          'Meta provides a rejection reason (e.g., policy violation, unclear purpose). You can edit and resubmit. Common fixes include removing spammy language, clarifying the business purpose, or adjusting the call-to-action. Eazybe guides you through the revision process.',
      },
    ],
  },
}

// =============================================
// UPDATE ALL THREE PAGES
// =============================================
async function updatePages() {
  const pages = [
    { id: 'productPage-broadcast-en', content: broadcastContent, name: 'Broadcast' },
    { id: 'productPage-coexistence-en', content: coexistenceContent, name: 'Coexistence' },
    { id: 'productPage-templates-en', content: templatesContent, name: 'Templates' },
  ]

  for (const page of pages) {
    try {
      console.log(`\nUpdating ${page.name}...`)
      const result = await client
        .patch(page.id)
        .set(page.content)
        .commit()
      console.log(`✓ ${page.name} updated successfully (rev: ${result._rev})`)
    } catch (err) {
      console.error(`✗ ${page.name} failed:`, err.message)
    }
  }

  console.log('\nDone!')
}

updatePages()
