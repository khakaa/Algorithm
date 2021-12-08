function solution(absolutes, signs) {
  const answer = absolutes.map((v, idx) => {
    if (signs[idx] === false) return -v;
    else return v;
  });

  return answer.reduce((acc, cur) => acc + cur);
}

console.log(solution([1, 2, 3], [false, false, true]));
