def solution(phone_book):
    if len(phone_book) == 1:
        return True
    phone_book.sort()
    # print(phone_book)
    
    for i in range(len(phone_book)-1):
        if phone_book[i] in phone_book[i+1][:len(phone_book[i])]:
            # print(phone_book[i], phone_book[j])
            return False
    
    return True