import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '5awzi0t4',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
})

// Spanish footer
const footerEs = {
  _id: 'footer-es',
  _type: 'footer',
  language: 'es',
  companyName: 'Eazybe',
  tagline: 'La Plataforma de Ventas por WhatsApp para equipos de CRM.',
  socialLinks: [
    { _key: 'linkedin', _type: 'socialLink', platform: 'linkedin', url: '#' },
    { _key: 'twitter', _type: 'socialLink', platform: 'twitter', url: '#' },
    { _key: 'youtube', _type: 'socialLink', platform: 'youtube', url: '#' },
  ],
  badges: ['GDPR Ready', 'Encrypted'],
  columns: [
    {
      _key: 'platform',
      _type: 'footerColumn',
      title: 'Plataforma',
      links: [
        { _key: 'p1', _type: 'footerLink', label: 'Captura de Conversaciones', url: '#' },
        { _key: 'p2', _type: 'footerLink', label: 'Automatización de Flujos', url: '#' },
        { _key: 'p3', _type: 'footerLink', label: 'Bandeja de Ingresos', url: '#' },
        { _key: 'p4', _type: 'footerLink', label: 'Radar de Representantes', url: '#' },
        { _key: 'p5', _type: 'footerLink', label: 'Respaldo en la Nube', url: '#' },
        { _key: 'p6', _type: 'footerLink', label: 'Mini Vista CRM', url: '#' },
        { _key: 'p7', _type: 'footerLink', label: 'Bandeja de Equipo', url: '#' },
        { _key: 'p8', _type: 'footerLink', label: 'WhatsApp Copilot', url: '#' },
      ],
    },
    {
      _key: 'integrations',
      _type: 'footerColumn',
      title: 'Integraciones',
      links: [
        { _key: 'i1', _type: 'footerLink', label: 'HubSpot', url: '#' },
        { _key: 'i2', _type: 'footerLink', label: 'Salesforce', url: '#' },
        { _key: 'i3', _type: 'footerLink', label: 'Zoho CRM', url: '#' },
        { _key: 'i4', _type: 'footerLink', label: 'Bitrix24', url: '#' },
        { _key: 'i5', _type: 'footerLink', label: 'LeadSquared', url: '#' },
        { _key: 'i6', _type: 'footerLink', label: 'Freshsales', url: '#' },
        { _key: 'i7', _type: 'footerLink', label: 'Pipedrive', url: '#' },
        { _key: 'i8', _type: 'footerLink', label: 'Google Sheets', url: '#' },
      ],
    },
    {
      _key: 'resources',
      _type: 'footerColumn',
      title: 'Recursos',
      links: [
        { _key: 'r1', _type: 'footerLink', label: 'Centro de Ayuda', url: '#' },
        { _key: 'r2', _type: 'footerLink', label: 'Documentación', url: '#' },
        { _key: 'r3', _type: 'footerLink', label: 'Referencia API', url: '#' },
        { _key: 'r4', _type: 'footerLink', label: 'Blog', url: '#' },
        { _key: 'r5', _type: 'footerLink', label: 'Casos de Éxito', url: '#' },
        { _key: 'r6', _type: 'footerLink', label: 'Webinars', url: '#' },
      ],
    },
    {
      _key: 'company',
      _type: 'footerColumn',
      title: 'Empresa',
      links: [
        { _key: 'c1', _type: 'footerLink', label: 'Sobre Nosotros', url: '#' },
        { _key: 'c2', _type: 'footerLink', label: 'Carreras', url: '#' },
        { _key: 'c3', _type: 'footerLink', label: 'Contacto', url: '#' },
        { _key: 'c4', _type: 'footerLink', label: 'Socios', url: '#' },
        { _key: 'c5', _type: 'footerLink', label: 'Seguridad', url: '#' },
        { _key: 'c6', _type: 'footerLink', label: 'Estado', url: '#' },
      ],
    },
  ],
  copyright: '© 2025 Eazybe, Inc. Todos los derechos reservados. 8, The Green STE B, Dover Delaware - 19901 | support@eazybe.com',
  legalLinks: [
    { _key: 'l1', _type: 'footerLink', label: 'Política de Privacidad', url: '#' },
    { _key: 'l2', _type: 'footerLink', label: 'Términos de Servicio', url: '#' },
    { _key: 'l3', _type: 'footerLink', label: 'Política de Cookies', url: '#' },
    { _key: 'l4', _type: 'footerLink', label: 'DPA', url: '#' },
  ],
}

