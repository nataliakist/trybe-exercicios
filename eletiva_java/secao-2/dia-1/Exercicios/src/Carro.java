/**
 * The Class Carro.
 */
public class Carro {
  String marca;
  String modelo;
  int ano;

  /**
   * Instantiates a new Carro.
   *
   * @param marca  the marca
   * @param modelo the modelo
   * @param ano    the ano
   */
  public Carro(String marca, String modelo, int ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  public void exibirInformacoes() {
    System.out.println("Marca: " + marca + ", Modelo: " + modelo + ", Ano: " + ano);
  }
}
