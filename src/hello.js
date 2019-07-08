export default {
  builder(yargs) {
    return yargs.positional('name', {
      type: 'string',
      default: 'User',
      describe: 'the name to say hello to',
    })
  },
  handler(argv) {
    console.log('hello', argv.name, 'welcome to neometro a cli for neocities!')
  },
}
