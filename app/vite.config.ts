import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' so the built site works when opened from any sub-path / file host.
export default defineConfig({
  plugins: [react()],
  base: './',
})
