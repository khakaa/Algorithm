function solution(n, m) {
  let GCD = 0,
    LCM = 1;

  for (var i = 1; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) GCD = Math.max(i);
  }

  LCM = GCD * (n / GCD) * (m / GCD);

  return [GCD, LCM];
}

console.log(solution(3, 12));
