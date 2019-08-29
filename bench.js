/*
  Some benchmark to improve performance of the solution
*/

const fs = require("fs");
const text = fs.readFileSync("tests/a").toString();

const googlon = require("./googlon/googlon");

let min = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < 10000; i++) {
  var start = process.hrtime();

  googlon(text);

  var end = process.hrtime(start);

  min = Math.min(min, end[1]);
}

console.log(min);
