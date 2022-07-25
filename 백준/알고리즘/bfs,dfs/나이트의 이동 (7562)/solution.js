let input = require("fs").readFileSync("example.txt").toString().split("\n");

let tc = +input[0];
let index = 1;

const dyx = [
  [-2, -1],
  [-1, -2],
  [1, -2],
  [2, -1],
  [2, 1],
  [1, 2],
  [-1, 2],
  [-2, 1],
];
let queue = [];

const bfs = (boardSize, end, board) => {
  while (queue.length > 0) {
    let [x, y, d] = queue.shift();

    if (x === end[0] && y === end[1]) {
      return d;
    }

    for (xy of dyx) {
      let nx = x + xy[0];
      let ny = y + xy[1];

      if (
        nx >= 0 &&
        nx < boardSize &&
        ny >= 0 &&
        ny < boardSize &&
        board[nx][ny] === 0
      ) {
        board[nx][ny] = 1;
        queue.push([nx, ny, d + 1]);
      }
    }
  }
};

for (let i = 0; i < tc; i++) {
  let boardSize = +input[index];
  let board = [...Array(boardSize)].map((e) => Array(boardSize).fill(0));

  let start = input[index + 1].split(" ").map(Number);
  let end = input[index + 2].split(" ").map(Number);

  queue = [[...start, 0]];
  board[start[0]][start[1]] = 1;

  console.log(bfs(boardSize, end, board));
  index += 3;
}
