const filePath = process.platform === "linux" ? "./dev/stdin" : "input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((tc) => tc.split(" ").map(Number));

const n = input[0][0];
const [x, y] = input[1].sort((a, b) => a - b);
const m = input[2][0];
let map = {};
let answer = 0;
let isCalculate = false;
let visited = new Array(n).fill(-1);

for (let i = 3; i < 3 + m; i++) {
  const [x, y] = input[i];
  if (!map[x]) map[x] = [];
  if (!map[y]) map[y] = [];

  map[x].push(y);
  map[y].push(x);
}

for (let key in map) {
  map[key].sort((a, b) => a - b);
}

let queue = [x];
visited[x - 1] = 0;

while (queue.length > 0) {
  let x = queue.shift();

  if (x === y) {
    console.log(visited[y - 1]);
    return;
  }
  for (let node of map[x]) {
    if (visited[node - 1] === -1) {
      visited[node - 1] = visited[x - 1] + 1;
      queue.push(node);
    }
  }
}

console.log(-1);
