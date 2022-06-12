let n = +require("fs").readFileSync("example.txt").toString();

let numberOfEnd = 666;
let count = 1;

while (count !== n) {
  numberOfEnd += 1;
  if (numberOfEnd.toString().includes("666")) count += 1;
}

console.log(numberOfEnd);
