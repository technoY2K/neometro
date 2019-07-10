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
    console.log(chalk.yellow('Fetching your data!'))
    const config = {
      method: 'get',
      url: 'https://@neocities.org/api/list',
      auth: {
        username: `${process.env.SITE}`,
        password: `${process.env.PASSWORD}`
      }
    }

    const result = await axios.request(config)
    console.log(result.data, 'the result')
  },
}
