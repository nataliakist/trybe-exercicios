class Pessoa:
    def __init__(self, nome, saldo_na_conta):
      self.nome = nome
      self.saldo_na_conta = saldo_na_conta
      self.ventilador = None

    def __str__(self):
      if (self.ventilador):
        return f"{self.nome} possui um ventilador"
      return f"{self.nome} não possui um ventilador"
    
    def comprar_ventilador(self, ventilador):
      if ventilador.preco <= self.saldo_na_conta:
        self.saldo_na_conta -= ventilador.preco
        self.ventilador = ventilador

class Ventilador:
  def __init__(self, cor, potencia, tensao, preco) -> None:
    self.preco = preco
    self.cor = cor
    self.potencia = potencia
    self.tensao = tensao
    self.__ligado = False
    self.__velocidade = 0
    self.__velocidade_maxima = 3

  def __str__(self):
    return f"""Ventilador:
    Cor: {self.cor}
    Potencia: {self.potencia}W
    Tensão: {self.tensao}V
    Preço: R${self.preco},00"""
  
  def ligar(self, velocidade):
    if velocidade > self.__velocidade_maxima or velocidade < 0:
       raise ValueError(f"Velocidade deve estar entre 0 e {self.__velocidade_maxima}")
    self.__velocidade = velocidade
    self.__ligado = True

  def desligar(self):
     self.__velocidade = 0
     self.__ligado = False

  @property
  def ligado(self):
     return self.__ligado

pessoa = Pessoa("Natália", 850)
ventilador = Ventilador("Branco", 120, 220, 250)

pessoa.comprar_ventilador(ventilador)
ventilador.ligar(2)

print(pessoa)
print(pessoa.ventilador)
print(ventilador.ligado)
