# -*- coding: utf-8 -*-

# 리스트 컴프리헨션, counter 객체 사용
import re
from collections import Counter

def mostCommonWord(paragraph, banned):
    words = [word for word in re.sub('[^\w]', ' ', paragraph).lower().split() if word not in banned]

    counts = Counter(words)

    return counts.most_common(1)[0][0]

print(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.",["hit"]))