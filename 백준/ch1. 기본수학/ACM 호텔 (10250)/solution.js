const input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const n = input.shift() * 1;

for (let i = 0; i < n; i++) {
  const hotelInfo = input[i].split(" ");
  const h = hotelInfo[0];
  const w = hotelInfo[1];
  const order = hotelInfo[2];

  let yy = order % h === 0 ? h.toString() : (order % h).toString();
  let xx =
    order % h === 0
      ? Math.floor(order / h).toString()
      : (Math.floor(order / h) + 1).toString();
  xx = xx.length < 2 ? "0" + xx : xx;

  console.log(yy + xx);
}
