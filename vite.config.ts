import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages：https://2030378835.github.io/slim-vid/
export default defineConfig({
  base: '/slim-vid/',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
})
