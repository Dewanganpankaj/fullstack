import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    // take only http not https 
    proxy :{'/api':'http://localhost:4000'},
  },
  plugins: [react()],
})
