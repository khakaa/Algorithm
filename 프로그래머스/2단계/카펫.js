function solution(brown, yellow) {
  let totalSpace = brown + yellow;

  for (let i = Math.floor(totalSpace / 2); i > 0; i--) {
    if (totalSpace % i !== 0) continue;

    let horizontal = i;
    let vertical = totalSpace / i;

    if ((horizontal - 2) * (vertical - 2) === yellow)
      return [horizontal, vertical];
  }
}

console.log(solution(8, 1));
