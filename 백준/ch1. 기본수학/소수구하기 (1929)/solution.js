const input = require("fs").readFileSync("dev/stdin").toString().split(" ");

const start = 1 * input[0];
const end = 1 * input[1];

const prime = [];
for (let i = 0; i <= end; i++) {
  prime.push(true);
}

prime[0] = false;
prime[1] = false;

for (let i = 2; i * i <= end; i++) {
  for (let j = i * i; j <= end; j += i) {
    prime[j] = false;
  }
}

for (let i = start; i <= end; i++) {
  if (prime[i] === true) console.log(i);
}
