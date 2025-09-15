import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Optimize for mobile performance
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['@tanstack/react-router'],
          ui: ['@tanstack/react-query'],
          // Split large components into separate chunks
          tokenomics: ['./src/components/features/landing/Tokenomics'],
        },
      },
    },
    // Enable compression
    minify: 'terser',
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Mobile optimizations
    target: 'es2015',
    cssCodeSplit: true,
  },
  // Optimize dev server
  server: {
    hmr: {
      overlay: false,
    },
  },
})
