function solution(n) {
  let arr = [];
  for (var i = 1; i <= n; i++) arr.push(i);

  for (var i = 1; i * i <= n; i++) {
    if (arr[i]) {
      let num = arr[i];
      for (var j = num * num; j <= n; j += num) {
        arr[j - 1] = 0;
      }
    }
  }
  arr.shift();
  return arr.filter((v) => v !== 0).length;
}

console.log(solution(10));
