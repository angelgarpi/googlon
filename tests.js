/*
  ENSURE THAT EVERYTHING WORKS AS EXPECTED COMPARING
  EXPECTED RESULTS WITH RESULTS FROM THE SOLUTION
*/

const fs = require("fs");
const googlon = require("./googlon/googlon");

const textA = fs.readFileSync("tests/a").toString();
const textB = fs.readFileSync("tests/b").toString();
const textC = fs.readFileSync("tests/c").toString();
const textD = fs.readFileSync("tests/d").toString();
const textE = fs.readFileSync("tests/e").toString();

let r = googlon(textA);

if (
  r.prepositionsNumber === 3 &&
  r.regularVerbsNumber + r.subjunctiveVerbsNumber === 36 &&
  r.subjunctiveVerbsNumber === 25 &&
  r.prettyNumbers === 22
) {
  console.log("TEST A: OK");
} else {
  console.log("TEST A: FAIL");
}

r = googlon(textB);

if (
  r.prepositionsNumber === 3 &&
  r.regularVerbsNumber + r.subjunctiveVerbsNumber === 46 &&
  r.subjunctiveVerbsNumber === 26 &&
  r.prettyNumbers === 21
) {
  console.log("TEST B: OK");
} else {
  console.log("TEST B: FAIL");
}

r = googlon(textC);

if (
  r.prepositionsNumber === 2 &&
  r.regularVerbsNumber + r.subjunctiveVerbsNumber === 37 &&
  r.subjunctiveVerbsNumber === 22 &&
  r.prettyNumbers === 27
) {
  console.log("TEST C: OK");
} else {
  console.log("TEST C: FAIL");
}

r = googlon(textD);

if (
  r.prepositionsNumber === 3 &&
  r.regularVerbsNumber + r.subjunctiveVerbsNumber === 31 &&
  r.subjunctiveVerbsNumber === 19 &&
  r.prettyNumbers === 27
) {
  console.log("TEST D: OK");
} else {
  console.log("TEST D: FAIL");
}

r = googlon(textE);

if (
  r.prepositionsNumber === 1 &&
  r.regularVerbsNumber + r.subjunctiveVerbsNumber === 32 &&
  r.subjunctiveVerbsNumber === 19 &&
  r.prettyNumbers === 26
) {
  console.log("TEST E: OK");
} else {
  console.log("TEST E: FAIL");
}
