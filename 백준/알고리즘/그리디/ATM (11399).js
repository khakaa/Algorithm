function solution(n, input) {
  let sortedTime = input.sort((a, b) => a - b);
  let answer = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      answer += sortedTime[j];
    }
  }

  console.log(answer);
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
  //rl.close()가 없어서 계속 입력
  //로컬에서 입력을 중지하려면 입력을 한 후 ctrl+d로 입력 종료
}).on("close", function () {
  let n = parseInt(input[0]);
  let list = input[1].split(" ").map((el) => parseInt(el));
  solution(n, list);
  process.exit();
});
