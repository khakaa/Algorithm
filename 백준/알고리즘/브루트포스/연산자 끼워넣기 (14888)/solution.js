const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const sequence = input.shift().split(" ").map(Number);
const operator = input.shift().split(" ").map(Number);
const operObj = {
  0: (n1, n2) => n1 + n2,
  1: (n1, n2) => n1 - n2,
  2: (n1, n2) => n1 * n2,
  3: (n1, n2) => {
    if (n1 < 0) return -Math.floor(-n1 / n2);
    else return Math.floor(n1 / n2);
  },
};

function solution() {
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  let temp = [];

  function dfs(d) {
    if (d == N - 1) {
      let n1 = sequence[0];

      for (let i = 0; i < N - 1; i++) {
        let n2 = sequence[i + 1];
        let operIdx = temp[i];

        n1 = operObj[operIdx](n1, n2);
      }

      if (n1 < min) min = n1;
      if (n1 > max) max = n1;
    } else {
      for (let i = 0; i < 4; i++) {
        if (!operator[i]) continue;
        operator[i] -= 1;
        temp.push(i);
        dfs(d + 1);
        operator[i] += 1;
        temp.pop();
      }
    }
  }

  dfs(0);

  return `${max}\n${min}`;
}

console.log(solution());
