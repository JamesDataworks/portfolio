import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/* ═══════════════════════════════════════════════════════════════
   GITHUB PAGES BASE PATH  —  read this before your first deploy
   ───────────────────────────────────────────────────────────────
   If your repo is named  <your-username>.github.io   → keep '/'
   If your repo is named anything else (e.g. portfolio)
       → change it to  '/portfolio/'   (keep both slashes)

   Getting this wrong is the #1 cause of a blank white page
   after deploying. Nothing else in the project needs editing.
   ═══════════════════════════════════════════════════════════════ */
const BASE = '/'

export default defineConfig({
  base: BASE,
  plugins: [react(), tailwindcss()],
})
