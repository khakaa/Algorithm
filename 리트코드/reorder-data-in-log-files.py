# -*- coding: utf-8 -*-

# 1. 람다와 + 연산자를 이용 -> 람다표현식 읽어보기 (p.150)

def reorderLogFiles(logs):
    letters,digits = [], []
    for log in logs:
        if log.split()[1].isdigit():
            digits.append(log)
        else:
            letters.append(log)

    letters.sort(key=lambda x: (x.split()[1:], x.split()[0]))

    return letters + digits
