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

const hubspotPageEN = {
  _type: 'productPage',
  _id: 'productPage-hubspot-whatsapp-integration-en',
  language: 'en',
  title: 'HubSpot WhatsApp Integration',
  slug: { _type: 'slug', current: 'hubspot-whatsapp-integration' },
  category: 'crm-integration',
  crmName: 'HubSpot',
  crmSlug: 'hubspot',
  crmColor: '#FF7A59',
  seo: {
    metaTitle: 'HubSpot WhatsApp Integration | Eazybe',
    metaDescription: 'Your CRM is blind to WhatsApp conversations. Eazybe shows you the ground truth—every message, every deal signal, automatically in HubSpot.',
  },
  hero: {
    badge: 'See What HubSpot Can\'t See',
    headline: 'Your CRM is blind to',
    headlineHighlight: 'WhatsApp conversations',
    description: 'Sales reps spend 40% of their time on manual data entry. Deals slip through cracks because follow-ups get lost in personal phones. Managers can\'t see what\'s really happening in the pipeline. Eazybe fixes this—every WhatsApp message, automatically in HubSpot.',
    primaryCta: { label: 'Start Free Trial', url: '/signup?crm=hubspot' },
    secondaryCta: { label: 'See How It Works', url: '/demo?crm=hubspot' },
    stats: [
      { value: '30,000+', label: 'Companies trust us' },
      { value: '87%', label: 'Less manual data entry' },
      { value: '100%', label: 'Conversation visibility' },
    ],
  },
  benefits: {
    badge: 'The Ground Truth',
    headline: 'Your CRM only knows what reps tell it. We show you everything.',
    items: [
      { icon: 'sync', title: 'No More Copy-Paste', description: 'Every WhatsApp message automatically appears in HubSpot Contact, Deal, and Ticket timelines. Voice notes, images, PDFs—everything syncs without reps lifting a finger.' },
      { icon: 'crm-view', title: 'CRM Inside WhatsApp', description: 'See deal value, lifecycle stage, and complete history while chatting. Update pipeline stages without switching tabs. Your reps never leave WhatsApp.' },
      { icon: 'workflow', title: 'Works With Your WhatsApp', description: 'Unlike competitors requiring expensive API migrations, Eazybe works with personal WhatsApp, WhatsApp Business App, AND WhatsApp API—all on one platform.' },
      { icon: 'team', title: 'Manager Visibility', description: 'See every conversation across your entire sales team. No more "I followed up" claims with no proof. Track response times, spot ghosted deals, monitor rep activity.' },
      { icon: 'analytics', title: 'Deal Health Signals', description: 'Know which deals are hot and which are going cold—based on actual conversation data, not CRM guesswork. Sentiment analysis and engagement scoring built-in.' },
      { icon: 'security', title: 'Conversations Never Lost', description: 'When reps leave, conversations stay. Customer history belongs to your company, not personal phones. SOC 2 certified, GDPR compliant, Meta Business Partner.' },
    ],
  },
  features: [
    {
      badge: 'The CRM Blindspot',
      headline: 'HubSpot can\'t see what happens in WhatsApp. Until now.',
      description: 'Your CRM shows deals, contacts, and activities—but misses the most important part: actual customer conversations. While reps chat on WhatsApp, managers see an incomplete picture. Opportunities slip through. Follow-ups get forgotten. Eazybe brings the ground truth into HubSpot.',
      points: ['Every message synced to Contact, Deal & Ticket timelines', 'Images, voice notes, documents included automatically', 'Complete conversation history preserved forever', 'Auto-associates chats with the right deals'],
      cta: { label: 'See it work', url: '#demo' },
      image: 'sync-visual',
      alignRight: false,
    },
    {
      badge: 'Zero Tab Switching',
      headline: 'Your entire HubSpot database, inside WhatsApp.',
      description: 'Reps waste hours switching between WhatsApp and HubSpot. By the time they update the CRM, context is lost and data is stale. With Eazybe, the CRM sidebar lives inside WhatsApp Web. Update deals mid-conversation. See customer history before you reply.',
      points: ['View deal value, stage, and owner instantly', 'Update pipeline without leaving WhatsApp', 'Create tasks and notes in one click', 'Full contact history at your fingertips'],
      cta: { label: 'Explore', url: '#demo' },
      image: 'mini-crm-visual',
      alignRight: true,
    },
    {
      badge: 'No API Migration Required',
      headline: 'Works with your existing WhatsApp. No expensive setup.',
      description: 'Competitors force you into WhatsApp Business API—costing thousands in migration, requiring technical setup, and limiting who can use it. Eazybe is a Chrome extension that works with the WhatsApp you already use. Personal account? Works. Business app? Works. API? Also works.',
      points: ['Chrome extension installs in 60 seconds', 'Works with personal WhatsApp accounts', 'No API migration or technical setup needed', 'One platform for all WhatsApp types'],
      cta: { label: 'Install free', url: '#install' },
      image: 'workflow-visual',
      alignRight: false,
    },
  ],
  howItWorks: {
    badge: 'Live in 5 Minutes',
    headline: 'No developers. No IT tickets. No waiting.',
    description: 'Your team will be syncing WhatsApp to HubSpot before your coffee gets cold.',
    steps: [
      { number: '01', title: 'Install Extension', description: 'Add Eazybe to Chrome. One click, 60 seconds.' },
      { number: '02', title: 'Connect HubSpot', description: 'OAuth login—no API keys, no developer needed.' },
      { number: '03', title: 'Open WhatsApp Web', description: 'The HubSpot sidebar appears automatically.' },
      { number: '04', title: 'Start Closing Deals', description: 'Every message flows to HubSpot. You\'re live.' },
    ],
  },
  useCases: {
    badge: 'Who It\'s For',
    headline: 'Built for teams where deals happen on WhatsApp',
    items: [
      { icon: 'sales', title: 'Sales Teams', description: 'Your reps are closing deals on WhatsApp but your CRM shows nothing. Get full chat history on every deal. Know who\'s engaged, who\'s ghosting, and who needs a nudge—without asking reps to manually log anything.', benefits: ['Full conversation visibility', 'Deal-linked chat history', 'Response time tracking'] },
      { icon: 'support', title: 'Sales Managers', description: 'Stop relying on rep self-reporting. See every customer conversation across your entire team. Spot coaching opportunities, identify at-risk deals, and hold reps accountable with actual conversation data.', benefits: ['Team-wide visibility', 'Performance monitoring', 'Pipeline reality check'] },
      { icon: 'marketing', title: 'Customer Success', description: 'When a customer says "I told your sales rep about this issue," you\'ll actually be able to find that conversation. Complete context for every customer, every time.', benefits: ['Full customer history', 'Seamless handoffs', 'Ticket creation from chats'] },
    ],
  },
  testimonial: {
    quote: 'We had 45 sales reps and zero visibility into WhatsApp conversations. Now every chat automatically appears in HubSpot. Our managers finally see what\'s really happening in the pipeline. Setup took 30 minutes.',
    author: 'Rahul Sharma',
    title: 'VP Sales',
    company: 'Apollo Hospitals',
  },
  faq: {
    badge: 'Common Questions',
    headline: 'What you need to know',
    items: [
      { question: 'Does this work with personal WhatsApp, or do we need Business API?', answer: 'Eazybe works with ALL versions: personal WhatsApp, WhatsApp Business App, and WhatsApp Business API. Unlike competitors who force you into expensive API migrations, we work with whatever WhatsApp you already use. Your team can start today.' },
      { question: 'Can managers see all conversations across the team?', answer: 'Yes. Team admins have full visibility into all conversations synced by their team members. No more "I followed up" claims without proof. See response times, conversation history, and engagement patterns across your entire sales organization.' },
      { question: 'What happens to conversations when a rep leaves?', answer: 'Customer conversations stay in HubSpot forever. When reps leave or territories change, the complete chat history remains attached to contacts and deals. Your customer relationships belong to your company, not personal phones.' },
      { question: 'How is this different from HubSpot\'s native WhatsApp integration?', answer: 'HubSpot\'s native integration only works with WhatsApp Business API and limits you to API-approved message templates. Eazybe works with personal WhatsApp, preserves natural conversations, and gives you full chat history—not just templated messages.' },
      { question: 'Is our data secure?', answer: 'SOC 2 Type II certified, GDPR compliant, and an official Meta Business Partner. Messages are encrypted in transit and at rest. We\'ve passed security reviews for enterprise customers in healthcare, finance, and government.' },
      { question: 'How quickly can we be up and running?', answer: 'Most teams are live within 30 minutes. Install the Chrome extension, OAuth into HubSpot, open WhatsApp Web—done. No developer resources, no IT tickets, no waiting on integrations.' },
    ],
  },
  cta: {
    headline: 'Stop flying blind on',
    headlineHighlight: 'WhatsApp deals',
    description: 'Your competitors are closing deals on WhatsApp while your CRM shows nothing. Join 30,000+ companies who see the complete picture.',
    primaryCta: { label: 'Start Free Trial', url: '/signup?crm=hubspot' },
    secondaryCta: { label: 'See a Demo', url: '/demo?crm=hubspot' },
    footnote: '14-day free trial • No credit card • Live in 30 minutes',
  },
}

