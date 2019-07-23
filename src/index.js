import 'regenerator-runtime/runtime'
import list from './list.js'
const yargs = require('yargs')

yargs
  .scriptName('neometro')
  .usage('$0 <cmd> [args]')
  .command('$0', 'Welcome to NeoMetro, your gateway to NeoCities', () => {}, (argv) => {
    yargs.showHelp()
  })
  .demandCommand(1, 'You need at least one command before moving on')
  .command('list', 'list files in root directory', list.builder, list.handler)
  .help()
  .argv
