# -*- coding: utf-8 -*-

# 1. 리스트 변환
import collections


def isPalindrome(head):
    q = []

    if not head:
        return True

    node = head
    # 리스트 변환
    while node is not None:
        q.append(node.val)
        node = node.next

    # 팰린드롬 판별
    while len(q) > 1:
        if q.pop(0) != q.pop():
            return False

    return True

# 2. 데크를 이용한 최적화
def isPalindrome2(head):
    q = collections.deque()

    if not head:
        return True

    node = head

    while node is not None:
        q.append(node.val)
        node = node.next

    while len(q) > 1:
        if q.popleft() != q.pop():
            return False
        
    return True

# 3. 런너를 이용한 우아한 풀이
# fast는 두 칸씩, slow는 한 칸씩 이동한다.
# 역순으로 연결리스트 rev를 생성한다.

def isPalindrome3(head):
    rev = None
    slow = fast = head
    # 런너를 이용해 역순 연결 리스트 구성
    while fast and fast.next:
        fast = fast.next.next
        rev, rev.next, slow = slow, rev, slow.next
    if fast:
        slow = slow.next
        # 입력값이 홀수일 때는 slow가 한 칸 더 앞으로 이동하여 중앙의 값을 빗겨 나가야 함. (중앙값은 팰린드롬 체크에서 배제되어야하기 때문)

    # 팰린드롬 여부 확인
    while rev and rev.val == slow.val:
        slow, rev = slow.next, rev.next
    return not rev

print(isPalindrome([1,2,2,1]))