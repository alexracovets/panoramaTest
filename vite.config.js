import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    reactRefresh(),
  ],
  build: {
    target: 'es2015', // Транспілюйте код на ES2015 для підтримки старих браузерів
    polyfillDynamicImport: false, // Вимкніть поліфіл для динамічного імпорту
  },
});