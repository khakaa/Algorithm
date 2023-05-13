import sys
input = sys.stdin.readline
n,l = map(int, input().strip().split(' '))
case = [list(map(int, input().strip().split(' '))) for _ in range(n)]
case.sort()

cnt = 0
cur = 0
for s,e in case:
    if cur > s:
        s = cur

    while s < e:
        s += l
        cnt += 1
    cur = s

print(cnt)