function solution(m, musicinfos) {
  const rememberM = m.replace(/(\D)#/g, (match, p1) => p1.toLowerCase()); // # -> 소문자로 치환

  const broadCastM = musicinfos.map((m) => {
    const infoList = m.split(","); // "," 로 구분해서 배열로 만들어줌
    const melody = infoList[3].replace(/(\D)#/g, (match, p1) =>
      p1.toLowerCase()
    ); // # -> 소문자로 치환

    return [
      infoList[2],
      playMusic(
        toMinute(infoList[1].split(":")) - toMinute(infoList[0].split(":")),
        melody
      ),
    ]; // [음악 제목, 주어진 시간동안 재생된 멜로디]
  });

  const answer = broadCastM.reduce((answer, cur) => {
    if (cur[1].includes(rememberM)) {
      if (answer.length === 0 || answer[1].length < cur[1].length) return cur; // 길이가 긴거 반환
    }
    return answer;
  }, []);

  return answer.length === 0 ? "(None)" : answer[0];
}

// 재생된 시간을 분으로 계산해주는 함수
function toMinute(time) {
  return time[0] * 60 + time[1] * 1;
}

// 재생된 시간에 맞게 멜로디를 붙여주는 함수
function playMusic(minute, melody) {
  const length = melody.length;
  return melody.repeat(minute / length) + melody.substring(0, minute % length);
}

console.log(
  solution("CC#BCC#BCC#BCC#B", [
    "03:00,03:30,FOO,CC#B",
    "04:00,04:08,BAR,CC#BCC#BCC#B",
  ])
);
