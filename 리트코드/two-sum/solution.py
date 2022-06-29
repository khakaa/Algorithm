# -*- coding: utf-8 -*-

# 풀이 1. 부르트 포스로 계산
def twoSum(nums,target):
    for i in range(len(sum)):
        for j in range(i + 1, len(sum)):
            if nums[i] + nums[j] == target:
                return [i,j]

# 풀이 2. in을 이용한 탐색 -> 모든 조합을 비교하지 않고 정답, 즉 타겟에서 첫 번째 값 target - n이 존재하는지 탐색
def twoSum2(nums, target):
    for i, n in enumerate(nums):
        complement = target - n

        if complement in nums[i + 1:]:
            return [nums.index(i), nums[i + 1:].index(complement) + (i + 1)]

# 풀이 3. 첫 번째 수를 뺀 결과를 키로 조회
def twoSum3(nums, target):
    nums_map = {}
    # 키와 값을 바꿔서 딕셔너리로 저장
    for i, num in enumerate(nums):
        nums_map[num] = i

    # 타겟에서 첫 번째 수를 뺀 결과를 키로 조회
    for i, num in enumerate(nums):
        if target - num in nums_map and i != nums_map[target - num]:
            return [nums.index(num), nums_map[target - num]]

# 풀이 4. 3번 풀이 조회 구조 개선 -> 딕셔너리에 모든 수를 저장할 필요없이 정답을 찾으면 바로 return
def twoSum4(nums, target):
    nums_map = {}
    # 하나의 for문으로 통합
    for i, num in enumerate(nums):
        if target - num in nums_map:
            return [nums_map[target-num], i]
        nums_map[num] = i
