let infoMap = {};
// 이진 탐색
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return start;
}

function combination(arr, score, start) {
  const key = arr.join("");
  const value = infoMap[key];

  if (value) {
    infoMap[key].push(score);
  } else {
    infoMap[key] = [score];
  }

  for (let i = start; i < arr.length; i++) {
    const temp = [...arr]; // 배열 복사
    temp[i] = "-";
    combination(temp, score, i + 1);
  }
}

function solution(info, query) {
  let answer = [];

  for (const e of info) {
    const splitedInfo = e.split(" ");
    const infoScore = +splitedInfo.pop();
    combination(splitedInfo, infoScore, 0);
  }

  for (const key in infoMap) {
    infoMap[key] = infoMap[key].sort((a, b) => a - b);
  }

  for (const e of query) {
    const splitedQuery = e.replace(/ and /g, " ").split(" ");
    const queryScore = +splitedQuery.pop();
    const key = splitedQuery.join("");
    const arr = infoMap[key];
    if (arr) {
      let result = arr.length - binarySearch(arr, queryScore);
      answer.push(result);
    } else {
      answer.push(0);
    }
  }
  return answer;
}

console.log(
  solution(
    [
      "java backend junior pizza 150",
      "python frontend senior chicken 210",
      "python frontend senior chicken 150",
      "cpp backend senior pizza 260",
      "java backend junior chicken 80",
      "python backend senior chicken 50",
    ],
    [
      "java and backend and junior and pizza 100",
      "python and frontend and senior and chicken 200",
      "cpp and - and senior and pizza 250",
      "- and backend and senior and - 150",
      "- and - and - and chicken 100",
      "- and - and - and - 150",
    ]
  )
);
