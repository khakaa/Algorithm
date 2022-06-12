let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

let answer = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
let uniqueAnswer = [...new Set(answer)];
console.log(uniqueAnswer.join("\n"));
