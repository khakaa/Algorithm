const input = require("fs").readFileSync("example.txt").toString();

let number = input.length < 2 ? "0" + input : input; // 26
let plusNumber;
let cnt = 0;

while (number === plusNumber) {
  plusNumber = number[0] * 1 + number[1] * 1; // 2 + 6 = 8
  plusNumber =
    number[1] + plusNumber.length < 2
      ? plusNumber.toString()
      : plusNumber.toString()[1];
  number = plusNumber;
}
