const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const n = input.shift() * 1;

let stack = [];
let answer = [];

for (let i = 0; i < n; i++) {
  // push
  if (input[i].includes("push")) stack.push(input[i].split(" ")[1] * 1);
  // pop
  else if (input[i] === "pop") {
    answer.push(stack.length === 0 ? -1 : stack.pop());
  }
  // size
  else if (input[i] === "size") answer.push(stack.length);
  // empty
  else if (input[i] === "empty") {
    answer.push(stack.length === 0 ? 1 : 0);
  }
  // top
  else if (input[i] === "top") {
    answer.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
  }
}

console.log(answer.join("\n"));
