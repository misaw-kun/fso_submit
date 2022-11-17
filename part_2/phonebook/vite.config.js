import { defineConfig } from 'vite';

export default defineConfig({
  proxy: {
    '/api/persons': {
      target: 'https://localhost:3000',
      changeOrigin: true,
      secure: false,
      ws: true,
    },
  },
});
