import { defineConfig } from 'vite'

export default defineConfig({
  // Server configuration for Lovable
  server: {
    port: 8080
  },
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