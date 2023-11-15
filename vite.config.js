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
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        ficheProduit: path.resolve(__dirname, 'fiche-produit.html'),
        livraison: path.resolve(__dirname, 'livraison.html'),
        paiement: path.resolve(__dirname, 'paiement.html'),
        confirmation: path.resolve(__dirname, 'confirmation.html'),
        classement: path.resolve(__dirname, 'classement.html'),
      }
    },
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
