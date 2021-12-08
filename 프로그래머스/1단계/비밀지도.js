// function solution(n, arr1, arr2) {
//   const secretMap = arr1.map((v, idx) => (v | arr2[idx]).toString(2));
//   const answer = [];

//   for (const i in secretMap) {
//     if (secretMap[i].length < n) {
//       const add = n - secretMap[i].length;
//       for (let j = 0; j < add; j++) {
//         secretMap[i] = "0" + secretMap[i];
//       }
//     }
//     console.log(secretMap[i].length);
//     answer.push(
//       secretMap[i]
//         .split("")
//         .map((v) => {
//           if (v == 1) return "#";
//           if (v == 0) return " ";
//         })
//         .join("")
//     );
//   }

//   return answer;
// } // 너무 오래걸림

function solution(n, arr1, arr2) {
  return arr1.map((v, idx) =>
    (v | arr2[idx])
      .toString(2)
      .padStart(n, 0)
      .replace(/0/g, " ")
      .replace(/1/g, "#")
  );
}

console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
