import { GoogleGenAI } from '@google/genai'
import { createClient } from '@sanity/client'
import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Read tokens from .env file
const envPath = resolve(__dirname, '..', '.env')
const envContent = readFileSync(envPath, 'utf-8')
const sanityTokenMatch = envContent.match(/SANITY_TOKEN=(.+)/)
const geminiKeyMatch = envContent.match(/GEMINI_API_KEY=(.+)/)

const sanityToken = sanityTokenMatch ? sanityTokenMatch[1].trim() : null
const geminiKey = geminiKeyMatch ? geminiKeyMatch[1].trim() : null

if (!sanityToken || !geminiKey) {
  throw new Error('SANITY_TOKEN or GEMINI_API_KEY not found in .env file')
}

// Initialize clients
const sanityClient = createClient({
  projectId: '5awzi0t4',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: sanityToken,
})

const genAI = new GoogleGenAI({ apiKey: geminiKey })

// Feature definitions with detailed prompts for image generation
const features = [
  {
    slug: 'cloud-backup',
    documentId: 'productPage-cloud-backup-en',
    name: 'Cloud Backup',
    imagePrompt: `Create a modern, professional illustration for a SaaS product feature called "Cloud Backup for WhatsApp".

    Visual elements to include:
    - A stylized cloud icon with a shield/lock symbol representing security
    - WhatsApp-style chat bubbles being synced to the cloud
    - Data streams flowing upward into secure cloud storage
    - Modern dark theme with blue (#3B82F6) accent colors
    - Clean, minimalist tech aesthetic
    - No text or logos, just visual elements

    Style: Modern SaaS product illustration, dark background (#0f172a), glowing blue accents, 3D isometric or flat design, professional and trustworthy feel.`
  },
  {
    slug: 'team-inbox',
    documentId: 'productPage-team-inbox-en',
    name: 'Team Inbox',
    imagePrompt: `Create a modern, professional illustration for a SaaS product feature called "Team Inbox for WhatsApp".

    Visual elements to include:
    - A unified dashboard showing multiple conversation threads
    - Multiple user avatars representing team members
    - Routing arrows showing message distribution
    - Collaboration indicators (shared views, assignments)
    - Modern dark theme with emerald/green (#10B981) accent colors
    - Clean inbox interface visualization

    Style: Modern SaaS product illustration, dark background (#0f172a), glowing green accents, shows team collaboration, professional dashboard aesthetic.`
  },
  {
    slug: 'whatsapp-crm',
    documentId: 'productPage-whatsapp-crm-en',
    name: 'WhatsApp CRM',
    imagePrompt: `Create a modern, professional illustration for a SaaS product feature called "WhatsApp as CRM".

    Visual elements to include:
    - WhatsApp interface merged with CRM pipeline/funnel visualization
    - Colorful labels/tags on conversations
    - Deal stages represented as a kanban or funnel
    - Contact cards with relationship data
    - Modern dark theme with violet/purple (#8B5CF6) accent colors
    - Shows organization and deal tracking

    Style: Modern SaaS product illustration, dark background (#0f172a), glowing purple accents, CRM pipeline visualization, professional sales tool aesthetic.`
  },
  {
    slug: 'revenue-inbox',
    documentId: 'productPage-revenue-inbox-en',
    name: 'Revenue Inbox',
    imagePrompt: `Create a modern, professional illustration for a SaaS product feature called "Revenue Inbox".

    Visual elements to include:
    - Inbox view with deal health indicators (hot, warm, cold)
    - Revenue/dollar signs integrated subtly
    - Heat map or color-coded conversation priorities
    - Trending up arrows showing growth
    - Modern dark theme with teal (#14B8A6) accent colors
    - Shows deal intelligence and prioritization

    Style: Modern SaaS product illustration, dark background (#0f172a), glowing teal accents, revenue intelligence dashboard, data-driven sales aesthetic.`
  },
  {
    slug: 'quick-reply',
    documentId: 'productPage-quick-reply-en',
    name: 'Quick Replies',
    imagePrompt: `Create a modern, professional illustration for a SaaS product feature called "Quick Replies for WhatsApp".

    Visual elements to include:
    - Lightning bolt or zap icon representing speed
    - Message templates being selected and sent
    - Shortcut keyboard hints
    - Quick response bubbles with placeholder text
    - Modern dark theme with amber/yellow (#F59E0B) accent colors
    - Shows efficiency and speed

    Style: Modern SaaS product illustration, dark background (#0f172a), glowing amber accents, fast response visualization, productivity tool aesthetic.`
  },
  {
    slug: 'scheduler',
    documentId: 'productPage-scheduler-en',
    name: 'Message Scheduler',
    imagePrompt: `Create a modern, professional illustration for a SaaS product feature called "Message Scheduler for WhatsApp".

    Visual elements to include:
    - Calendar or clock interface
    - Scheduled messages in a queue
    - Time zones or global reach indicators
    - Automated sending visualization
    - Modern dark theme with pink (#EC4899) accent colors
    - Shows timing and automation

    Style: Modern SaaS product illustration, dark background (#0f172a), glowing pink accents, scheduling interface, time management aesthetic.`
  },
  {
    slug: 'rep-radar',
    documentId: 'productPage-rep-radar-en',
    name: 'Rep Radar',
    imagePrompt: `Create a modern, professional illustration for a SaaS product feature called "Rep Radar" (sales rep performance tracking).

    Visual elements to include:
    - Radar or sonar-style visualization
    - Activity metrics and performance indicators
    - Multiple rep avatars with activity status
    - Analytics charts showing response times
    - Modern dark theme with indigo (#6366F1) accent colors
    - Shows monitoring and insights

    Style: Modern SaaS product illustration, dark background (#0f172a), glowing indigo accents, radar/monitoring visualization, manager oversight aesthetic.`
  },
  {
    slug: 'whatsapp-copilot',
    documentId: 'productPage-whatsapp-copilot-en',
    name: 'WhatsApp Copilot',
    imagePrompt: `Create a modern, professional illustration for a SaaS product feature called "WhatsApp Copilot" (AI assistant).

    Visual elements to include:
    - AI brain or neural network visualization
    - Sparkles/magic wand representing AI assistance
    - Auto-generated reply suggestions
    - Conversation summarization icons
    - Modern dark theme with sky blue (#0EA5E9) accent colors
    - Shows AI-powered intelligence

    Style: Modern SaaS product illustration, dark background (#0f172a), glowing sky blue accents, AI/ML visualization, futuristic assistant aesthetic.`
  }
]

