var fs = require("fs");
var input = fs.readFileSync("dev/stdin").toString().split("\n");

const colorObj = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

console.log(
  (10 * colorObj[input[0]] + colorObj[input[1]]) * 10 ** colorObj[input[2]]
);
