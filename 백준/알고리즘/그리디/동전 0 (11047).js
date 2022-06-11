const solution = (N, K, list) => {
  let answer = 0;

  for (let i = N - 1; i >= 0; i--) {
    if (K / list[i] === 0) continue;

    answer += Math.floor(K / list[i]);
    K = K % list[i];

    if (K === 0) break;
  }

  console.log(answer);
};

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
  let [N, K] = input[0].split(" ").map((el) => parseInt(el));
  let list = [];

  for (let i = 1; i <= N; i++) {
    list.push(input[i]);
  }

  list.map((el) => parseInt(el));
  solution(N, K, list);
  process.exit();
});
