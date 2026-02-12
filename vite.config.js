import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/To-Do_List/',   // ⚠ MUST match your repo name exactly
  plugins: [react()],
})
