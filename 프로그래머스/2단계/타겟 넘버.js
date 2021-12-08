function solution(numbers, target) {
  let answer = 0;

  dfs(0, 0);
  function dfs(depth, sum) {
    if (depth == numbers.length) {
      if (sum == target) answer++;
      return;
    }
    dfs(depth + 1, sum + numbers[depth]);
    dfs(depth + 1, sum - numbers[depth]);
  }
  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
