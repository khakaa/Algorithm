// const input = require("fs").readFileSync("dev/stdin").toString().split("\n").map(num => num*1);

const input = [10, 1, 3, 5, 4, 0, 0, 7, 0, 0, 6];
const n = input.shift();

let stack = [];

for (let i = 0; i < n; i++) {
  input[i] === 0 ? stack.pop() : stack.push(input[i]);
}

let answer = stack.reduce((acc, cur) => acc + cur, 0);

console.log(answer);
