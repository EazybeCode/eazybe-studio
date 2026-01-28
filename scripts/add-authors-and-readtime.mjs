import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '5awzi0t4',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN
})

// Authors to create
const authors = [
  {
    _id: 'author-sagar',
    _type: 'author',
    name: 'Sagar',
    slug: { _type: 'slug', current: 'sagar' },
    role: 'Content Writer',
    bio: 'Sagar is a content writer at Eazybe, specializing in WhatsApp business automation and CRM integrations.'
  },
  {
    _id: 'author-karan',
    _type: 'author',
    name: 'Karan',
    slug: { _type: 'slug', current: 'karan' },
    role: 'Product Specialist',
    bio: 'Karan is a product specialist at Eazybe, helping businesses optimize their WhatsApp sales workflows.'
  },
  {
    _id: 'author-sejal',
    _type: 'author',
    name: 'Sejal',
    slug: { _type: 'slug', current: 'sejal' },
    role: 'Marketing Lead',
    bio: 'Sejal leads marketing at Eazybe, sharing insights on sales enablement and customer engagement strategies.'
  },
  {
    _id: 'author-hassan',
    _type: 'author',
    name: 'Hassan',
    slug: { _type: 'slug', current: 'hassan' },
    role: 'Technical Writer',
    bio: 'Hassan is a technical writer at Eazybe, creating guides on CRM integrations and WhatsApp API features.'
  }
]

// Create authors
console.log('Creating authors...')
for (const author of authors) {
  try {
    await client.createOrReplace(author)
    console.log('  Created:', author.name)
  } catch (error) {
    console.log('  Error creating', author.name + ':', error.message)
  }
}

// Calculate read time from content blocks
function calculateReadTime(blocks) {
  if (!blocks || blocks.length === 0) return 3 // default 3 min

  // Count words in all text blocks
  let wordCount = 0
  for (const block of blocks) {
    if (block.children) {
      for (const child of block.children) {
        if (child.text) {
          wordCount += child.text.split(/\s+/).filter(w => w.length > 0).length
        }
      }
    }
  }

  // Average reading speed is ~200 words per minute
  const minutes = Math.ceil(wordCount / 200)

  // Clamp between 3 and 15 minutes
  return Math.max(3, Math.min(15, minutes))
}

// Get all blog posts
console.log('\nFetching blog posts...')
const posts = await client.fetch('*[_type == "blogPost"]{_id, title, content, author, readTime}')
console.log('Found', posts.length, 'posts')

// Update posts with random authors and read time
const authorIds = authors.map(a => a._id)
let updated = 0

console.log('\nUpdating posts...')
for (const post of posts) {
  const updates = {}

  // Add random author if missing
  if (!post.author) {
    const randomAuthor = authorIds[Math.floor(Math.random() * authorIds.length)]
    updates.author = {
      _type: 'reference',
      _ref: randomAuthor
    }
  }

  // Calculate and set read time
  const readTime = calculateReadTime(post.content)
  updates.readTime = readTime

  if (Object.keys(updates).length > 0) {
    try {
      await client.patch(post._id)
        .set(updates)
        .commit()
      updated++
      if (updated % 10 === 0) {
        console.log('  Updated', updated, 'posts...')
      }
    } catch (error) {
      console.log('  Error updating', post._id + ':', error.message)
    }
  }
}

console.log('\nDone! Updated', updated, 'posts')

// Verify
console.log('\nVerification:')
const sample = await client.fetch('*[_type == "blogPost" && language == "en"][0...3]{title, readTime, "author": author->name}')
sample.forEach(p => {
  console.log('  -', p.title)
  console.log('    Author:', p.author, '| Read time:', p.readTime, 'min')
})
