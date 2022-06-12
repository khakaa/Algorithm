let fs = require("fs");
let n = fs.readFileSync("dev/stdin").toString();

let answer = -1;
let five = Math.floor(n / 5);

while (five >= 0) {
  let remain = n - five * 5;

  if (remain % 3 === 0) {
    answer = remain / 3 + five;
    break;
  } else {
    five -= 1;
  }
}

console.log(answer);
