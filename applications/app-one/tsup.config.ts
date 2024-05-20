import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.tsx'],
  outDir: 'lib',
  format: ['cjs', 'esm'],
  dts: true,
  bundle: true,
//   external: ['react', 'react-dom'],
  noExternal: ['@vijeth/lib-one',],
  minify: true
})
