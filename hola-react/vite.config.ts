import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rolldownOptions: {
      // Dos páginas: la app con componentes y el «Hola mundo» sin JSX
      input: {
        main: 'index.html',
        sinJsx: 'sin-jsx.html',
      },
    },
  },
})
