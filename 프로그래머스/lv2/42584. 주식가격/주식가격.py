def solution(prices):
    answer = []
    
    for i in range(len(prices)-1):
        second = 0
            
        for j in range(i, len(prices)-1):
            if prices[i] <= prices[j]:
                second += 1
            
            else:
                break
        answer.append(second)
    answer.append(0)
    return answer