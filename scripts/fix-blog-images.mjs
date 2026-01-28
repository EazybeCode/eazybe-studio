import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '5awzi0t4',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN
})

const invalidPosts = [
  'blogPost-top-10-whatsapp-business-tools',
  'blogPost-whatsapp-automation-best-practices',
  'blogPost-whatsapp-coexistence',
  'blogPost-whatsapp-crm-integration'
]

for (const id of invalidPosts) {
  try {
    await client.patch(id).unset(['featuredImage']).commit()
    console.log('Fixed:', id)
  } catch (err) {
    console.error('Error fixing', id, err.message)
  }
}

console.log('Done!')
