import express from 'express'
import { dirname, resolve } from 'path'

const app = express()
const port = process.env.PORT ?? 3000

app.use(express.static('dist'))

app.get('/', (request, response) => {
  response.sendFile(resolve('dist/index.html'))
})

app.listen(port, () => {
  console.log(`Serving resume on port ${port}`)
})
