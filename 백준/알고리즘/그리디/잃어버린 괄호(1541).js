let input = require("fs").readFileSync("example.txt").toString().trim();

const solution = (input) => {
  const minusArr = input.split("-").map((el) => {
    return el
      .split("+")
      .map(Number)
      .reduce((acc, cur) => acc + cur);
  });

  const answer = minusArr.reduce((acc, cur) => acc - cur);

  console.log(answer);
};

solution(input);
