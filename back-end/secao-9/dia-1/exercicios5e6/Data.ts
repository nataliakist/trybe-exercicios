class Data {
  private _dia: number;
  private _mes: number;
  private _ano: number;

  constructor(dia: number, mes:number, ano:number) {
    if(!Data.validateDate(dia, mes, ano)) {
      this._dia = 1;
      this._mes = 1;
      this._ano = 1900;
    } else {
      this._dia = dia;
      this._mes = mes;
      this._ano = ano;
    }
  }

  get dia():number {
    return this._dia
  }

  set dia(value:number) {
    this._dia = value
  }

  get mes():number {
    return this._mes
  }

  set mes(value:number) {
    this._mes = value
  }

  get ano():number {
    return this._ano
  }

  set ano(value:number) {
    this._ano = value
  }

  get data():string {
    return `${this._ano}-${this._mes}-${this._dia}`
  }

  getMonthName():string {
    const meses = [
      'janeiro',
      'fevereiro',
      'março',
      'abril',
      'maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro',
    ];
    return meses[this._mes - 1]
  }

  isLeapYear():boolean {
    return this._ano % 4 === 0;
  }

  compare(date: Data):number {
    const currDate = `${this._ano}-${this._mes}-${this._dia}`;
    const paramDate = `${date.ano}-${date.mes}-${date.dia}`;
    
    if(new Date(currDate) > new Date(paramDate)) return 1;
    if(new Date(currDate) < new Date(paramDate)) return -1;

    return 0;
  }

  format(formato:string):string {
    const condicoes: boolean[] = [
      (!formato.match(/a{2,4}/g)),
      (!formato.match(/m{2}/g) && !formato.match(/M{1}/g)),
      (!formato.match(/d{2}/g)),
    ];
    console.log(condicoes)

    if (condicoes.some((cond) => cond)) {
      throw new Error(`O formato passado é inválido: ${formato}`);
    }

    const dia = this._dia > 9 ? this._dia.toString() : `0${this._dia}`;
    const mes = this._mes > 9 ? this._mes.toString() : `0${this._mes}`;
    const ano = this._ano.toString();

    const dataFormatada = formato.replace('dd', dia)
      .replace('mm', mes).replace('M', this.getMonthName())
      .replace('aaaa', ano).replace('aa',ano.substr(2));

    return dataFormatada;
  }

  private static validateDate(dia: number, mes:number, ano:number) {
    const dateString = `${ano}-${mes}-${dia}`;

    if (isNaN(new Date(dateString).getTime())) return false;

    return true;
  }
}

const testDate = new Data(12,2,1996);

const currDate = new Data(1,8,2023);

console.log(currDate.format('dd, M de aa'))