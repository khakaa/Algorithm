def solution(number, k):
    stack = []

    for n in number:
        if len(stack) == 0:
            stack.append(n)
            continue
            
        while k > 0 and stack[-1] < n:
            stack.pop()
            k -= 1
            if len(stack) == 0:
                break
        stack.append(n)
    
    return number[:len(number)-k] if k > 0 else ''.join(stack)