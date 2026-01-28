import fetch from 'node-fetch'
import * as cheerio from 'cheerio'
import {nanoid} from 'nanoid'

const url = 'https://eazybe.com/blog/whatsapp-automation'

console.log(`Fetching: ${url}`)
const response = await fetch(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
  }
})

const html = await response.text()
const $ = cheerio.load(html)

// Find content with new selectors
const contentSelectors = [
  '.blog-content.w-richtext',
  '.blog-rich-text.w-richtext',
  '.w-richtext',
]

let contentHtml = ''
for (const selector of contentSelectors) {
  const content = $(selector).html()
  if (content && content.length > 100) {
    contentHtml = content
    console.log(`Found content with selector: ${selector} (${content.length} chars)`)
    break
  }
}

// Convert to portable text
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

const blocks = htmlToPortableText(contentHtml)
console.log(`\nExtracted ${blocks.length} blocks`)

if (blocks.length > 0) {
  console.log('\nFirst 5 blocks:')
  blocks.slice(0, 5).forEach((b, i) => {
    const text = b.children?.[0]?.text || ''
    console.log(`  ${i+1}. [${b.style || b.listItem}] ${text.substring(0, 80)}...`)
  })
}
