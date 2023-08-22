import Cliente from "./Cliente";
import Item from "./Item";

export default class Pedido {
  private _cliente: Cliente;
  private _itens: Item[] = [];
  private _pagamento: string;
  private _desconto = 0;

  constructor(
    cliente: Cliente,
    itens: Item[],
    pagamento: string,
    desconto: number,
    ){
    this._cliente = cliente;
    this.itens = itens;
    this._pagamento = pagamento;
    this._desconto = desconto;
  }

  get cliente(): Cliente {
    return this._cliente;
  }

  set cliente(value:Cliente) {
    this._cliente = value;
  }

  get itens(): Item[] {
    return this._itens;
  }

  set itens(value:Item[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter no mínimo 1 item');
    }
    this._itens = value;
  }

  get pagamento():string {
    return this._pagamento;
  }

  set pagamento(value:string) {
    this._pagamento = value;
  }

  get desconto():number {
    return this._desconto;
  }

  set desconto(value:number) {
    if (value < 0) {
      throw new Error('O desconto não pode ser um valor negativo');
    }
    this._desconto = value;
  }

  totalParcial() {
    return this.itens.map((item) => item.preço).reduce((acc, curr) => acc + curr);
  }

  totalFinal() {
    const totalParcial = this.totalParcial();
    return totalParcial - totalParcial * this.desconto;
  }
}