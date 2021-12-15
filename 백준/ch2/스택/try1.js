// const input = require("fs").readFileSync("dev/stdin").toString().split("\n");

// local test
const input = ["7", "pop", "top", "push 123", "top", "pop", "top", "pop"];
const n = input.shift() * 1;

let stack = [];

for (let i = 0; i < n; i++) {
  if (input[i].includes("push")) stack.push(input[i].split(" ")[1] * 1);
  else if (input[i] === "pop") {
    if (stack.length === 0) {
      console.log(-1);
    } else console.log(stack.pop());
  } else if (input[i] === "size") console.log(stack.length);
  else if (input[i] === "empty") {
    if (stack.length === 0) {
      console.log(1);
    } else {
      console.log(0);
    }
  } else if (input[i] === "top") {
    console.log(stack[stack.length - 1]);
  }
}

// top 일 때 스택안에 아무것도 없는 경우 고려 안해서 틀림
