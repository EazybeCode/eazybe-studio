import { createClient } from '@sanity/client'
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Read Sanity token from .env file
const envPath = resolve(__dirname, '..', '.env')
const envContent = readFileSync(envPath, 'utf-8')
const sanityTokenMatch = envContent.match(/SANITY_TOKEN=(.+)/)
const sanityToken = sanityTokenMatch ? sanityTokenMatch[1].trim() : null

if (!sanityToken) {
  throw new Error('SANITY_TOKEN not found in .env file')
}

// Initialize Sanity client
const sanityClient = createClient({
  projectId: '5awzi0t4',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: sanityToken,
})

// SVG illustrations for each feature
const features = [
  {
    slug: 'cloud-backup',
    documentId: 'productPage-cloud-backup-en',
    name: 'Cloud Backup',
    accentColor: '#3B82F6', // Blue
    svg: generateCloudBackupSVG
  },
  {
    slug: 'team-inbox',
    documentId: 'productPage-team-inbox-en',
    name: 'Team Inbox',
    accentColor: '#10B981', // Emerald
    svg: generateTeamInboxSVG
  },
  {
    slug: 'whatsapp-crm',
    documentId: 'productPage-whatsapp-crm-en',
    name: 'WhatsApp CRM',
    accentColor: '#8B5CF6', // Violet
    svg: generateCrmSVG
  },
  {
    slug: 'revenue-inbox',
    documentId: 'productPage-revenue-inbox-en',
    name: 'Revenue Inbox',
    accentColor: '#14B8A6', // Teal
    svg: generateRevenueInboxSVG
  },
  {
    slug: 'quick-reply',
    documentId: 'productPage-quick-reply-en',
    name: 'Quick Replies',
    accentColor: '#F59E0B', // Amber
    svg: generateQuickReplySVG
  },
  {
    slug: 'scheduler',
    documentId: 'productPage-scheduler-en',
    name: 'Message Scheduler',
    accentColor: '#EC4899', // Pink
    svg: generateSchedulerSVG
  },
  {
    slug: 'rep-radar',
    documentId: 'productPage-rep-radar-en',
    name: 'Rep Radar',
    accentColor: '#6366F1', // Indigo
    svg: generateRepRadarSVG
  },
  {
    slug: 'whatsapp-copilot',
    documentId: 'productPage-whatsapp-copilot-en',
    name: 'WhatsApp Copilot',
    accentColor: '#0EA5E9', // Sky
    svg: generateCopilotSVG
  }
]

// Cloud Backup SVG - cloud with shield and data streams
function generateCloudBackupSVG(color) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
  <defs>
    <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:0.3"/>
      <stop offset="100%" style="stop-color:${color};stop-opacity:0.1"/>
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="800" height="500" fill="#0f172a"/>

  <!-- Background grid -->
  <g opacity="0.1" stroke="${color}">
    ${Array.from({length: 20}, (_, i) => `<line x1="${i*40}" y1="0" x2="${i*40}" y2="500"/>`).join('')}
    ${Array.from({length: 13}, (_, i) => `<line x1="0" y1="${i*40}" x2="800" y2="${i*40}"/>`).join('')}
  </g>

  <!-- Cloud shape -->
  <path d="M550 180 C600 180 640 220 640 270 C640 320 600 360 550 360 L280 360 C220 360 170 310 170 250 C170 190 220 140 280 140 C290 100 340 70 400 70 C470 70 530 120 540 180 Z"
        fill="url(#cloudGrad)" stroke="${color}" stroke-width="2" filter="url(#glow)"/>

  <!-- Shield in cloud -->
  <path d="M400 160 L340 190 L340 260 C340 300 370 330 400 340 C430 330 460 300 460 260 L460 190 Z"
        fill="#0f172a" stroke="${color}" stroke-width="2" filter="url(#glow)"/>
  <path d="M400 190 L420 210 L390 250 L375 235" stroke="${color}" stroke-width="4" fill="none" stroke-linecap="round"/>

  <!-- Data streams -->
  <g filter="url(#glow)">
    <circle cx="250" cy="420" r="8" fill="${color}" opacity="0.8"/>
    <circle cx="400" cy="420" r="8" fill="${color}" opacity="0.8"/>
    <circle cx="550" cy="420" r="8" fill="${color}" opacity="0.8"/>
    <line x1="250" y1="410" x2="300" y2="360" stroke="${color}" stroke-width="2" stroke-dasharray="5,5" opacity="0.6"/>
    <line x1="400" y1="410" x2="400" y2="365" stroke="${color}" stroke-width="2" stroke-dasharray="5,5" opacity="0.6"/>
    <line x1="550" y1="410" x2="500" y2="360" stroke="${color}" stroke-width="2" stroke-dasharray="5,5" opacity="0.6"/>
  </g>

  <!-- Chat bubbles at bottom -->
  <g filter="url(#glow)" opacity="0.6">
    <rect x="220" y="430" width="60" height="30" rx="10" fill="${color}" opacity="0.3"/>
    <rect x="370" y="430" width="60" height="30" rx="10" fill="${color}" opacity="0.3"/>
    <rect x="520" y="430" width="60" height="30" rx="10" fill="${color}" opacity="0.3"/>
  </g>
