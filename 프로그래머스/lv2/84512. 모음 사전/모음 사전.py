answer = 0
alphabets = ['A','E','I','O','U']

def dfs(string, word):
    global answer, alphabets
    answer += 1
    
    if (word == string):
        return True
    
    if len(string) == 5:
        return False
    
    for alpha in alphabets:
        if dfs(string + alpha, word) == True:
            return True

def solution(word):

    for alpha in alphabets:
        if dfs(alpha, word) == True:
            return answer
    return answer