import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

const copyVerificationFile = () => {
  const src = path.resolve(__dirname, 'google320992157351efdc.html')
  const dest = path.resolve(__dirname, 'dist', 'google320992157351efdc.html')

  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest)
    console.log('✅ Archivo de verificación de Google copiado correctamente.')
  } else {
    console.warn('⚠️ No se encontró el archivo de verificación de Google.')
  }
}

export default defineConfig({
  base: "/Euthymia/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5173
  },
  // Hook después del build
  buildEnd: () => {
    copyVerificationFile()
  }
})
