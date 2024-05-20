import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/main.tsx'],
  outDir: 'lib',
  format: ['cjs', 'esm'],
  dts: true,
  bundle: true,
//   external: ['react', 'react-dom'],
  // noExternal: ['@vijeth/lib-one',]
})
