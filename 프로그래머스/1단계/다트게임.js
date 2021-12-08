function solution(dartResult) {
  let temp = 0;
  const result = [];

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
        temp = 10;
        i++;
      } else temp = dartResult[i];
    } else if (dartResult[i] === "S") result.push(temp * 1);
    else if (dartResult[i] === "D") result.push(temp ** 2);
    else if (dartResult[i] === "T") result.push(temp ** 3);
    else if (dartResult[i] == "#") result[result.length - 1] *= -1;
    else if (dartResult[i] == "*") {
      result[result.length - 1] *= 2;
      if (result.length >= 2) {
        result[result.length - 2] *= 2;
      }
    }
  }
  return result.reduce((acc, cur) => acc + cur);
}

console.log(solution("1S*2T*3S"));
console.log(solution("1D2S0T"));
