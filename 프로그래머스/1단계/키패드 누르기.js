function solution(numbers, hand) {
  let answer = "";

  function dis(num, rCurrent, lCurrent, hand) {
    const keypad = {
      1: [0, 0],
      2: [0, 1],
      3: [0, 2],
      4: [1, 0],
      5: [1, 1],
      6: [1, 2],
      7: [2, 0],
      8: [2, 1],
      9: [2, 2],
      "*": [3, 0],
      0: [3, 1],
      "#": [3, 2],
    };

    let rdistance =
      Math.abs(keypad[num][0] - keypad[rCurrent][0]) +
      Math.abs(keypad[num][1] - keypad[rCurrent][1]);
    let ldistance =
      Math.abs(keypad[num][0] - keypad[lCurrent][0]) +
      Math.abs(keypad[num][1] - keypad[lCurrent][1]);

    if (rdistance === ldistance) return hand === "left" ? "L" : "R";

    return rdistance > ldistance ? "L" : "R";
  }

  let rCurrent = "*";
  let lCurrent = "#";
  for (let num of numbers) {
    if (num % 3 === 1) {
      answer += "L";
      lCurrent = num;
    } else if (num % 3 === 0 && num > 0) {
      answer += "R";
      rCurrent = num;
    } else {
      answer += dis(num, rCurrent, lCurrent, hand);
      answer[answer.length - 1] === "L" ? (lCurrent = num) : (rCurrent = num);
    }
  }
  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));