const solution = (sugar) => {
  let answer = -1;
  let five = Math.floor(sugar / 5);

  while (five >= 0) {
    let remain = sugar - five * 5;

    if (remain % 3 === 0) {
      answer = five + remain / 3;
      break;
    } else {
      five -= 1;
    }
  }

  return answer;
};

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  console.log(solution(line));
  rl.close();
}).on("close", function () {
  process.exit();
});
