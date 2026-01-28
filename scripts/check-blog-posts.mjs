import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '5awzi0t4',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01'
})

const posts = await client.fetch(`*[_type == "blogPost"]{_id, title, featuredImage}`)

posts.forEach(post => {
  if (post.featuredImage && typeof post.featuredImage === 'string') {
    console.log('INVALID IMAGE (string):', post._id, post.title, post.featuredImage)
  } else if (post.featuredImage && !post.featuredImage._type) {
    console.log('INVALID IMAGE (no _type):', post._id, post.title, JSON.stringify(post.featuredImage))
  }
})

console.log('Total posts checked:', posts.length)
