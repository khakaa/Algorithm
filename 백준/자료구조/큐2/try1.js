// const input = require("fs").readFileSync("dev/stdin").toString().split("\n");

// local test
const input = [
  "15",
  "push 1",
  "push 2",
  "front",
  "back",
  "size",
  "empty",
  "pop",
  "pop",
  "pop",
  "size",
  "empty",
  "pop",
  "push 3",
  "empty",
  "front",
];
const n = input.shift() * 1;

let queue = [];
let answer = [];

for (let i = 0; i < n; i++) {
  // push
  if (input[i].includes("push")) queue.push(input[i].split(" ")[1] * 1);
  // pop
  else if (input[i] === "pop") {
    answer.push(queue.length === 0 ? -1 : queue.shift());
  }
  // size
  else if (input[i] === "size") answer.push(queue.length);
  // empty
  else if (input[i] === "empty") {
    answer.push(queue.length === 0 ? 1 : 0);
  }
  // front
  else if (input[i] === "front") {
    answer.push(queue.length === 0 ? -1 : queue[0]);
  }
  // back
  else if (input[i] === "back") {
    answer.push(queue.length === 0 ? -1 : queue[queue.length - 1]);
  }
}

console.log(answer.join("\n"));

// console.log는 시간이오래걸리므로 정답 배열을 따로 만들어준 후 마지막에 출력해준다.

// 시간초과남
