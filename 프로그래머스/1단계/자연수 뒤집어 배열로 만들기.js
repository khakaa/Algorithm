function solution(n) {
  var answer = n
    .toString()
    .split("")
    .reverse()
    .map((v) => parseInt(v));
  return answer;
}

console.log(solution(123));
