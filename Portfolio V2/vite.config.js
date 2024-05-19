import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './Portfolio V2',  
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './Portfolio V2/index.html'  
    }
  }
});
