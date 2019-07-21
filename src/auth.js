#!/usr/bin/env node

const Conf = require('conf');
const packageJson = require('../package.json')

const config = new Conf({configName: packageJson.name})
