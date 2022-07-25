let input = require("fs").readFileSync("example.txt").toString().split("\n");

const [row, col] = input.shift().split(" ").map(Number);

function solution() {
  let answer = 0;
  let visit = [...Array(col)].map((el) => Array(row).fill(0)); // 방문배열
  let queue = [];
  let count = row * col;
  let tomato = []; // 토마토 판
  const dyx = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
  ]; // 상하좌우

  for (let i = 0; i < col; i++) {
    tomato[i] = input[i].split(" ").map(Number);

    tomato[i].forEach((t, pos) => {
      if (t === 1) {
        queue.push([i, pos, 0]);
        visit[i][pos] = 1;
        count--;
      } else if (t === -1) {
        visit[i][pos] = 1;
        count--;
      }
    });
  }

  let idx = 0;
  while (queue.length != idx) {
    console.log(queue);
    const [x, y, day] = queue[idx];

    for (let i = 0; i < 4; i++) {
      const dx = x + dyx[i][0];
      const dy = y + dyx[i][1];

      if (dx < 0 || dy < 0 || dx >= col || dy >= row) continue;

      if (!visit[dx][dy]) {
        visit[dx][dy] = 1;
        queue.push([dx, dy, day + 1]);
        count--;
        console.log(count);
      }
    }

    idx++;
    answer = day;
  }

  console.log(count ? -1 : answer);
}

solution();
