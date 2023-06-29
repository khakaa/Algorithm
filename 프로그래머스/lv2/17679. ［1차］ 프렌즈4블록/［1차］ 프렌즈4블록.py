def find_block(m, n, board):
    block = set()
    for i in range(m-1):
        for j in range(n-1):
            if (board[i][j] == board[i][j+1] == board[i+1][j] == board[i+1][j+1]) and board[i][j] != '0':
                block.add((i, j))
                block.add((i, j+1))
                block.add((i+1, j))
                block.add((i+1, j+1))

    for b in block:
        x, y = b
        board[x][y] = '0'
    return len(block)


def move_block(m, n, board):
    for i in range(m-2, -1, -1):
        for j in range(n):
            h = i
            while 0 <= h+1 < m and board[h+1][j] == '0':
                h += 1
            if h != i:
                board[h][j], board[i][j] = board[i][j], '0'


def solution(m, n, board):
    ans = 0
    board_list = [list(board[i]) for i in range(m)]

    while True:
        res = find_block(m, n, board_list)
        if res == 0:
            break
        ans += res
        move_block(m, n, board_list)

    return ans