def dfs(visit, index, computers):
    visit[index] = 1
    
    for i in range(len(computers)):
        if visit[i] == 0 and computers[i][index] == 1:
            dfs(visit, i, computers)

def solution(n, computers):
    answer = 0
    visit = [0] * len(computers)
    
    for i in range(len(computers)):
        if visit[i] == 0:
            dfs(visit, i, computers)
            answer += 1
    return answer