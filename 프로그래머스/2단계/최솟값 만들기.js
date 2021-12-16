function solution(A, B) {
  let sortedA = A.sort((a, b) => a - b);
  let sortedB = B.sort((a, b) => a - b);
  let answer = 0;

  for (let i = 0; i < sortedA.length; i++) {
    answer += sortedA[i] * sortedB[sortedB.length - i - 1];
  }
  return answer;
}

function solution2(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  // sort 메소드는 정렬 후 그 배열을 반환한다.
  // 하나는 오름차순, 하나는 내림차순으로 정렬 후 순서대로 곱해주면 가장 작은 수 * 가장 큰 수 의 합이 된다.

  return A.reduce((acc, cur, idx) => acc + cur * B[idx], 0);
}

console.log(solution2([1, 4, 2], [5, 4, 4]));
console.log(solution2([1, 2], [3, 4]));
