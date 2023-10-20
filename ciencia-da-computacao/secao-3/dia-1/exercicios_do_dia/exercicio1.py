class TV:
  def __init__(self, tamanho) -> None:
    self.__volume = 50
    self.__canal = 1
    self.__tamanho = tamanho
    self.__ligada = False

  def aumentar_volume(self):
    if self.__volume < 99:
      self.__volume += 1
  
  def diminuir_volume(self):
    if self.__volume > 0:
      self.__volume -= 1

  def modificar_canal(self, canal):
    if canal > 0 and canal < 100:
      self.__canal = canal
    else:
      raise ValueError("Canal indisponível")
  
  def ligar_desligar(self):
    self.__ligada = not self.__ligada