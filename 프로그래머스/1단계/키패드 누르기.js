const KEYPAD = {
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

function disCalculate(num, hand, lCurrent, rCurrent) {
  let lDistance =
    Math.abs(KEYPAD[num][0] - KEYPAD[lCurrent][0]) +
    Math.abs(KEYPAD[num][1] - KEYPAD[lCurrent][1]);
  let rDistance =
    Math.abs(KEYPAD[num][0] - KEYPAD[rCurrent][0]) +
    Math.abs(KEYPAD[num][1] - KEYPAD[rCurrent][1]);

  if (lDistance === rDistance) return hand === "right" ? "R" : "L";

  return lDistance < rDistance ? "L" : "R";
}

function solution(numbers, hand) {
  let lCurrent = "*";
  let rCurrent = "#";
  let answer = "";

  for (let n of numbers) {
    if (n % 3 === 1) {
      answer += "L";
      lCurrent = n;
    } else if (n % 3 === 0 && n > 0) {
      answer += "R";
      rCurrent = n;
    } else {
      answer += disCalculate(n, hand, lCurrent, rCurrent);
      answer[answer.length - 1] === "L" ? (lCurrent = n) : (rCurrent = n);
    }
  }
  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
