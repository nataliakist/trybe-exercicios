import random

def random_numbers(n):
  list_of_averages = []
  for _ in range(100):
    average = 0
    for _ in range(n):
      average += random.randrange(1, n)
    average = round(average / n)
    list_of_averages.append(average)
  return list_of_averages

print(random_numbers(2574))