</svg>`
}

// Team Inbox SVG - unified dashboard with team members
function generateTeamInboxSVG(color) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
  <defs>
    <linearGradient id="teamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:0.2"/>
      <stop offset="100%" style="stop-color:${color};stop-opacity:0.05"/>
    </linearGradient>
    <filter id="glow2">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="800" height="500" fill="#0f172a"/>

  <!-- Dashboard frame -->
  <rect x="100" y="60" width="600" height="380" rx="20" fill="url(#teamGrad)" stroke="${color}" stroke-width="2" filter="url(#glow2)"/>

  <!-- Header bar -->
  <rect x="100" y="60" width="600" height="50" rx="20" fill="${color}" opacity="0.2"/>
  <circle cx="140" cy="85" r="8" fill="#ef4444"/>
  <circle cx="170" cy="85" r="8" fill="#f59e0b"/>
  <circle cx="200" cy="85" r="8" fill="#22c55e"/>

  <!-- Sidebar -->
  <rect x="100" y="110" width="150" height="330" fill="${color}" opacity="0.1"/>

  <!-- Team avatars in sidebar -->
  <g filter="url(#glow2)">
    <circle cx="175" cy="160" r="20" fill="${color}" opacity="0.5"/>
    <circle cx="175" cy="220" r="20" fill="${color}" opacity="0.4"/>
    <circle cx="175" cy="280" r="20" fill="${color}" opacity="0.3"/>
    <circle cx="175" cy="340" r="20" fill="${color}" opacity="0.2"/>
  </g>

  <!-- Message threads -->
  <g opacity="0.6">
    <rect x="270" y="130" width="400" height="60" rx="10" fill="${color}" opacity="0.15"/>
    <rect x="270" y="200" width="400" height="60" rx="10" fill="${color}" opacity="0.1"/>
    <rect x="270" y="270" width="400" height="60" rx="10" fill="${color}" opacity="0.15"/>
    <rect x="270" y="340" width="400" height="60" rx="10" fill="${color}" opacity="0.1"/>
  </g>

  <!-- Activity indicators -->
  <g filter="url(#glow2)">
    <circle cx="640" cy="160" r="6" fill="${color}"/>
    <circle cx="640" cy="300" r="6" fill="${color}"/>
  </g>

  <!-- Routing arrows -->
  <g stroke="${color}" stroke-width="2" fill="none" filter="url(#glow2)" opacity="0.7">
    <path d="M175 180 Q 220 195 270 160"/>
    <path d="M175 240 Q 220 265 270 230"/>
    <path d="M175 300 Q 220 325 270 300"/>
  </g>
</svg>`
}

