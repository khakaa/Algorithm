function solution(N, number) {
  let answer = 0;

  let set = Array.from(new Array(8), () => new Set());

  for (let i = 0; i < 8; i++) {
    set[i].add(Number(N.toString().repeat(i + 1)));

    for (let j = 0; j < i; j++) {
      for (const arg1 of set[j]) {
        console.log(arg1, j);
        for (const arg2 of set[i - j - 1]) {
          set[i].add(arg1 + arg2);
          set[i].add(arg1 - arg2);
          set[i].add(arg1 * arg2);
          set[i].add(arg1 / arg2);
        }
      }
    }

    // console.log(set);
    if (set[i].has(number)) return i + 1;
  }

  return -1;
}

console.log(solution(5, 12));
