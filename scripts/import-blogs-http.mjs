import fetch from 'node-fetch'
import * as cheerio from 'cheerio'
import {nanoid} from 'nanoid'

const projectId = '5awzi0t4'
const dataset = 'production'
const token = process.env.SANITY_TOKEN

// Blog URLs organized by base slug and language
const blogGroups = [
  {
    baseSlug: 'whatsapp-automation',
    urls: {
      en: 'https://eazybe.com/blog/whatsapp-automation',
      pt: 'https://eazybe.com/br/blog/automacao-do-whatsapp',
      es: 'https://eazybe.com/es/blog/automatizacion-de-whatsapp',
      tr: 'https://eazybe.com/tr/blog/whatsapp-otomasyonu'
    }
  },
  {
    baseSlug: 'whatsapp-coexistence',
    urls: {
      en: 'https://eazybe.com/blog/whatsapp-coexistence'
    }
  },
  {
    baseSlug: 'whatsapp-chat-sync',
    urls: {
      en: 'https://eazybe.com/blog/whatsapp-chat-sync'
    }
  }
]

// Test the token first
async function testToken() {
  const response = await fetch(
    `https://${projectId}.api.sanity.io/v2024-01-01/data/mutate/${dataset}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        mutations: [{
          createOrReplace: {
            _id: 'drafts.test-http-token',
            _type: 'blogPost',
            title: 'HTTP Test',
            slug: { _type: 'slug', current: 'http-test' },
            language: 'en',
            category: 'How-To Guides'
          }
        }]
      })
    }
  )
  
  const result = await response.json()
  
  if (!response.ok) {
    console.log('❌ Token test failed:', result)
    return false
  }
  
  console.log('✅ Token has write permissions!')
  
  // Cleanup
  await fetch(
    `https://${projectId}.api.sanity.io/v2024-01-01/data/mutate/${dataset}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        mutations: [{ delete: { id: 'drafts.test-http-token' } }]
      })
    }
  )
  
  return true
}

// Run test
const hasPermission = await testToken()
if (!hasPermission) {
  process.exit(1)
}
