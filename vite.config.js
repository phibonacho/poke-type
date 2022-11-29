import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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