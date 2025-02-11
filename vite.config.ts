import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Replace react-refresh with the updated React plugin

export default defineConfig({
  plugins: [react()], // Updated to use @vitejs/plugin-react
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables.scss";` // Globally import SCSS variables/mixins
      }
    }
  },
  server: {
    port: 3000, // Specifies the dev server port
    open: true, // Automatically opens the browser when the server starts
  },
  build: {
    sourcemap: true, // Generate source maps for easier debugging
    target: 'esnext', // Optimize build for modern environments
  }
});