/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';
import { defineConfig, } from 'vite';

export default defineConfig({
    base    : './',
    plugins : [
        react(),
    ],
    test    : {
        globals     : true,
        environment : 'jsdom',
        coverage    : {
            enabled   : true,
            provider  : 'v8',
            reporter  : [
                'lcov',
                'text',
            ],
            include   : [
                'src/**',
            ],
            exclude   : [
                '.storybook/**',
                'html/**',
                'public/**',
                'src/**/*.stories.tsx',
                'src/**/vite-env.d.ts',
                'src/**/*.types.ts',
                'src/components/**/index.ts',
                'src/routes/**/index.ts',
                'src/models/**/*.ts',
                'src/setupTests.ts',
                'vite.config.ts',
                '.eslintrc.js',
            ],
            extension : [
                '.ts',
                '.tsx',
            ],
        },
        include     : [
            'src/**/*.test.{ts,tsx}',
        ],
        reporters   : [
            'default',
            'html',
        ],
        setupFiles  : [
            'src/setupTests.ts',
        ],
    },
    build   : {
        sourcemap : true,
    },
});
