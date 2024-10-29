T = int(input())
tc = []

for _ in range(T):
    tc.append(int(input()))

for n in tc:
    start = 1
    end = n
    answer = 0

    while start <= end:
        mid = (start + end) // 2

        if (mid * (mid+1)//2) <= n:
            start = mid + 1
            answer = mid
        else:
            end = mid - 1

    print(answer)
