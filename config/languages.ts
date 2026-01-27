// Supported languages for the website
export const languages = [
  { id: 'en', title: 'English', isDefault: true },
  { id: 'es', title: 'Spanish' },
  { id: 'pt', title: 'Portuguese' },
  { id: 'tr', title: 'Turkish' },
] as const

export type Language = (typeof languages)[number]['id']

export const defaultLanguage = languages.find((l) => l.isDefault)?.id || 'en'
