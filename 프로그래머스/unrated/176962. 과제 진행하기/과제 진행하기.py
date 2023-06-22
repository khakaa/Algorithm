def solution(plans):
    ans = []
    for plan in plans:
        t,m = map(int, plan[1].split(":"))
        plan[1] = t*60 + m
        plan[2] = int(plan[2])
        
    plans.sort(key=lambda x:x[1])

    stack = []
    for i in range(len(plans)):
        name = plans[i][0]
        start = plans[i][1]
        playtime = plans[i][2]
        
        if i == len(plans) - 1:
            ans.append(name)
            for j in range(len(stack)-1, -1, -1):
                ans.append(stack[j][0])
            break
            
        extra = plans[i+1][1] - (start + playtime)
        
        # 시간내에 과제를 끝낼 수 있는 경우
        if extra >= 0: 
            ans.append(name)
            while stack:
                # 여분의 시간이 남은 과제 진행시간보다 클 경우
                if stack[-1][1] <= extra: 
                    work = stack.pop()
                    ans.append(work[0])
                    extra -= work[1]
                # 여분의 시간이 과제를 진행하기에 부족할 경우    
                else: 
                    stack[-1][1] -= extra
                    break
    # 시간내에 과제를 끝내지 못했으면 extra가 마이너스일 것이기 때문에 양수로 바꿔서 stack에 넣어준다.    
        else: 
            stack.append([name, -extra])   
    return ans