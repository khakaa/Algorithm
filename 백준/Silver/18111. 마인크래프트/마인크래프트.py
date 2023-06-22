N, M, B = map(int, input().split())
block = []
for _ in range(N):
    block += list(map(int, input().split()))

ans = []

MAX = max(block)
MIN = min(block)

for i in range(MIN, MAX+1):
    inventory = B
    sec = 0
    for b in block:
        if b > i:
            inventory += (b-i)
            sec += 2*(b-i)
        elif b < i:
            inventory += (b-i)
            sec += 1*(b-i) * -1
    if inventory >= 0:
        ans.append([sec, i])

ans.sort(key=lambda a: (a[0], -a[1]))
print(ans[0][0], ans[0][1])
