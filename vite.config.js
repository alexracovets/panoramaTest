import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    reactRefresh(),
  ],
  build: {
    target: 'es2015', 
    polyfillDynamicImport: false,
  },
});