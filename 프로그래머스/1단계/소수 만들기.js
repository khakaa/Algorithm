function solution(nums) {
  let answer = [];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let x = i + 1; x < nums.length - 1; x++) {
      for (let y = x + 1; y < nums.length; y++) {
        answer.push(nums[i] + nums[x] + nums[y]);
      }
    }
  }

  return answer.filter((v) => {
    for (let i = 2; i * i <= v; i++) {
      if (v % i === 0) {
        return false;
      }
    }
    return true;
  }).length;
}

console.log(solution([1, 2, 7, 6, 4]));
