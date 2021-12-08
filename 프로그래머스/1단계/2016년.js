function solution(a, b) {
  let dayObject = {
    2: "SUN",
    3: "MON",
    4: "TUE",
    5: "WED",
    6: "THU",
    0: "FRI",
    1: "SAT",
  };
  let sum = 0;

  for (let m = 1; m < a; m++) {
    if (m === 2) sum += 29;
    else if (m === 4 ||m === 6 || m === 9 || m === 11) sum += 30;
    else sum += 31;
  }

  return dayObject[(sum + (b - 1)) % 7];
}

console.log(solution(1, 1));
