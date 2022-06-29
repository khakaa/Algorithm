# -*- coding: utf-8 -*-

# 1. 투 포인터를 이용한 스왑
# def reverseString(s):
#     left, right = 0, len(s) - 1

#     while left < right:
#         s[left], s[right] = s[right], s[left]
#         left += 1
#         right -= 1

#     return s

# 2. pythonic way
def reverseString(s):
    s.reverse()

    return s


print(reverseString(["h","e","l","l","o"]))