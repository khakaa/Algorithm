palindrome  = []

while True:
    i = input()
    if i != '0':
        palindrome.append(i)
    else: break


for p in palindrome:
    answer = 'yes'
    if p != p[::-1]: answer = 'no'
    print(answer)

