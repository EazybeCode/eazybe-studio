import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '5awzi0t4',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01'
})

// Check multiple posts
const posts = await client.fetch('*[_type == "blogPost"] | order(publishedAt desc) [0...10]{_id, title, language, "contentLength": count(content)}')
console.log('Posts with content:')
posts.forEach(p => {
  console.log(`  ${p.language}: ${p.title} - Content blocks: ${p.contentLength}`)
})

// Get a specific post we know was imported
const importedPost = await client.fetch('*[_type == "blogPost" && slug.current == "whatsapp-automation"][0]{_id, title, content}')
if (importedPost) {
  console.log('\nWhatsApp Automation post:')
  console.log('Content length:', importedPost.content?.length)
  if (importedPost.content?.length > 0) {
    console.log('First block:', JSON.stringify(importedPost.content[0], null, 2))
  }
}
