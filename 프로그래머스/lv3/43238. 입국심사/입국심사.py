# 임의의 시간을 구하고, 그 시간동안 몇명이 심사를 받을 수 있는 지 확인하며 이분탐색한다.

def solution(n, times):
    answer = 0
    left = min(times)
    right = max(times) * n
    
    while left <= right:
        mid = (left + right) // 2
        people = 0
        for time in times:
            people += mid // time
            
        if people >= n:
            answer = mid
            right = mid - 1
            
        else:
            left = mid + 1
        
    return answer