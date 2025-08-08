import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import basicSsl from '@vitejs/plugin-basic-ssl'

import { fileURLToPath, URL } from 'node:url'


// https://vite.dev/config/

export default defineConfig({
  plugins: [
    vue(),
    basicSsl()
    
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
      additionalData: `@import "@/assets/helpers/index.scss";`//подключение стилей которые используются в каждом модуле
      
      }
    }
  },
  server: {
    host: true,
    https: true
  }

})