// WhatsApp CRM SVG - funnel/pipeline visualization
function generateCrmSVG(color) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
  <defs>
    <linearGradient id="funnelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:0.4"/>
      <stop offset="100%" style="stop-color:${color};stop-opacity:0.1"/>
    </linearGradient>
    <filter id="glow3">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="800" height="500" fill="#0f172a"/>

  <!-- Pipeline stages (kanban style) -->
  <g filter="url(#glow3)">
    <rect x="80" y="100" width="150" height="300" rx="10" fill="${color}" opacity="0.1" stroke="${color}" stroke-width="1"/>
    <rect x="250" y="100" width="150" height="300" rx="10" fill="${color}" opacity="0.15" stroke="${color}" stroke-width="1"/>
    <rect x="420" y="100" width="150" height="300" rx="10" fill="${color}" opacity="0.2" stroke="${color}" stroke-width="1"/>
    <rect x="590" y="100" width="150" height="300" rx="10" fill="${color}" opacity="0.25" stroke="${color}" stroke-width="1"/>
  </g>

  <!-- Stage labels -->
  <g fill="${color}" font-family="Arial" font-size="14" opacity="0.8">
    <text x="155" y="80" text-anchor="middle">NEW</text>
    <text x="325" y="80" text-anchor="middle">CONTACTED</text>
    <text x="495" y="80" text-anchor="middle">QUALIFIED</text>
    <text x="665" y="80" text-anchor="middle">WON</text>
  </g>

  <!-- Deal cards with labels -->
  <g filter="url(#glow3)">
    <!-- New stage cards -->
    <rect x="95" y="120" width="120" height="50" rx="8" fill="#1e293b"/>
    <rect x="95" y="120" width="8" height="50" rx="4" fill="#22c55e"/>
    <rect x="95" y="185" width="120" height="50" rx="8" fill="#1e293b"/>
    <rect x="95" y="185" width="8" height="50" rx="4" fill="#f59e0b"/>
    <rect x="95" y="250" width="120" height="50" rx="8" fill="#1e293b"/>
    <rect x="95" y="250" width="8" height="50" rx="4" fill="#3b82f6"/>

    <!-- Contacted cards -->
    <rect x="265" y="120" width="120" height="50" rx="8" fill="#1e293b"/>
    <rect x="265" y="120" width="8" height="50" rx="4" fill="${color}"/>
    <rect x="265" y="185" width="120" height="50" rx="8" fill="#1e293b"/>
    <rect x="265" y="185" width="8" height="50" rx="4" fill="#22c55e"/>

    <!-- Qualified cards -->
    <rect x="435" y="120" width="120" height="50" rx="8" fill="#1e293b"/>
    <rect x="435" y="120" width="8" height="50" rx="4" fill="#f59e0b"/>
    <rect x="435" y="185" width="120" height="50" rx="8" fill="#1e293b"/>
    <rect x="435" y="185" width="8" height="50" rx="4" fill="${color}"/>

    <!-- Won cards -->
    <rect x="605" y="120" width="120" height="50" rx="8" fill="#1e293b"/>
    <rect x="605" y="120" width="8" height="50" rx="4" fill="#22c55e"/>
  </g>

  <!-- WhatsApp icon hint -->
  <g filter="url(#glow3)" transform="translate(650, 420)">
    <circle cx="0" cy="0" r="30" fill="${color}" opacity="0.2"/>
    <path d="M-10 -5 Q -15 -15 0 -15 Q 15 -15 10 -5 L 5 5 L 0 0 L -5 5 Z" fill="${color}" opacity="0.6"/>
  </g>

  <!-- Connection lines -->
  <g stroke="${color}" stroke-width="1" stroke-dasharray="4,4" opacity="0.4">
    <line x1="215" y1="145" x2="265" y2="145"/>
    <line x1="385" y1="145" x2="435" y2="145"/>
    <line x1="555" y1="145" x2="605" y2="145"/>
  </g>
