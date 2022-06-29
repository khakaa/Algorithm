# -*- coding: utf-8 -*-

# 1. 오름차순 풀이
from tkinter import N


def arrayPairSum(nums):
    sum = 0
    pair = []
    nums.sort()

    for n in nums:
        pair.append(n)
        if len(pair) == 2:
            sum += min(pair)
            pair = []

    return sum

# 2. 짝수번째 값 계산
def arrayPairsum2(nums):
    sum = 0
    nums.sort()

    for i, n in enumerate(nums):
        if i % 2 == 0:
            sum += n

    return sum

# 3. pythonic way
def arrayPairsum3(nums):
    return sum(sorted(nums)[::2])