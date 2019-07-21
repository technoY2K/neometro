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
        password: `${auth.get('password')}`,
      },
    }

    try {
      const result = await axios.request(config)
      const filesTodisplay = result.data.files.map(file => file.path)
      filesTodisplay.forEach(path => console.log(chalk.green(path)))
    } catch (error) {
      if (error.response.data.error_type === 'invalid_auth') {
        console.log(chalk.red(error.response.data.message))
        console.log(chalk.red('Please try the command neometro auth to re-enter your credentials'))
      } else {
        console.log(chalk.red(error.response.data.message))
      }
    }
  },
}
