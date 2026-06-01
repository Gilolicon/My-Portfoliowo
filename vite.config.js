import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // 👈 Check spelling: "plugin-react"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // 👈 Ensure it's a simple slash for Vercel
})