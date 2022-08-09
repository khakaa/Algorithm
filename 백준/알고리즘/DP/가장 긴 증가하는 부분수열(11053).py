from bisect import bisect_left 

n = int(input())
arr = list(map(int, input().split()))
dp = []

for a in arr:
    p = bisect_left(dp, a) # a가 들어갈 위치
    print(p)

    if len(dp) <= p: # a가 가장 큰 숫자이면
        dp.append(a) # dp 삽입
    else: 
        dp[p] = a # 자신보다 큰 숫자중 최솟값과 대채

print(len(dp))


# for i in range(n):
#     for j in range(i):
#         if arr[i] > arr[j]:
#             dp[i] = max(dp[j] + 1, dp[i])

# print(max(dp))