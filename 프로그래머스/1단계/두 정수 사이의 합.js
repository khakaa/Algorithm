function solution(a, b) {
  let answer = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) answer += i;

  return a === b ? a : answer;
}

console.log(solution(3, 3));
