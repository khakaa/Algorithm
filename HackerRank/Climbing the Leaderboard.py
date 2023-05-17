def solution(ranked, player):
    queue = sorted(set(ranked), reverse=True)
    idx = len(queue) - 1
    ans = []

    for p in player:
        while queue[idx] <= p and idx >= 0:
            idx -= 1
        if idx < 0:
            ans.append(1)
            continue
        ans.append(idx + 2)
    return ans

print(solution([100, 90, 90, 80, 75, 60], [50, 65, 77, 90,102]))