import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { extname, relative, resolve } from 'path';
import { fileURLToPath } from 'node:url'
import { glob } from 'glob';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), dts()],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/main.ts'),
            formats: ['es']
        },
        rollupOptions: {
            output: {
                preserveModules: true,
                entryFileNames: '[name].js'
            },
            external: ['react', 'react-dom', 'react/jsx-runtime', 'styled-components', 'sefer-fetch' ],
            input: Object.fromEntries(
                glob.sync('src/**/*.{ts,tsx}', { ignore: ['src/**/*.spec.ts'],})
                    .map(file => [
                        // The name of the entry point lib/nested/foo.ts becomes nested/foo
                        relative(
                            'src',
                            file.slice(0, file.length - extname(file).length),
                        ),
                        // The absolute path to the entry file lib/nested/foo.ts becomes /project/lib/nested/foo.ts
                        fileURLToPath(new URL(file, import.meta.url)),
                    ]),
            ),
        }
    }
})
