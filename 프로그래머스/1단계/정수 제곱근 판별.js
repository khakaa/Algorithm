function solution(n) {
  let sqrt = Math.sqrt(n);
  return sqrt % 1 === 0 ? (sqrt + 1) ** 2 : -1;
}

console.log(solution(134));
