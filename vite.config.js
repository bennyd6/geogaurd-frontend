import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  // Adjust this if using a sub-path for deployment (e.g., '/myapp/')
  build: {
    minify: true,  // Minify the code for production
    rollupOptions: {
      // Avoid bundling React and ReactDOM if they are provided externally (e.g., via CDN)
      // external: ['react', 'react-dom'],
      // external: ['react-awesome-reveal'],
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables.scss";` // Global SCSS variables if needed
      },
    },
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3000', // Proxy API requests during development
    },
  },
  optimizeDeps: {
    include: ['axios','react-awesome-reveal'],  // Pre-bundle axios or other dependencies if needed
  },
  define: {
    // Example of injecting environment variables if needed
    'process.env.API_URL': JSON.stringify(process.env.API_URL || 'http://localhost:3000'),
  },
});
