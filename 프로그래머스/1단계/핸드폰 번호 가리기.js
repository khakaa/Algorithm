function solution(n) {
  var star = "";
  var answer;
  answer = n.substr(n.length - 4, 4);

  for (var i = 0; i < n.length - 4; i++) {
    star += "*";
  }

  return star + answer;
}

console.log(solution("4444"));
