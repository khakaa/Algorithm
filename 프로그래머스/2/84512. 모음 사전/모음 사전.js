function solution(word) {
    let words = []
    const alphabet = ['A','E','I','O','U']
    
    function dfs(cur) {
        if (cur.length === 5) return false
        
        for (let alpha of alphabet) {
            let newWord = cur + alpha
            words.push(newWord)
            dfs(newWord)
        }
    }
    
    dfs('')
    
    return words.indexOf(word) + 1
    
}