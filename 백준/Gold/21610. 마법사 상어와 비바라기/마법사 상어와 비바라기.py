import sys
input = sys.stdin.readline

direction = {
    1 : [0,-1], # 왼
    2 : [-1,-1], # 왼위대
    3 : [-1,0], # 위
    4 : [-1,1], # 오위대
    5 : [0,1], # 오
    6 : [1,1], # 오아대
    7 : [1,0], # 아
    8 : [1,-1] # 왼아대
}

bug = [[-1,-1],[-1,1],[1,1],[1,-1]]
# [3,0] -> [3,-3] ([3,2]) # 왼쪽으로 3
# [3,0] -> [5,0] ([0,0]) # 아래 3
# [3,0] -> [0,] # 오위대 1
# [0,0],[0,1],[0,2]
# [1,0],[1,1],[1,2]
# [2,0],[2,1],[2,2]
n,m = map(int, input().rstrip().split())
basket = [list(map(int, input().rstrip().split())) for _ in range(n)]
# [d 방향,s 거리]
rain_dance = [list(map(int, input().rstrip().split())) for _ in range(m)]

# 초기 비바라기 시전 후, 비구름
cloud = [(n-2,0),(n-2,1),(n-1,0),(n-1,1)]

for d,s in rain_dance:
    moved_cloud = []
    for x, y in cloud:
        # 1 구름 이동
        dx = (x + direction[d][0] * s) % n
        dy = (y + direction[d][1] * s) % n
        if dx < 0:
            dx += n
        if dy < 0:
            dy += n

        # 2 비가 내려 물의 양 +1 증가
        basket[dx][dy] += 1
        moved_cloud.append((dx,dy))

    # 4 물복사 버그
    for m_x, m_y in moved_cloud:
        b_count = 0
        for b_x, b_y in bug:
            b_dx, b_dy = m_x + b_x, m_y + b_y
            if b_dx < 0 or b_dx >= n or b_dy < 0 or b_dy >= n:
                continue
            if basket[b_dx][b_dy] > 0:
                b_count += 1

        basket[m_x][m_y] += b_count

    new_cloud = []
    for i in range(n):
        for j in range(n):
            if (i,j) in moved_cloud:
                continue
            if basket[i][j] >= 2:
                new_cloud.append((i,j))
                basket[i][j] -= 2
    cloud = new_cloud
print(sum(list(map(sum, basket))))