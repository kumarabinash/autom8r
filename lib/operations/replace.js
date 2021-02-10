const fs = require('fs');
const map = require('lodash/map');
const chalk = require('chalk');

const replaceFile = ({source, destination}) => {
  fs.readFile(source, (err, source_file_data) => {
    if(err){
      console.log(chalk.red(`Source file not found at ${chalk.bgRed.white.bold(source)}`));
      return
    }
    fs.stat(destination, (errStat) => {
      if(errStat){
        console.log(chalk.red(`Destination file not found at ${chalk.bgRed.white.bold(destination)}`));
        return
      }
      fs.writeFile(destination, source_file_data, (errWriteFile) => {
        if(errWriteFile){
          console.log(chalk.red(`Error writing to file: ${chalk.bgRed.white.bold(destination)}`));
        }
        console.log(`${chalk.green.bold('Updated')} "${chalk.green(destination)}" with "${source}"`);
      });
    });
  });
};

const main = (task) => {
  map(task.operations, (operation) => {
    replaceFile(operation);
  })
};


module.exports = main;