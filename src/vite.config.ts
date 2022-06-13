import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import checker from 'vite-plugin-checker';


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        checker({
            typescript: true,
            vueTsc: true,
            eslint:{
                lintCommand: "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore"
            }
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css:{
        postcss:{
            plugins: [autoprefixer()]
        },
        devSourcemap: true
    }
});
