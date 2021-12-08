function solution(s) {
  var answer;
  for (let value of s) {
    if (value >= 0 && value <= 9) answer = true;
    else {
      answer = false;
      break;
    }
  }

  return s.length == 4 || s.length == 6 ? answer : false;
}

console.log(solution("a123"));
