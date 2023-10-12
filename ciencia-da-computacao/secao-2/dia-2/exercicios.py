def even_number_counter(n):
  if n == 0:
    return 0
  elif n % 2 == 0:
    return 1 + even_number_counter(n-1)
  else:
    return even_number_counter(n-1)
  

def max_number_aux(list, length):
  if length == 1:
    return list[0]
  else:
    maior_da_lista = max_number_aux(list, length-1)
    if maior_da_lista > list[length - 1]:
      return maior_da_lista
    else:
      return list[length - 1]

def max_number(list):
  length = len(list)
  return max_number_aux(list, length)

print(max_number([1, 21, 300, 4, 57]))