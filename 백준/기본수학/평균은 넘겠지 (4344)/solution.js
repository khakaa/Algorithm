const fs = require("fs");

// 입력값 개수
let n = fs.readFileSync("example.txt").toString().split("\n")[0] * 1;

for (let i = 0; i < n; i++) {
  //   학생수, 학생들의 점수가 담긴 배열
  let studentInfoArr = fs
    .readFileSync("example.txt")
    .toString()
    .split("\n")
    [i + 1].split(" ")
    .map((num) => +num);

  studentInfoArr.shift();

  // 평균 구하기
  let average =
    studentInfoArr.reduce((acc, cur) => {
      return acc + cur;
    }, 0) / studentInfoArr.length;

  // 평균이상의 학생 수 구하기
  let moreThanAverageStudent = 0;
  for (let j = 0; j < studentInfoArr.length; j++) {
    if (studentInfoArr[j] > average) moreThanAverageStudent += 1;
    else continue;
  }

  let proportion =
    ((moreThanAverageStudent / studentInfoArr.length) * 100).toFixed(3) + "%";

  console.log(proportion);
}
