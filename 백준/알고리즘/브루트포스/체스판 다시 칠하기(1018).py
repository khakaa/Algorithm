n,m = map(int, input().split())
chess = []
countList = []

for _ in range(n):
    chess.append(input())

for i in range(n-7):
    for j in range(m-7):
        count1 = 0 # 맨 왼쪽 칸이 W
        count2 = 0 # 맨 왼쪽 칸이 B

        for a in range(i, i+8):
            for b in range(j, j+8):
                if (a+b) % 2 == 0:
                    if chess[a][b] != 'W':
                        count1 += 1
                    elif chess[a][b] != 'B':
                        count2 += 1
                else:
                    if chess[a][b] != 'B':
                        count1 += 1
                    elif chess[a][b] != 'W':
                        count2 += 1
        countList.append(min(count1, count2))

print(min(countList))