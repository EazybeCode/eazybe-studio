import fetch from 'node-fetch'
import * as cheerio from 'cheerio'

const url = 'https://eazybe.com/blog/whatsapp-automation'

console.log(`Fetching: ${url}`)
const response = await fetch(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
  }
})

const html = await response.text()
const $ = cheerio.load(html)

// Try different content selectors
const contentSelectors = [
  'article .content',
  'article .blog-content',
  '.blog-post-content',
  'article .prose',
  'article',
  '.post-content',
  'main article',
  '.w-richtext',
  '[class*="rich-text"]',
  '.blog-body',
  '.entry-content'
]

console.log('\n=== Testing Content Selectors ===')
for (const selector of contentSelectors) {
  const content = $(selector).html()
  console.log(`${selector}: ${content ? `Found (${content.length} chars)` : 'NOT FOUND'}`)
}

// Let's see what's in the page
console.log('\n=== Page Structure ===')
console.log('Title:', $('h1').first().text().trim())
console.log('Article elements:', $('article').length)
console.log('Main elements:', $('main').length)

// Try to find the actual content container
console.log('\n=== Looking for content divs ===')
$('div[class]').each((i, el) => {
  const className = $(el).attr('class')
  const text = $(el).text().trim()
  if (text.length > 500 && !className.includes('nav') && !className.includes('footer') && !className.includes('header')) {
    console.log(`Potential content div: ${className?.substring(0, 100)}... (${text.length} chars)`)
  }
})
