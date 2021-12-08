function solution(s) {
  var answer = "";
  var stringLen = s.length;
  // 짝수
  if (stringLen % 2 == 0) {
    answer = s[stringLen / 2 - 1] + s[stringLen / 2];
  } else answer = s[parseInt(stringLen / 2)];
  return answer;
}

// 삼항연산자!!
//  function solution(s){
//     return s.length % 2 ? s[parseInt(s.length/2)] : s.substr(s.length/2 - 1, 2);
//  }

console.log(solution("abcd"));
