function solution(n, computers) {
  let check = [];
  let network = 0;

  for (let i = 0; i < computers.length; i++) {
    check[i] = false;
  }

  function dfs(index) {
    check[index] = true;

    for (let i = 0; i < computers.length; i++) {
      if (computers[index][i] == 1 && !check[i]) {
        dfs(i);
      }
    }
  }

  for (let i = 0; i < computers.length; i++) {
    if (!check[i]) {
      dfs(i);
      network++;
    }
  }

  return network;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
