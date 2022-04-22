let input = require("fs").readFileSync("example.txt").toString().split("\n");

for (let i = 3; i >= 0; i--) {
  if (i > 0) {
    console.log(input[0] * input[1][i - 1]);
  } else console.log(input[0] * input[1]);
}
