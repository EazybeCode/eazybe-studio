import { GoogleGenAI } from '@google/genai'
import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Read API key from .env file
const envPath = resolve(__dirname, '..', '.env')
const envContent = readFileSync(envPath, 'utf-8')
const geminiKeyMatch = envContent.match(/GEMINI_API_KEY=(.+)/)
const geminiKey = geminiKeyMatch ? geminiKeyMatch[1].trim() : null

if (!geminiKey) {
  throw new Error('GEMINI_API_KEY not found in .env file')
}

const genAI = new GoogleGenAI({ apiKey: geminiKey })

const prompt = `Create a modern, professional illustration for a SaaS product feature called "Cloud Backup for WhatsApp".

Visual elements to include:
- A stylized cloud icon with a shield/lock symbol representing security
- WhatsApp-style chat bubbles being synced to the cloud
- Data streams flowing upward into secure cloud storage
- Modern dark theme with blue (#3B82F6) accent colors
- Clean, minimalist tech aesthetic
- No text or logos, just visual elements

Style: Modern SaaS product illustration, dark background (#0f172a), glowing blue accents, 3D isometric or flat design, professional and trustworthy feel.`

async function testImageGeneration() {
  console.log('Testing image generation with gemini-2.5-flash-image...\n')

  try {
    const response = await genAI.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: [{
        parts: [{
          text: `Generate a high-quality product illustration image. ${prompt}

          Important: Generate ONLY the image. The image should be landscape orientation, suitable for a SaaS product feature page.`
        }]
      }],
      generationConfig: {
        responseModalities: ['image', 'text'],
      }
    })

    const result = response.response
    if (result.candidates && result.candidates[0]?.content?.parts) {
      for (const part of result.candidates[0].content.parts) {
        if (part.inlineData) {
          console.log('✓ Image generated successfully!')
          console.log(`  MIME type: ${part.inlineData.mimeType}`)

          const imageBuffer = Buffer.from(part.inlineData.data, 'base64')
          const outputPath = resolve(__dirname, '..', 'generated-images', 'test-cloud-backup.png')
          writeFileSync(outputPath, imageBuffer)
          console.log(`  Saved to: ${outputPath}`)
          return true
        }
        if (part.text) {
          console.log('Text response:', part.text.substring(0, 200))
        }
      }
    }

    console.log('No image in response')
    console.log('Full response:', JSON.stringify(result, null, 2).substring(0, 1000))
    return false
  } catch (error) {
    console.error('Error:', error.message)
    if (error.message.includes('429')) {
      console.log('\nQuota exceeded. The API key needs billing enabled or you need to wait for quota reset.')
    }
    return false
  }
}

testImageGeneration()
