import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'example-library': 'example-library/src/main.ts',
      '@vue-bridge/runtime': '@vue-bridge/runtime/vue3',
    },
  },
  optimizeDeps: {
    exclude: ['vue', '@vue-bridge/runtime'],
  },
})
