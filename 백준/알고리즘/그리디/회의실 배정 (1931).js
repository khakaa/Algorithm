const fs = require("fs");
const readFileSyncAdress = "/dev/stdin";
// const readFileSyncAdress = "example.txt";

let input = fs.readFileSync(readFileSyncAdress).toString().trim().split("\n");

[n, ...arr] = input;
n = Number(n);
arr = arr.map((i) => i.split(" ").map((el) => Number(el)));
solution(n, arr);

function solution(n, arr) {
  let times = arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];

    return a[1] - b[1];
  });

  let currentClass = times[0];
  let answer = 1;

  for (let i = 1; i < n; i++) {
    let temp = times[i];

    if (currentClass[1] <= temp[0]) {
      currentClass = temp;
      answer += 1;
    }
  }

  console.log(answer);
}
