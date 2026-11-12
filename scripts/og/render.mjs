// Renders scripts/og/og-image.html to public/og-image.jpg (1200×630) using your installed Chrome.
// Run with: npm run og
// Set CHROME_PATH if Chrome isn't in the default macOS location.
import { existsSync, statSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import puppeteer from 'puppeteer-core'

const here = dirname(fileURLToPath(import.meta.url))
const template = resolve(here, 'og-image.html')
const output = resolve(here, '../../public/og-image.jpg')

const chromePath =
  process.env.CHROME_PATH ??
  [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
    '/usr/bin/google-chrome',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  ].find(existsSync)

if (!chromePath) {
  console.error('Could not find Chrome. Set CHROME_PATH to your Chrome/Chromium executable.')
  process.exit(1)
}

const browser = await puppeteer.launch({
  executablePath: chromePath,
  headless: true,
  args: ['--allow-file-access-from-files'],
})
try {
  const page = await browser.newPage()
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 })
  await page.goto(pathToFileURL(template).href, { waitUntil: 'networkidle0' })
  await page.evaluate(() => document.fonts.ready)
  await page.screenshot({ path: output, type: 'jpeg', quality: 90 })
  console.log(`Wrote ${output} (${Math.round(statSync(output).size / 1024)} KB)`)
} finally {
  await browser.close()
}
