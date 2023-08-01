export default class Item {
  private _nome: string;
  private _preço: number;

  constructor(nome: string, preço: number){
    this._nome = nome;
    this._preço = preço;
  }

  get nome():string {
    return this._nome;
  }

  set nome(value:string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres');
    }
    this._nome = value;
  }

  get preço():number {
    return this._preço;
  }

  set preço(value:number) {
    if (value < 0) {
      throw new Error('O preço precisa ser maior que 0');
    }
    this._preço = value;
  }
}