def solution(people, limit):
    cnt = 0
    people.sort()
    
    p_min = 0
    p_max = len(people) - 1
    
    while p_min <= p_max:
        if p_min == p_max:
            cnt += 1
            break
            
        if people[p_min] + people[p_max] <= limit:
            p_min += 1
            p_max -= 1
        
        else:
            p_max -= 1
        cnt += 1
    return cnt