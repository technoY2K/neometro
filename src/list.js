const chalk = require('chalk')
const axios = require('axios')
require('dotenv').config()

export default {
  builder(yargs) {
    return yargs.positional('name', {
      type: 'string',
      default: 'User',
      describe: 'the name to say hello to',
    })
  },
  async handler(argv) {
    console.log(chalk.yellow('fetching your data...'))
    const config = {
      method: 'get',
      url: 'https://@neocities.org/api/list',
      auth: {
        username: `${process.env.SITE}`,
        password: `${process.env.PASSWORD}`
      }
    }

    const result = await axios.request(config)
    const filesTodisplay = result.data.files.map(file => file.path)
    filesTodisplay.forEach(path => console.log(chalk.green(path)))
  },
}
