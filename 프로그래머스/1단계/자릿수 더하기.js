function solution(n) {
  var answer = n
    .toString()
    .split("")
    .reduce((a, b) => a * 1 + b * 1);
  // var answer = 0;
  // for (var value of nArray){
  //     answer += parseInt(value)
  // }
  return answer;
}

console.log(solution(987));
