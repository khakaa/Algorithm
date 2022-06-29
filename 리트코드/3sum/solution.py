# -*- coding: utf-8 -*-

# 1. 부루트포스
def threeSum(nums):
    results = []
    nums.sort()

    for i in range(len(nums) - 2):
        # 중복된 값 건너뛰기
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        
        for j in range(i + 1, len(nums) - 1):
            if j > 1 and nums[j] == nums[j - 1]:
                continue
            
            for k in range(i + 2, len(nums)):
                if k > j and nums[k] == nums[k - 1]:
                    continue
                
                if nums[i] + nums[j] + nums[k] == 0:
                    results.append([nums[i], nums[j], nums[k]])

    return results

#2. 투 포인터로 합 계산 -> i를 축으로 하고, 다음지점과 마지막 지점을 left, right로 설정하고 간격을 좁혀가며 sum을 계산한다
def threeSum2(nums):
    results = []
    nums.sort()

    for i in range(len(nums) - 2):
        # 중복된 값 건너뛰기
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        
        # 간격을 좁혀가며 합 sum 계산
        left, right = i + 1, len(sum) - 1

        while left < right:
            sum = nums[i] + nums[left] + nums[right]
            if sum < 0:
                left += 1
            elif sum > 0:
                right -= 1
            else:
                results.append([nums[i], nums[left], nums[right]])

                while left < right and nums[left] == nums[left + 1]:
                    left += 1
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1
                left += 1
                right -= 1

    return results