const salesforcePageEN = {
  _type: 'productPage',
  _id: 'productPage-salesforce-whatsapp-integration-en',
  language: 'en',
  title: 'Salesforce WhatsApp Integration',
  slug: { _type: 'slug', current: 'salesforce-whatsapp-integration' },
  category: 'crm-integration',
  crmName: 'Salesforce',
  crmSlug: 'salesforce',
  crmColor: '#00A1E0',
  seo: {
    metaTitle: 'Salesforce WhatsApp Integration | Eazybe',
    metaDescription: 'Your Salesforce org has a massive data gap: WhatsApp conversations. Eazybe brings the ground truth into your Activity Timeline—no managed packages required.',
  },
  hero: {
    badge: 'See What Salesforce Can\'t See',
    headline: 'Your Salesforce org is missing',
    headlineHighlight: 'WhatsApp conversations',
    description: 'Your Activities show calls, emails, and meetings—but not the 80% of customer conversations happening on WhatsApp. Reps manually log summaries (when they remember). Managers make decisions on incomplete data. Eazybe captures every WhatsApp message and logs it to Salesforce automatically.',
    primaryCta: { label: 'Start Free Trial', url: '/signup?crm=salesforce' },
    secondaryCta: { label: 'See How It Works', url: '/demo?crm=salesforce' },
    stats: [
      { value: '5,000+', label: 'Enterprise teams' },
      { value: '85%', label: 'Less manual logging' },
      { value: '100%', label: 'Activity visibility' },
    ],
  },
  benefits: {
    badge: 'The Missing Data',
    headline: 'Every conversation your Salesforce org doesn\'t see—until now.',
    items: [
      { icon: 'sync', title: 'Automatic Activity Logging', description: 'Every WhatsApp message becomes an Activity on Contacts, Leads, Accounts, and Opportunities. No manual logging. No rep "summaries." The actual conversation, captured automatically.' },
      { icon: 'crm-view', title: 'Customer 360 Inside WhatsApp', description: 'Your reps see the full Salesforce record while chatting: Opportunity stage, Account hierarchy, recent Activities, open Cases. No more tab switching or context loss.' },
      { icon: 'workflow', title: 'Works With Your WhatsApp', description: 'Unlike solutions requiring WhatsApp Business API migration, Eazybe works with personal WhatsApp accounts. Your field reps use what they already have. No expensive rollout needed.' },
      { icon: 'team', title: 'Manager Visibility', description: 'See every WhatsApp conversation across your entire org. Territory assignments, queue routing, workload visibility—all synced with your existing Salesforce hierarchy.' },
      { icon: 'analytics', title: 'Pipeline Reality', description: 'Your Opportunities show one thing, but conversations tell the real story. See which deals are actually moving and which are stalled—based on real engagement data.' },
      { icon: 'security', title: 'Enterprise Security', description: 'SOC 2 Type II certified, GDPR compliant, Shield-compatible. Platform Encryption supported. No managed packages touching your org.' },
    ],
  },
  features: [
    {
      badge: 'The Salesforce Blindspot',
      headline: 'Your Activity Timeline shows calls and emails. But not WhatsApp.',
      description: 'Your reps close deals on WhatsApp, but Salesforce shows nothing. The Activity Timeline—designed to show every customer touchpoint—has a massive gap. Eazybe fills it. Every WhatsApp message, automatically logged to the right Contact, Lead, Account, or Opportunity.',
      points: ['Automatic Activity creation on all standard objects', 'Images, voice notes, and documents captured', 'Custom object mapping for complex data models', 'Works with Sandbox and Production orgs'],
      cta: { label: 'See it work', url: '#demo' },
      image: 'sync-visual',
      alignRight: false,
    },
    {
      badge: 'Zero Context Switching',
      headline: 'Full Salesforce Customer 360, inside WhatsApp.',
      description: 'Your reps shouldn\'t need to switch to Salesforce mid-conversation to check Opportunity stage or Account details. With Eazybe, the complete Salesforce sidebar lives inside WhatsApp Web. Update records, create Tasks, advance Opportunity stages—all without leaving the conversation.',
      points: ['Complete record view: Opportunities, Accounts, Contacts', 'Update fields and advance stages mid-chat', 'Create Tasks and log Activities instantly', 'Full Activity history for context'],
      cta: { label: 'Explore', url: '#demo' },
      image: 'mini-crm-visual',
      alignRight: true,
    },
    {
      badge: 'No API Migration Required',
      headline: 'Works with personal WhatsApp. No expensive rollout.',
      description: 'Other integrations require WhatsApp Business API—a costly migration that takes months and limits who can use it. Eazybe is a Chrome extension. It works with the WhatsApp your reps already use: personal accounts, Business App, or API. Install today, start capturing conversations today.',
      points: ['Chrome extension installs in 60 seconds', 'Works with personal WhatsApp accounts', 'No managed packages in your org', 'No API migration or technical setup'],
      cta: { label: 'Install free', url: '#install' },
      image: 'workflow-visual',
      alignRight: false,
    },
  ],
  howItWorks: {
    badge: 'No Managed Packages',
    headline: 'No Apex. No admin setup. No IT tickets.',
    description: 'Connect to Salesforce with OAuth. No managed packages touch your org. No developer resources needed.',
    steps: [
      { number: '01', title: 'Install Extension', description: 'Chrome extension installs in 60 seconds.' },
      { number: '02', title: 'OAuth to Salesforce', description: 'Connect to Production or Sandbox. No admin setup.' },
      { number: '03', title: 'Open WhatsApp Web', description: 'The Salesforce sidebar appears automatically.' },
      { number: '04', title: 'Activities Start Logging', description: 'Every WhatsApp message becomes a Salesforce Activity.' },
    ],
  },
  useCases: {
    badge: 'Who It\'s For',
    headline: 'Built for teams whose deals happen on WhatsApp',
    items: [
      { icon: 'sales', title: 'Sales Teams', description: 'Your Opportunities show stage changes, but not the conversations driving them. Get full WhatsApp chat history on every Opportunity. See who\'s engaged, who\'s ghosting, and who needs follow-up—from actual message data.', benefits: ['Opportunity-linked conversations', 'Real engagement data', 'Response time visibility'] },
      { icon: 'support', title: 'Sales Ops & RevOps', description: 'Pipeline reviews based on CRM data miss the ground truth. See what\'s actually happening in customer conversations. Forecast accuracy improves when you see real engagement, not just logged Activities.', benefits: ['Pipeline reality check', 'Forecasting accuracy', 'Rep accountability'] },
      { icon: 'marketing', title: 'Customer Success', description: 'When handoffs happen, context gets lost. Full WhatsApp history stays attached to Accounts and Contacts. New CSMs see every conversation, not just whatever the rep remembered to log.', benefits: ['Complete conversation history', 'Seamless handoffs', 'Account context'] },
    ],
  },
  testimonial: {
    quote: 'Our Salesforce Activities showed emails and calls, but 70% of customer conversations happened on WhatsApp. Now we see everything. 200 users were live in 2 hours with no managed packages or admin work.',
    author: 'David Chen',
    title: 'VP Sales Ops',
    company: 'TechCorp Enterprise',
  },
  faq: {
    badge: 'Common Questions',
    headline: 'What you need to know',
    items: [
      { question: 'Does this require WhatsApp Business API?', answer: 'No. Eazybe works with personal WhatsApp, WhatsApp Business App, AND WhatsApp Business API. Unlike other integrations that require expensive API migrations, we work with whatever WhatsApp your team already uses.' },
      { question: 'Are managed packages installed in my org?', answer: 'No. Eazybe connects via OAuth and logs Activities through standard APIs. Nothing is installed in your Salesforce org. No Apex, no Lightning components, no managed packages.' },
      { question: 'What happens to conversations when reps leave?', answer: 'All WhatsApp conversations remain logged as Activities in Salesforce. They stay attached to Contacts, Leads, Accounts, and Opportunities forever. Your customer relationships belong to your company, not personal phones.' },
      { question: 'Is this Shield-compatible?', answer: 'Yes. Eazybe supports Platform Encryption and is compliant with Salesforce Shield requirements. SOC 2 Type II certified, GDPR compliant.' },
      { question: 'Can I map to custom objects?', answer: 'Yes. Map WhatsApp conversations to any standard or custom object in your Salesforce org. Territory routing and assignment rules are supported.' },
      { question: 'How does deployment work for large teams?', answer: 'Chrome extension deployment via your MDM or Google Workspace admin console. No per-user manual setup. Enterprise support included for teams over 50 users.' },
    ],
  },
  cta: {
    headline: 'Stop missing deals that close on',
    headlineHighlight: 'WhatsApp',
    description: 'Your Salesforce org has a massive data gap. Join 5,000+ enterprise teams who closed it with Eazybe.',
    primaryCta: { label: 'Start Free Trial', url: '/signup?crm=salesforce' },
    secondaryCta: { label: 'See a Demo', url: '/demo?crm=salesforce' },
    footnote: '14-day free trial • No credit card • No managed packages',
  },
}

