function solution(x) {
  var xSum = x
    .toString()
    .split("")
    .reduce((a, b) => a * 1 + b * 1);
  return x % xSum === 0 ? true : false;
}

console.log(solution(13));
