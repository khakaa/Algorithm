const filePath = process.platform === "linux" ? "./dev/stdin" : "input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((tc) => tc.split(" ").map(Number));

let [N, M, R] = input[0]; // 정점의 수, 간선의 수, 시작 정점
let map = {};
let order = 1;
let visited = new Array(N).fill(0);

for (let i = 1; i <= M; i++) {
  const [u, v] = input[i];

  if (!map[u]) map[u] = [];
  if (!map[v]) map[v] = [];

  map[u].push(v);
  map[v].push(u);
}

for (let m in map) {
  map[m].sort((a, b) => a - b);
}

let queue = [R];
visited[R - 1] = order++;
/**
 * 1 : [2,4]
 * 2 : [1,3,4]
 * 3 : [2,4]
 * 4 : [1,2,3]
 */

while (queue.length > 0) {
  let node = queue.shift();

  for (let n of map[node]) {
    if (!visited[n - 1]) {
      queue.push(n);
      visited[n - 1] = order++;
    }
  }
}

visited.forEach((v) => console.log(v));
