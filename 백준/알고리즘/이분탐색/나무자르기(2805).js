let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

input = input[1].split(" ").map(Number);

function solution(N, M, input) {
  let start = 0;
  let end = 2000000000;
  let answer = 0;

  while (start <= end) {
    let count = 0;
    let mid = Math.floor((start + end) / 2);

    for (const n of input) {
      if (n > mid) count += n - mid;
    }

    if (count >= M) {
      start = mid + 1;
      answer = mid;
    } else {
      end = mid - 1;
    }
  }

  return answer;
}

console.log(solution(N, M, input));
