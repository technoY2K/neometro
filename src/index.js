import 'regenerator-runtime/runtime'
import list from './list.js'

require('yargs').scriptName('neometro').usage('$0 <cmd> [args]').command('list', 'list files in root directory', list.builder, list.handler).help().argv
