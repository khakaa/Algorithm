let input = require("fs").readFileSync("example.txt").toString().toUpperCase();

// 알파벳 26개만큼 공간
let alphaOccurrenceArray = new Array(26).fill(0);

// ASCII 코드 순으로 알파벳 빈도수 구하기
for (char of input) {
  let alphaIndex = char.charCodeAt() - "A".charCodeAt();
  alphaOccurrenceArray[alphaIndex] += 1;
}

// 가장 많은 빈도수 구하기
const maxOccurenceAlphaNum = Math.max(...alphaOccurrenceArray);

// 중복된 빈도수 있는지 체크
const isDuplicate = (arr) => {
  return (
    arr.indexOf(maxOccurenceAlphaNum) !== arr.lastIndexOf(maxOccurenceAlphaNum)
  );
};

const result = isDuplicate(alphaOccurrenceArray)
  ? "?"
  : String.fromCharCode(
      "A".charCodeAt() + alphaOccurrenceArray.indexOf(maxOccurenceAlphaNum)
    );

console.log(result);
