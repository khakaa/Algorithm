let input = require("fs").readFileSync("example.txt").toString().split("\n");

let N = +input.shift();
let result = 0;

for (let i = 0; i < N; i++) {
  let word = input[i];

  let temp = [];
  let isGroupWord = true;

  for (let j = 0; j < word.length; j++) {
    // temp 배열에 해당 문자가 들어있지않으면 넣어준다
    if (temp.indexOf(word[j]) === -1) temp.push(word[j]);
    // 그룹단어가 아닌 경우, temp 배열에 해당 문자의 인덱스 번호와 temp 배열 길이 - 1이 다름
    else if (temp.indexOf(word[j]) !== temp.length - 1) {
      isGroupWord = false;
      break;
    }
  }

  if (isGroupWord) result += 1;
}

console.log(result);
