from collections import deque

def solution(maps):
    answer = 0
    n = len(maps)
    m = len(maps[0])
    dxy = [[0,-1], [0,1], [-1,0], [1,0]]
    queue = deque([(0,0)])
    
    while queue:
        x, y = queue.popleft()
        print(x,y)
        for dx, dy in dxy:
            nx,ny = dx + x, dy + y

            if nx < 0 or nx >= n or ny < 0 or ny >= m:
                continue

            if maps[nx][ny] == 1:
                maps[nx][ny] = maps[x][y] + 1
                queue.append((nx,ny))
    
    return maps[-1][-1] if maps[-1][-1] > 1 else -1