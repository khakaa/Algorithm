from collections import deque
graph = {}

def make_graph(wire, n):
    global graph
    
    for i in range(1, n+1):
        graph[i] = []
    
    for w in wire:
        graph[w[0]].append(w[1])
        graph[w[1]].append(w[0])

def bfs(start, graph, visited):
    queue = deque([start])
    visited[start] = True
    # print(visited)
    while queue:
        v = queue.popleft()
        
        for i in graph[v]:
            if visited[i] == False:
                queue.append(i)
                visited[i] = True

def solution(n, wires):
    global graph
    answer = 100
    wires = sorted(wires, key = lambda x : (x[0],x[1]))
    
    for i in range(len(wires)):
        wire = wires[:i] + wires[i+1:]
        make_graph(wire, n)
        print(graph[1])
        node = set([])
        for j in range(1, n+1):
            visited = [False] * (n+1)
            bfs(j, graph, visited)
            node.add(visited.count(True))
            
        if max(node) - min(node) < answer:
            answer = max(node) - min(node)
    
    return answer