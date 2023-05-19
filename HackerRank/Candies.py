def solution(n, arr):
    ans = [1] * n
    for i in range(n-1):
        if arr[i] < arr[i+1]: 
            ans[i+1] = ans[i]+1

    for i in range(n-1,0,-1):
        if arr[i-1] > arr[i] and ans[i-1] <= ans[i]:
            ans[i-1] = ans[i]+1
    # print(ans)
    return sum(ans)

# [1,2,3,4,3,2,1]
print(solution(3,[1,2,2]))