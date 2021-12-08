function changeAlphabet(name, i) {
  let ascii = name.charCodeAt(i);
  return ascii > 78 ? 91 - ascii : ascii - 65;
}

function solution(name) {}

console.log(solution("ZZAAAZZ"));
