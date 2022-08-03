from collections import deque 

n,m = map(int, input().split())
board = []
dyx = [[-1,0],[1,0],[0,-1],[0,1]]

for _ in range(n):
    board.append(list(map(int, input())))

def bfs(x,y):
    queue = deque()
    queue.append((x,y))

    while queue:
        x, y = queue.popleft()

        if x == n-1 and y == m-1:
            return board[x][y]

        for dx, dy in dyx:
            nx = dx + x
            ny = dy + y

            if nx < 0 or ny < 0 or nx >= n or ny >= m:
                continue

            if board[nx][ny] == 0:
                continue

            if board[nx][ny] == 1:
                board[nx][ny] = board[x][y] + 1
                queue.append((nx,ny))

    print(board)

print(bfs(0,0))
