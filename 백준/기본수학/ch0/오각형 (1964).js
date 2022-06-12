let fs = require("fs");
let n = fs.readFileSync("dev/stdin").toString().split(" ");

const solution = (n) => {
  let answer = 5;
  let diff = 7;

  for (let i = 2; i <= n; i++) {
    answer += diff;
    diff += 3;
  }
  return answer % 45678;
};

console.log(solution(n));
