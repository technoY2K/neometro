require('dotenv').config({path: '../.env'})
const Conf = require('conf')
const packageJson = require('../package.json')

const config = new Conf({configName: packageJson.name})

// TODO: retrieve from user input
// config.set('siteName', `${process.env.SITE}`)
// config.set('password', `${process.env.PASSWORD}`)

export default config
