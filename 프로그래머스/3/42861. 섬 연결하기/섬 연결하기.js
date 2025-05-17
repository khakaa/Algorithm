function solution(n, costs) {
    function find(parent, x) {
        if (x != parent[x]) {
            parent[x] = find(parent, parent[x])
        }
        return parent[x]
    }
    
    function union(x, y, parent) {
        const rootX = parent[x]
        const rootY = parent[y]
        
        if (rootX == rootY) return false
        
        parent[rootY] = rootX
        return true
    }
    
    costs.sort((a,b) => a[2] - b[2])
    
    let parent = Array(n).fill().map((_,i) => i)

    let totalCost = 0
    let edgeCount = 0
    
    for(let [a, b, cost] of costs) {
        if (find(parent, a) != find(parent, b)) {
            union(a, b, parent)
            totalCost += cost
            edgeCount += 1
        }
        
        if (edgeCount == n-1) break
    }
    
    return totalCost
}