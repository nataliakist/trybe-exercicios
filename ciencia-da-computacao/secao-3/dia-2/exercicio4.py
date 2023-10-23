def students_counter(entry, departure, instant):
  counter = 0
  for i in range(len(entry)):
    if entry[i] <= instant <= departure[i]:
      counter += 1
  return counter


entradas = [1, 2, 3, 4]
saidas = [3, 2, 7, 5]
instante_buscado = 2
resultado: 1

print(students_counter(entradas, saidas, instante_buscado))