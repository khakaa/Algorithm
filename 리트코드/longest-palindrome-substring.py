# -*- coding: utf-8 -*-

def longestPalindrome(s):
    # 팰린드롬 판별 및 투 포인터 확장
    def expand(left,right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return s[left + 1:right]

    if len(s) < 2 or s == s[::-1]:
        return s
    
    result = ''
    # 슬라이딩 윈도우 우측으로 이동
    for i in range(len(s) - 1):
        result = max(result, expand(i, i + 1), expand(i, i + 2), key = len)
        # key=len -> 문자열 길이가 가장 긴 것 반환

    return result


print(longestPalindrome("babad"))
