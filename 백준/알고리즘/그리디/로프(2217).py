n = int(input())
lope = []
maxValue = float('-inf')

for i in range(n):
    lope.append(int(input()))

lope.sort(reverse=True)

for i in range(len(lope)):
    maxValue = max(maxValue, lope[i] * (i+1))

print(maxValue)