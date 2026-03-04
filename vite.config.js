import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      injectManifest: true,
      devOptions: {
        enabled: true // Habilita SW en desarrollo
      },
      workbox: {
        globPatterns: [
          '**/*.{js,css,html,ico,png,svg,woff2}',
        ],
      },
      manifest: {
        name: 'Mi PWA con Vite',
        short_name: 'MiApp',
        description: 'Mi primera PWA con Vite',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});
