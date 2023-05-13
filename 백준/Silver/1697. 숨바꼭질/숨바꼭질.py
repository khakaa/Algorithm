from collections import deque
n,k = map(int, input().split())
MAX = 100000
answer = 0
dist = [0] * (MAX+1)

queue = deque()
queue.append(n)
while queue:
    cur = queue.popleft()

    if cur == k:
        print(dist[cur])
        break

    for nd in (cur + 1, cur - 1, cur * 2):
        if 0 <= nd <= MAX and dist[nd] == 0:
            dist[nd] = dist[cur] + 1
            queue.append(nd)