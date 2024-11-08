import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Remove externalization unless absolutely necessary
    rollupOptions: {
      // No need to externalize react-router-dom unless using an external CDN
    }
  },
})
