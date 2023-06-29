def solution(storey):
    answer = 0
    
    while storey:
        div = storey % 10
        if (div == 5 and (storey//10) % 10 >= 5) or div > 5:
            answer += (10-div)
            storey += (10-div)
        else:
            answer += div
        storey //= 10
        print(storey)
        print(answer)
    return answer