import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@MainEvent': path.resolve(__dirname, './src/assets/MainEventImg'),
      // 여기에 더 많은 alias를 추가할 수 있습니다.
    },
  },
})
