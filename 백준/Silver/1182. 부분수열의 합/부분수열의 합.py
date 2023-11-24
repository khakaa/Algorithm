import sys
input = sys.stdin.readline
N, S = map(int, input().split())
seq = list(map(int, input().split()))
answer = 0


def dfs(i, total, visited):
    global answer, N, S, seq
    if total == S:
        answer += 1

    for j in range(i+1, N):
        if visited[j] == 0:
            visited[j] = 1
            dfs(j, total+seq[j], visited)
            visited[j] = 0


for i in range(N):
    visited = [0]*N
    visited[i] = 1
    dfs(i, seq[i], visited)

print(answer)
