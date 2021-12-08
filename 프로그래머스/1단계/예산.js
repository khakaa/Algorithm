function solution(d, budget) {
  const dSort = d.sort((a, b) => a - b);
  let answer = 0,
    sum = 0;

  for (const i in dSort) {
    // budget -= dSort[i];
    // if (budget < 0) break;
    sum += dSort[i];
    if (sum > budget) break;
    answer++;
  }
  return answer;
}

console.log(solution([2, 2, 3, 4], 10));
