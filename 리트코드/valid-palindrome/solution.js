function isPalindrome(s) {
  let replacedStrs = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  // i 플래그 : 대소문자 구분하지 않고, 다 탐색한다.

  let revesedStrs = replacedStrs.split("").reverse().join("");

  return replacedStrs == revesedStrs;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
