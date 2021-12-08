function solution(s) {
  if (s.length === 1) return 1;
  let strings = [];

  for (let i = 1; i <= parseInt(s.length/2); i++){
    let count = 1;
    let string = '';
    for (let j = 0; j < s.length; j += i){
      let cur = s.substr(j,i);
      let next = s.substr(j+i,i);
      if (cur === next){
        count++;
      } else {
        string = count > 1 ? string + count + cur : string + cur
        count = 1;
      }
    }
    strings.push(string.length);
  }
  return Math.min(...strings);
}

console.log(solution("aabbaccc"));
console.log(solution("ababcdcdababcdcd"));
console.log(solution("abcabcdede"));
console.log(solution("abcabcabcabcdededededede"));
console.log(solution("xababcdcdababcdcd"));
