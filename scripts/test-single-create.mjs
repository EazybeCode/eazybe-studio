import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '5awzi0t4',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN
})

console.log('Testing single blog post creation...')
console.log('Token prefix:', process.env.SANITY_TOKEN?.substring(0, 10))

try {
  // Use client.create() like the working test
  const result = await client.create({
    _type: 'blogPost',
    _id: 'drafts.test-single-blog',
    title: 'Test Blog Post',
    slug: { _type: 'slug', current: 'test-single-blog' },
    language: 'en',
    category: 'How-To Guides',
    excerpt: 'This is a test',
    content: [{
      _type: 'block',
      _key: 'abc123',
      style: 'normal',
      markDefs: [],
      children: [{ _type: 'span', _key: 'def456', text: 'Test content', marks: [] }]
    }],
    publishedAt: new Date().toISOString()
  })
  console.log('✅ SUCCESS! Created:', result._id)
  
  // Cleanup
  await client.delete('drafts.test-single-blog')
  console.log('✅ Cleanup complete')
  
} catch (error) {
  console.log('❌ Failed:', error.message)
  console.log('Full error:', error)
}
