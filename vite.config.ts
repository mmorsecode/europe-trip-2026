import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icons.svg'],
      manifest: {
        name: 'Morse Family Europe Trip 2026',
        short_name: 'Europe Trip',
        description: 'Morse family trip itinerary — Apr 8–22, 2026',
        theme_color: '#1e3a5f',
        background_color: '#f8fafc',
        display: 'standalone',
        start_url: '/europe-trip-2026/',
        scope: '/europe-trip-2026/',
        icons: [
          {
            src: '/europe-trip-2026/icons.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,woff2}'],
      },
    }),
  ],
  base: '/europe-trip-2026/',
})
