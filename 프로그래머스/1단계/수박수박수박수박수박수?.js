function solution(n) {
  var answer = "";

  for (var i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      answer = answer.concat("", "수");
    } else if (i % 2 === 0) {
      answer = answer.concat("", "박");
    }
  }

  return answer;
  // return "수박".repeat(n).slice(0,n);
}

console.log(solution(8));
