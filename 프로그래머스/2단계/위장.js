function solution(clothes) {
  let answer = 1;
  const clothesObj = {};

  // {옷 종류 : 옷 개수} 로 객체에 넣어준다.
  for (let i = 0; i < clothes.length; i++) {
    clothesObj[clothes[i][1]] = (clothesObj[clothes[i][1]] || 1) + 1; // 아무것도 안 입었을 경우를 포함하기 위해 (|| 1)로 초기값 1 지정
    console.log(clothesObj)
}

  for (let key in clothesObj) {
    answer *= clothesObj[key]; // 조합 공식
  }

  console.log(clothesObj)
  // 하루에 최소 한 개 의상을 입어야하기 때문에 1(아무것도 안 입은 경우)을 빼준다
  return answer - 1;
}

console.log(
  solution([
    ["crowmask", "face"],
    ["bluesunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
);
