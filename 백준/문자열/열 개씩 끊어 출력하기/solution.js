let input = require("fs").readFileSync("example.txt").toString().trim();

let answer = [];
let i = 0;

while (i < input.length) {
  answer.push(input.substring(i, i + 10));
  i += 10;
}

console.log(answer.join("\n"));
