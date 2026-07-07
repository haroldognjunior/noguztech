import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain (noguztech.com) serves from root, so base stays '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
