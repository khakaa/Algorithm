let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const [K, N] = input[0].split(" ").map(Number);

function solution(K, N, input) {
  let start = 0;
  let end = 2 ** 32 - 1;
  let answer = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let count = 0;

    for (let i = 1; i <= K; i++) {
      count += Math.floor(+input[i] / mid);
    }

    if (count < N) {
      end = mid - 1;
    } else {
      answer = mid;
      start = mid + 1;
    }
  }

  return answer;
}

console.log(solution(K, N, input));
