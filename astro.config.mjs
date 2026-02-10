import { defineConfig } from 'astro/config';
// import AstroPWA from '@vite-pwa/astro'
import serviceWorker from "@ayco/astro-sw";


import vue from '@astrojs/vue';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [/*      AstroPWA({

         devOptions: {
          enabled: true
        },
        customReference: 'sw',
        includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png',
          
          'images/*.{png,svg,jpg,gif,webp,svg,avif}',
          'images/logos/*.{png,svg,jpg,gif,webp,svg}',

        ],

      }

        )*/
  serviceWorker({
  path: "./src/sw.ts",
   registrationHooks: {
    afterRegistration: async () => {
      const sw = await navigator.serviceWorker.getRegistration();
      console.log(">>> registrered", sw);
    },
    installing: () => console.log("installing..."),
    waiting: () => console.log("waiting..."),
    active: () => console.log("active..."),
    error: (error) => console.error(error),
    unsupported: () => console.log(":("),
  },
}), vue(), mdx()],
  vite: {
    plugins: [tailwindcss(),
      /* VitePWA({
        registerType: 'autoUpdate',
        strategies: 'injectManifest',   // important pour SW custom
        srcDir: 'src',
        filename: 'sw.js',
        injectRegister: 'auto',
        manifest: {
          name: 'Mon App',
          short_name: 'App',
          start_url: '/',
          display: 'standalone',
          background_color: '#ffffff',
          theme_color: '#000000',
          icons: [
            {
              src: '/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        }
      })*/

    ]
  }
});