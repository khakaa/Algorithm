# -*- coding: utf-8 -*-

# 슬라이딩 윈도우와 투 포인터로 사이즈 조절

def lengthOfLongestSubstring(s):
    used = {}
    max_length = start = 0

    for index, char in enumerate(s):
        # 이미 등장했던 문자라면 start 위치 갱신
        # 현재 슬라이딩 윈도우의 바깥에 있는 문자는 예전에 등장한 적이 있더라도 지금은 무시하는 조건을 추가해줘야 한다. 얘시 입력으로 "tmmzuxt" 
        if char in used and start <= used[char]:  
            start = used[char] + 1
        else: # 최대 부분 문자열 길이 갱신
            max_length = max(max_length, index - start + 1)

        print("1", used)
        # 현재 문자의 위치 삽입
        used[char] = index

        print("2", used, index, char, start)
    return max_length

print(lengthOfLongestSubstring("abcabcbb"))