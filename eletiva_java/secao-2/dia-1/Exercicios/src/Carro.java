/**
 * The Class Carro.
 */
public class Carro {
  private String marca;
  private String modelo;
  private int ano;
  private static int contador = 0;

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
    Carro.contador++;
  }

  public void exibirInformacoes() {
    System.out.println("Marca: " + marca + ", Modelo: " + modelo + ", Ano: " + ano);
  }

  public static int quantidadeCarros() {
    return Carro.contador;
  }

  public String getMarca() {
    return marca;
  }

  public void setMarca(String marca) {
    this.marca = marca;
  }

  public String getModelo() {
    return modelo;
  }

  public void setModelo(String modelo) {
    this.modelo = modelo;
  }

  public int getAno() {
    return ano;
  }

  public void setAno(int ano) {
    this.ano = ano;
  }
}
