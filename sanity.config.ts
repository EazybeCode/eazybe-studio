import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Eazybe',

  projectId: '5awzi0t4',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Pages')
              .child(
                S.list()
                  .title('Pages')
                  .items([
                    S.listItem()
                      .title('Landing Page')
                      .child(S.document().schemaType('landingPage').documentId('landingPage')),
                  ])
              ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (listItem) => !['landingPage'].includes(listItem.getId() || '')
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
