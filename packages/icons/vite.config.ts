import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    vue({
      // Use runtime-only build to avoid inlining helpers
      target: 'browser',
    }),
    dts({
      insertTypesEntry: true,
      include: ['src/**/*'],
      exclude: ['src/**/*.test.ts', 'src/**/*.spec.ts'],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Hovue',
      formats: ['es', 'cjs'],
      fileName: (format) => `hovue.${format === 'es' ? 'esm' : 'cjs'}.js`,
    },
    rollupOptions: {
      external: ['vue', /^vue\//],
      output: {
        globals: {
          vue: 'Vue',
        },
        // Generate separate chunks for better tree-shaking
        preserveModules: false,
      },
    },
    // Minify to help with duplicate detection
    minify: false,
  },
});

