const input = require("fs").readFileSync("example.txt").toString() * 1;

let number = input;
let sum = 0;

let cnt = 0;
while (1) {
  sum = Math.floor(number / 10) + (number % 10);
  number = (number % 10) * 10 + (sum % 10);

  cnt++;

  if (number === input) break;
}

console.log(cnt);
