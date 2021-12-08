function solution(n) {
  const answer = n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
  return parseInt(answer);
}

console.log(solution(118372));
