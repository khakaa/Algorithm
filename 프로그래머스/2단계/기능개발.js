function solution(progresses, speeds) {
  // 각 배포마다 몇 개의 기능이 배포될 수 있는지 저장하는 변수
  let answer = [];
  // 배포를 위해 필요한 날짜를 앞의 기능과 비교하기 위한 변수
  let beforeDay = 0;

  progresses.map((v, idx) => {
    // 각 기능이 개발되는 데 필요한 날짜 수 계산
    let day = Math.ceil((100 - v) / speeds[idx]);

    // 앞에 있는 기능보다 개발 날짜가 크다면 앞에 기능과 같이 배포될 수 없기 때문에 answer 배열에 자신을 배포한다는 표시로 1을 push해준다.
    if (day > beforeDay) {
      answer.push(1);
      beforeDay = day;
      // 앞에 있는 기능보다 개발 날짜가 작다면 같이 배포될 수 있기 때문에 배열의 요소값 + 1 (같이 배포한다는 의미)해준다.
    } else {
      answer[answer.length - 1]++;
    }
  });

  return answer;
}

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
