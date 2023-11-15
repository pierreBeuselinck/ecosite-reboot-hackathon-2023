import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import nunjucks from 'vite-plugin-nunjucks'

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: '/',
  plugins: [
    nunjucks(),
],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
