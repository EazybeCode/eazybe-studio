import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '5awzi0t4',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN
})

// Check remaining drafts
const drafts = await client.fetch('*[_type == "blogPost" && _id in path("drafts.**")]{_id, title}')
console.log('Remaining drafts:', drafts.length)
drafts.forEach(d => console.log('  -', d.title))

// Check published posts
const published = await client.fetch('*[_type == "blogPost" && !(_id in path("drafts.**"))]{_id, title}')
console.log('\nPublished posts:', published.length)
