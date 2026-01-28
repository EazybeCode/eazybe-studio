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

// Manual URL mappings for posts without language
const urlMappings = {
  'top-10-whatsapp-business-tools-faster-replies': 'https://eazybe.com/blog/top-10-whatsapp-business-tools-for-sales-2024',
  'whatsapp-automation-best-practices-2024': 'https://eazybe.com/blog/whatsapp-automation-best-practices-2024',
  'complete-guide-whatsapp-crm-integration': 'https://eazybe.com/blog/complete-guide-whatsapp-crm-integration'
}

function htmlToPortableText(html) {
  if (!html) return []
  const $content = cheerio.load(html, null, false)
  const blocks = []

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
    } else if (['h1', 'h2', 'h3', 'h4'].includes(tagName)) {
      const text = $el.text().trim()
      if (text) {
        blocks.push({
          _type: 'block',
          _key: nanoid(),
          style: tagName,
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
    } else if (tagName === 'div') {
      $el.children().each((i, child) => processElement(child))
    }
  }

  $content.root().children().each((i, el) => processElement(el))
  return blocks
}

async function fetchContent(url) {
  try {
    console.log('  Fetching:', url)
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
      }
    })

    if (!response.ok) {
      console.log('  Response status:', response.status)
      return null
    }

    const html = await response.text()
    const $ = cheerio.load(html)

    const contentSelectors = [
      '.blog-content.w-richtext',
      '.blog-rich-text.w-richtext',
      '.w-richtext'
    ]

    for (const selector of contentSelectors) {
      const content = $(selector).html()
      if (content && content.length > 100) {
        return htmlToPortableText(content)
      }
    }
    console.log('  No content found with selectors')
    return null
  } catch (error) {
    console.log('  Fetch error:', error.message)
    return null
  }
}

// Get posts without language/content
const posts = await client.fetch('*[_type == "blogPost" && language == null]{_id, title, "slug": slug.current}')

console.log('Found', posts.length, 'posts without language\n')

for (const post of posts) {
  console.log('Processing:', post.title)

  // Try to find URL
  let url = urlMappings[post.slug]
  if (!url) {
    // Try default English path
    url = 'https://eazybe.com/blog/' + post.slug
  }

  const blocks = await fetchContent(url)

  if (blocks && blocks.length > 0) {
    await client.patch(post._id)
      .set({
        language: 'en',
        content: blocks
      })
      .commit()
    console.log('  Updated with', blocks.length, 'blocks')
  } else {
    // Set language at minimum
    await client.patch(post._id)
      .set({ language: 'en' })
      .commit()
    console.log('  Set language to en, but no content found')
  }
}

console.log('\nDone!')
