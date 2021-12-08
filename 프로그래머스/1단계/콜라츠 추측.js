function collatz(n) {
  var answer = 0;
  while (n > 1) {
    if (n % 2 === 0) {
      n = n / 2;
      answer++;
    } else if (n % 2 === 1) {
      n = n * 3 + 1;
      answer++;
    }
  }
  return answer >= 500 ? -1 : answer;
}

console.log(collatz(626331));
