import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '5awzi0t4',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN
})

// Check token info
console.log('Checking current user...')
try {
  const user = await client.request({
    url: '/users/me',
    withCredentials: true
  })
  console.log('User:', user)
} catch (e) {
  console.log('Could not get user info:', e.message)
}

// Try using mutation API directly
console.log('\nTrying mutation API...')
try {
  const result = await client.request({
    url: `/data/mutate/production`,
    method: 'POST',
    body: {
      mutations: [{
        createOrReplace: {
          _id: 'drafts.test-mutation',
          _type: 'blogPost',
          title: 'Test Mutation',
          slug: { _type: 'slug', current: 'test-mutation' },
          language: 'en',
          category: 'How-To Guides'
        }
      }]
    }
  })
  console.log('✅ Mutation succeeded:', result)
  
  // Cleanup
  await client.request({
    url: `/data/mutate/production`,
    method: 'POST',
    body: {
      mutations: [{ delete: { id: 'drafts.test-mutation' } }]
    }
  })
  console.log('✅ Cleanup done')
} catch (e) {
  console.log('❌ Mutation failed:', e.message)
  if (e.response) {
    console.log('Response:', e.response.body)
  }
}
