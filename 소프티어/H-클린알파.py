p, n = map(int, input().split())
virus = list(map(int, input().split()))

answer = virus[0]

for i in range(1, n):
    answer = ((answer*p) % 1000000007)+ virus[i]
print(answer)