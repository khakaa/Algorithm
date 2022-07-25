const N = require("fs").readFileSync("example.txt").toString().trim() * 1;
const DP = Array(N + 1).fill(0);

for (let i = 2; i <= N; i++) {
  DP[i] = DP[i - 1] + 1;

  if (i % 2 == 0) {
    DP[i] = Math.min(DP[i], DP[i / 2] + 1);
  }

  if (i % 3 == 0) {
    DP[i] = Math.min(DP[i], DP[i / 3] + 1);
  }
}

console.log(DP[N]);
