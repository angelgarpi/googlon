/*
  This file is the entry point to run the developed solution for the googlon
  challenge. In order to use it, you should type in the console:

    node main.js [input_file_path]

  where <input_file_path> is the path to your input file.

  It is taking the solution or the results from the googlon function and then
  printed as expected for the output file. By default it is done in the console
  but if you want to get all of it in a file, you just need to type this after:

    node main.js [input_file_path] > [output_file_path]

  Then a new file <output_file_path> will be appear in the current directory
  with the results.

  For example:

    node main.js tests/a > output.txt
*/

const fs = require("fs");
const googlon = require("./googlon/googlon");

const filepath = process.argv[2];

try {
  const text = fs.readFileSync(filepath).toString();

  const {
    prepositionsNumber,
    regularVerbsNumber,
    subjunctiveVerbsNumber,
    sortedWords,
    prettyNumbers
  } = googlon(text);

  console.log(
    "1) There are " + prepositionsNumber + " prepositions in the text"
  );
  console.log(
    "2) There are " +
      (regularVerbsNumber + subjunctiveVerbsNumber) +
      " verbs in the text"
  );
  console.log(
    "3) There are " + subjunctiveVerbsNumber + " subjunctive verbs in the text "
  );
  console.log("4) Vocabulary list: " + sortedWords.join(" "));
  console.log(
    "5) There are " + prettyNumbers + " distinct pretty numbers in the text"
  );
} catch {
  console.error(
    "Please, pass a valid format file as argument: node main.js [filepath]"
  );
}
