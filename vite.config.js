import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/vite-react-course/', // Remplacez par le nom de votre repo GitHub
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Désactiver pour réduire la taille
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@shopify/polaris'],
          animations: ['framer-motion'],
          markdown: ['react-markdown', 'react-syntax-highlighter']
        }
      }
    },
    // Optimisations pour GitHub Pages
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Supprimer les console.log en production
        drop_debugger: true
      }
    }
  },
  // Optimisations pour le développement
  server: {
    host: true,
    port: 5173,
    open: true
  },
  // Prévisualisation du build
  preview: {
    port: 4173,
    host: true
  }
})
