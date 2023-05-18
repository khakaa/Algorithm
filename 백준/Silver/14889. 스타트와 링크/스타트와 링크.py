n = int(input())
perform = [[] for _ in range(n)]
for i in range(n):
    perform[i] = list(map(int, input().split()))

ans = float('inf')
def dfs(idx, cnt,visited):
    global ans
    if cnt == n / 2:
        start = 0
        link = 0
        for i in range(n):
            for j in range(n):
                if visited[i] == 0 and visited[j] == 0:
                    start += perform[i][j]
                elif visited[i] == 1 and visited[j] == 1:
                    link += perform[i][j]

        ans = min(ans, abs(start-link))
        return

    for i in range(idx,n):
        if visited[i] == 0:
            visited[i] = 1
            dfs(i,cnt+1,visited)
            visited[i] = 0

visited = [0] * n
dfs(0,0,visited)
print(ans)