</svg>`
}

// Revenue Inbox SVG - deal health indicators
function generateRevenueInboxSVG(color) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
  <defs>
    <linearGradient id="revGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:0.2"/>
      <stop offset="100%" style="stop-color:${color};stop-opacity:0.05"/>
    </linearGradient>
    <filter id="glow4">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="800" height="500" fill="#0f172a"/>

  <!-- Inbox container -->
  <rect x="100" y="50" width="600" height="400" rx="15" fill="url(#revGrad)" stroke="${color}" stroke-width="2" filter="url(#glow4)"/>

  <!-- Inbox rows with health indicators -->
  <g filter="url(#glow4)">
    <!-- Hot deal - red/orange -->
    <rect x="120" y="80" width="560" height="70" rx="10" fill="#1e293b"/>
    <circle cx="160" cy="115" r="20" fill="#ef4444" opacity="0.8"/>
    <text x="160" y="122" fill="white" font-size="20" text-anchor="middle">🔥</text>
    <rect x="200" y="95" width="300" height="12" rx="4" fill="${color}" opacity="0.3"/>
    <rect x="200" y="115" width="200" height="8" rx="4" fill="${color}" opacity="0.15"/>
    <text x="640" y="120" fill="#22c55e" font-size="16" font-family="Arial" text-anchor="end">$45,000</text>

    <!-- Warm deal - yellow -->
    <rect x="120" y="165" width="560" height="70" rx="10" fill="#1e293b"/>
    <circle cx="160" cy="200" r="20" fill="#f59e0b" opacity="0.8"/>
    <rect x="200" y="180" width="280" height="12" rx="4" fill="${color}" opacity="0.3"/>
    <rect x="200" y="200" width="180" height="8" rx="4" fill="${color}" opacity="0.15"/>
    <text x="640" y="205" fill="#22c55e" font-size="16" font-family="Arial" text-anchor="end">$28,500</text>

    <!-- Cooling deal - blue -->
    <rect x="120" y="250" width="560" height="70" rx="10" fill="#1e293b"/>
    <circle cx="160" cy="285" r="20" fill="#3b82f6" opacity="0.8"/>
    <rect x="200" y="265" width="260" height="12" rx="4" fill="${color}" opacity="0.3"/>
    <rect x="200" y="285" width="160" height="8" rx="4" fill="${color}" opacity="0.15"/>
    <text x="640" y="290" fill="#f59e0b" font-size="16" font-family="Arial" text-anchor="end">$12,000</text>

    <!-- Cold deal - gray/blue -->
    <rect x="120" y="335" width="560" height="70" rx="10" fill="#1e293b"/>
    <circle cx="160" cy="370" r="20" fill="#64748b" opacity="0.8"/>
    <rect x="200" y="350" width="240" height="12" rx="4" fill="${color}" opacity="0.3"/>
    <rect x="200" y="370" width="140" height="8" rx="4" fill="${color}" opacity="0.15"/>
    <text x="640" y="375" fill="#ef4444" font-size="16" font-family="Arial" text-anchor="end">$8,200</text>
  </g>

  <!-- Trending up arrow -->
  <g transform="translate(720, 70)" filter="url(#glow4)">
    <path d="M0 30 L15 0 L30 30 M15 0 L15 40" stroke="${color}" stroke-width="3" fill="none"/>
  </g>
</svg>`
}

