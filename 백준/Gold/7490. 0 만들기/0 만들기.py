t = int(input())


def dfs(i, sum, sign, num, s):
    if i == n:
        sum += sign*num
        if sum == 0:
            print(s)
        return
    dfs(i+1, sum, sign, num*10+(i+1), s+" "+str(i+1))
    dfs(i+1, sum+(sign*num), 1, i+1, s+"+"+str(i+1))
    dfs(i+1, sum+(sign*num), -1, i+1, s+"-"+str(i+1))


for _ in range(t):
    n = int(input())
    ans = []

    # dfs(sum, sign, num, i, str)
    dfs(1, 0, 1, 1, "1")
    print()
