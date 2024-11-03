function solution(word) {
    let answer = 0;
    const alphabet = ['A', 'E', 'I', 'O', 'U'];
    
    function dfs(string, word) {
        answer += 1;
        
        if (string === word) {
            return true;    
        }
        
        if (string.length === 5) {
            return false;
        }
        
        for (let alpha of alphabet) {
            if (dfs(string+alpha, word)) return true;
        }
    }
    for (let alpha of alphabet){
        if (dfs(alpha, word)) return answer
    }
    
}