// Portuguese footer
const footerPt = {
  _id: 'footer-pt',
  _type: 'footer',
  language: 'pt',
  companyName: 'Eazybe',
  tagline: 'A Plataforma de Vendas por WhatsApp para equipes de CRM.',
  socialLinks: [
    { _key: 'linkedin', _type: 'socialLink', platform: 'linkedin', url: '#' },
    { _key: 'twitter', _type: 'socialLink', platform: 'twitter', url: '#' },
    { _key: 'youtube', _type: 'socialLink', platform: 'youtube', url: '#' },
  ],
  badges: ['GDPR Ready', 'Encrypted'],
  columns: [
    {
      _key: 'platform',
      _type: 'footerColumn',
      title: 'Plataforma',
      links: [
        { _key: 'p1', _type: 'footerLink', label: 'Captura de Conversas', url: '#' },
        { _key: 'p2', _type: 'footerLink', label: 'Automação de Fluxos', url: '#' },
        { _key: 'p3', _type: 'footerLink', label: 'Caixa de Receita', url: '#' },
        { _key: 'p4', _type: 'footerLink', label: 'Radar de Representantes', url: '#' },
        { _key: 'p5', _type: 'footerLink', label: 'Backup na Nuvem', url: '#' },
        { _key: 'p6', _type: 'footerLink', label: 'Mini Visão CRM', url: '#' },
        { _key: 'p7', _type: 'footerLink', label: 'Caixa de Equipe', url: '#' },
        { _key: 'p8', _type: 'footerLink', label: 'WhatsApp Copilot', url: '#' },
      ],
    },
    {
      _key: 'integrations',
      _type: 'footerColumn',
      title: 'Integrações',
      links: [
        { _key: 'i1', _type: 'footerLink', label: 'HubSpot', url: '#' },
        { _key: 'i2', _type: 'footerLink', label: 'Salesforce', url: '#' },
        { _key: 'i3', _type: 'footerLink', label: 'Zoho CRM', url: '#' },
        { _key: 'i4', _type: 'footerLink', label: 'Bitrix24', url: '#' },
        { _key: 'i5', _type: 'footerLink', label: 'LeadSquared', url: '#' },
        { _key: 'i6', _type: 'footerLink', label: 'Freshsales', url: '#' },
        { _key: 'i7', _type: 'footerLink', label: 'Pipedrive', url: '#' },
        { _key: 'i8', _type: 'footerLink', label: 'Google Sheets', url: '#' },
      ],
    },
    {
      _key: 'resources',
      _type: 'footerColumn',
      title: 'Recursos',
      links: [
        { _key: 'r1', _type: 'footerLink', label: 'Central de Ajuda', url: '#' },
        { _key: 'r2', _type: 'footerLink', label: 'Documentação', url: '#' },
        { _key: 'r3', _type: 'footerLink', label: 'Referência da API', url: '#' },
        { _key: 'r4', _type: 'footerLink', label: 'Blog', url: '#' },
        { _key: 'r5', _type: 'footerLink', label: 'Casos de Sucesso', url: '#' },
        { _key: 'r6', _type: 'footerLink', label: 'Webinars', url: '#' },
      ],
    },
    {
      _key: 'company',
      _type: 'footerColumn',
      title: 'Empresa',
      links: [
        { _key: 'c1', _type: 'footerLink', label: 'Sobre Nós', url: '#' },
        { _key: 'c2', _type: 'footerLink', label: 'Carreiras', url: '#' },
        { _key: 'c3', _type: 'footerLink', label: 'Contato', url: '#' },
        { _key: 'c4', _type: 'footerLink', label: 'Parceiros', url: '#' },
        { _key: 'c5', _type: 'footerLink', label: 'Segurança', url: '#' },
        { _key: 'c6', _type: 'footerLink', label: 'Status', url: '#' },
      ],
    },
  ],
  copyright: '© 2025 Eazybe, Inc. Todos os direitos reservados. 8, The Green STE B, Dover Delaware - 19901 | support@eazybe.com',
  legalLinks: [
    { _key: 'l1', _type: 'footerLink', label: 'Política de Privacidade', url: '#' },
    { _key: 'l2', _type: 'footerLink', label: 'Termos de Serviço', url: '#' },
    { _key: 'l3', _type: 'footerLink', label: 'Política de Cookies', url: '#' },
    { _key: 'l4', _type: 'footerLink', label: 'DPA', url: '#' },
  ],
}

