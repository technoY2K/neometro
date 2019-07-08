#!/usr/bin/env node

require('yargs')
  .scriptName("neometro")
  .usage('$0 <cmd> [args]')
  .command('hello [name]', 'welcome to neometro',
  (yargs) => {
    yargs.positional('name', {
      type: 'string',
      default: 'User',
      describe: 'the name to say hello to'
    })
  },
  (argv) => {
    console.log('hello', argv.name, 'welcome to neometro a cli for neocities!')
  })
  .help()
  .argv
