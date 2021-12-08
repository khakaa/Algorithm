function solution(s) {
  let answer = true;
  let pCount = 0,
    yCount = 0;

  for (let element of s) {
    if (element == "p" || element == "P") pCount++;
    else if (element == "y" || element == "Y") yCount++;
  }

  if (pCount === yCount) answer = true;
  // count 개수가 같으면 true
  else answer = false; // 다르면 false
  return answer;
}

function solution(s) {
  // 대문자로 변환해주고 "p"를 구분으로 나눈 문자 개수 와 "y"를 구분으로 나눈 문자 개수 가 같으면 true
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}

console.log(solution("Ppyy"));
