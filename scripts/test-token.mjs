import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '5awzi0t4',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN
})

// First test read access
console.log('Testing token validity...')
try {
  const count = await client.fetch('count(*[_type == "blogPost"])')
  console.log(`✅ Token is valid - found ${count} blog posts`)
} catch (error) {
  console.log('❌ Token is invalid or has no read access:', error.message)
  process.exit(1)
}

// Test write permission
console.log('\nTesting write permissions...')
try {
  const testDoc = await client.create({
    _type: 'blogPost',
    _id: 'drafts.test-permission-check',
    title: 'Permission Test',
    slug: { _type: 'slug', current: 'test-permission-check' },
    language: 'en',
    category: 'How-To Guides'
  })
  console.log('✅ SUCCESS: Token has WRITE permissions!')
  
  // Clean up
  await client.delete('drafts.test-permission-check')
  console.log('✅ Cleanup complete')
  process.exit(0)
} catch (error) {
  console.log('❌ Token does NOT have write permissions')
  console.log('   Error:', error.message)
  process.exit(1)
}
