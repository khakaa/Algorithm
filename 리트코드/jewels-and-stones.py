# -*- coding: utf-8 -*-

import collections

# sol1. 해시 테이블을 이용한 풀이
def numJewelsInStones(J,S):
    freqs = {}
    count = 0

    for char in S:
        if char not in freqs:
            freqs[char] = 1
        else:
            freqs[char] += 1

    for char in J:
        if char in freqs:
            count += freqs[char]
    
    return count


# sol2. defaultDict를 이용한 비교 생략
def numJewelsInStones2(J,S):
    freqs = collections.defaultdict(int) # 기본값이 0
    count = 0

    for char in S:
        freqs[char] += 1

    for char in J:
        count += freqs[char]

    return count

# sol3. Counter로 계산 생략
def numJewelsInStones3(J,S):
    freqs = collections.Counter(S)
    count = 0 

    for char in J:
        count += freqs[char]

    return count

# sol4. 리스트 컴프리헨션으로 파이썬 다운 풀이방식
def numJewelsInStones4(J,S):
    # s for s in S  -> [a,A,A,b,b,b,b]
    # s in J for s in S -> [True, True, True, False, False, False, False]
    
    return sum(s in J for s in S)

print(numJewelsInStones4("aA", "aAAbbbb"))
