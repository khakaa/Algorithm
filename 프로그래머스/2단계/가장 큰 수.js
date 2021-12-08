function solution(numbers) {
  const answer = numbers
    .map((v) => v + "")
    .sort((a, b) => (b + a) - (a + b))
    .join("");

  return answer.replace(/^0+/,"0");
}

console.log(solution([3, 10, 9]));
