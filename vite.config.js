import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Default to relative paths which work for GitHub Pages (project or user pages)
// If you need a specific absolute base (e.g. '/repo-name/'), set the
// GH_PAGES_BASE environment variable or GH_PAGES_REPO to auto-generate it.
const repoName = process.env.GH_PAGES_REPO || 'jbsolutions'

export default defineConfig(() => {
  // Use relative assets by default so the site still works when served
  // from a subpath or from the root. Override with GH_PAGES_BASE if needed.
  const base = process.env.GH_PAGES_BASE || './'
  return {
    base,
    plugins: [react()],
  }
})
