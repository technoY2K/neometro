import babel from 'rollup-plugin-babel'
import {terser} from 'rollup-plugin-terser'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/index.js',
  output: {
    banner: '#!/usr/bin/env node',
    file: 'bin/cli.js',
    format: 'iife',
    name: 'neometro'
  },
  plugins: [
    babel({
      exclude: ['node_modules/**', '**/*.json'],
      runtimeHelpers: true,
    }),
    resolve(),
    commonjs(),
    terser()
  ]
}
