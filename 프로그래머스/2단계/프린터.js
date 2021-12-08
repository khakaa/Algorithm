function solution(priorities, location) {
  let answer = [];
  let temp = location;

  while (temp !== -1) {
    let max = Math.max(...priorities);
    if (priorities[0] !== max) {
      priorities.push(priorities.shift());
      if (temp === 0) temp = priorities.length - 1;
      else temp--;
    } else {
      answer.push(priorities.shift());
      temp--;
    }
  }
  console.log(answer);
  return answer.length;
}

console.log(solution([1, 1, 9, 1, 1, 1], 0));
