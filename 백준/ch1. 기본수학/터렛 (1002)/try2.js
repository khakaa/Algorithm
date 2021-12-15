const input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const input = ["3", "0 0 13 40 0 37", "0 0 3 0 7 4", "1 1 1 1 1 5"];
const n = input.shift() * 1;

for (let i = 0; i < n; i++) {
  const xyrxyr = input[i].split(" ").map((num) => num * 1);
  const x1 = xyrxyr[0];
  const y1 = xyrxyr[1];
  const r1 = xyrxyr[2];
  const x2 = xyrxyr[3];
  const y2 = xyrxyr[4];
  const r2 = xyrxyr[5];

  const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  let result;

  // 중심이 같은 경우
  if (x1 === x2 && y1 === y2) {
    result = r1 === r2 ? -1 : 0;
  } else {
    // 중심이 다른 경우
    // 접점 2개일 때
    if (distance < r1 + r2 && distance > r2 - r1) result = 2;
    // 접점 1개일 때
    if (distance === r1 + r2 || distance === r1 - r2) result = 1;
    // 접점 0개 일 때
    if (distance > r1 + r2 || distance < r2 - r1) result = 0;
  }
  console.log(result);
}
