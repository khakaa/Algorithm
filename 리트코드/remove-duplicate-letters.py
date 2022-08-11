# sol1. 재귀를 이용한 풀이
import collections


def removeDuplicateLetters(s):
    # 집합으로 정렬
    for char in sorted(set(s)):
        suffix = s[s.index(char):]

        # 전체 집합과 접미사 집합이 일치할 때 분리 진행
        if set(s) == set(suffix):
            return char + removeDuplicateLetters(suffix.replace(char, ''))

    return ''


# sol2. 스택을 이용한 문자 제거
def removeDuplicateLetters2(s):
    counter, seen, stack = collections.Counter(s), set(), []

    for char in s:
        counter[char] -= 1

        if char in seen:
            continue
        while stack and char < stack[-1] and counter[stack[-1]] > 0:
            seen.remove(stack.pop())
        stack.append(char)
        seen.add(char)

    return ''.join(stack)

print(removeDuplicateLetters2('cbacdcbc'))