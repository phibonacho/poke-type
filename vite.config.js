import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa'

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA({
    mode: "development",
    base: "/",
    srcDir: "src",
    filename: "sw.js",
    includeAssets: ["/favicon.png"],
    workbox: {
      clientsClaim: true,
      skipWaiting: true
    },
    strategies: "injectManifest",
    manifest: {
      name: "Pokemon Type Checker",
      short_name: "PTC",
      theme_color: "#1e293b",
      start_url: "/",
      display: "standalone",
      background_color: "#FFF",
      icons: [
        {
          "src": "/android-chrome-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "/android-chrome-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
        }
      ],
    },
  })],
  define: {
    '__APP_VERSION__': JSON.stringify(process.env.npm_package_version),
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 8080
  }
})