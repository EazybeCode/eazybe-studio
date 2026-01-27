import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {documentInternationalization} from '@sanity/document-internationalization'
import {schemaTypes} from './schemaTypes'
import {languages} from './config/languages'

// Document types that support internationalization
const i18nDocumentTypes = [
  'landingPage',
  'pricingPage',
  'productPage',
  'categoryIndexPage',
  'blogPost',
  'blogIndex',
  'legalPage',
  'aboutPage',
  'contactPage',
]

export default defineConfig({
  name: 'default',
  title: 'Eazybe',

  projectId: '5awzi0t4',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // ===== MARKETING PAGES =====
            S.listItem()
              .title('🏠 Marketing Pages')
              .child(
                S.list()
                  .title('Marketing Pages')
                  .items([
                    S.listItem()
                      .title('Landing Page')
                      .child(
                        S.documentTypeList('landingPage')
                          .title('Landing Page')
                          .filter('_type == "landingPage"')
                      ),
                    S.listItem()
                      .title('Pricing')
                      .child(
                        S.documentTypeList('pricingPage')
                          .title('Pricing Page')
                          .filter('_type == "pricingPage"')
                      ),
                    S.listItem()
                      .title('About')
                      .child(
                        S.documentTypeList('aboutPage')
                          .title('About Page')
                          .filter('_type == "aboutPage"')
                      ),
                    S.listItem()
                      .title('Contact')
                      .child(
                        S.documentTypeList('contactPage')
                          .title('Contact Page')
                          .filter('_type == "contactPage"')
                      ),
                  ])
              ),

            S.divider(),

            // ===== PRODUCTS =====
            S.listItem()
              .title('⚡ Product Features')
              .child(
                S.list()
                  .title('Product Features')
                  .items([
                    S.listItem()
                      .title('📄 Features Index Page')
                      .child(
                        S.documentTypeList('categoryIndexPage')
                          .title('Features Index')
                          .filter('_type == "categoryIndexPage" && category == "feature"')
                      ),
                    S.divider(),
                    S.listItem()
                      .title('All Product Pages')
                      .child(
                        S.documentTypeList('productPage')
                          .title('All Product Pages')
                          .filter('_type == "productPage" && category == "feature"')
                      ),
                    S.divider(),
                    // Core Features
                    S.listItem()
                      .title('Cloud Backup')
                      .child(
                        S.documentTypeList('productPage')
                          .title('Cloud Backup')
                          .filter('_type == "productPage" && slug.current == "cloud-backup"')
                      ),
                    S.listItem()
                      .title('Team Inbox')
                      .child(
                        S.documentTypeList('productPage')
                          .title('Team Inbox')
                          .filter('_type == "productPage" && slug.current == "team-inbox"')
                      ),
                    S.listItem()
                      .title('WhatsApp CRM')
                      .child(
                        S.documentTypeList('productPage')
                          .title('WhatsApp CRM (Labels & Funnels)')
                          .filter('_type == "productPage" && slug.current == "whatsapp-crm"')
                      ),
                    S.listItem()
                      .title('Quick Reply')
                      .child(
                        S.documentTypeList('productPage')
                          .title('Quick Reply')
                          .filter('_type == "productPage" && slug.current == "quick-reply"')
                      ),
                    S.listItem()
                      .title('Message Scheduler')
                      .child(
                        S.documentTypeList('productPage')
                          .title('Message Scheduler')
                          .filter('_type == "productPage" && slug.current == "scheduler"')
                      ),
                    S.divider(),
                    // Intelligence Features
                    S.listItem()
                      .title('Revenue Inbox')
                      .child(
                        S.documentTypeList('productPage')
                          .title('Revenue Inbox')
                          .filter('_type == "productPage" && slug.current == "revenue-inbox"')
                      ),
                    S.listItem()
                      .title('Rep Radar')
                      .child(
                        S.documentTypeList('productPage')
                          .title('Rep Radar')
                          .filter('_type == "productPage" && slug.current == "rep-radar"')
                      ),
                    S.listItem()
                      .title('WhatsApp Copilot')
                      .child(
                        S.documentTypeList('productPage')
                          .title('WhatsApp Copilot')
                          .filter('_type == "productPage" && slug.current == "whatsapp-copilot"')
                      ),
                  ])
              ),

            // ===== CRM INTEGRATIONS =====
            S.listItem()
              .title('🔗 CRM Integrations')
              .child(
                S.list()
                  .title('CRM Integrations')
                  .items([
                    S.listItem()
                      .title('📄 Integrations Index Page')
                      .child(
                        S.documentTypeList('categoryIndexPage')
                          .title('Integrations Index')
                          .filter('_type == "categoryIndexPage" && category == "crm-integration"')
                      ),
                    S.divider(),
                    S.listItem()
                      .title('All CRM Integrations')
                      .child(
                        S.documentTypeList('productPage')
                          .title('All CRM Integrations')
                          .filter('_type == "productPage" && category == "crm-integration"')
                      ),
                    S.divider(),
                    S.listItem()
                      .title('HubSpot')
                      .child(
                        S.documentTypeList('productPage')
                          .title('HubSpot Integration')
                          .filter('_type == "productPage" && crmSlug == "hubspot"')
                      ),
                    S.listItem()
                      .title('Salesforce')
                      .child(
                        S.documentTypeList('productPage')
                          .title('Salesforce Integration')
                          .filter('_type == "productPage" && crmSlug == "salesforce"')
                      ),
                    S.listItem()
                      .title('Zoho CRM')
                      .child(
                        S.documentTypeList('productPage')
                          .title('Zoho Integration')
                          .filter('_type == "productPage" && crmSlug == "zoho"')
                      ),
                    S.listItem()
                      .title('Bitrix24')
                      .child(
                        S.documentTypeList('productPage')
                          .title('Bitrix24 Integration')
                          .filter('_type == "productPage" && crmSlug == "bitrix24"')
                      ),
                    S.listItem()
                      .title('LeadSquared')
                      .child(
                        S.documentTypeList('productPage')
                          .title('LeadSquared Integration')
                          .filter('_type == "productPage" && crmSlug == "leadsquared"')
                      ),
                    S.listItem()
                      .title('Freshdesk')
                      .child(
                        S.documentTypeList('productPage')
                          .title('Freshdesk Integration')
                          .filter('_type == "productPage" && crmSlug == "freshdesk"')
                      ),
                    S.listItem()
                      .title('Webhooks')
                      .child(
                        S.documentTypeList('productPage')
                          .title('Webhooks Integration')
                          .filter('_type == "productPage" && crmSlug == "webhooks"')
                      ),
                    S.listItem()
                      .title('Google Sheets')
                      .child(
                        S.documentTypeList('productPage')
                          .title('Google Sheets Integration')
                          .filter('_type == "productPage" && crmSlug == "google-sheets"')
                      ),
                    S.listItem()
                      .title('Google Calendar')
                      .child(
                        S.documentTypeList('productPage')
                          .title('Google Calendar Integration')
                          .filter('_type == "productPage" && crmSlug == "google-calendar"')
                      ),
                  ])
              ),

            // ===== WHATSAPP API =====
            S.listItem()
              .title('📱 WhatsApp API')
              .child(
                S.list()
                  .title('WhatsApp API Features')
                  .items([
                    S.listItem()
                      .title('📄 WhatsApp API Index Page')
                      .child(
                        S.documentTypeList('categoryIndexPage')
                          .title('WhatsApp API Index')
                          .filter('_type == "categoryIndexPage" && category == "whatsapp-api"')
                      ),
                    S.divider(),
                    S.listItem()
                      .title('All WhatsApp API Pages')
                      .child(
                        S.documentTypeList('productPage')
                          .title('All WhatsApp API Pages')
                          .filter('_type == "productPage" && category == "whatsapp-api"')
                      ),
                    S.divider(),
                    S.listItem()
                      .title('Coexistence')
                      .child(
                        S.documentTypeList('productPage')
                          .title('Coexistence')
                          .filter('_type == "productPage" && slug.current == "coexistence"')
                      ),
                    S.listItem()
                      .title('Templates')
                      .child(
                        S.documentTypeList('productPage')
                          .title('WhatsApp Templates')
                          .filter('_type == "productPage" && slug.current match "template*"')
                      ),
                    S.listItem()
                      .title('Broadcast')
                      .child(
                        S.documentTypeList('productPage')
                          .title('Broadcast')
                          .filter('_type == "productPage" && slug.current match "broadcast*"')
                      ),
                  ])
              ),

            S.divider(),

            // ===== BLOG =====
            S.listItem()
              .title('📝 Blog')
              .child(
                S.list()
                  .title('Blog')
                  .items([
                    S.listItem()
                      .title('Blog Index Page')
                      .child(
                        S.documentTypeList('blogIndex')
                          .title('Blog Index')
                          .filter('_type == "blogIndex"')
                      ),
                    S.listItem()
                      .title('All Posts')
                      .child(
                        S.documentTypeList('blogPost')
                          .title('Blog Posts')
                          .filter('_type == "blogPost"')
                          .defaultOrdering([{field: 'publishedAt', direction: 'desc'}])
                      ),
                    S.divider(),
                    S.listItem()
                      .title('By Category: Product Updates')
                      .child(
                        S.documentTypeList('blogPost')
                          .title('Product Updates')
                          .filter('_type == "blogPost" && "product-updates" in categories')
                      ),
                    S.listItem()
                      .title('By Category: WhatsApp Tips')
                      .child(
                        S.documentTypeList('blogPost')
                          .title('WhatsApp Tips')
                          .filter('_type == "blogPost" && "whatsapp-tips" in categories')
                      ),
                    S.listItem()
                      .title('By Category: CRM Integration')
                      .child(
                        S.documentTypeList('blogPost')
                          .title('CRM Integration')
                          .filter('_type == "blogPost" && "crm-integration" in categories')
                      ),
                    S.listItem()
                      .title('By Category: Case Studies')
                      .child(
                        S.documentTypeList('blogPost')
                          .title('Case Studies')
                          .filter('_type == "blogPost" && "case-studies" in categories')
                      ),
                    S.divider(),
                    S.listItem()
                      .title('Authors')
                      .child(
                        S.documentTypeList('author')
                          .title('Authors')
                      ),
                  ])
              ),

            // ===== LEGAL =====
            S.listItem()
              .title('⚖️ Legal Pages')
              .child(
                S.list()
                  .title('Legal Pages')
                  .items([
                    S.listItem()
                      .title('All Legal Pages')
                      .child(
                        S.documentTypeList('legalPage')
                          .title('All Legal Pages')
                          .filter('_type == "legalPage"')
                      ),
                    S.divider(),
                    S.listItem()
                      .title('Privacy Policy')
                      .child(
                        S.documentTypeList('legalPage')
                          .title('Privacy Policy')
                          .filter('_type == "legalPage" && pageType == "privacy"')
                      ),
                    S.listItem()
                      .title('Terms of Service')
                      .child(
                        S.documentTypeList('legalPage')
                          .title('Terms of Service')
                          .filter('_type == "legalPage" && pageType == "terms"')
                      ),
                    S.listItem()
                      .title('Master Service Agreement')
                      .child(
                        S.documentTypeList('legalPage')
                          .title('MSA')
                          .filter('_type == "legalPage" && pageType == "msa"')
                      ),
                    S.listItem()
                      .title('Cookie Policy')
                      .child(
                        S.documentTypeList('legalPage')
                          .title('Cookie Policy')
                          .filter('_type == "legalPage" && pageType == "cookies"')
                      ),
                  ])
              ),

            S.divider(),

            // ===== SITE SETTINGS =====
            S.listItem()
              .title('⚙️ Site Settings')
              .child(
                S.list()
                  .title('Site Settings')
                  .items([
                    S.listItem()
                      .title('Footer')
                      .child(
                        S.document()
                          .schemaType('footer')
                          .documentId('footer')
                      ),
                    S.listItem()
                      .title('Shared Sections')
                      .child(
                        S.document()
                          .schemaType('sharedSections')
                          .documentId('sharedSections')
                          .title('Shared Sections (Security & CTA)')
                      ),
                  ])
              ),
          ]),
    }),
    documentInternationalization({
      supportedLanguages: languages.map((lang) => ({
        id: lang.id,
        title: lang.title,
      })),
      schemaTypes: i18nDocumentTypes,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
