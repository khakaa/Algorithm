# -*- coding: utf-8 -*-

# sol1. counter를 이용한 음수 순 추출
import collections
import heapq

def topKFrequent(nums, k):
    freqs = collections.Counter(nums)
    freqs_heap = []

    # 힙에 음수로 삽입
    # 파이썬 heapq 모듈은 최소 힙으로 되어있기 때문에, 음수로 변환해 가장 빈도 수가 높은 값이 가장 큰 음수가 되어 우선순위가 되게 한다.
    for f in freqs:
        heapq.heappush(freqs_heap, (-freqs[f], f))
    
    topk = list()

    for _ in range(k):
        topk.append(heapq.heappop(freqs_heap)[1])

    return topk

# sol2. 파이썬다운 풀이 방식
def topKFrequent2(nums, k):
    return list(zip(*collections.Counter(nums).most_common(k)))[0]

print(topKFrequent2([1,1,1,2,2,3],2))