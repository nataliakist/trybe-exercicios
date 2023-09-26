import math


def maxValue(num1, num2):
  return max(num1, num2)

def averageValue(list):
  total = 0
  for value in list:
    total += value
  length = len(list)
  return round((total/length), 2)

def asteriskSquare(n):
  number = 0
  if n > 1:
    for number in range(n):
      print('*' * n)

def biggerName(namesList): 
  bigger = ''
  for name in namesList:
    if len(bigger) < len(name):
      bigger = name
  return bigger

def paintNeeded(size):
  liters = size/3
  cans = math.ceil(liters / 18)
  price = cans * 80
  return (cans, price)

def triangleType(s1, s2, s3):
  if s1 + s2 > s3 and s1 + s3 > s2 and s2 + s3 > s1:
    if s1 == s2 and s1 == s3:
      return 'triângulo equilátero'
    elif s1 == s2 or s1 == s3 or s2 == s3:
      return 'triângulo isósceles'
    else:
      return 'triângulo escaleno'
  else: 
    return 'não é triangulo'
  
def asteriskTriangle(n):
  if n > 1:
    for number in range(1, n+1):
      print(number * '*')


def summation(N):
  return sum(range(1, N+1))

def fuelPrice(liters, type):
  price = 0
  if type == 'A':
    if liters in range(liters):
      price = liters * 1.9 * 0.97
    else:
      price = liters * 1.9 * 0.95
  elif type == 'G':
    if liters in range(liters):
      price = liters * 2.5 * 0.96
    else:
      price = liters * 2.5 * 0.94
  return round(price, 2)


print(maxValue(4, 9))

print(averageValue([3,7,4,9,10,2]))

asteriskSquare(5)

print(biggerName(['Natalia', 'Leonardo', 'Gabriel', 'Maximiliano', 'Fernanda']))

print(paintNeeded(927))

print(triangleType(2,1,1))

print(asteriskTriangle(5))

print(summation(5))

print(fuelPrice(20, 'A'))