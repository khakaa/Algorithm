# 풀이1. dfs를 활용한 순열 생성
import itertools


def permute(nums):
    result = []
    prev_elements = []

    def dfs(elements):
        # 리프노드일 때 결과 추가
        if len(elements) == 0:
            result.append(prev_elements[:])

        # 순열 생성 재귀 호출
        for e in elements:
            next_elements = elements[:]
            next_elements.remove(e)

            prev_elements.append(e)
            
            dfs(next_elements)
            prev_elements.pop()

    dfs(nums)
    return result

def permute2(nums):
    return list(map(list, itertools.permutations(nums)))
print(permute2([1,2,3]))