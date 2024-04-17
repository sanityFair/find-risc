/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgLoader from 'vite-svg-loader';
import path from 'path';

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig({
    plugins: [react(), tsconfigPaths(), svgLoader({ defaultImport: 'url' })],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
});
