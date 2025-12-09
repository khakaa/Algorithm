function solution(numbers) {
    const numberList = numbers.split('')
    const n = numbers.length
    let permutations = []
    let primeCount = 0
    
    function backTracking(numLength, numString, visited) {
        
        if (numString.length === numLength) {
            const num = Number(numString)
            if (!permutations.includes(num) && num !== 1 && num > 0){
                permutations.push(num)
            }
            return
        }
        
        for (let i=0; i<n; i++) {
            if (!visited[i]) {
                visited[i] = true
                backTracking(numLength, numString + numberList[i], visited)
                visited[i] = false
                numString.slice(0,-1)
            }
        }
    }
    
    for (let i=1; i<=n; i++) {
        let visited = new Array(n).fill(false)
        backTracking(i, '', visited)
    }
    
    
    for (let p of permutations) {
        let isPrime = true
        
        for (let i=2; i<=Math.floor(Math.sqrt(p)); i++) {
            if (p % i === 0) {
                isPrime = false
                break
            }
        }
        
        if (isPrime) {
            primeCount += 1                      
        }
    }
    
    return primeCount
}