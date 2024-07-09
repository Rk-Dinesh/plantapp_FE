import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Adjust according to your project's needs
          vendor: ['react', 'react-dom'],
         
          // Add other chunks as needed
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase the limit to 1000 kB
  },
})
