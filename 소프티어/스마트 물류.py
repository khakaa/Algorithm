N, K = map(int, input().split())
string = list(input())

def solution():
    global string
    cnt = 0

    for i in range(N):
        if string[i] == 'P':
            for j in range(i-K, i+K+1):
                if j < 0 or j >= N:
                    continue

                elif string[j] == 'H':
                    cnt += 1
                    string[j] = 'X'
                    break
    print(cnt)

solution()
            