// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  server: {
    port: 3000,
  },
  build: {
    // Comment out the rollupOptions unless necessary
    // rollupOptions: {
    //   input: 'src/main.js',
    // },
    outDir: 'dist',
    assetsDir: 'assets',
  },
  // ...
});