// Quick Reply SVG - lightning bolt and templates
function generateQuickReplySVG(color) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
  <defs>
    <linearGradient id="quickGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:0.3"/>
      <stop offset="100%" style="stop-color:${color};stop-opacity:0.1"/>
    </linearGradient>
    <filter id="glow5">
      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
      <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="800" height="500" fill="#0f172a"/>

  <!-- Central lightning bolt -->
  <g filter="url(#glow5)" transform="translate(400, 250)">
    <path d="M-20 -80 L20 -20 L0 -20 L20 80 L-20 20 L0 20 Z" fill="${color}" opacity="0.9"/>
  </g>

  <!-- Template cards floating around -->
  <g filter="url(#glow5)">
    <!-- Left templates -->
    <rect x="80" y="100" width="180" height="60" rx="10" fill="#1e293b" stroke="${color}" stroke-width="1"/>
    <rect x="100" y="120" width="100" height="8" rx="4" fill="${color}" opacity="0.4"/>
    <rect x="100" y="135" width="60" height="6" rx="3" fill="${color}" opacity="0.2"/>

    <rect x="100" y="200" width="180" height="60" rx="10" fill="#1e293b" stroke="${color}" stroke-width="1"/>
    <rect x="120" y="220" width="90" height="8" rx="4" fill="${color}" opacity="0.4"/>
    <rect x="120" y="235" width="50" height="6" rx="3" fill="${color}" opacity="0.2"/>

    <rect x="80" y="320" width="180" height="60" rx="10" fill="#1e293b" stroke="${color}" stroke-width="1"/>
    <rect x="100" y="340" width="110" height="8" rx="4" fill="${color}" opacity="0.4"/>
    <rect x="100" y="355" width="70" height="6" rx="3" fill="${color}" opacity="0.2"/>

    <!-- Right templates -->
    <rect x="540" y="100" width="180" height="60" rx="10" fill="#1e293b" stroke="${color}" stroke-width="1"/>
    <rect x="560" y="120" width="80" height="8" rx="4" fill="${color}" opacity="0.4"/>
    <rect x="560" y="135" width="50" height="6" rx="3" fill="${color}" opacity="0.2"/>

    <rect x="520" y="200" width="180" height="60" rx="10" fill="#1e293b" stroke="${color}" stroke-width="1"/>
    <rect x="540" y="220" width="100" height="8" rx="4" fill="${color}" opacity="0.4"/>
    <rect x="540" y="235" width="60" height="6" rx="3" fill="${color}" opacity="0.2"/>

    <rect x="540" y="320" width="180" height="60" rx="10" fill="#1e293b" stroke="${color}" stroke-width="1"/>
    <rect x="560" y="340" width="90" height="8" rx="4" fill="${color}" opacity="0.4"/>
    <rect x="560" y="355" width="55" height="6" rx="3" fill="${color}" opacity="0.2"/>
  </g>

  <!-- Keyboard hint -->
  <g transform="translate(350, 430)" filter="url(#glow5)">
    <rect x="0" y="0" width="100" height="40" rx="8" fill="#1e293b" stroke="${color}" stroke-width="1"/>
    <text x="50" y="28" fill="${color}" font-size="18" font-family="monospace" text-anchor="middle">/reply</text>
  </g>
</svg>`
}

// Scheduler SVG - calendar and clock
function generateSchedulerSVG(color) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
  <defs>
    <linearGradient id="schedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:0.2"/>
      <stop offset="100%" style="stop-color:${color};stop-opacity:0.05"/>
    </linearGradient>
    <filter id="glow6">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="800" height="500" fill="#0f172a"/>

  <!-- Calendar -->
  <g transform="translate(100, 80)" filter="url(#glow6)">
    <rect x="0" y="0" width="300" height="280" rx="15" fill="url(#schedGrad)" stroke="${color}" stroke-width="2"/>
    <rect x="0" y="0" width="300" height="50" rx="15" fill="${color}" opacity="0.3"/>

    <!-- Calendar grid -->
    ${Array.from({length: 7}, (_, col) =>
      Array.from({length: 4}, (_, row) => {
        const x = 25 + col * 38
        const y = 80 + row * 45
        const isHighlighted = (col === 3 && row === 1) || (col === 5 && row === 2)
        return `<rect x="${x}" y="${y}" width="30" height="30" rx="5" fill="${isHighlighted ? color : '#1e293b'}" opacity="${isHighlighted ? '0.8' : '0.5'}"/>`
      }).join('')
    ).join('')}
  </g>

  <!-- Clock -->
  <g transform="translate(550, 150)" filter="url(#glow6)">
    <circle cx="0" cy="0" r="100" fill="url(#schedGrad)" stroke="${color}" stroke-width="2"/>
    <circle cx="0" cy="0" r="5" fill="${color}"/>
    <!-- Hour marks -->
    ${Array.from({length: 12}, (_, i) => {
      const angle = (i * 30 - 90) * Math.PI / 180
      const x1 = Math.cos(angle) * 80
      const y1 = Math.sin(angle) * 80
      const x2 = Math.cos(angle) * 90
      const y2 = Math.sin(angle) * 90
      return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="2"/>`
    }).join('')}
    <!-- Clock hands -->
    <line x1="0" y1="0" x2="40" y2="-40" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
    <line x1="0" y1="0" x2="60" y2="20" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
  </g>

  <!-- Scheduled messages queue -->
  <g transform="translate(450, 320)" filter="url(#glow6)">
    <rect x="0" y="0" width="250" height="50" rx="10" fill="#1e293b" stroke="${color}" stroke-width="1"/>
    <rect x="15" y="15" width="100" height="8" rx="4" fill="${color}" opacity="0.4"/>
    <rect x="15" y="28" width="60" height="6" rx="3" fill="${color}" opacity="0.2"/>
    <text x="200" y="32" fill="${color}" font-size="12" font-family="Arial" opacity="0.6">9:00 AM</text>

    <rect x="0" y="60" width="250" height="50" rx="10" fill="#1e293b" stroke="${color}" stroke-width="1"/>
    <rect x="15" y="75" width="80" height="8" rx="4" fill="${color}" opacity="0.4"/>
    <rect x="15" y="88" width="50" height="6" rx="3" fill="${color}" opacity="0.2"/>
    <text x="200" y="92" fill="${color}" font-size="12" font-family="Arial" opacity="0.6">2:30 PM</text>
  </g>
