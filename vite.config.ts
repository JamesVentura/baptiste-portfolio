import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Le site est servi depuis https://<user>.github.io/baptiste-portfolio/
  // (une "project page"), donc les assets doivent être résolus depuis ce
  // sous-dossier plutôt que depuis la racine du domaine.
  base: '/baptiste-portfolio/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
