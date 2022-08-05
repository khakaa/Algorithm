t = int(input())
numberList = []

for _ in range(t):
    numberList.append(int(input()))

def count(n):
    if n == 1:
        return 1
    elif n == 2:
        return 2
    elif n == 3:
        return 4
    else:
        return count(n-1) + count(n-2) + count(n-3)

for n in numberList:
    print(count(n))
