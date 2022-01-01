function solution(new_id) {
  let answer = new_id
    .toLowerCase()
    // \w : 밑줄 문자를 포함한 영숫자 문자 == [A-Za-z0-9_] // [] : 문자 클래스
    .replace(/[^\w\-\.]/g, "")
    // {m,} : 최소 m개 이상
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
