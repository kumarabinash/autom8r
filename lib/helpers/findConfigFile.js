const fs = require('fs');
const path = require('path');

function findConfigFile(way){
  if(way === require('os').homedir()) return null;
  try {
    return fs.readFileSync(path.resolve(way, '.autom8r'), 'utf8');
  } catch (err) {
    return findConfigFile(path.resolve(way, '..'));
  }
}

module.exports = findConfigFile;