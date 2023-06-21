from collections import defaultdict
import math

def solution(fees, records):
    base_time = fees[0]
    base_fee = fees[1]
    unit_time = fees[2]
    unit_fee = fees[3]
    answer = []
    car = defaultdict(list)
    
    for record in records:
        time, car_num, in_out = record.split(' ')
        car[car_num].append([in_out, time])
    
    # 차량번호 오름차순으로 정렬     
    car = dict(sorted(car.items()))
    
    for car_num, car_info in car.items():
        time = 0
        info_size = len(car_info)

        if info_size % 2 == 0:
            for i in range(0, info_size, 2):
                in_h, in_m = map(int, car_info[i][1].split(":"))
                out_h, out_m = map(int, car_info[i+1][1].split(":"))
                
                if in_h < out_h:
                    time += (out_h - in_h) * 60 - in_m + out_m
                elif in_h == out_h:
                    time += out_m - in_m
        else:
            for i in range(0, info_size, 2):
                in_h, in_m = map(int, car_info[i][1].split(":"))
                
                if i < info_size - 1:
                    out_h, out_m = map(int, car_info[i+1][1].split(":"))

                    if in_h < out_h:
                        time += (out_h - in_h) * 60 - in_m + out_m
                    elif in_h == out_h:
                        time += out_m - in_m
                else:
                    time += (23 - in_h) * 60 + (59 - in_m)
        
        
        fee = base_fee + math.ceil((time - base_time) / unit_time) * unit_fee if time > base_time else base_fee
        answer.append(fee)
    return answer