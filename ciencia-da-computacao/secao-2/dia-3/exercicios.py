def binary_search(arr, low, high, x):

    if high >= low:
 
        mid = (high + low) // 2
 
        if arr[mid] == x:
            return mid
 
        elif arr[mid] > x:
            return binary_search(arr, low, mid - 1, x)

        else:
            return binary_search(arr, mid + 1, high, x)
 
    else:
        return -1

numbers = [2, 3, 4, 10, 40]
target = 40

result = binary_search(numbers, 0, len(numbers)-1, target)
print(f"Elemento encontrado na posição: {result}")