const chalk = require('chalk');

const help = () => {
  console.log(`
List of Supported Commands
- ${chalk.magenta('list')} // displays list of tasks found from your .autom8r config file
- ${chalk.magenta('run')} [task_name] // runs the provided task listed in your .autom8r config file   
- ${chalk.magenta('help')} // Displays this list, but you knew that!
- ${chalk.magenta('history')} // Displays last run command; redundant or useless?
  `)
};

module.exports = help;