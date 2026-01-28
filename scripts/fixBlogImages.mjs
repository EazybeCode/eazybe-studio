import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '5awzi0t4',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
})

async function fixBlogImages() {
  const posts = await client.fetch('*[_type == "blogPost"]{ _id, featuredImage }')

  for (const post of posts) {
    if (typeof post.featuredImage === 'string') {
      console.log(`Fixing ${post._id} - removing invalid image URL`)
      await client.patch(post._id).unset(['featuredImage']).commit()
    }
  }

  console.log('Done fixing blog posts')
}

fixBlogImages()
