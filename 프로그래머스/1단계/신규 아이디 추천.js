function solution(new_id) {
  let answer = new_id
    .toLowerCase()
    // \w : 영숫자+"_" // [] : 문자 클래스
    .replace(/[^\w\-\.]/g, "")
    // {m,n} : m회 이상 n회 이하
    .replace(/\.{2,}/g, ".")
    // | : 가능성 있는 힝목들을 구별하여 선택
    .replace(/^\.|\.$/g, "")
    .replace(/^$/, "a")
    .slice(0, 15)
    .replace(/\.$/, "");

  return answer.length <= 2
    ? answer + answer[answer.length - 1].repeat(3 - answer.length)
    : answer;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"));
console.log(solution("=.="));
