function solution(n, lost, reserve) {
  let uniLost = lost.filter((value) => !reserve.includes(value));
  let uniReserve = reserve.filter((value) => !lost.includes(value));

  let answer =  
    n -
    uniLost.filter((a) => {
      let b = uniReserve.find((r) => Math.abs(a - r) <= 1);
      if (!b) return true;
      uniReserve = uniReserve.filter((r) => r !== b);
    }).length;

  console.log(uniLost, uniReserve);
  return answer;
}

console.log(solution(5, [2, 4], [3]));
