import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import envCompatible from 'vite-plugin-env-compatible';

const ENV_PREFIX = 'REACT_APP_';
// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [envCompatible({ prefix: ENV_PREFIX }), react()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: 'build',
  },
}));
