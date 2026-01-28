import { GoogleGenAI } from '@google/genai'
import { readFileSync } from 'fs'
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

async function listModels() {
  console.log('Listing available Gemini models...\n')

  try {
    const models = await genAI.models.list()

    console.log('Available models:')
    for await (const model of models) {
      console.log(`- ${model.name}`)
      if (model.supportedGenerationMethods) {
        console.log(`  Methods: ${model.supportedGenerationMethods.join(', ')}`)
      }
    }
  } catch (error) {
    console.error('Error listing models:', error.message)
  }
}

listModels()
