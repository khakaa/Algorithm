// 최소공배수
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// 유클리드 호제법 최대공약수 구하기 -> (a,b) = (b,r) r이 0인 b를 반환
function gcd(a, b) {
  return b ? gcd(b, a % b) : a;
}

function solution(arr) {
  const sortArr = arr.sort((a, b) => b - a);
  let answer = sortArr[0];
  for (let i = 1; i < sortArr.length; i++) {
    answer = lcm(answer, sortArr[i]);
  }
  return answer;
}

console.log(solution([3, 6, 8, 14]));
console.log(solution([1, 2, 3]));