const zohoPageEN = {
  _type: 'productPage',
  _id: 'productPage-zoho-whatsapp-integration-en',
  language: 'en',
  title: 'Zoho CRM WhatsApp Integration',
  slug: { _type: 'slug', current: 'zoho-whatsapp-integration' },
  category: 'crm-integration',
  crmName: 'Zoho CRM',
  crmSlug: 'zoho',
  crmColor: '#E42527',
  seo: {
    metaTitle: 'Zoho CRM WhatsApp Integration | Eazybe',
    metaDescription: 'Your Zoho CRM is blind to WhatsApp conversations. Eazybe captures every message and syncs it to your Lead and Contact timelines automatically.',
  },
  hero: {
    badge: 'See What Zoho CRM Can\'t See',
    headline: 'Your Zoho timeline is missing',
    headlineHighlight: 'WhatsApp conversations',
    description: 'Your reps close deals on WhatsApp while Zoho shows nothing. Leads get "I\'ll follow up" promises but no one can verify it happened. Follow-ups slip through the cracks. Managers can\'t coach what they can\'t see. Eazybe captures every WhatsApp message and puts it on your Zoho timeline.',
    primaryCta: { label: 'Start Free Trial', url: '/signup?crm=zoho' },
    secondaryCta: { label: 'See How It Works', url: '/demo?crm=zoho' },
    stats: [
      { value: '10,000+', label: 'Zoho teams' },
      { value: '87%', label: 'Less manual data entry' },
      { value: '100%', label: 'Conversation visibility' },
    ],
  },
  benefits: {
    badge: 'The Ground Truth',
    headline: 'Zoho shows what reps log. We show what actually happened.',
    items: [
      { icon: 'sync', title: 'Automatic Timeline Sync', description: 'Every WhatsApp message appears on Lead and Contact timelines automatically. Voice notes, images, documents—everything captured without reps logging anything manually.' },
      { icon: 'crm-view', title: 'Zoho CRM Inside WhatsApp', description: 'See Lead scores, Deal stages, and Contact history while chatting. Update records without switching tabs. Your reps stay in WhatsApp and still update Zoho.' },
      { icon: 'workflow', title: 'Works With Your WhatsApp', description: 'Unlike Zoho\'s native WhatsApp integration that requires API setup, Eazybe works with personal WhatsApp accounts. No expensive migration. Start capturing conversations today.' },
      { icon: 'team', title: 'Manager Visibility', description: 'See every WhatsApp conversation across your entire team. Know which reps are responsive and which leads are going cold. Real data, not rep promises.' },
      { icon: 'analytics', title: 'Lead Engagement Reality', description: 'Your Lead scores show one thing, but conversations tell the real story. See which leads are actually engaged based on real message patterns, not just form fills.' },
      { icon: 'security', title: 'Conversations Stay Forever', description: 'When reps leave, WhatsApp history stays on Zoho records. Customer relationships belong to your company. SOC 2 certified, GDPR compliant, all Zoho data centers supported.' },
    ],
  },
  features: [
    {
      badge: 'The Zoho Blindspot',
      headline: 'Your timeline shows emails. But not WhatsApp.',
      description: 'Zoho CRM captures emails, calls, meetings—but your highest-volume communication channel shows nothing. Your reps close deals on WhatsApp while Zoho timelines stay empty. Eazybe fills this gap. Every WhatsApp message, automatically synced to the right Lead or Contact.',
      points: ['Every message synced to Lead & Contact timelines', 'Images, voice notes, PDFs captured automatically', 'Complete conversation history preserved', 'Works with all Zoho data centers: US, EU, IN, AU, JP'],
      cta: { label: 'See it work', url: '#demo' },
      image: 'sync-visual',
      alignRight: false,
    },
    {
      badge: 'Zero Tab Switching',
      headline: 'Your entire Zoho database, inside WhatsApp.',
      description: 'Reps hate switching between WhatsApp and Zoho CRM. Data entry gets skipped. Context gets lost. With Eazybe, your full Zoho sidebar lives inside WhatsApp Web. See Lead scores, update Deal stages, add notes—all without leaving the conversation.',
      points: ['View Lead scores and Deal stages instantly', 'Update fields and progress deals mid-chat', 'Add notes and tasks in one click', 'Full timeline history at your fingertips'],
      cta: { label: 'Explore', url: '#demo' },
      image: 'mini-crm-visual',
      alignRight: true,
    },
    {
      badge: 'No API Required',
      headline: 'Works with personal WhatsApp. No setup hassle.',
      description: 'Zoho\'s native WhatsApp channel requires Business API setup—expensive, technical, and limited to approved templates. Eazybe is a Chrome extension. It works with the WhatsApp your team already uses: personal accounts, Business App, or API. Install and start syncing in minutes.',
      points: ['Chrome extension installs in 60 seconds', 'Works with personal WhatsApp accounts', 'No API setup or approval needed', 'Natural conversations, not just templates'],
      cta: { label: 'Install free', url: '#install' },
      image: 'workflow-visual',
      alignRight: false,
    },
  ],
  howItWorks: {
    badge: 'Live in 5 Minutes',
    headline: 'No developers. No API setup. No waiting.',
    description: 'Install the extension, connect Zoho, and start syncing. Works with all Zoho data centers.',
    steps: [
      { number: '01', title: 'Install Extension', description: 'Chrome extension installs in 60 seconds.' },
      { number: '02', title: 'Connect Zoho CRM', description: 'OAuth login—works with US, EU, IN, AU, JP data centers.' },
      { number: '03', title: 'Open WhatsApp Web', description: 'The Zoho sidebar appears automatically.' },
      { number: '04', title: 'Start Capturing', description: 'Every message flows to Zoho timelines. You\'re live.' },
    ],
  },
  useCases: {
    badge: 'Who It\'s For',
    headline: 'Built for Zoho teams where deals happen on WhatsApp',
    items: [
      { icon: 'sales', title: 'Sales Teams', description: 'Your Leads have scores but no conversation history. Your Deals show stages but not the discussions driving them. Get full WhatsApp chat history on every record. See who\'s engaged and who\'s ghosting—without asking reps to log anything.', benefits: ['Full conversation visibility', 'Lead engagement reality', 'Response time tracking'] },
      { icon: 'support', title: 'Sales Managers', description: 'Stop asking reps "did you follow up?" Start seeing every conversation yourself. Coach based on real interactions. Identify top performers and struggling reps from actual engagement data, not self-reported activity.', benefits: ['Team-wide visibility', 'Performance monitoring', 'Pipeline reality'] },
      { icon: 'marketing', title: 'Zoho Desk & Success', description: 'When customers escalate, you\'ll see every previous conversation. When reps hand off accounts, full history stays attached. No more "I wasn\'t aware of that conversation" moments.', benefits: ['Complete customer history', 'Seamless handoffs', 'Ticket context'] },
    ],
  },
  testimonial: {
    quote: 'Our Zoho timelines were empty for WhatsApp leads—our biggest channel. Now every conversation syncs automatically. Setup took 10 minutes. The support team actually knows Zoho inside out.',
    author: 'Priya Patel',
    title: 'Director of Sales',
    company: 'University Living',
  },
  faq: {
    badge: 'Common Questions',
    headline: 'What you need to know',
    items: [
      { question: 'Does this work with personal WhatsApp, or do we need Business API?', answer: 'Eazybe works with ALL versions: personal WhatsApp, WhatsApp Business App, and WhatsApp Business API. Unlike Zoho\'s native integration that requires API setup, we work with whatever WhatsApp your team already uses.' },
      { question: 'Which Zoho data centers are supported?', answer: 'All of them: US, EU, IN, AU, and JP. Your data stays in your region. Compliance with local data residency requirements maintained.' },
      { question: 'Can managers see all conversations?', answer: 'Yes. Team admins have visibility into all conversations synced by team members. See response times, conversation history, and engagement patterns across your entire sales organization.' },
      { question: 'What happens to conversations when reps leave?', answer: 'All WhatsApp conversations stay on Zoho Lead and Contact records forever. When reps leave or territories change, the complete chat history remains attached. Your customer relationships belong to your company.' },
      { question: 'How is this different from Zoho\'s WhatsApp integration?', answer: 'Zoho\'s native WhatsApp channel requires Business API setup, approval, and limits you to template messages. Eazybe works with personal WhatsApp, captures natural conversations, and syncs full chat history—not just approved templates.' },
      { question: 'Does it work with Zoho One?', answer: 'Yes. Eazybe works with Zoho One, including Zoho CRM, Zoho Desk, and integrates with Zoho Flow for automation. All Zoho CRM editions supported: Free through Ultimate.' },
    ],
  },
  cta: {
    headline: 'Stop flying blind on',
    headlineHighlight: 'WhatsApp leads',
    description: 'Your competitors see every customer conversation. You should too. Join 10,000+ Zoho teams who closed the visibility gap.',
    primaryCta: { label: 'Start Free Trial', url: '/signup?crm=zoho' },
    secondaryCta: { label: 'See a Demo', url: '/demo?crm=zoho' },
    footnote: '14-day free trial • No credit card • All data centers supported',
  },
}

async function createProductContent() {
  console.log('Creating product page content in Sanity...')

  try {
    const hubspotResult = await client.createOrReplace(hubspotPageEN)
    console.log('Created HubSpot integration page (EN):', hubspotResult._id)

    const salesforceResult = await client.createOrReplace(salesforcePageEN)
    console.log('Created Salesforce integration page (EN):', salesforceResult._id)

    const zohoResult = await client.createOrReplace(zohoPageEN)
    console.log('Created Zoho CRM integration page (EN):', zohoResult._id)

    console.log('\nProduct pages created successfully!')
    console.log('You can view them at:')
    console.log('  - /product/hubspot-whatsapp-integration')
    console.log('  - /product/salesforce-whatsapp-integration')
    console.log('  - /product/zoho-whatsapp-integration')
  } catch (error) {
    console.error('Error creating product content:', error)
    throw error
  }
}

createProductContent()