async function generateImage(prompt, featureName) {
  console.log(`Generating image for ${featureName}...`)

  try {
    const response = await genAI.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: [{
        parts: [{
          text: `Generate a high-quality product illustration image. ${prompt}

          Important: Generate ONLY the image, no text response. The image should be 1200x800 pixels, landscape orientation, suitable for a SaaS product feature page hero section.`
        }]
      }],
      generationConfig: {
        responseModalities: ['image', 'text'],
      }
    })

    // Extract image from response
    const result = response.response
    if (result.candidates && result.candidates[0]?.content?.parts) {
      for (const part of result.candidates[0].content.parts) {
        if (part.inlineData) {
          console.log(`✓ Image generated for ${featureName}`)
          return {
            data: Buffer.from(part.inlineData.data, 'base64'),
            mimeType: part.inlineData.mimeType || 'image/png'
          }
        }
      }
    }

    console.log(`⚠ No image in response for ${featureName}, trying Imagen...`)
    return null
  } catch (error) {
    console.error(`Error generating image for ${featureName}:`, error.message)
    return null
  }
}

async function generateImageWithImagen(prompt, featureName) {
  console.log(`Trying Imagen for ${featureName}...`)

  try {
    const response = await genAI.models.generateImages({
      model: 'imagen-4.0-fast-generate-001',
      prompt: prompt,
      config: {
        numberOfImages: 1,
        aspectRatio: '16:9',
        outputMimeType: 'image/png'
      }
    })

    if (response.generatedImages && response.generatedImages.length > 0) {
      const image = response.generatedImages[0]
      console.log(`✓ Imagen generated for ${featureName}`)
      return {
        data: Buffer.from(image.image.imageBytes, 'base64'),
        mimeType: 'image/png'
      }
    }

    return null
  } catch (error) {
    console.error(`Imagen error for ${featureName}:`, error.message)
    return null
  }
}

async function uploadToSanity(imageBuffer, mimeType, filename) {
  console.log(`Uploading ${filename} to Sanity...`)

  try {
    const asset = await sanityClient.assets.upload('image', imageBuffer, {
      filename: filename,
      contentType: mimeType
    })

    console.log(`✓ Uploaded: ${asset._id}`)
    return asset
  } catch (error) {
    console.error(`Upload error for ${filename}:`, error.message)
    return null
  }
}

async function updateFeaturePage(documentId, assetId) {
  console.log(`Updating ${documentId} with image...`)

  try {
    await sanityClient.patch(documentId)
      .set({
        'hero.heroImage': {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: assetId
          }
        }
      })
      .commit()

    console.log(`✓ Updated ${documentId}`)
    return true
  } catch (error) {
    console.error(`Update error for ${documentId}:`, error.message)
    return false
  }
}

async function main() {
  console.log('Starting feature image generation...\n')

  const results = []

  for (const feature of features) {
    console.log(`\n--- Processing: ${feature.name} ---`)

    // Try Gemini first, then Imagen
    let imageResult = await generateImage(feature.imagePrompt, feature.name)

    if (!imageResult) {
      imageResult = await generateImageWithImagen(feature.imagePrompt, feature.name)
    }

    if (imageResult) {
      // Save locally as backup
      const localPath = resolve(__dirname, '..', 'generated-images', `${feature.slug}.png`)
      try {
        writeFileSync(localPath, imageResult.data)
        console.log(`Saved locally: ${localPath}`)
      } catch (e) {
        // Directory might not exist, that's ok
      }

      // Upload to Sanity
      const asset = await uploadToSanity(
        imageResult.data,
        imageResult.mimeType,
        `${feature.slug}-hero.png`
      )

      if (asset) {
        // Update the feature page
        const updated = await updateFeaturePage(feature.documentId, asset._id)
        results.push({ feature: feature.name, success: updated, assetId: asset._id })
      } else {
        results.push({ feature: feature.name, success: false, error: 'Upload failed' })
      }
    } else {
      results.push({ feature: feature.name, success: false, error: 'Generation failed' })
    }

    // Small delay between requests
    await new Promise(r => setTimeout(r, 2000))
  }

  console.log('\n\n=== RESULTS ===')
  console.table(results)

  const successful = results.filter(r => r.success).length
  console.log(`\nCompleted: ${successful}/${features.length} images generated and uploaded`)
}

main().catch(console.error)
