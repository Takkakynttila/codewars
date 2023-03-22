import time
import random
import sys

sys.setrecursionlimit(10**6)

def binary_array_to_number_recursive(arr):
    def rec(arr, sum):
        if len(arr) == 1:
            sum = sum + arr[0] * (2** 0)
            return sum 
        sum = sum + (arr[0] * (2 ** (len(arr) -1)))
        return rec(arr[1:], sum)
    return rec(arr, 0)

def binary_array_to_number_for_loop(arr):
    arr = arr[::-1] # reverse array
    sum = 0
    for i,n in enumerate(arr):
        sum += n * (2 ** i)
    return sum

arr = [random.randint(0,1) for i in range(100000)]

start = time.process_time()
binary_array_to_number_recursive(arr)
end = time.process_time()
print(f"Recursive: {end - start}")

start = time.process_time()
binary_array_to_number_for_loop(arr)
end = time.process_time()
print(f"Looped: {end - start}")