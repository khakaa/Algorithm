function solution(arr) {
  // let answer = [];
  // for (let index = 0; index < arr.length; index++){
  //     if (arr[index] != arr[index + 1]){
  //         answer.push(arr[index]);
  //     }
  // }
  // return answer;

  return arr.filter((element, index) => element != arr[index + 1]);
}

console.log(solution([1, 2, 3, 3, 0, 4, 4]));
