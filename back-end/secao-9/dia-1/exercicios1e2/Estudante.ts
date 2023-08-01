class PessoaEstudante {
  matricula: number;
  nome: string;
  provas: number[];
  trabalhos: number[];

  constructor(
    matricula: number,
    nome: string,
    provas: number[],
    trabalhos: number[],
  ) {
    this.matricula = matricula;
    this.nome = nome;
    this.provas = provas;
    this.trabalhos = trabalhos;
  }

  somaNotas() {
    let nota1 = this.provas.reduce((acc, curr) => acc + curr)
    let nota2 = this.trabalhos.reduce((acc, curr) => acc + curr)
    return nota1 + nota2
  }

  calculaMedia() {
    const soma = this.somaNotas();
    const divisor = this.provas.length + this.trabalhos.length
    return soma / divisor;
  }
}