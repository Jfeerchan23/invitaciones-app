import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite' // <-- Importas el plugin nuevo

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(), // <-- Lo añades aquí
  ],
})