t = int(input())
answer = []

for _ in range(t):
    ans = "YES"
    n = int(input())
    phone_book = [input() for _ in range(n)]
    phone_book.sort()

    if len(phone_book) == 1:
        answer.append(ans)
    else:
        for i in range(n - 1):
            if phone_book[i] == phone_book[i+1][:len(phone_book[i])]:
                ans = "NO"
                break
    print(ans)
