import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

<<<<<<< HEAD
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === "production" 
    ? "/costa-business-project/" 
    : "/",
})
=======

export default defineConfig({
plugins: [react()],
})
>>>>>>> bade6a07e1a1e79a40e9f6b0d6acf5d2f5e75b77
