import { launch } from 'puppeteer'
import { writeFileSync } from 'fs'
import { resolve } from 'path'

async function generatePdf() {
  const browser = await launch({ headless: true })

  try {
    const page = await browser.newPage()
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' })

    writeFileSync(
      resolve('public/resume.pdf'),
      await page.pdf({ format: 'A4' })
    )
  } catch (error) {
    console.error(error)
  }

  await browser.close()
}

generatePdf()
