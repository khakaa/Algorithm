function solution(numbers) {
  var answer = [];

  for (var i = 0; i < numbers.length - 1; i++) {
    for (var j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }

  // Set 객체를 배열로 변환 아래와 같이 할 수 있다.
  const set = [...new Set(answer)];
  return set.sort((a, b) => a - b);
}

console.log(solution([5, 0, 2, 7]));
