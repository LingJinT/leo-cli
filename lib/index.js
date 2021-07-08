const program = require('commander');
const pkg = require('../package.json')
const {init} = require('./command')

program.version(pkg.version)
  .usage('<command>')

program.command('init')
  .alias('i')
  .description('init project')
  .action(init)

program.parse(process.argv)

