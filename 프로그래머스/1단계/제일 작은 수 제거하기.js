function solution(n) {
  var answer = [];
  if (n.length == 1) answer = [-1];
  else answer = n.filter((el) => el !== Math.min(...n));
  return answer;
}

console.log(solution([3]));
