const filePath = process.platform === "linux" ? "./dev/stdin" : "input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((tc) => tc.split(" ").map(Number));

const [N, M, R] = input[0];
let map = {};
let visited = new Array(N).fill(0);
let order = 1;

// 인접 리스트 구성
for (let i = 1; i <= M; i++) {
  let [u, v] = input[i];
  if (!map[u]) map[u] = [];
  if (!map[v]) map[v] = [];
  map[u].push(v);
  map[v].push(u);
}

// 정점 번호 오름차순 정렬
for (let key in map) {
  map[key].sort((a, b) => a - b);
}

// 깊이 우선 탐색 함수
function dfs(vertex) {
  visited[vertex - 1] = order++;
  for (let v of map[vertex] || []) {
    if (!visited[v - 1]) dfs(v);
  }
}

dfs(R);

visited.forEach((v) => console.log(v));