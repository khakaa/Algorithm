function solution(s) {
  // let answer = [];
  // const sortNum =  s.split(" ").sort((a,b) => a-b);
  // answer.push(sortNum[0]);
  // answer.push(sortNum[sortNum.length-1]);
  // return answer.join(" ");
  return Math.min(...s.split(" ")) + " " + Math.max(...s.split(" "));
}

console.log(solution("1 2 3 4"));
console.log(solution("-1 -2 -3 -4"));
