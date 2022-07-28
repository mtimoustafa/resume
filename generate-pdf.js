import { launch } from 'puppeteer'
import { writeFileSync } from 'fs'
import { resolve } from 'path'

async function generatePdf() {
  const browser = await launch({ headless: true })

  try {
    const page = await browser.newPage()
    await page.goto('http://localhost:4173', { waitUntil: 'networkidle0' })

    writeFileSync(
      resolve('resume.pdf'),
      await page.pdf({
        format: 'A4',
        printBackground: true,
      })
    )
  } catch (error) {
    console.error('PDF generation failed. Please make sure a Vite preview server is running using "yarn stage".\n\n', error)
  }

  await browser.close()
}

generatePdf()
