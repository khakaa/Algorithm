from collections import defaultdict

def isValid(s):
    dic = defaultdict(int)
    
    for s in s:
        dic[s] += 1
    print(dic)
    values = list(dic.values())
    count_set = set(values)
    if len(count_set) == 1:
        return "YES"
    elif len(count_set) == 2:
        mx = max(count_set)
        mi = min(count_set)
        if values.count(mx) == 1 and mx - mi == 1:
            return "YES"
        if mi == 1 and values.count(mi) == 1:
            return "YES"
    return "NO"
print(isValid("abbac"))