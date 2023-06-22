n, m = map(int, input().split())
board = [list(map(int, input().split())) for _ in range(n)]
ans = 0
tetromino = [[(0,0),(0,1),(0,2),(0,3)],[(0,0),(1,0),(2,0),(3,0)], # 1
             [(0,0),(0,1),(1,0),(1,1)], # 2
             [(0,0),(1,0),(2,0),(2,1)],[(0,1),(1,1),(2,1),(2,0)],[(0,0),(0,1),(1,0),(2,0)],[(0,0),(0,1),(1,1),(2,1)],[(0,0),(1,0),(1,1),(1,2)],
             [(0,2),(1,0),(1,1),(1,2)],[(0,0),(0,1),(0,2),(1,0)],[(0,0),(0,1),(0,2),(1,2)], # 3
             [(0,0),(1,0),(1,1),(2,1)],[(0,1),(1,0),(1,1),(2,0)],[(0,1),(0,2),(1,0),(1,1)],[(0,0),(0,1),(1,1),(1,2)], # 4
             [(0,0),(0,1),(0,2),(1,1)],[(0,0),(1,0),(1,1),(2,0)],[(0,1),(1,0),(1,1),(1,2)],[(0,1),(1,0),(1,1),(2,1)]]


for i in range(n):
    for j in range(m):
        for t in tetromino:
            total = 0
            for x,y in t:
                nx, ny = i+x, j+y
                if nx < 0 or nx >= n or ny < 0 or ny >= m:
                    continue
                total += board[nx][ny]
            ans = max(ans, total)

print(ans)     

N, M = map(int, input().split())
board = [list(map(int, input().split())) for _ in range(N)]
vis = [[0]*M for _ in range(N)]
ans = 0
dxy = [(0,1),(0,-1),(1,0),(-1,0)]

# ㅓ,ㅏ,ㅗ,ㅜ 모양 제외한 dfs
def dfs1(i, j, cnt, total):
    global ans

    if cnt == 4:
        ans = max(ans, total)
        return

    for x,y in dxy:
        nx, ny = x+i, y+j
        if nx < 0 or nx >= N or ny < 0 or ny >= M:
            continue
        if vis[nx][ny] == 0:
            vis[nx][ny] = 1
            dfs1(nx, ny, cnt + 1, total + board[nx][ny])
            vis[nx][ny] = 0

# ㅓ,ㅏ,ㅗ,ㅜ 모양 dfs
def dfs2(x, y):
    global ans

    for i in range(4):
        total = board[x][y]
        for j in range(3):
            t = (i+j)%4
            nx,ny = x + dxy[t][0], y + dxy[t][1]
            
            if nx < 0 or nx >= N or ny < 0 or ny >= M:
                break

            total += board[nx][ny]
        ans = max(ans, total)

for i in range(N):
    for j in range(M):
        vis[i][j] = 1
        dfs1(i,j,1,board[i][j]) 
        vis[i][j] = 0

        dfs2(i,j)

print(ans)