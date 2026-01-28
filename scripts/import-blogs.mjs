import {createClient} from '@sanity/client'
import fetch from 'node-fetch'
import * as cheerio from 'cheerio'
import {nanoid} from 'nanoid'

const client = createClient({
  projectId: '5awzi0t4',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN
})

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
      en: 'https://eazybe.com/blog/whatsapp-coexistence',
      pt: 'https://eazybe.com/br/blog/whatsapp-coexistence',
      es: 'https://eazybe.com/es/blog/whatsapp-coexistence',
      tr: 'https://eazybe.com/tr/blog/whatsapp-coexistence'
    }
  },
  {
    baseSlug: 'whatsapp-chat-sync',
    urls: {
      en: 'https://eazybe.com/blog/whatsapp-chat-sync',
      pt: 'https://eazybe.com/br/blog/sincronizacao-de-bate-papo-do-whatsapp',
      es: 'https://eazybe.com/es/blog/sincronizacion-de-chat-de-whatsapp',
      tr: 'https://eazybe.com/tr/blog/whatsapp-chat-sync'
    }
  },
  {
    baseSlug: 'hubspot-conversation-analytics',
    urls: {
      en: 'https://eazybe.com/blog/hubspot-conversation-analytics',
      pt: 'https://eazybe.com/br/blog/hubspot-conversation-analytics',
      es: 'https://eazybe.com/es/blog/analisis-de-conversaciones-de-hubspot',
      tr: 'https://eazybe.com/tr/blog/hubspot-konusma-analitigi'
    }
  },
  {
    baseSlug: 'whatsapp-sales-performance-analytics',
    urls: {
      en: 'https://eazybe.com/blog/whatsapp-sales-performance-analytics',
      pt: 'https://eazybe.com/br/blog/analise-de-desempenho-de-vendas-do-whatsapp',
      es: 'https://eazybe.com/es/blog/analisis-del-rendimiento-de-ventas-de-whatsapp',
      tr: 'https://eazybe.com/tr/blog/whatsapp-satis-performansi-analizi'
    }
  },
  {
    baseSlug: 'whatsapp-team-inbox',
    urls: {
      en: 'https://eazybe.com/blog/whatsapp-team-inbox',
      pt: 'https://eazybe.com/br/blog/caixa-de-entrada-da-equipe-whatsapp',
      es: 'https://eazybe.com/es/blog/bandeja-de-entrada-del-equipo-de-whatsapp',
      tr: 'https://eazybe.com/tr/blog/whatsapp-ekip-gelen-kutusu'
    }
  },
  {
    baseSlug: 'whatsapp-hubspot-reporting',
    urls: {
      en: 'https://eazybe.com/blog/whatsapp-hubspot-reporting',
      pt: 'https://eazybe.com/br/blog/relatorios-do-hubspot-para-whatsapp',
      es: 'https://eazybe.com/es/blog/informes-de-hubspot-para-whatsapp',
      tr: 'https://eazybe.com/tr/blog/hubspot-whatsapp-raporlamasi'
    }
  },
  {
    baseSlug: 'whatsapp-business-tools',
    urls: {
      en: 'https://eazybe.com/blog/whatsapp-business-tools',
      pt: 'https://eazybe.com/br/blog/ferramentas-do-whatsapp-business',
      es: 'https://eazybe.com/es/blog/herramientas-de-whatsapp-business',
      tr: 'https://eazybe.com/tr/blog/whatsapp-isletme-araclari'
    }
  },
  {
    baseSlug: 'sales-efficiency',
    urls: {
      en: 'https://eazybe.com/blog/sales-efficiency',
      pt: 'https://eazybe.com/br/blog/eficiencia-de-vendas',
      es: 'https://eazybe.com/es/blog/eficiencia-de-ventas',
      tr: 'https://eazybe.com/tr/blog/satis-verimliligi'
    }
  },
  {
    baseSlug: 'whatsapp-sales-tracking',
    urls: {
      en: 'https://eazybe.com/blog/whatsapp-sales-tracking',
      pt: 'https://eazybe.com/br/blog/rastreamento-de-vendas-do-whatsapp',
      es: 'https://eazybe.com/es/blog/seguimiento-de-ventas-de-whatsapp',
      tr: 'https://eazybe.com/tr/blog/whatsapp-satis-takibi'
    }
  },
  {
    baseSlug: 'how-to-increase-sales',
    urls: {
      en: 'https://eazybe.com/blog/how-to-increase-sales',
      pt: 'https://eazybe.com/br/blog/como-aumentar-as-vendas',
      es: 'https://eazybe.com/es/blog/como-aumentar-las-ventas'
    }
  },
  {
    baseSlug: 'sales-enablement',
    urls: {
      pt: 'https://eazybe.com/br/blog/sales-enablement',
      es: 'https://eazybe.com/es/blog/habilitacion-de-ventas'
    }
  },
  {
    baseSlug: 'how-to-restore-deleted-whatsapp-images',
    urls: {
      en: 'https://eazybe.com/blog/how-to-easily-restore-deleted-whatsapp-images-and-videos-revealed'
    }
  },
  {
    baseSlug: 'how-to-read-deleted-messages-whatsapp',
    urls: {
      en: 'https://eazybe.com/blog/how-to-read-deleted-messages-on-whatsapp',
      es: 'https://eazybe.com/es/blog/como-leer-mensajes-eliminados-en-whatsapp'
    }
  },
  {
    baseSlug: 'how-to-appear-offline-whatsapp',
    urls: {
      tr: 'https://eazybe.com/tr/blog/how-to-appear-offline-on-whatsapp',
      es: 'https://eazybe.com/es/blog/desconectarse-de-whatsapp'
    }
  },
  {
    baseSlug: 'como-ver-mensajes-eliminados-whatsapp',
    urls: {
      tr: 'https://eazybe.com/tr/blog-es/como-ver-mensajes-eliminados-en-whatsapp-revelado'
    }
  },
  {
    baseSlug: 'google-calendar-whatsapp-guide',
    urls: {
      en: 'https://eazybe.com/blog/google-calendar-on-whatsapp-eazybe-extension-guide'
    }
  },
  {
    baseSlug: 'whatsapp-business-description-samples',
    urls: {
      en: 'https://eazybe.com/blog/whatsapp-business-description-samples'
    }
  },
  {
    baseSlug: 'birthday-reminders-whatsapp',
    urls: {
      en: 'https://eazybe.com/blog/how-to-set-birthday-reminders-on-whatsapp'
    }
  },
  {
    baseSlug: 'whatsapp-polls-benefits-practices',
    urls: {
      en: 'https://eazybe.com/blog/whatsapp-polls-their-benefits-and-best-practices'
    }
  },
  {
    baseSlug: 'view-names-whatsapp-without-saving',
    urls: {
      en: 'https://eazybe.com/blog/step-by-step-guide-view-names-on-whatsapp-without-saving-numbers'
    }
  },
  {
    baseSlug: 'whatsapp-web-login',
    urls: {
      en: 'https://eazybe.com/blog/connect-better-the-easy-way-to-whatsapp-web-login'
    }
  }
]

