const fs = require('fs');
const path = require('path');

function findConfigFile(way){
  if(way === require('os').homedir()) return [];
  try {
    return [fs.readFileSync(path.resolve(way, '.autom8r'), 'utf8'), way];
  } catch (err) {
    return findConfigFile(path.resolve(way, '..'));
  }
}

module.exports = findConfigFile;