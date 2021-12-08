function solution(people, limit) {
  people.sort((a, b) => b - a);
  let max = 0;
  let min = people.length - 1;
  let cnt = 0;

  while (max < min) {
    if (people[max] + people[min] <= limit) {
      max++;
      min--;
    } else max++;
    cnt++;
  }

  if (max == min) cnt++;
  return cnt;
}

console.log(solution([70, 50, 80, 50], 100));
