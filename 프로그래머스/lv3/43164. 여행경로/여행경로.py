from collections import defaultdict, deque

def solution(tickets):
    dic = defaultdict(list)
    answer = ['ICN']
    
    for a, b in tickets:
        dic[a].append(b)
        
    for key, value in dic.items():
        dic[key].sort(reverse=True)
        
    stack = ['ICN']
    path = []
    while stack:
        dep = stack[-1]
        
        if dep not in dic or not dic[dep]:
            path.append(stack.pop())
        else:
            stack.append(dic[dep].pop())
    return path[::-1]