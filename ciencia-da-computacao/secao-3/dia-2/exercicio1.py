def data_analizer(array_of_values):
  max_time = 0
  counter = 0
  for value in array_of_values:
    if value == 1:
      counter += 1
    else:
      counter = 0
    if counter > max_time:
      max_time = counter
  return max_time


# valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
# resultado = 3

valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]
resultado = 4

print(data_analizer(valores_coletados))