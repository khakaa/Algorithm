from collections import deque
# import copy
import sys
input = sys.stdin.readline

def bfs():
    # copy_area = copy.deepcopy(area) -> 속도가 매우 느리다는 단점이 있음.
    copy_area = [a[:] for a in area]
    queue = deque()

    # queue에 바이러스 인덱스 넣어줌
    for i in range(N):
        for j in range(M):
            if copy_area[i][j] == 2:
                queue.append((i,j))
    
    while queue:
        x, y = queue.popleft()

        for dx, dy in dxy:
            nx = x + dx
            ny = y + dy

            if nx < 0 or nx >= N or ny < 0 or ny >= M:
                continue
            if copy_area[nx][ny] == 0:
                copy_area[nx][ny] = 2
                queue.append((nx,ny))
    
    global answer
    cnt = 0

    # dfs 탐색 완료 후 안전 영역 개수 세어주기
    for i in range(N):
        cnt += copy_area[i].count(0)

    answer = max(answer, cnt)

def makeWall(cnt):
    # 벽을 3개 세웠으면, bfs 탐색
    if cnt == 3:
        bfs()
        return

    # 백트래킹
    for i in range(N):
        for j in range(M):
            if area[i][j] == 0:
                area[i][j] = 1
                makeWall(cnt + 1)
                area[i][j] = 0

N, M = map(int, input().split(' '))
dxy = [[0,-1], [0, 1], [1, 0], [-1, 0]]
area = []

for _ in range(N):
    area.append(list(map(int, input().split(' '))))
answer = 0
makeWall(0)
print(answer)

