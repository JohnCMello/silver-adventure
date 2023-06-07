/// <reference types="vitest" />

import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import AutoImport from 'unplugin-auto-import/vite'

// * https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    AutoImport({
      imports: ['vitest'],
      dts: true, // generate TypeScript declaration
    }),
    react(),
  ],
  test: {
    name: 'template-next-static-contentful',
    environment: 'jsdom',
    passWithNoTests: true,
    globals: true,
    include: ['**/*.test.ts', '**/*.test.tsx'],
    reporters: 'verbose',
  },
})
