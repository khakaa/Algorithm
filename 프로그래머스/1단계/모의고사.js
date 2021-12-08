function solution(answers) {
  const answer = [];
  const check1 = [1, 2, 3, 4, 5];
  const check2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const check3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const an1 = answers.filter((v, idx) => v === check1[idx % 5]).length;
  const an2 = answers.filter((v, idx) => v === check2[idx % 8]).length;
  const an3 = answers.filter((v, idx) => v === check3[idx % 10]).length;
  const max = Math.max(an1, an2, an3);

  if (max === an1) answer.push(1);
  if (max === an2) answer.push(2);
  if (max === an3) answer.push(3);

  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
