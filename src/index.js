#!/usr/bin/env node

import hello from './hello.js'

require('yargs')
  .scriptName('neometro')
  .usage('$0 <cmd> [args]')
  .command('hello [name]', 'welcome to neometro', hello.builder, hello.handler)
  .help().argv
