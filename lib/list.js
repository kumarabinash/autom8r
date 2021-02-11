const findConfigFile = require('./helpers/findConfigFile');

const map = require('lodash/map');
const get = require('lodash/get');
const isEmpty = require('lodash/isEmpty');

const list = () => {

  let configPath = process.cwd();

  let [autom8rConfig, autom8rConfigPath] = findConfigFile(configPath);

  let autom8rConfigData =  !isEmpty(autom8rConfig) && JSON.parse(autom8rConfig);

  if(!autom8rConfigData){
    console.error("Couldn't find .autom8r file");
    return;
  }

  const data = map(Object.keys(autom8rConfigData), (key) => ({task_name: key, task_type: get(autom8rConfigData, `${key}.type`, '')}));
  console.log(`Tasks found from .autom8r at ${autom8rConfigPath}`);
  console.table(data);
};
module.exports = list;
