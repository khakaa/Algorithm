# -*- coding: utf-8 -*-

# 1. 브루트 포스 -> time out
def maxProfit(prices):
    max_price = 0

    for i, price in enumerate(prices):
        for j in range(i, len(prices)):
            max_price = max(prices[j] - price, max_price)

    return max_price

# 2. 저점과 현재 값과의 차이 계산
import sys

def maxProfit2(prices):
    profit = 0
    min_price = sys.maxsize # 최솟값을 시스템의 최댓값으로 설정 ( float('inf')로도 가능 )

    # 최솟값과 최댓값 계속 갱신
    for price in prices:
        min_price = min(min_price, price)
        profit = max(profit, price - min_price)

    return profit