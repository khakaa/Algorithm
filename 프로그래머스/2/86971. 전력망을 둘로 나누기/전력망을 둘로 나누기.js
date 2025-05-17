function solution(n, wires) {
    let answer = Infinity
    
    const graph = Array(n+1).fill().map(() => [])

    for (const [v1, v2] of wires){
        graph[v1].push(v2)
        graph[v2].push(v1)
    }
    
    function dfs(graph, start, excluded) {
        let visited = new Set()
        let queue = [start]
        visited.add(start)
        
        let count = 0
        while(queue.length > 0){
            let node = queue.shift()
            count += 1
            
            for (const neighbor of graph[node]) {
                if ((node == excluded[0] && neighbor == excluded[1]) || 
                   (node == excluded[1] && neighbor == excluded[0]) ) {
                    continue
                }
                
                if (!visited.has(neighbor)) {
                    visited.add(neighbor)
                    queue.push(neighbor)
                }
            }
        }
        
        return count
    }
    
    for (const [v1, v2] of wires) {
        const groupSize = dfs(graph, 1, [v1, v2])
        const otherGroupSize = n - groupSize
        const diff = Math.abs(groupSize - otherGroupSize)

        answer = Math.min(answer, diff)
        
    }
    
    return answer
}