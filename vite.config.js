import handlebars from 'vite-plugin-handlebars'
import { readFileSync } from 'fs'
import { resolve } from 'path'

export default {
  plugins: [
    handlebars({
      context: JSON.parse(readFileSync(resolve('resume.json'), 'utf-8')),
      helpers: {
        slugify: value => value?.toLowerCase().replaceAll(/\s+/g, '-') || ''
      },
      partialDirectory: resolve(__dirname, 'partials'),
    }),
  ],
}
