N = int(input())

answer = 0
col = [0] * N

def nQueen(row):
    global answer # 함수 내부에서 전역변수를 사용하기 위해서는 global 키워드를 사용하여 해당 전역 변수를 재선언해야함
    def promising(row):
        for i in range(row):
            if ( col[i] == col[row] or abs(i - row) == abs(col[i] - col[row])):
                return False
        return True
    
    if row == N:
        answer += 1
        return

    for i in range(N):
        col[row] = i

        if promising(row):
            nQueen(row + 1)

nQueen(0)
print(answer)