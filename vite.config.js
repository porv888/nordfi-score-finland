import { defineConfig } from 'vite'

export default defineConfig({
  // Serve static files from root
  root: '.',
  // Build configuration for static files
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  // Serve assets from current directory
  publicDir: 'public'
})