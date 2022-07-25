let [N, ...input] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

N = +N;
input = input.map((el) => el.split(" ").map(Number));

for (let i = 1; i < N; i++) {
  input[i][0] += Math.min(input[i - 1][1], input[i - 1][2]);
  input[i][1] += Math.min(input[i - 1][0], input[i - 1][2]);
  input[i][2] += Math.min(input[i - 1][0], input[i - 1][1]);
}

console.log(Math.min(...input[N - 1]));
