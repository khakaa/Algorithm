function solution(number, k) {
  let stack = [];
  for (let i in number) {
    let value = number[i];

    while (k > 0 && stack[stack.length - 1] < value) {
      stack.pop();
      k--;
    }

    stack.push(value);
  }

  stack.splice(number.length - k, k);
  return stack.join("");
}

console.log(solution("12344", 2));
console.log(solution("1231234", 3));
