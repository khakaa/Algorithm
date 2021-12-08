function solution(n) {
  let ott = [4, 1, 2];
  let answer = "";

  while (n) {
    answer = ott[n % 3] + answer; // 3진수로 변환하는 부분 (먼저나온 나머지 + 다음 나머지 + ..)
    n = n % 3 == 0 ? n / 3 - 1 : Math.floor(n / 3); //(3의 배수일 경우 몫에서 -1을 해서 나머지를 구해줘야한다. 나머지 수의 경우 몫부분만 가져와서 다시 연산해준다)
  }
  return answer;
}

console.log(solution(9));
