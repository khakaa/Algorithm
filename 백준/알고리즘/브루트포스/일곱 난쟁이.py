input_list = [int(input()) for _ in range(9)]
input_sum = sum(input_list)

one, two = [0,0]

for i in range(9):
    for j in range(i+1, 9):
        if input_sum - (input_list[i] + input_list[j]) == 100:
            one = input_list[i]
            two = input_list[j]
            break
            
input_list.remove(one)
input_list.remove(two)
input_list.sort()

for i in input_list:
    print(i)