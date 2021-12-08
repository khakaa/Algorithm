function solution(numbers) {
  // 배열로 쪼갬
  numbers = numbers.toString().split("");

  // 중복을 제거한 소수만 담기위해
  const set = new Set();

  // 1자리수 부터 numbers의 길이 자리수 까지 순열 연산
  for (let i = 1; i <= numbers.length; i++) {
    const answer = getpermutation(numbers, i);
    // console.log(answer)
    answer.forEach((v) => {
      // 순열 연산으로 구한 배열을 join하여 숫자로 만들어준다.
      const num = Number(v.join(""));

      // 소수 구별위한 변수 초기화
      let isPrime = true;

      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
          isPrime = false; // 소수가 아니면 false
          break;
        }
      }

      if (isPrime && num > 1) set.add(num); // isPrime이 참이면서 1보다 큰 수(1은 소수가 아니기 때문에) 이면 소수이기때문에 set에 추가
    });
  }
  return set.size; // set 객체의 원소 수 = 소수의 개수
}

// 순열 알고리즘
function getpermutation(arr, n) {
  let result = [];

  if (n == 1) return arr.map((v) => [v]);
  arr.forEach((fixed, idx, origin) => {
    let restArr = origin.filter((_, i) => i != idx); // fixed를 제외한 배열
    let permutationArr = getpermutation(restArr, n - 1); // 나머지에서 순열을 구한다
    let attached = permutationArr.map((p) => [fixed, ...p]); // 구한 순열에다가 fixed 붙이기
    result.push(...attached);
  });

  return result;
}

console.log(solution("173"));
