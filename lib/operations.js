const findConfigFile = require('./helpers/findConfigFile');
const replaceFile = require('./operations/replace');

const isEmpty = require('lodash/isEmpty');

const run = (task_name) => {

  if(isEmpty(task_name)){
    console.error(`Please provide a task name`);
    return;
  }

  let configPath = process.cwd();

  let autom8rConfig = JSON.parse(findConfigFile(configPath));

  if(!autom8rConfig){
    console.error("Couldn't find .autom8r file");
    return;
  }

  const task = autom8rConfig[task_name];

  if(isEmpty(task)){
    console.error(`Couldn't find task ${task_name}`);
    return;
  }

  switch (task.type) {
    case 'replaceFile':
      replaceFile(task);
      return;
    default:
      console.error(`Type not set for ${task_name}`)
  }

};
module.exports = run;
