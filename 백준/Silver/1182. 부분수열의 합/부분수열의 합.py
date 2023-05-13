n, s = map(int ,input().split())
number = list(map(int ,input().split()))
answer = 0

def dfs(i,total,number,visited):
    global answer,n,s
    if total == s:
        answer += 1

    for j in range(i+1,n):
        if visited[j] == 0:
            visited[j] = 1
            dfs(j, total+number[j],number,visited)
            visited[j] = 0

for i in range(n):
    visited = [0]*n
    visited[i] = 1
    dfs(i,number[i],number,visited)

print(answer)