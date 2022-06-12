function solution(atmos) {
  let answer = 0;

  for (let i in atoms) {
    let newMask = 0;
    let lastMask = 0;
    let fineDust = atmos[i][0];
    let ultraFileDust = at[i][1];

    // 매우나쁨
    if (fineDust >= 151 && ultraFileDust >= 76) {
      if (i + 1 <= lastMask) lastMask = i + 1;
      else if (lastMask < i + 1) {
        answer += 1;
        lastMask = i + 1;
      }
    }

    //  미세먼지 나쁨
    else if (fineDust >= 81 || ultraFileDust >= 36) {
      if (lastMask < i + 1 || newMask === 0) {
        answer += 1;
        lastMask = i + 3;
      }
    }
  }

  return answer;
}
