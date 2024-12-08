import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import glb from 'vite-plugin-glsl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), glb()],
})
