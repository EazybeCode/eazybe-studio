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

// Get all published blog posts with their slugs
const posts = await client.fetch(`*[_type == "blogPost" && !(_id match "drafts.*")]{
  _id,
  title,
  language,
  "slug": slug.current,
  "contentLength": count(content)
}`)

console.log('Found', posts.length, 'published posts to update\n')

// Language to URL prefix mapping
const langPrefixes = {
  en: 'https://eazybe.com/blog/',
  pt: 'https://eazybe.com/br/blog/',
  es: 'https://eazybe.com/es/blog/',
  tr: 'https://eazybe.com/tr/blog/'
}

// Convert HTML to portable text blocks
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
      $el.children().each((i, child) => processElement(child))
    } else if (tagName === 'figure') {
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

  $content.root().children().each((i, el) => processElement(el))
  return blocks
}

// Fetch content from URL
async function fetchContent(url) {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
      }
    })

    if (!response.ok) return null

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
    return null
  } catch (error) {
    return null
  }
}

let updated = 0
let failed = 0
let skipped = 0

for (const post of posts) {
  // Skip if already has content
  if (post.contentLength > 0) {
    console.log('  Skipping (has content):', post.title)
    skipped++
    continue
  }

  const url = langPrefixes[post.language] + post.slug
  console.log('Fetching:', url)

  const blocks = await fetchContent(url)

  if (!blocks || blocks.length === 0) {
    console.log('  Failed to extract content')
    failed++
    continue
  }

  // Update the document
  try {
    await client.patch(post._id)
      .set({ content: blocks })
      .commit()

    console.log('  Updated with', blocks.length, 'blocks:', post.title)
    updated++
  } catch (error) {
    console.log('  Failed to update:', error.message)
    failed++
  }

  // Small delay to avoid rate limiting
  await new Promise(r => setTimeout(r, 500))
}

console.log('\n=== Update Complete ===')
console.log('Updated:', updated)
console.log('Failed:', failed)
console.log('Skipped (had content):', skipped)
