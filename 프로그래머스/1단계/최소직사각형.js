function solution(sizes) {
  let widthList = [];
  let heightList = [];

  for (let size of sizes) {
    widthList.push(Math.max(...size));
    heightList.push(Math.min(...size));
  }

  return Math.max(...widthList) * Math.max(...heightList);
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
