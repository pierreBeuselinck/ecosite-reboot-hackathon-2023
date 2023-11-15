import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import nunjucks from 'vite-plugin-nunjucks';
// import data from './src/public/data/data.json';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: '/',
  plugins: [nunjucks({
    globals: { 
      products: [
        { nom: "Produit A", description: "Description du produit A", prix: "20€" },
        { nom: "Produit B", description: "Description du produit B", prix: "30€" },
        { nom: "Produit C", description: "Description du produit C", prix: "40€" }
      ] 
    }
  })],
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
