import handlebars from 'vite-plugin-handlebars'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const partialsBasePath = resolve(__dirname, 'partials')

export default {
  plugins: [
    handlebars({
      context: JSON.parse(readFileSync(resolve('resume.json'), 'utf-8')),
      helpers: {
        emailLink: email => `mailto:${email}`,
        slugify: value => value?.toLowerCase().replaceAll(/\s+/g, '-') || '',
        listify: list => list.map(item => item.name).reduce((acc, val) => acc + '; ' + val),
        listifyLanguages: list => list.map(item => `${item.language} (${item.fluency})`).reduce((acc, val) => acc + '; ' + val),
      },
      partialDirectory: [
        partialsBasePath,
        resolve(partialsBasePath, 'common'),
      ],
    }),
  ],
}
