import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '5awzi0t4',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN
})

// Test with drafts prefix
console.log('Testing with drafts. prefix...')
try {
  const doc = await client.create({
    _type: 'blogPost',
    _id: 'drafts.test-permission-check-2',
    title: 'Permission Test 2',
    slug: { _type: 'slug', current: 'test-permission-check-2' },
    language: 'en',
    category: 'How-To Guides'
  })
  console.log('✅ SUCCESS with drafts prefix!')
  await client.delete('drafts.test-permission-check-2')
  console.log('✅ Cleanup complete')
} catch (error) {
  console.log('❌ Failed with drafts:', error.message)
}

// Test without drafts prefix
console.log('\nTesting without drafts. prefix...')
try {
  const doc = await client.createOrReplace({
    _id: 'blogPost-test-no-prefix',
    _type: 'blogPost',
    title: 'Permission Test No Prefix',
    slug: { _type: 'slug', current: 'test-no-prefix' },
    language: 'en',
    category: 'How-To Guides'
  })
  console.log('✅ SUCCESS without drafts prefix!')
  await client.delete('blogPost-test-no-prefix')
  console.log('✅ Cleanup complete')
} catch (error) {
  console.log('❌ Failed without drafts:', error.message)
}
