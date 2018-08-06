/**
 * fs handles file system operations such as reading to and writing from files.
 */

const fs = require("fs");
const path = require("path");

function readFromFile(fileName) {
  fs.readFile(
    path.resolve(__dirname, fileName),
    { encoding: "utf-8" },
    (error, data) => {
      if (error) {
        return console.error(error);
      }
      console.log(data);
    }
  );
}

function writeToFile(fileName, note) {
  fs.writeFile(path.resolve(__dirname, fileName), note, error => {
    if (error) return console.error(error);
    console.log("write successful...");
  });
}

writeToFile('note.txt', "1. Pay electricity bill.");
readFromFile('note.txt');
