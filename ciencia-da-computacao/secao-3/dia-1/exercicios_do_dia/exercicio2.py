from typing import List
from collections import Counter

class Estatistica:
  def __init__(self, numbers: List[int]) -> None:
    self.numbers = numbers

  def media(self) -> float:
    return sum(self.numbers) / len(self.numbers)
  
  def mediana(self):
    self.numbers.sort()
    index = len(self.numbers) // 2
    if len(self.numbers) % 2 == 0:
      return (self.numbers[index] + self.numbers[index - 1]) / 2
    return self.numbers[index]
    
  def moda(self):
    number, _ = Counter(self.numbers).most_common(1)
    return number
