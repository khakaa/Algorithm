from collections import deque

def solution(maps):
    answer = 0
    dxy = [[-1,0],[0,1],[1,0],[0,-1]]
    # visited = [[0 for _ in range(len(maps))] for _ in range(len(maps[0]))]
    # print(visited)
    queue = deque()
    queue.append((0,0))
    # visited[0][0] = 1
    
    while queue:
        x,y = queue.popleft()
        
        for dx, dy in dxy:
            nx = dx + x
            ny = dy + y
            
            if nx >= 0 and nx < len(maps) and ny >= 0 and ny < len(maps[0]):
                if maps[nx][ny] == 0:
                    continue
                
                if maps[nx][ny] == 1:
                    maps[nx][ny] = maps[x][y] + 1
                    queue.append((nx,ny))
            else:
                continue
    return maps[-1][-1] if maps[-1][-1] > 1 else -1