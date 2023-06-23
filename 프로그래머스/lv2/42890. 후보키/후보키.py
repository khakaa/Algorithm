from itertools import combinations

def solution(relation):
    row = len(relation)
    col = len(relation[0])
    candidates = []

    for d in range(1, col+1):
        candidates += list(combinations(range(col),d))
        
    # 유일성
    unique = []
    for candi in candidates:
        temp = [tuple([r[c] for c in candi]) for r in relation]
        if len(set(temp)) == row:
            unique.append(candi)
    
    ans = set(unique)
    # 최소성
    for i in range(len(unique)):
        for j in range(i+1, len(unique)):
            if len(unique[i]) == len((set(unique[i]) & set(unique[j]))):
                ans.discard(unique[j])
                
    return len(ans)