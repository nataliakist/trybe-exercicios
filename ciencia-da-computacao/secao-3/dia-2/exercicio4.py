def students_counter(arrivals, departures, time_instant):
  counter = 0
  for i in range(len(arrivals)):
    if arrivals[i] <= time_instant <= departures[i]:
      counter += 1
  return counter


def students_in_instant(arrivals, departures, time_instant):
    result = sum(
        arrival <= time_instant <= departure
        for arrival, departure in zip(arrivals, departures)
    )
    return result

entradas = [1, 2, 3, 4]
saidas = [3, 2, 7, 5]
instante_buscado = 2
resultado: 1

print(students_in_instant(entradas, saidas, instante_buscado))