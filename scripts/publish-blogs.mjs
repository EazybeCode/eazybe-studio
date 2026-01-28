import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '5awzi0t4',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN
})

console.log('Publishing all draft blog posts...\n')

try {
  // Fetch all draft blog posts
  const drafts = await client.fetch(`*[_type == "blogPost" && _id in path("drafts.**")]{_id, title}`)

  console.log(`Found ${drafts.length} draft blog posts to publish\n`)

  let published = 0
  let failed = 0

  for (const draft of drafts) {
    const draftId = draft._id
    const publishedId = draftId.replace('drafts.', '')

    try {
      // Get the full draft document
      const draftDoc = await client.getDocument(draftId)

      if (!draftDoc) {
        console.log(`  ✗ Could not find draft: ${draftId}`)
        failed++
        continue
      }

      // Create published version (remove drafts. prefix and _rev)
      const publishedDoc = {
        ...draftDoc,
        _id: publishedId
      }
      delete publishedDoc._rev

      // Create or replace the published document
      await client.createOrReplace(publishedDoc)

      // Delete the draft
      await client.delete(draftId)

      console.log(`  ✓ Published: ${draft.title}`)
      published++
    } catch (error) {
      console.log(`  ✗ Failed to publish ${draft.title}: ${error.message}`)
      failed++
    }

    // Small delay to avoid rate limiting
    await new Promise(r => setTimeout(r, 200))
  }

  console.log(`\n=== Publishing Complete ===`)
  console.log(`Published: ${published}`)
  console.log(`Failed: ${failed}`)

} catch (error) {
  console.error('Error:', error.message)
}
