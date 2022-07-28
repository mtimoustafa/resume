import handlebars from 'vite-plugin-handlebars'
import { readFileSync } from 'fs'
import { resolve } from 'path'

export default {
  plugins: [
    handlebars({
      context: JSON.parse(readFileSync(resolve('resume.json'), 'utf-8')),
      partialDirectory: resolve('src/partials'),
    }),
  ],
}
