let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((n) => +n);

let N = input.shift();

function solution(N, input) {
  for (let i = 0; i < N; i++) {
    const n = input[i];

    const fibonacci = [
      [1, 0],
      [0, 1],
    ];

    for (let m = 2; m <= n; m++) {
      fibonacci[m] = [
        fibonacci[m - 1][0] + fibonacci[m - 2][0],
        fibonacci[m - 1][1] + fibonacci[m - 2][1],
      ];
    }

    console.log(fibonacci[n].join(" "));
  }
}

solution(N, input);
