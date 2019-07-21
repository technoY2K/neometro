#!/usr/bin/env node
require('dotenv').config({path: '../.env'})
const Conf = require('conf')
const packageJson = require('../package.json')

const config = new Conf({configName: packageJson.name})


config.set('siteName', `${process.env.SITE}`)
config.set('password', `${process.env.PASSWORD}`)
