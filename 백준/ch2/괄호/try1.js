const input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const input = [
  "6",
  "(())())",
  "(((()())()",
  "(()())((()))",
  "((()()(()))(((())))()",
  "()()()()(()()())()",
  "(()((())()(",
];
const n = input.shift() * 1;
let answer = [];

for (let i = 0; i < n; i++) {
  let stack = [];
  const bracketList = input[i].split("");

  for (let b of bracketList) {
    if (b === "(") stack.push(b);
    else if (b === ")") {
      if (stack.length !== 0) stack.pop();
      else {
        answer.push("NO");
        break;
      }
    }
  }

  if (answer.length === i) answer.push(stack.length !== 0 ? "NO" : "YES");
}
console.log(answer.join("\n"));
