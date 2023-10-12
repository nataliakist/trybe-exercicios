def even_number_counter(n):
  if n == 0:
    return 0
  elif n % 2 == 0:
    return 1 + even_number_counter(n-1)
  else:
    return even_number_counter(n-1)
  

print(even_number_counter(10))