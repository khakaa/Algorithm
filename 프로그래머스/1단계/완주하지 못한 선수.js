function solution(participant, completion) {
  const participantObj = {};

  for (const p of participant) {
    // 중복된 선수 이름의 value 값을 +1 한다.
    if (participantObj[p] == 1) participantObj[p] += 1;
    // 중복이 아닐 경우 value = 1
    else participantObj[p] = 1;
  }

  for (const c of completion) {
    // 완주한 선수들의 value값만 -1하면 완주하지 못한 선수의 value값은 1이 된다.
    if (participantObj[c]) participantObj[c] -= 1;
  }

  return Object.keys(participantObj).filter((v) => participantObj[v] == 1)[0];
}

console.log(solution(["aa", "bb", "cc", "aa"], ["aa", "bb", "cc"]));
