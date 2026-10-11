import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
  },
  base: '/portfolio/',
  test: {
    include: ['src/**/*.test.{ts,tsx}'],
    environment: 'jsdom',
  },
})