</svg>`
}

// Rep Radar SVG - radar visualization with activity metrics
function generateRepRadarSVG(color) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
  <defs>
    <linearGradient id="radarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:0.3"/>
      <stop offset="100%" style="stop-color:${color};stop-opacity:0.05"/>
    </linearGradient>
    <filter id="glow7">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="800" height="500" fill="#0f172a"/>

  <!-- Radar circles -->
  <g transform="translate(300, 250)" filter="url(#glow7)">
    <circle cx="0" cy="0" r="180" fill="none" stroke="${color}" stroke-width="1" opacity="0.2"/>
    <circle cx="0" cy="0" r="140" fill="none" stroke="${color}" stroke-width="1" opacity="0.3"/>
    <circle cx="0" cy="0" r="100" fill="none" stroke="${color}" stroke-width="1" opacity="0.4"/>
    <circle cx="0" cy="0" r="60" fill="none" stroke="${color}" stroke-width="1" opacity="0.5"/>
    <circle cx="0" cy="0" r="20" fill="${color}" opacity="0.3"/>

    <!-- Radar lines -->
    ${Array.from({length: 8}, (_, i) => {
      const angle = (i * 45) * Math.PI / 180
      const x = Math.cos(angle) * 180
      const y = Math.sin(angle) * 180
      return `<line x1="0" y1="0" x2="${x}" y2="${y}" stroke="${color}" stroke-width="1" opacity="0.3"/>`
    }).join('')}

    <!-- Sweep animation hint -->
    <path d="M0 0 L100 -100 A140 140 0 0 1 140 0 Z" fill="${color}" opacity="0.15"/>

    <!-- Rep dots on radar -->
    <circle cx="60" cy="-80" r="12" fill="#22c55e"/>
    <circle cx="-90" cy="40" r="12" fill="#f59e0b"/>
    <circle cx="40" cy="100" r="12" fill="${color}"/>
    <circle cx="-60" cy="-100" r="12" fill="#ef4444"/>
  </g>

  <!-- Metrics panel -->
  <g transform="translate(550, 80)" filter="url(#glow7)">
    <rect x="0" y="0" width="200" height="340" rx="15" fill="url(#radarGrad)" stroke="${color}" stroke-width="1"/>

    <!-- Metric items -->
    <g transform="translate(20, 30)">
      <circle cx="10" cy="10" r="8" fill="#22c55e"/>
      <text x="30" y="15" fill="white" font-size="14" font-family="Arial">Active Now</text>
      <text x="150" y="15" fill="#22c55e" font-size="14" font-family="Arial">4</text>
    </g>

    <g transform="translate(20, 80)">
      <circle cx="10" cy="10" r="8" fill="#f59e0b"/>
      <text x="30" y="15" fill="white" font-size="14" font-family="Arial">In Meetings</text>
      <text x="150" y="15" fill="#f59e0b" font-size="14" font-family="Arial">2</text>
    </g>

    <g transform="translate(20, 130)">
      <circle cx="10" cy="10" r="8" fill="${color}"/>
      <text x="30" y="15" fill="white" font-size="14" font-family="Arial">Avg Response</text>
      <text x="150" y="15" fill="${color}" font-size="14" font-family="Arial">3m</text>
    </g>

    <g transform="translate(20, 180)">
      <rect x="0" y="0" width="160" height="6" rx="3" fill="#1e293b"/>
      <rect x="0" y="0" width="120" height="6" rx="3" fill="${color}"/>
      <text x="0" y="-8" fill="${color}" font-size="12" font-family="Arial" opacity="0.6">Team Efficiency</text>
    </g>

    <g transform="translate(20, 230)">
      <rect x="0" y="0" width="160" height="6" rx="3" fill="#1e293b"/>
      <rect x="0" y="0" width="140" height="6" rx="3" fill="#22c55e"/>
      <text x="0" y="-8" fill="${color}" font-size="12" font-family="Arial" opacity="0.6">Response Rate</text>
    </g>

    <g transform="translate(20, 280)">
      <rect x="0" y="0" width="160" height="6" rx="3" fill="#1e293b"/>
      <rect x="0" y="0" width="90" height="6" rx="3" fill="#f59e0b"/>
      <text x="0" y="-8" fill="${color}" font-size="12" font-family="Arial" opacity="0.6">Conversations/hr</text>
    </g>
  </g>
</svg>`
}

