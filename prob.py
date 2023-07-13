import random

PROB = 0.54
LENGTH = 1001

sucess = 0
for i in range(1, 10 ** 5):
    a = [int(random.random() <= PROB) for _ in range(LENGTH)]
    min_sum = LENGTH // 2  + 1
    if sum(a) >= min_sum:
        sucess += 1
    print(a, sum(a), sucess / i)