const fs = require('fs');
const map = require('lodash/map');
const chalk = require('chalk');

const deleteFile = ({source}) => {
  fs.stat(source, (errStat, stat) => {
    if(errStat){
      console.log(chalk.red(`File for deletion not found at ${chalk.bgRed.white.bold(source)}`));
      return
    }
    if(stat.isFile()){
      fs.unlink(source, (errUnlink) => {
        if(errUnlink){
          console.log(`Error deleting file ${chalk.bgRed.white.bold(source)}`);
          return;
        }

        console.log(`Successfully deleted file ${source}`);
      })
    } else {
      console.log(chalk.red(`Trying to delete file, found folder: ${chalk.bgRed.white.bold(source)}`));
    }
  });
};

const main = (task) => {
  map(task.operations, (operation) => {
    deleteFile(operation);
  })
};


module.exports = main;