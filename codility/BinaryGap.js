function mySolution(N) {
  let binaryN = N.toString(2);
  let gap = 0;
  let [front, end] = [0, 0];

  for (let i = 0; i < binaryN.length; i++) {
    // 0일 때 앞,뒤가 1이면 gap 계산
    if (binaryN[i] === "0") {
      if (binaryN[i - 1] === "1") front = i;
      if (binaryN[i + 1] === "1" && i < binaryN.length - 1) {
        end = i + 1;

        // gap 최댓값 계산
        if (end - front > gap) gap = end - front;
      }
    }
  }

  return gap;
}

function solution(N) {
  let binaryNum = N.toString(2);

  let binaryNumArr = binaryNum.slice(
    binaryNum.indexOf("1") + 1,
    binaryNum.lastIndexOf("1")
  );

  let zeroCountArr = binaryNumArr.split("1").map((c) => c.length);

  console.log(binaryNum, binaryNumArr, zeroCountArr);
  return zeroCountArr.length ? Math.max(...zeroCountArr) : 0;
}

console.log(solution(19));
console.log(solution(42));
console.log(solution(15));
