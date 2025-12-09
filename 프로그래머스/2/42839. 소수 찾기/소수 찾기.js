function solution(numbers) {
    const numberList = numbers.split('')
    const n = numbers.length
    let permutations = []
    let primeCount = 0
    
    function backTracking(numLength, numString, visited) {        
        if (numString.length === numLength) {
            const num = Number(numString)
            
            if (!permutations.includes(num)){
                permutations.push(num)
                if (checkPrime(num)) primeCount += 1
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
    
    function checkPrime(number) {
        if (number === 0) return false
        if (number === 1) return false
        
        for (let i=2; i<=Math.sqrt(number); i++) {
            if (number % i === 0) return false
        }
        
        return true
    }
    
    return primeCount
}