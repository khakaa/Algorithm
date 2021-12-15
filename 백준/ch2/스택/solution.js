// const input = require("fs").readFileSync("dev/stdin").toString().split("\n");

// local test
const input = ["7", "pop", "top", "push 123", "top", "pop", "top", "pop"];
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

// console.log는 시간이오래걸리므로 정답 배열을 따로 만들어준 후 마지막에 출력해준다.
