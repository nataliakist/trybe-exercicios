from abc import ABC, abstractmethod
from math import pi as PI


class FiguraGeometrica(ABC):

  @abstractmethod
  def area(self):
    raise NotImplementedError

  @abstractmethod
  def perimetro(self):
    raise NotImplementedError


class Quadrado(FiguraGeometrica):
  def __init__(self, lado) -> None:
    super().__init__()
    self.__lado = lado

  def area(self):
    return self.__lado ** 2
  
  def perimetro(self):
    return self.__lado * 4
  

class Retangulo(FiguraGeometrica):
  def __init__(self, base, altura) -> None:
    super().__init__()
    self.__base = base
    self.__altura = altura

  def area(self):
    return self.__base * self.__altura
  
  def perimetro(self):
    return (self.__base + self.__altura) * 2
  

class Circulo(FiguraGeometrica):
  def __init__(self, raio) -> None:
    super().__init__()
    self.__raio = raio

  def area(self):
    return PI * self.__raio ** 2
  
  def perimetro(self):
    return 2 * PI * self.__raio
