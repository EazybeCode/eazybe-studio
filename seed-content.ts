import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '5awzi0t4',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN,
})

const landingPageContent = {
  _id: 'landingPage',
  _type: 'landingPage',
  title: 'Eazybe Landing Page',
  seo: {
    _type: 'seo',
    metaTitle: 'Eazybe - The WhatsApp Sales Platform for CRM Teams',
    metaDescription: 'Sync every WhatsApp conversation to your CRM. Automate follow-ups. See which deals need attention. Works with WhatsApp Business App and API.',
  },
  sections: [
    // Hero Section
    {
      _type: 'heroSection',
      _key: 'hero-1',
      badge: 'For HubSpot, Salesforce, Zoho, In-house CRMs and many more',
      headline: 'The WhatsApp Sales Platform for',
      headlineHighlight: 'CRM Teams',
      subheadline: 'Sync every WhatsApp conversation to your CRM. Automate follow-ups. See which deals need attention. Works with WhatsApp Business App and API—no migration required.',
      primaryCta: {
        _type: 'button',
        label: 'Start Free Trial',
        url: '/signup',
        variant: 'primary',
        size: 'lg',
        showIcon: true,
      },
      secondaryCta: {
        _type: 'button',
        label: 'Book a Demo',
        url: '/demo',
        variant: 'outline',
        size: 'lg',
      },
      socialProof: 'Trusted by 2,000+ sales teams at Apollo Hospitals, Avendus, University Living and more',
      trustedLogos: ['Apollo Hospitals', 'Avendus', 'University Living'],
    },

    // Client Logos Section
    {
      _type: 'clientLogosSection',
      _key: 'logos-1',
      title: 'Trusted by leading companies',
      logos: [],
    },

    // Comparison Section
    {
      _type: 'comparisonSection',
      _key: 'comparison-1',
      badge: 'Why Teams Switch to Eazybe',
      headline: 'Works with the WhatsApp you already use',
      description: 'Other tools force you to abandon WhatsApp Business App and migrate to API-only. Eazybe works with both—keep your existing setup, your chat history, and your workflow.',
      comparisonRows: [
        { _type: 'comparisonRow', _key: 'row-1', capability: 'WhatsApp Business App', otherTools: false, eazybe: true },
        { _type: 'comparisonRow', _key: 'row-2', capability: 'WhatsApp Business API', otherTools: true, eazybe: true },
        { _type: 'comparisonRow', _key: 'row-3', capability: 'Keep existing chat history', otherTools: false, eazybe: true },
        { _type: 'comparisonRow', _key: 'row-4', capability: 'Track personal WhatsApp numbers', otherTools: false, eazybe: true },
        { _type: 'comparisonRow', _key: 'row-5', capability: 'Live in 30 minutes', otherTools: false, eazybe: true },
      ],
    },

    // Problem Section
    {
      _type: 'problemSection',
      _key: 'problem-1',
      badge: 'The Problem',
      headline: 'Your CRM is blind to WhatsApp',
      subheadline: '90% of customer conversations happen in chat. Your CRM sees none of it.',
      problems: [
        {
          _type: 'problemCard',
          _key: 'problem-card-1',
          icon: 'eye-off',
          title: 'Zero Visibility',
          description: "Deals move in WhatsApp. Your CRM shows stale data. You can't see response times, unreplied chats, or which deals are going cold.",
        },
        {
          _type: 'problemCard',
          _key: 'problem-card-2',
          icon: 'clock',
          title: 'Hot Deals Slip Away',
          description: "A lead asks for pricing. No one replies for 6 hours. By the time you notice, they've signed with your competitor. You had no way to know.",
        },
        {
          _type: 'problemCard',
          _key: 'problem-card-3',
          icon: 'user-x',
          title: 'Ghosted Clients Stay Hidden',
          description: "Stalled deals. Escalation requests. Clients who stopped responding. It's all buried in chat threads you can't see or filter.",
        },
        {
          _type: 'problemCard',
          _key: 'problem-card-4',
          icon: 'log-out',
          title: 'Employee Exit = Data Walkout',
          description: 'When a rep leaves, years of customer conversations leave too. No backup. No handover. The next rep starts from zero.',
        },
      ],
    },

    // Integrations Section
    {
      _type: 'integrationsSection',
      _key: 'integrations-1',
      title: 'Connects to Your CRM Stack',
      integrations: [
        { _type: 'integrationItem', _key: 'int-1', name: 'HubSpot', logoUrl: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.hubspot.com&size=256' },
        { _type: 'integrationItem', _key: 'int-2', name: 'Salesforce', logoUrl: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.salesforce.com&size=256' },
        { _type: 'integrationItem', _key: 'int-3', name: 'Zoho', logoUrl: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.zoho.com&size=256' },
        { _type: 'integrationItem', _key: 'int-4', name: 'Bitrix24', logoUrl: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.bitrix24.com&size=256' },
        { _type: 'integrationItem', _key: 'int-5', name: 'LeadSquared', logoUrl: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.leadsquared.com&size=256' },
        { _type: 'integrationItem', _key: 'int-6', name: 'Freshworks', logoUrl: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.freshworks.com&size=256' },
        { _type: 'integrationItem', _key: 'int-7', name: 'Pipedrive', logoUrl: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.pipedrive.com&size=256' },
        { _type: 'integrationItem', _key: 'int-8', name: 'Google Sheets', logoUrl: 'https://cdn.simpleicons.org/googlesheets/34A853' },
      ],
      showWebhooks: true,
      footnote: "Don't see your CRM? Use our generic Webhooks or Google Sheets integration to connect any system.",
    },

    // Feature Section
    {
      _type: 'featureSection',
      _key: 'features-1',
      features: [
        {
          _type: 'feature',
          _key: 'feat-1',
          id: 'capture',
          badge: 'Conversation Capture',
          headline: 'Every message. Automatically in your CRM.',
          description: 'Stop asking reps to forward conversations. Eazybe captures every WhatsApp message and syncs it to HubSpot, Salesforce, Zoho, in-house CRMs and many more—in real-time.',
          points: [
            { _type: 'featurePoint', _key: 'fp-1-1', text: 'Real-time sync — Messages appear in CRM within seconds' },
            { _type: 'featurePoint', _key: 'fp-1-2', text: 'Full context — Attachments, voice notes, and media included' },
            { _type: 'featurePoint', _key: 'fp-1-3', text: 'Cloud backup — Never lose data when devices change or reps leave' },
            { _type: 'featurePoint', _key: 'fp-1-4', text: 'Personal numbers — Track conversations from personal WhatsApp too' },
          ],
          ctaLabel: 'See how sync works',
          ctaUrl: '/features/conversation-capture',
          alignRight: false,
        },
        {
          _type: 'feature',
          _key: 'feat-2',
          id: 'mini-crm',
          badge: 'Mini CRM View',
          headline: 'Your CRM, inside WhatsApp',
          description: 'Stop switching tabs. Mini CRM View puts contact history, deal info, and quick actions right inside WhatsApp Web. See everything about a contact while you chat.',
          points: [
            { _type: 'featurePoint', _key: 'fp-2-1', text: 'Full contact and deal history at a glance' },
            { _type: 'featurePoint', _key: 'fp-2-2', text: 'Update stages with one click' },
            { _type: 'featurePoint', _key: 'fp-2-3', text: 'Add notes without leaving WhatsApp' },
          ],
          ctaLabel: 'See Mini CRM View',
          ctaUrl: '/features/mini-crm',
          alignRight: true,
        },
        {
          _type: 'feature',
          _key: 'feat-3',
          id: 'workflow',
          badge: 'Workflow Automations',
          headline: 'Automate what happens after the conversation',
          description: 'Once messages sync, trigger actions automatically. Route leads. Create deals. Send follow-ups. Build fully functional chatbots using CRM workflows—no code required.',
          points: [
            { _type: 'featurePoint', _key: 'fp-3-1', text: 'Trigger CRM workflows from WhatsApp events' },
            { _type: 'featurePoint', _key: 'fp-3-2', text: 'Auto-create contacts, deals, and tasks' },
            { _type: 'featurePoint', _key: 'fp-3-3', text: 'Build chatbots that pull and push CRM data' },
            { _type: 'featurePoint', _key: 'fp-3-4', text: 'Schedule follow-ups based on response patterns' },
          ],
          ctaLabel: 'Explore automations',
          ctaUrl: '/features/automations',
          alignRight: false,
        },
        {
          _type: 'feature',
          _key: 'feat-4',
          id: 'revenue-inbox',
          badge: 'Revenue Inbox',
          headline: 'Unreplied. Hot. Stalled. Ghosted. All in one view.',
          description: "Revenue Inbox filters your WhatsApp conversations by what matters—combining chat signals with CRM data. See unreplied chats. Spot hot deals asking for pricing. Catch escalations before they blow up. Find ghosted clients before they churn.",
          points: [
            { _type: 'featurePoint', _key: 'fp-4-1', text: "Unreplied chats — See who's waiting, sorted by wait time" },
            { _type: 'featurePoint', _key: 'fp-4-2', text: 'Hot deals — Leads showing buying signals (pricing, demo, contract mentions)' },
            { _type: 'featurePoint', _key: 'fp-4-3', text: 'Escalation alerts — Frustrated clients flagged before they escalate' },
            { _type: 'featurePoint', _key: 'fp-4-4', text: 'Ghosted & stalled — Clients who stopped responding, deals going cold' },
          ],
          ctaLabel: 'Explore Revenue Inbox',
          ctaUrl: '/features/revenue-inbox',
          alignRight: true,
        },
        {
          _type: 'feature',
          _key: 'feat-5',
          id: 'rep-radar',
          badge: 'Rep Radar',
          headline: "Know who's following up. Who's not.",
          description: 'See response times, follow-up rates, and unreplied chat counts across your team. Identify who needs coaching before deals are lost.',
          points: [
            { _type: 'featurePoint', _key: 'fp-5-1', text: 'Average response time by rep' },
            { _type: 'featurePoint', _key: 'fp-5-2', text: 'Unreplied conversation count' },
            { _type: 'featurePoint', _key: 'fp-5-3', text: 'Team benchmarks and rankings' },
            { _type: 'featurePoint', _key: 'fp-5-4', text: 'Trend tracking over time' },
          ],
          ctaLabel: 'See analytics',
          ctaUrl: '/features/rep-radar',
          alignRight: false,
        },
        {
          _type: 'feature',
          _key: 'feat-6',
          id: 'whatsapp-copilot',
          badge: 'WhatsApp Copilot',
          headline: 'AI Agents for Sales, Support & Revenue Ops',
          description: 'A complete AI workforce for your revenue team. The Rep Assistant lives in WhatsApp to handle follow-ups and data entry. The Revenue Operations Agent analyzes deal health and team performance for leadership.',
          points: [
            { _type: 'featurePoint', _key: 'fp-6-1', text: 'Rep Assistant — Lives in WhatsApp, drafts replies, and nudges reps' },
            { _type: 'featurePoint', _key: 'fp-6-2', text: 'Instant CRM Updates — Update HubSpot/Salesforce deals via chat' },
            { _type: 'featurePoint', _key: 'fp-6-3', text: 'Revenue Ops Agent — Provides managers with deal intelligence' },
            { _type: 'featurePoint', _key: 'fp-6-4', text: 'Admin Dashboards — Chat with AI to build reports and analyze trends' },
          ],
          ctaLabel: 'Explore WhatsApp Copilot',
          ctaUrl: '/features/copilot',
          alignRight: true,
        },
      ],
    },

    // Security Section
    {
      _type: 'securitySection',
      _key: 'security-1',
      badge: 'Enterprise-Ready Security',
      badges: [
        {
          _type: 'securityBadge',
          _key: 'sec-1',
          icon: 'meta',
          title: 'Meta Business Partner',
          subtitle: 'Verified Integration',
          featured: false,
        },
        {
          _type: 'securityBadge',
          _key: 'sec-2',
          icon: 'file-check',
          title: 'GDPR Ready',
          subtitle: 'Fully Compliant Data Processing',
          badge: 'Compliant',
          featured: true,
        },
        {
          _type: 'securityBadge',
          _key: 'sec-3',
          icon: 'lock',
          title: 'Bank-Grade Security',
          subtitle: 'SSL & 256-bit Encryption',
          featured: false,
        },
      ],
      footnote: 'Trusted by regulated industries: financial services, healthcare, insurance',
    },

    // CTA Section
    {
      _type: 'ctaSection',
      _key: 'cta-1',
      headline: 'Ready to sync WhatsApp with your CRM?',
      subheadline: 'Start your free trial today. No credit card required.',
      primaryCta: {
        _type: 'button',
        label: 'Start Free Trial',
        url: '/signup',
        variant: 'primary',
        size: 'lg',
        showIcon: true,
      },
      secondaryCta: {
        _type: 'button',
        label: 'Book a Demo',
        url: '/demo',
        variant: 'outline',
        size: 'lg',
      },
      backgroundColor: 'blue',
    },
  ],
}

async function seedContent() {
  console.log('Creating landing page content...')

  try {
    const result = await client.createOrReplace(landingPageContent)
    console.log('Created landing page:', result._id)
  } catch (error) {
    console.error('Error creating landing page:', error)
    throw error
  }
}

seedContent()
