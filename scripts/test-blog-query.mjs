import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '5awzi0t4',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN
})

console.log('Testing blog query with language filter and image resolution...\n')

// Test 1: Get blog posts by language
const languages = ['en', 'pt', 'es', 'tr']
for (const lang of languages) {
  const posts = await client.fetch(`*[_type == "blogPost" && language == $language] | order(publishedAt desc) [0...3]{
    _id,
    title,
    language,
    "featuredImage": featuredImage.asset->url
  }`, { language: lang })

  console.log(`\n=== ${lang.toUpperCase()} Posts (${posts.length} found) ===`)
  posts.forEach(p => {
    console.log(`  - ${p.title}`)
    console.log(`    Image: ${p.featuredImage ? '✓' : '✗ MISSING'}`)
  })
}

// Test 2: Get single post with full content
console.log('\n\n=== Sample Post with Content ===')
const samplePost = await client.fetch(`*[_type == "blogPost" && language == "en"][0]{
  _id,
  title,
  language,
  "featuredImage": featuredImage.asset->url,
  content[0...3]{
    ...,
    _type == "image" => {
      ...,
      "url": asset->url
    }
  }
}`)

if (samplePost) {
  console.log(`Title: ${samplePost.title}`)
  console.log(`Language: ${samplePost.language}`)
  console.log(`Featured Image: ${samplePost.featuredImage || 'MISSING'}`)
  console.log(`Content blocks: ${samplePost.content?.length || 0}`)
  if (samplePost.content?.length > 0) {
    console.log('Sample content block:', JSON.stringify(samplePost.content[0], null, 2))
  }
}
