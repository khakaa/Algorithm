let input = require("fs").readFileSync("example.txt").toString().split("\n");

const N = +input.shift();
const pair = +input.shift();
let comObj = {};
let res = 0;

let visit = Array(N + 1).fill(1); // 방문배열 N+1길이만큼 1로 채움
let stack = [1]; // 1이랑 연결된 컴퓨터 찾는거니까 1을 넣어주고
visit[1] = 0; // 1은 방문했으니까 0으로 만들어줌

// 연결된 컴퓨터끼리 객체 생성
for (let i = 0; i < pair; i++) {
  let [a, b] = input[i].split(" ");

  if (!comObj[a]) comObj[a] = [];
  if (!comObj[b]) comObj[b] = [];

  comObj[a].push(b);
  comObj[b].push(a);
}

console.log(comObj);

while (stack.length) {
  console.log(stack);
  let node = stack.pop();

  for (idx of comObj[node]) {
    if (visit[idx] === 1) {
      visit[idx] = 0;
      stack.push(idx);
      res += 1;
    }
  }
}

console.log(res);
