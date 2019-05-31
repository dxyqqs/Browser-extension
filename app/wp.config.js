const Chain = require('webpack-chain')
const path = require('path')

const config = new Chain()

config.entry('main').add(path.resolve(__dirname,'../index.js'))
config.output.path(path.resolve(__dirname,'../dist')).filename('[name].js')

module.exports = config.toConfig()