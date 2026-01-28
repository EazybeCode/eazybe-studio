import {createClient} from '@sanity/client'
import fetch from 'node-fetch'

const client = createClient({
  projectId: '5awzi0t4',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN
})

// Test creating a blog post without image first
console.log('Testing blog post creation...')
try {
  const doc = {
    _id: 'blogPost-test-import',
    _type: 'blogPost',
    language: 'en',
    title: 'Test Import Post',
    slug: { _type: 'slug', current: 'test-import' },
    excerpt: 'This is a test',
    category: 'How-To Guides',
    content: [{
      _type: 'block',
      _key: 'abc123',
      style: 'normal',
      markDefs: [],
      children: [{ _type: 'span', _key: 'def456', text: 'Test content', marks: [] }]
    }],
    publishedAt: new Date().toISOString()
  }
  
  await client.createOrReplace(doc)
  console.log('✅ Blog post created successfully!')
  
  // Clean up
  await client.delete('blogPost-test-import')
  console.log('✅ Cleanup complete')
  
} catch (error) {
  console.log('❌ Failed:', error.message)
}

// Test image upload
console.log('\nTesting image upload...')
try {
  const imageUrl = 'https://cdn.prod.website-files.com/64cb8feadae4f2e5a069eb86/68e796e3ee7693abf7931939_WhatsApp%20Automation%20Benefits%2C%20Uses%2C%20Bot%20%26%20Examples.webp'
  const response = await fetch(imageUrl)
  const arrayBuffer = await response.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)
  
  const asset = await client.assets.upload('image', buffer, {
    filename: 'test-image.webp'
  })
  console.log('✅ Image uploaded:', asset._id)
  
  // Clean up
  await client.delete(asset._id)
  console.log('✅ Image deleted')
  
} catch (error) {
  console.log('❌ Image upload failed:', error.message)
}
