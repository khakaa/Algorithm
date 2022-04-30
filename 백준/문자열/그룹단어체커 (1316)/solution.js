let input = require("fs").readFileSync("example.txt").toString().split("\n");

let N = +input.shift();
let result = 0;

for (let i = 0; i < N; i++) {
  let word = input[i];

  let temp = [];
  let isGroupWord = true;

  for (let j = 0; j < word.length; j++) {
    if (temp.indexOf(word[j]) === -1) temp.push(word[j]);
    else if (temp.indexOf(word[j]) !== temp.length - 1) {
      isGroupWord = false;
      break;
    }
  }

  if (isGroupWord) result += 1;
}

console.log(result);
