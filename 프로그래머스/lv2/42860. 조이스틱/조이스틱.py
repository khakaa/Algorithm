def solution(name):
    answer = 0
    min_move = len(name) - 1
    
    for i, c in enumerate(name):
        answer += min(ord(c) - ord('A'), ord('Z') - ord(c) + 1)
        
        next = i+1
        while next < len(name) and name[next] == 'A':
            next += 1
            
        min_move = min(min_move, i*2 + len(name) - next, (len(name) - next)*2 + i)
    return answer + min_move