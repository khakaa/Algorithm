let input = require("fs").readFileSync("example.txt").toString().split("");

let answer = input.sort((a, b) => b - a).join("");
console.log(answer);