// Fetch a page and extract content
async function fetchBlogContent(url) {
  try {
    console.log(`Fetching: ${url}`)
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
      }
    })

    if (!response.ok) {
      console.error(`Failed to fetch ${url}: ${response.status}`)
      return null
    }

    const html = await response.text()
    const $ = cheerio.load(html)

    // Extract title
    const title = $('h1').first().text().trim() ||
                  $('meta[property="og:title"]').attr('content') ||
                  $('title').text().trim()

    // Extract meta description
    const excerpt = $('meta[name="description"]').attr('content') ||
                    $('meta[property="og:description"]').attr('content') || ''

    // Extract featured image
    const featuredImage = $('meta[property="og:image"]').attr('content') ||
                          $('article img').first().attr('src') || ''

    // Extract main content - try multiple selectors (Webflow uses w-richtext)
    let contentHtml = ''
    const contentSelectors = [
      '.blog-content.w-richtext',
      '.blog-rich-text.w-richtext',
      '.w-richtext',
      'article .content',
      'article .blog-content',
      '.blog-post-content',
      'article .prose',
      'article',
      '.post-content',
      'main article'
    ]

    for (const selector of contentSelectors) {
      const content = $(selector).html()
      if (content && content.length > 100) {
        contentHtml = content
        break
      }
    }

    // Extract all images from content
    const images = []
    $('article img, .blog-content img, .content img').each((i, el) => {
      const src = $(el).attr('src')
      const alt = $(el).attr('alt') || ''
      if (src && !src.includes('data:image')) {
        images.push({ src, alt })
      }
    })

    // Convert HTML to portable text blocks
    const blocks = htmlToPortableText($, contentHtml)

    return {
      title,
      excerpt,
      featuredImage,
      content: blocks,
      images
    }
  } catch (error) {
    console.error(`Error fetching ${url}:`, error.message)
    return null
  }
}

