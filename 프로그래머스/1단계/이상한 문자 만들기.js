function solution(s) {
  var splitString = s.split(" ");
  var answer = "";

  for (var i in splitString) {
    for (var j in splitString[i]) {
      // if (j % 2 === 0){
      //     var even = splitString[i][j].toUpperCase()
      //     answer += even
      // }
      // else if (j % 2 === 1){
      //     var odd = splitString[i][j].toLowerCase()
      //     answer += odd
      // }
      answer +=
        j % 2 === 0
          ? splitString[i][j].toUpperCase()
          : splitString[i][j].toLowerCase();
    }
    if (i < splitString.length - 1) answer += " ";
  }
  return answer;
}

console.log(solution("try hello world"));
