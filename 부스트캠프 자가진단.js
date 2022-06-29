function solution(arr) {
  let answer = [];
  let map = new Map();

  for (let num of arr) {
    if (map.has(num)) map.set(num, map.get(num) + 1);
    else map.set(num, 1);
  }

  for (let [key, value] of map) {
    if (value >= 2) answer.push(value);
  }
  return answer.length > 0 ? answer : [-1];
}

console.log(solution([1, 2, 3, 3, 3, 3, 4, 4]));
console.log(solution([3, 2, 4, 4, 2, 5, 2, 5, 5]));
console.log(solution([3, 5, 7, 9, 1]));