// WhatsApp Copilot SVG - AI brain and suggestions
function generateCopilotSVG(color) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
  <defs>
    <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:0.3"/>
      <stop offset="100%" style="stop-color:${color};stop-opacity:0.1"/>
    </linearGradient>
    <filter id="glow8">
      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
      <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="800" height="500" fill="#0f172a"/>

  <!-- Neural network visualization -->
  <g transform="translate(250, 250)" filter="url(#glow8)">
    <!-- Central brain/AI node -->
    <circle cx="0" cy="0" r="60" fill="url(#aiGrad)" stroke="${color}" stroke-width="2"/>
    <text x="0" y="8" fill="${color}" font-size="40" text-anchor="middle">✨</text>

    <!-- Neural connections -->
    ${Array.from({length: 6}, (_, i) => {
      const angle = (i * 60 - 30) * Math.PI / 180
      const x1 = Math.cos(angle) * 60
      const y1 = Math.sin(angle) * 60
      const x2 = Math.cos(angle) * 140
      const y2 = Math.sin(angle) * 140
      return `
        <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="2" opacity="0.5"/>
        <circle cx="${x2}" cy="${y2}" r="20" fill="#1e293b" stroke="${color}" stroke-width="1"/>
      `
    }).join('')}

    <!-- Sparkles -->
    <circle cx="-100" cy="-80" r="4" fill="${color}" opacity="0.8"/>
    <circle cx="110" cy="-60" r="3" fill="${color}" opacity="0.6"/>
    <circle cx="-80" cy="100" r="5" fill="${color}" opacity="0.7"/>
    <circle cx="90" cy="90" r="3" fill="${color}" opacity="0.5"/>
  </g>

  <!-- Suggestion bubbles -->
  <g filter="url(#glow8)">
    <!-- Top suggestion -->
    <rect x="500" y="80" width="250" height="80" rx="15" fill="url(#aiGrad)" stroke="${color}" stroke-width="1"/>
    <circle cx="540" cy="120" r="20" fill="${color}" opacity="0.3"/>
    <text x="540" y="127" fill="${color}" font-size="20" text-anchor="middle">💡</text>
    <rect x="580" y="100" width="140" height="10" rx="5" fill="${color}" opacity="0.4"/>
    <rect x="580" y="120" width="100" height="8" rx="4" fill="${color}" opacity="0.2"/>

    <!-- Middle suggestion -->
    <rect x="520" y="180" width="250" height="80" rx="15" fill="url(#aiGrad)" stroke="${color}" stroke-width="1"/>
    <circle cx="560" cy="220" r="20" fill="${color}" opacity="0.3"/>
    <text x="560" y="227" fill="${color}" font-size="20" text-anchor="middle">📝</text>
    <rect x="600" y="200" width="130" height="10" rx="5" fill="${color}" opacity="0.4"/>
    <rect x="600" y="220" width="90" height="8" rx="4" fill="${color}" opacity="0.2"/>

    <!-- Bottom suggestion -->
    <rect x="500" y="280" width="250" height="80" rx="15" fill="url(#aiGrad)" stroke="${color}" stroke-width="1"/>
    <circle cx="540" cy="320" r="20" fill="${color}" opacity="0.3"/>
    <text x="540" y="327" fill="${color}" font-size="20" text-anchor="middle">🎯</text>
    <rect x="580" y="300" width="150" height="10" rx="5" fill="${color}" opacity="0.4"/>
    <rect x="580" y="320" width="110" height="8" rx="4" fill="${color}" opacity="0.2"/>
  </g>

  <!-- Chat context on left -->
  <g transform="translate(50, 120)" filter="url(#glow8)">
    <rect x="0" y="0" width="150" height="50" rx="10" fill="#1e293b" stroke="${color}" stroke-width="1" opacity="0.5"/>
    <rect x="10" y="10" width="100" height="8" rx="4" fill="${color}" opacity="0.3"/>
    <rect x="10" y="25" width="70" height="6" rx="3" fill="${color}" opacity="0.15"/>

    <rect x="20" y="70" width="150" height="50" rx="10" fill="#1e293b" stroke="${color}" stroke-width="1" opacity="0.5"/>
    <rect x="30" y="80" width="90" height="8" rx="4" fill="${color}" opacity="0.3"/>
    <rect x="30" y="95" width="60" height="6" rx="3" fill="${color}" opacity="0.15"/>

    <rect x="0" y="140" width="150" height="50" rx="10" fill="#1e293b" stroke="${color}" stroke-width="1" opacity="0.5"/>
    <rect x="10" y="150" width="110" height="8" rx="4" fill="${color}" opacity="0.3"/>
    <rect x="10" y="165" width="80" height="6" rx="3" fill="${color}" opacity="0.15"/>
  </g>
