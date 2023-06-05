# 백트래킹 풀이

N,M = map(int, input().split(' '))
city = []
home = []
chick = []
visit = [[0 for _ in range(N)] for _ in range(N)]
tmp_chic = []
res = []

for _ in range(N):
    city.append(list(map(int, input().split(' '))))

for i in range(N):
    for j in range(N):
        if city[i][j] == 1:
            home.append((i,j))
        elif city[i][j] == 2:
            chick.append((i,j))

# 치킨거리 계산
def calc_dist():
    tmp = 0
    # 집별로 반복
    for hx, hy in home:
        dist = float('inf')
        # 최대 치킨점 개수 뽑은 거만큼 반복하며 최소 거리 구하기
        for e, (cx, cy) in tmp_chic:
            dist = min(dist, abs(hx-cx) + abs(hy-cy))
        tmp += dist
    res.append(tmp)

# 백트래킹하며 최대 치킨집 경우의 수 구하기
def select_chicken(cnt):
    # M과 cnt 일치할 때 거리 계산 (백트래킹 조건)
    if cnt == M:
        calc_dist()
        return

    for e, (cx, cy) in enumerate(chick):
        if visit[cx][cy] == 0:
            # 시간 단축 (오름차순으로 경우의 수 조합하기 위함)
            if tmp_chic:
                if e < tmp_chic[-1][0]:
                    continue
            
            visit[cx][cy] = 1 # 방문 처리
            tmp_chic.append((e,(cx,cy)))
            select_chicken(cnt + 1)
            visit[cx][cy] = 0 # 방문 철회
            tmp_chic.pop()

select_chicken(0)
print(min(res))