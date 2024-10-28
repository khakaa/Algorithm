const filePath = process.platform === "linux" ? "./dev/stdin" : "input.txt";
let [x, y] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((num) => +num);

let z = Math.floor((y * 100) / x);

let left = 1;
let right = 1000000000;
let answer = Number.MAX_SAFE_INTEGER;

while (left <= right) {
  let mid = parseInt((left + right) / 2);
  let newZ = Math.floor(((y + mid) * 100) / (x + mid));

  if (z !== newZ) {
    answer = Math.min(answer, mid);
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

if (answer === Number.MAX_SAFE_INTEGER) console.log(-1);
else console.log(answer);
