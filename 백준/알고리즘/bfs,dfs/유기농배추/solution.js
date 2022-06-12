let input = require("fs").readFileSync("example.txt").toString().split("\n");

let tc = Number(input.shift()); // 테스트케이스 갯수
const dyx = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
]; // 상하좌우
let graph, xMax, yMax, n;

let stack = [];

const bfs = (row, col) => {
  let res = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (graph[i][j] === 1) {
        res += 1;
        stack = [[i, j]];
        graph[i][j] = 0;

        while (stack.length !== 0) {
          let [x, y] = stack.pop();
          for (let xy of dyx) {
            let dx = x + xy[0];
            let dy = y + xy[1];

            if (
              dx >= 0 &&
              dx < row &&
              dy >= 0 &&
              dy <= col &&
              graph[dx][dy] === 1
            ) {
              graph[dx][dy] = 0;
              stack.push([dx, dy]);
            }
          }
        }
      }
    }
  }
  return res;
};

// 배추심기
for (let i = 0; i < tc; i++) {
  [xMax, yMax, n] = input.shift().split(" ").map(Number);
  graph = [...Array(xMax)].map((e) => Array(yMax).fill(0));

  for (let j = 0; j < n; j++) {
    let [x, y] = input[j].split(" ").map(Number);
    graph[x][y] = 1;
  }

  console.log(graph);
  input.splice(0, n);

  console.log(bfs(xMax, yMax));
}
