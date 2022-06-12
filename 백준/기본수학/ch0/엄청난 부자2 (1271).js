var fs = require("fs");
var input = fs.readFileSync("dev/stdin").toString().split(" ");
let a = BigInt(input[0]);
let b = BigInt(input[1]);

console.log((a / b).toString());
console.log((a % b).toString());