</svg>`
}

async function uploadToSanity(svgContent, filename) {
  console.log(`Uploading ${filename} to Sanity...`)

  try {
    const buffer = Buffer.from(svgContent, 'utf-8')
    const asset = await sanityClient.assets.upload('image', buffer, {
      filename: filename,
      contentType: 'image/svg+xml'
    })

    console.log(`✓ Uploaded: ${asset._id}`)
    return asset
  } catch (error) {
    console.error(`Upload error for ${filename}:`, error.message)
    return null
  }
}

async function updateFeaturePage(documentId, assetId) {
  console.log(`Updating ${documentId} with image...`)

  try {
    await sanityClient.patch(documentId)
      .set({
        'hero.heroImage': {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: assetId
          }
        }
      })
      .commit()

    console.log(`✓ Updated ${documentId}`)
    return true
  } catch (error) {
    console.error(`Update error for ${documentId}:`, error.message)
    return false
  }
}

async function main() {
  console.log('Starting SVG image generation...\n')

  // Ensure output directory exists
  const outputDir = resolve(__dirname, '..', 'generated-images')
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true })
  }

  const results = []

  for (const feature of features) {
    console.log(`\n--- Processing: ${feature.name} ---`)

    // Generate SVG
    const svgContent = feature.svg(feature.accentColor)

    // Save locally
    const localPath = resolve(outputDir, `${feature.slug}.svg`)
    writeFileSync(localPath, svgContent)
    console.log(`Saved locally: ${localPath}`)

    // Upload to Sanity
    const asset = await uploadToSanity(svgContent, `${feature.slug}-hero.svg`)

    if (asset) {
      // Update the feature page
      const updated = await updateFeaturePage(feature.documentId, asset._id)
      results.push({ feature: feature.name, success: updated, assetId: asset._id })
    } else {
      results.push({ feature: feature.name, success: false, error: 'Upload failed' })
    }

    // Small delay between uploads
    await new Promise(r => setTimeout(r, 500))
  }

  console.log('\n\n=== RESULTS ===')
  console.table(results)

  const successful = results.filter(r => r.success).length
  console.log(`\nCompleted: ${successful}/${features.length} SVG images generated and uploaded`)
}

main().catch(console.error)
