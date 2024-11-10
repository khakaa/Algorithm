const filePath = process.platform === "linux" ? "./dev/stdin" : "input.txt";
let n = +require("fs").readFileSync(filePath);

let dp = new Array(n + 1).fill(0);

dp[1] = dp[3] = -1;
dp[2] = dp[5] = 1;
dp[4] = 2;

for (let i = 6; i <= n; i++) {
  if (dp[i - 2] === -1) dp[i] = dp[i - 5] + 1;
  else if (dp[i - 5] === -1) dp[i] = dp[i - 2] + 1;
  else dp[i] = Math.min(dp[i - 2], dp[i - 5]) + 1;
}

console.log(dp[n]);
