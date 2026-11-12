/// <reference types="vitest/config" />
import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Replaces %SITE_URL% in index.html with SITE_URL from .env (or the environment).
 * Link-preview tags need absolute URLs, so the production build warns when it's missing.
 */
function siteUrl(url: string): Plugin {
  return {
    name: 'site-url',
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        if (!url && !ctx.server) {
          this.warn('SITE_URL is not set in .env, so link previews (og:image) will not work on LinkedIn/WhatsApp.')
        }
        // A canonical link is only meaningful with a real address (and Vite can't resolve a bare "/").
        if (!url) html = html.replace(/\s*<link rel="canonical"[^>]*>/, '')
        return html.replaceAll('%SITE_URL%', url)
      },
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const url = (env.SITE_URL ?? '').trim().replace(/\/+$/, '')

  return {
    plugins: [react(), tailwindcss(), siteUrl(url)],
    // Relative asset paths so the build works on GitHub Pages (username.github.io/repo) and Vercel alike.
    base: './',
    test: {
      environment: 'jsdom',
      setupFiles: './src/test-setup.ts',
    },
  }
})
