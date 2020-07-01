const fs = require("fs");
const yargsInteractive = require("yargs-interactive");

const options = {
  interactive: { default: true },
  filename: {
    type: "input",
    describe: "Enter the name you want to call your files."
  },
  fileToRead: {
    type: "input",
    describe: "Which file would would you like to split?"
  },
  quantity: {
    type: "input",
    describe: "How many rows do you want in each file?"
  }
};

let argFilename = "";
let limit = "";
const splitter = path => {
  const users = fs.readFileSync(path, "ascii");
  let userArray = users.split("\n");

  let header = [userArray[0]];
  //./test/files/test.csv
  let rows = [];
  const writeFile = (rows, counter) => {
    rows.unshift(header);
    let csv = rows.map(e => e.join(",")).join("\n");
    fs.writeFileSync(argFilename + counter + ".csv", csv, "ascii");
    console.log(argFilename + counter);
  };

  let counter = 1;
  for (let i = 0; i < userArray.length - 1; i++) {
    rows.push([userArray[i]]);
    if (rows.length === limit || i === userArray.length) {
      writeFile(rows, counter);
      rows = [];
      counter++;
    }
  }
};

yargsInteractive()
  .usage("$0 <command> [args]")
  .interactive(options)
  .then(result => {
    let fileToRead = result.fileToRead;
    limit = result.quantity;
    limit = JSON.parse(limit);
    argFilename += result.filename + " - ";
    splitter(fileToRead);
  });

module.exports.splitter = splitter;
