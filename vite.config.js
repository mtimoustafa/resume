import handlebars from 'vite-plugin-handlebars'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const partialsBasePath = resolve(__dirname, 'partials')

export default {
  plugins: [
    handlebars({
      context: JSON.parse(readFileSync(resolve('resume.json'), 'utf-8')),
      helpers: {
        socialHandle: handle => `@${handle}`,
        emailLink: email => `mailto:${email}`,
        slugify: value => value?.toLowerCase().replaceAll(/\s+/g, '-') || '',
      },
      partialDirectory: [
        partialsBasePath,
        resolve(partialsBasePath, 'common'),
      ],
    }),
  ],
}
