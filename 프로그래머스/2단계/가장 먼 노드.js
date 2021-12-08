function solution(n, edge) {
  let graph = {};

  for (let i = 0; i < edge.length; i++) {
    if (graph[edge[i][0]]) {
        graph[edge[i][0]].push(edge[i][1]);
    } else {
        graph[edge[i][0]] = [edge[i][1]];
    }
  }
  return graph;
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
