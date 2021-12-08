// 조합 알고리즘
function combination(arr, n) {
    let result = [];

    if (n === 1) return arr.map((v) => [v]);
    arr.forEach((fixed, idx, origin) => {
      let rest = origin.slice(idx + 1);
      let combinationArr = combination(rest, n - 1);
      let attached = combinationArr.map((c) => [fixed, ...c]);
      result.push(...attached);
    });
    return result;
  }

function solution(orders, course) {
    let listObj = {};
    let answer = [];

  // orders의 가능한 조합을 구하고 listObj에 [orders조햡 : 횟수] 로 넣어준다.
  orders.forEach((o) => {
    const orderArr = o.split("").sort();

    for (let i = 0; i < course.length; i++) {
      const orderCombis = combination(orderArr, course[i]);
      orderCombis.map(orderCombi => {
          const string = orderCombi.join("");
            if (listObj[string]) listObj[string] += 1;
            else listObj[string] = 1;
      });
    }
  });

  // 객체에 담긴 [키 : 값] 쌍을 배열의 원소로 갖는 배열을 만들어준다.
  const listArr = Object.entries(listObj);

  course.forEach(c => {
      const candidates = listArr.filter(l => l[0].length == c && l[1] > 1); // course와 일치하면서 주문한 횟수가 1 이상인 것들을 candidates로 분류
      if (candidates.length > 0){ // candidates가 존재한다면
          let max = Math.max(... candidates.map(v => v[1])); // 가장 많이 주문한 횟수 구하고
          candidates.forEach(v => {
              if (v[1] == max) answer.push(v[0]); // max와 일치하는 candidates만 정답배열에 담아준다.
          })
      }    
  })
  return answer.sort();
}

console.log(
  solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
);
console.log(
  solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5])
);
console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4]));
