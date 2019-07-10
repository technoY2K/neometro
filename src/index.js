#!/usr/bin/env node

import hello from './hello.js'

require('yargs')
  .scriptName('neometro')
  .usage('$0 <cmd> [args]')
  .command('list', 'list files in root directory', hello.builder, hello.handler)
  .help().argv
