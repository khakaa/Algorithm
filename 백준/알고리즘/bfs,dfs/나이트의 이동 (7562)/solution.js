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
    // console.log(queue);

    let [x, y, d] = queue.shift();
    console.log(x, y, d);

    if (x === end[1] && y === end[0]) {
      return d;
    }

    for (xy of dyx) {
      let nx = x + xy[1];
      let ny = x + xy[0];

      if (
        nx >= 0 &&
        nx < boardSize &&
        ny >= 0 &&
        ny < boardSize &&
        board[ny][nx] === 0
      ) {
        board[ny][nx] = 1;
        queue.push([nx, ny, d + 1]);
        console.log("nx, ny", nx, ny);
      }
    }
    console.log("==================");
  }
};

for (let i = 0; i < tc; i++) {
  let boardSize = +input[index];
  let board = [...Array(boardSize)].map((e) => Array(boardSize).fill(0));

  let start = input[index + 1].split(" ").map(Number);
  let end = input[index + 2].split(" ").map(Number);

  queue = [[...start, 0]];
  board[start[1]][start[0]] = 1;

  console.log(bfs(boardSize, end, board));
  index += 3;
}
