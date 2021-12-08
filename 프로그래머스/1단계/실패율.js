function solution(N, stages) {
  let rateArr = [];

  for (let i = 1; i <= N; i++) {
    let rate =
      stages.filter((value) => value === i).length /
      stages.filter((value) => value >= i).length;
    rateArr.push({ stage: i, rate: rate });
  }

  rateArr.sort((a, b) => b.rate - a.rate);

  return rateArr.map((el) => el.stage);
}

console.log(solution(4, [4, 4, 4, 4, 4]));
