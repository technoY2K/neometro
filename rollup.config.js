import babel from 'rollup-plugin-babel'
import {terser} from 'rollup-plugin-terser'
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: {
    file: 'bin/cli.js',
    format: 'iife',
    name: 'neometro'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    terser(),
    resolve()
  ]
}
