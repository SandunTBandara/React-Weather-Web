import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"React-Weather-Web",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600,
  },
})