// Turkish footer
const footerTr = {
  _id: 'footer-tr',
  _type: 'footer',
  language: 'tr',
  companyName: 'Eazybe',
  tagline: 'CRM ekipleri için WhatsApp Satış Platformu.',
  socialLinks: [
    { _key: 'linkedin', _type: 'socialLink', platform: 'linkedin', url: '#' },
    { _key: 'twitter', _type: 'socialLink', platform: 'twitter', url: '#' },
    { _key: 'youtube', _type: 'socialLink', platform: 'youtube', url: '#' },
  ],
  badges: ['GDPR Ready', 'Encrypted'],
  columns: [
    {
      _key: 'platform',
      _type: 'footerColumn',
      title: 'Platform',
      links: [
        { _key: 'p1', _type: 'footerLink', label: 'Konuşma Yakalama', url: '#' },
        { _key: 'p2', _type: 'footerLink', label: 'İş Akışı Otomasyonu', url: '#' },
        { _key: 'p3', _type: 'footerLink', label: 'Gelir Gelen Kutusu', url: '#' },
        { _key: 'p4', _type: 'footerLink', label: 'Temsilci Radarı', url: '#' },
        { _key: 'p5', _type: 'footerLink', label: 'Bulut Yedekleme', url: '#' },
        { _key: 'p6', _type: 'footerLink', label: 'Mini CRM Görünümü', url: '#' },
        { _key: 'p7', _type: 'footerLink', label: 'Ekip Gelen Kutusu', url: '#' },
        { _key: 'p8', _type: 'footerLink', label: 'WhatsApp Copilot', url: '#' },
      ],
    },
    {
      _key: 'integrations',
      _type: 'footerColumn',
      title: 'Entegrasyonlar',
      links: [
        { _key: 'i1', _type: 'footerLink', label: 'HubSpot', url: '#' },
        { _key: 'i2', _type: 'footerLink', label: 'Salesforce', url: '#' },
        { _key: 'i3', _type: 'footerLink', label: 'Zoho CRM', url: '#' },
        { _key: 'i4', _type: 'footerLink', label: 'Bitrix24', url: '#' },
        { _key: 'i5', _type: 'footerLink', label: 'LeadSquared', url: '#' },
        { _key: 'i6', _type: 'footerLink', label: 'Freshsales', url: '#' },
        { _key: 'i7', _type: 'footerLink', label: 'Pipedrive', url: '#' },
        { _key: 'i8', _type: 'footerLink', label: 'Google Sheets', url: '#' },
      ],
    },
    {
      _key: 'resources',
      _type: 'footerColumn',
      title: 'Kaynaklar',
      links: [
        { _key: 'r1', _type: 'footerLink', label: 'Yardım Merkezi', url: '#' },
        { _key: 'r2', _type: 'footerLink', label: 'Dokümantasyon', url: '#' },
        { _key: 'r3', _type: 'footerLink', label: 'API Referansı', url: '#' },
        { _key: 'r4', _type: 'footerLink', label: 'Blog', url: '#' },
        { _key: 'r5', _type: 'footerLink', label: 'Başarı Hikayeleri', url: '#' },
        { _key: 'r6', _type: 'footerLink', label: 'Webinarlar', url: '#' },
      ],
    },
    {
      _key: 'company',
      _type: 'footerColumn',
      title: 'Şirket',
      links: [
        { _key: 'c1', _type: 'footerLink', label: 'Hakkımızda', url: '#' },
        { _key: 'c2', _type: 'footerLink', label: 'Kariyer', url: '#' },
        { _key: 'c3', _type: 'footerLink', label: 'İletişim', url: '#' },
        { _key: 'c4', _type: 'footerLink', label: 'İş Ortakları', url: '#' },
        { _key: 'c5', _type: 'footerLink', label: 'Güvenlik', url: '#' },
        { _key: 'c6', _type: 'footerLink', label: 'Durum', url: '#' },
      ],
    },
  ],
  copyright: '© 2025 Eazybe, Inc. Tüm hakları saklıdır. 8, The Green STE B, Dover Delaware - 19901 | support@eazybe.com',
  legalLinks: [
    { _key: 'l1', _type: 'footerLink', label: 'Gizlilik Politikası', url: '#' },
    { _key: 'l2', _type: 'footerLink', label: 'Hizmet Şartları', url: '#' },
    { _key: 'l3', _type: 'footerLink', label: 'Çerez Politikası', url: '#' },
    { _key: 'l4', _type: 'footerLink', label: 'DPA', url: '#' },
  ],
}

// Update English footer to add language field
const footerEnUpdate = {
  language: 'en',
}

async function createFooters() {
  console.log('Creating footer translations...\n')

  try {
    // Update English footer to add language
    console.log('Updating English footer with language field...')
    await client.patch('footer').set(footerEnUpdate).commit()
    console.log('✅ English footer updated\n')

    // Create Spanish footer
    console.log('Creating Spanish footer...')
    await client.createOrReplace(footerEs)
    console.log('✅ Spanish footer created\n')

    // Create Portuguese footer
    console.log('Creating Portuguese footer...')
    await client.createOrReplace(footerPt)
    console.log('✅ Portuguese footer created\n')

    // Create Turkish footer
    console.log('Creating Turkish footer...')
    await client.createOrReplace(footerTr)
    console.log('✅ Turkish footer created\n')

    console.log('🎉 All footer translations created successfully!')
  } catch (error) {
    console.error('Error creating footers:', error)
    process.exit(1)
  }
}

createFooters()
