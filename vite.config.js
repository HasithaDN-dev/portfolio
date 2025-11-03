import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use BASE_URL env at build time (set to '/REP0/' IN CI or for local production build)
export default defineConfig({
  base: process.env.BASE_URL || '/',
  plugins: [react()],
})