function solution(nums) {
  let uniNums = nums.filter((v, idx) => idx === nums.indexOf(v));

  return uniNums.length < nums.length / 2 ? uniNums.length : nums.length / 2;
}

console.log(solution([3, 3, 3, 2, 2, 2]));
