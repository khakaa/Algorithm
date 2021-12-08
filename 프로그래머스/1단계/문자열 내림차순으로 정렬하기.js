function solution(s) {
  var answer = s.split("");

  return answer
    .sort((a, b) => {
      if (a < b) return 1;
      else if (a > b) return -1;
      return 0;
    })
    .join("");
}

console.log(solution("Zbcdefg"));
