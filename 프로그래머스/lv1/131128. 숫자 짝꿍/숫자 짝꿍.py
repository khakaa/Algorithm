from collections import defaultdict

def solution(X, Y):
    answer = ''
    
    x_cnt = defaultdict(int)
    y_cnt = defaultdict(int)
    for x in X:
        x_cnt[x] += 1
    for y in Y:
        y_cnt[y] += 1
        
    for x in x_cnt:
        if x in y_cnt:
            answer += x * min(x_cnt[x], y_cnt[x])
        
    if answer == '':
        return '-1'
    
    answer = sorted(answer, reverse=True)
    
    if answer[0] == '0':
        return '0'

    return "".join(answer)
        
    
    