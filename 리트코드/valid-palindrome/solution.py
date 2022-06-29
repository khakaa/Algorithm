# -*- coding: utf-8 -*-
from collections import deque
import re
# 풀이1. 리스트로 변환 -> 리스트의 경우 pop연산을 하면 뒤에 있는 원소들의 순서를 하나씩 땡겨줘야 하기 때문에 O(n)이 소요된다.

# def isPalindrome(s):
#     strs = []
#     for char in s:
#         if char.isalnum():
#             strs.append(char.lower())

    # while len(strs) > 1:
    #     if strs.pop(0) != strs.pop():
    #         return False
    
    # return True

# 풀이 2. 데크 자료형을 이용한 최적화 -> popleft() 연산이 O(n)이라서 1번 풀이보다 빠르다.
# def isPalindrome(s):
#     strs = deque()

#     for char in s:
#         if char.isalnum():
#             strs.append(char.lower())

#     while len(strs) > 1:
#         if strs.popleft() != strs.pop():
#             return False

#     return True


# 풀이3. 슬라이싱 사용
def isPalindrome(s):
    s = s.lower()
    s = re.sub('[^a-z0-9]', '', s)

    # s[::-1] -> 문자열 뒤집기
    return s == s[::-1]

print(isPalindrome("A man, a plan, a canal: Panama"))