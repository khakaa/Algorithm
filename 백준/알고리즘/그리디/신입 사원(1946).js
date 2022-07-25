const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const T = +input.shift();

function solution(T, input) {
  for (let i = 0; i < T; i++) {
    let N = +input.shift();
    let score = [];

    for (let j = 0; j < N; j++) {
      score.push(input[j].split(" ").map(Number));
    }

    score.sort((a, b) => a[0] - b[0]);

    let tmp = score[0][1];
    let count = 1;

    for (let n = 1; n < N; n++) {
      if (score[n][1] < tmp) {
        count += 1;
        tmp = score[n][1];
      }
    }

    console.log(count);

    input.splice(0, N);
  }
}

solution(T, input);
