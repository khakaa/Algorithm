function solution(p) {
  let answer = '';
  let open = 0, close = 0;
  let check = true;

  if(p.length === 0) return "";

  for (let i = 0; i < p.length; i++){
      if (p[i] === "(") open++;
      if (p[i] === ")") close++;

      if (open < close) check = false;

      if (open === close){
          if (check === false){
            answer += "(";
            answer += solution(p.slice(i+1, p.length));
            answer += ")";

            for (let j = 1; j < i; j++){
                if (p[j] === "(") answer += ")";
                if (p[j] === ")") answer += "(";
            }
            return answer;
          }

          else {
            answer += p.slice(0, i+1);
            answer += solution(p.slice(i+1, p.length));
            return answer;
          }
      }
  }
}

console.log(solution("(()())()"));
console.log(solution(")("));
console.log(solution("()))((()"));
