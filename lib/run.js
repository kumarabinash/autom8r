const fs = require('fs');

const replace = ({source, destination}) => {
  const source_file_content = fs.readFileSync(source);
  fs.writeFile(destination, source_file_content, (err) => {
    if (err) throw err;
    console.log(`Updated "${destination}" with "${source}"`);
  });
};

const run = (...args) => {
  let rawdata = fs.readFileSync('config.json');
  let config = JSON.parse(rawdata)[args[0]];

  switch (config.type) {
    case "replace":
      replace(config);
      break;
  }
};


module.exports = { run };
