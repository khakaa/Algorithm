let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .split("\n")
  .map((num) => +num);

// 인풋 값 중 최대값 찾는다.
const max = Math.max(...input) * 2;

let prime = [];
for (let i = 0; i <= max; i++) {
  prime.push(true);
}
prime[0] = false;
prime[1] = false;

for (let i = 2; i * i <= max; i++) {
  for (let j = i * i; j <= max; j += i) {
    prime[j] = false;
  }
}

input.forEach((v) => {
  const start = v;
  const end = v * 2;

  // 배열의 끝 제외
  if (v > 0) {
    let cnt = 0;
    for (let i = start + 1; i <= end; i++) {
      if (prime[i] === true) cnt++;
    }
    console.log(cnt);
  }
});
