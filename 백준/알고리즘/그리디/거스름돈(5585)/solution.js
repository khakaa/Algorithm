const money = +require("fs").readFileSync("example.txt").toString().trim();

const change = 1000 - money;

function solution(change) {
  let answer = 0;

  while (change > 0) {
    if (change >= 500) {
      answer += parseInt(change / 500);
      change = change % 500;
    } else if (change >= 100 && change < 500) {
      answer += parseInt(change / 100);
      change = change % 100;
    } else if (change >= 50 && change < 100) {
      answer += parseInt(change / 50);
      change = change % 50;
    } else if (change >= 10 && change < 50) {
      answer += parseInt(change / 10);
      change = change % 10;
    } else if (change >= 5 && change < 10) {
      answer += parseInt(change / 5);
      change = change % 5;
    } else if (change >= 1 && change < 5) {
      answer += parseInt(change / 1);
      change = change % 1;
    }
  }

  return answer;
}

console.log(solution(change));
