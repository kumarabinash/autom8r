// Imports
const run = require('./lib/run');

const args = process.argv.slice(2);

const command = args[0];

const VALID_COMMANDS = [
  'help', // Displays supported commands
  'run', // Runs registered tasks
  'register', // Registers a new task
  'list',
  'revert',
  'last',
  'history'
];

// Validations
if(!VALID_COMMANDS.includes(command)){
  console.log("Invalid Command. Try 'help'");
  process.exit()
}

switch (command) {
  case 'help':
    help();
    break;
  case 'run':
    run.run(...args.slice(1));
    break;
  case 'register':
    register();
    break;
  case 'list':
    list();
    break;

}


function help(){
  console.log("Help");
}

function register(){
  console.log("register");
}

function list(){
  console.log("register");
}

