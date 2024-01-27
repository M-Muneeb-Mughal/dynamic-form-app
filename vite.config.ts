import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.ts',
      css: true,
    },
    resolve: {
      alias: {
        '@src': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      open: true,
    },
  };
});
