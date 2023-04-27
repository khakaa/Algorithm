# from itertools import permutations 

# def solution(k, dungeons):
#     answer = -1
#     for case in permutations(dungeons, len(dungeons)):
#         tired = k
#         count = 0
#         for dg in case:
#             if tired >= dg[0]:
#                 tired -= dg[1]
#                 count += 1
#         if count > answer:
#             answer = count
#     return answer
answer = 0

def dfs(k, count, dungeons):
    global answer
    
    if count > answer:
        answer = count
        
    for i in range(N):
        if visited[i] == 0 and k >= dungeons[i][0]:
            visited[i] = 1
            # print("before","visited==",visited,"count==",count)
            dfs(k - dungeons[i][1], count + 1, dungeons)
            visited[i] = 0
            # print("after","visited==",visited,"count==",count)

def solution(k, dungeons):
    global N, visited
    N = len(dungeons)
    visited = [0] * N
    dfs(k, 0, dungeons)
    return answer
    
    