// Convert HTML to Sanity portable text blocks
function htmlToPortableText($, html) {
  if (!html) return []

  const $content = cheerio.load(html, null, false) // false = don't add html/body wrapper
  const blocks = []

  // Process all top-level elements
  const processElement = (el) => {
    const $el = $content(el)
    const tagName = el.tagName?.toLowerCase()

    if (tagName === 'p') {
      const text = $el.text().trim()
      if (text) {
        blocks.push({
          _type: 'block',
          _key: nanoid(),
          style: 'normal',
          markDefs: [],
          children: [{ _type: 'span', _key: nanoid(), text, marks: [] }]
        })
      }
    } else if (tagName === 'h1') {
      const text = $el.text().trim()
      if (text) {
        blocks.push({
          _type: 'block',
          _key: nanoid(),
          style: 'h1',
          markDefs: [],
          children: [{ _type: 'span', _key: nanoid(), text, marks: [] }]
        })
      }
    } else if (tagName === 'h2') {
      const text = $el.text().trim()
      if (text) {
        blocks.push({
          _type: 'block',
          _key: nanoid(),
          style: 'h2',
          markDefs: [],
          children: [{ _type: 'span', _key: nanoid(), text, marks: [] }]
        })
      }
    } else if (tagName === 'h3') {
      const text = $el.text().trim()
      if (text) {
        blocks.push({
          _type: 'block',
          _key: nanoid(),
          style: 'h3',
          markDefs: [],
          children: [{ _type: 'span', _key: nanoid(), text, marks: [] }]
        })
      }
    } else if (tagName === 'h4') {
      const text = $el.text().trim()
      if (text) {
        blocks.push({
          _type: 'block',
          _key: nanoid(),
          style: 'h4',
          markDefs: [],
          children: [{ _type: 'span', _key: nanoid(), text, marks: [] }]
        })
      }
    } else if (tagName === 'ul' || tagName === 'ol') {
      $el.find('li').each((j, li) => {
        const text = $content(li).text().trim()
        if (text) {
          blocks.push({
            _type: 'block',
            _key: nanoid(),
            style: 'normal',
            listItem: tagName === 'ul' ? 'bullet' : 'number',
            level: 1,
            markDefs: [],
            children: [{ _type: 'span', _key: nanoid(), text, marks: [] }]
          })
        }
      })
    } else if (tagName === 'blockquote') {
      const text = $el.text().trim()
      if (text) {
        blocks.push({
          _type: 'block',
          _key: nanoid(),
          style: 'blockquote',
          markDefs: [],
          children: [{ _type: 'span', _key: nanoid(), text, marks: [] }]
        })
      }
    } else if (tagName === 'div') {
      // Recursively process div children
      $el.children().each((i, child) => processElement(child))
    } else if (tagName === 'figure') {
      // Handle figure elements (often contain images)
      const text = $el.find('figcaption').text().trim()
      if (text) {
        blocks.push({
          _type: 'block',
          _key: nanoid(),
          style: 'normal',
          markDefs: [],
          children: [{ _type: 'span', _key: nanoid(), text, marks: [] }]
        })
      }
    }
  }

  // Get root elements and process them
  $content.root().children().each((i, el) => processElement(el))

  return blocks
}

// Upload image to Sanity
async function uploadImage(imageUrl) {
  try {
    if (!imageUrl || imageUrl.startsWith('data:')) return null

    // Make URL absolute if relative
    if (imageUrl.startsWith('/')) {
      imageUrl = `https://eazybe.com${imageUrl}`
    }

    console.log(`  Uploading image: ${imageUrl}`)
    const response = await fetch(imageUrl)
    if (!response.ok) return null

    const buffer = await response.buffer()
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop()?.split('?')[0] || 'image.jpg'
    })

    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id
      }
    }
  } catch (error) {
    console.error(`  Failed to upload image: ${error.message}`)
    return null
  }
}

// Get slug from URL
function getSlugFromUrl(url) {
  const parts = url.split('/blog/')
  if (parts.length > 1) {
    return parts[1].split('?')[0].split('#')[0]
  }
  return null
}

// Main import function
async function importBlogs() {
  console.log('Starting blog import...\n')

  let imported = 0
  let failed = 0

  for (const group of blogGroups) {
    console.log(`\n=== Processing: ${group.baseSlug} ===`)

    for (const [lang, url] of Object.entries(group.urls)) {
      const slug = getSlugFromUrl(url)
      if (!slug) {
        console.log(`  Skipping ${url} - could not extract slug`)
        continue
      }

      const content = await fetchBlogContent(url)
      if (!content) {
        console.log(`  Failed to fetch content for ${url}`)
        failed++
        continue
      }

      // Upload featured image
      let featuredImageAsset = null
      if (content.featuredImage) {
        featuredImageAsset = await uploadImage(content.featuredImage)
      }

      // Determine category based on content
      let category = 'How-To Guides'
      if (slug.includes('automation') || slug.includes('otomasyonu') || slug.includes('automatizacion') || slug.includes('automacao')) {
        category = 'Features'
      } else if (slug.includes('hubspot') || slug.includes('crm')) {
        category = 'CRM Integrations'
      } else if (slug.includes('sales') || slug.includes('vendas') || slug.includes('ventas') || slug.includes('satis')) {
        category = 'WhatsApp for Sales'
      }

      // Create document ID (use drafts. prefix for draft documents)
      const docId = `drafts.blogPost-${slug}`

      // Create blog post document
      const doc = {
        _id: docId,
        _type: 'blogPost',
        language: lang,
        title: content.title,
        slug: { _type: 'slug', current: slug },
        excerpt: content.excerpt,
        category,
        content: content.content,
        publishedAt: new Date().toISOString()
      }

      if (featuredImageAsset) {
        doc.featuredImage = featuredImageAsset
      }

      try {
        await client.createOrReplace(doc)
        console.log(`  ✓ Imported: ${content.title} (${lang})`)
        imported++
      } catch (error) {
        console.error(`  ✗ Failed to create ${docId}: ${error.message}`)
        failed++
      }

      // Small delay to avoid rate limiting
      await new Promise(r => setTimeout(r, 500))
    }
  }

  console.log(`\n\n=== Import Complete ===`)
  console.log(`Imported: ${imported}`)
  console.log(`Failed: ${failed}`)
}

// Run the import
importBlogs().catch(console.error)
