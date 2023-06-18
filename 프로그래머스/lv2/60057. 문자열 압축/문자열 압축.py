def solution(s):
    answer = []
    if len(s) == 1:
        return 1
     # 1개 단위부터 (s길이의 반)개 단위까지     
    for i in range(1, len(s)//2+1):
        count = 1
        s1 = s[:i]
        temp_s = ''
        
        for j in range(i, len(s), i):
            s2 = s[j:j+i]    
            if s1 == s2:
                count += 1
            else:
                temp_s = temp_s + str(count) + s1 if count > 1 else temp_s + s1
                count = 1
            s1 = s[j:j+i]

        temp_s = temp_s + str(count) + s1 if count > 1 else temp_s + s1

        answer.append(len(temp_s))
    return min(answer)