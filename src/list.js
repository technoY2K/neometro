const chalk = require('chalk')
const axios = require('axios')
import auth from './auth'
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
        username: `${auth.get('siteName')}`,
        password: `${auth.get('password')}`
      }
    }

    const result = await axios.request(config)
    const filesTodisplay = result.data.files.map(file => file.path)
    filesTodisplay.forEach(path => console.log(chalk.green(path)))
  },
}
