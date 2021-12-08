function solution(s, n) {
  return s
    .split("")
    .map((v) => {
      if (v === " ") return v;
      return v.toLowerCase().charCodeAt() + n > 122
        ? String.fromCharCode(v.charCodeAt() + n - 26)
        : String.fromCharCode(v.charCodeAt() + n);
    })
    .join("");
}

console.log(solution("a B z", 1));
