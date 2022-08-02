const N = +require("fs").readFileSync("example.txt").toString().trim();
// const N = +require("fs").readFileSync("/dev/stdin").toString().trim()

let answer = 0;
let col = Array(N).fill(0);

function nQueen(row) {
  function promising(row) {
    for (let j = 0; j < row; j++) {
      if (
        col[j] == col[row] ||
        Math.abs(j - row) == Math.abs(col[j] - col[row])
      )
        return false;
    }

    return true;
  }

  if (row == N) {
    answer += 1;
    return;
  }

  for (let i = 0; i < N; i++) {
    col[row] = i;

    if (promising(row)) {
      nQueen(row + 1);
    }
  }
}

nQueen(0);
console.log(answer);
