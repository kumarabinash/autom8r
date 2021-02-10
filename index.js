// Imports

const run = require('./lib/run');
const list = require('./lib/list');
const help = require('./lib/help');

const args = process.argv.slice(2);
const command = args[0];


const VALID_COMMANDS = [
  'help', // Displays supported commands
  'run', // Runs registered tasks
  'register', // Registers a new task
  'list', // Lists tasks from nearest .autom8r file
  'undo',
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
    run(...args.slice(1));
    break;
  case 'list':
    list();
    break;
  case 'register':
    register();
    break;
}


function register(){
  console.log("register");
}


