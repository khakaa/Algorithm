answer = 51
def solution(begin, target, words):
    visited = [0] * len(words)
    
    def dfs(begin, target, words, cnt):
        global answer
        if begin == target:
            answer = min(answer, cnt)

        for i, word in enumerate(words):
            n = 0
            for j in range(len(begin)):
                if begin[j] != word[j]:
                    n += 1

            if n == 1 and visited[i] == 0:
                visited[i] = 1
                dfs(word, target, words, cnt+1)
                visited[i] = 0
                
    dfs(begin, target, words, 0)
    return 0 if answer == 51 else answer