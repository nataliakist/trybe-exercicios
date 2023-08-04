class Person {
  constructor(
    private _name: string,
    private _birthDate: Date,
  ) {
    this.validatePerson();
  }

  get name():string {return this._name}; 

  set name(value:string) {
    this.validateName(value);
    this._name = value;
  }

  get birthDate():Date {return this._birthDate}; 

  set birthDate(date:Date) {
    this.validateBirthDate(date);
    this._birthDate = date;
  }

  public getAge(): number {
    const diff = Math.abs(Date.now() - this.birthDate.getTime());
    const yearMs = 1000*3600*24*365.25;
    return Math.floor(diff / yearMs);
  }

  private validateName(name:string): void {
    if (name.length < 3) throw new Error('O nome deve possuir ao menos três caracteres')
  }
  
  private validateBirthDate(date: Date):void {
    if (date.getTime() > Date.now()) throw new Error('Até o momento, é impossível que alguém venha do futuro, informe a data de nascimento correta');
    if (this.getAge() > 120) throw new Error('Impossível que a pessoa tenha mais de 120 anos, informe a data de nascimento correta')
  }

  private validatePerson(): void {
    this.validateName(this.name);
    this.validateBirthDate(this.birthDate);
  }
}

class Student extends Person {
  private _enrollment = String();
  private _examsGrades: number[] = [];
  private _assignmentsGrades: number[] = [];

  constructor(
    name: string,
    birthDate: Date,
  ) {
    super(name, birthDate)
    this.enrollment = this.generateEnrollment()
  }

  get enrollment():string {return this._enrollment}

  set enrollment(value:string) {
    if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres');
    this._enrollment = value;
  }

  get examsGrades(): number[] {return this._examsGrades}

  set examsGrades(values:number[]) {
    if (values.length > 4) throw new Error('O estudante não pode possuir mais de 4 notas de provas');
    this._examsGrades = values;
  }

  get assignmentsGrades(): number[] {return this._assignmentsGrades}

  set assignmentsGrades(values:number[]) {
    if (values.length > 2) throw new Error('O estudante não pode possuir mais de 2 notas de trabalhos');
    this._assignmentsGrades = values;
  }

  sumGrades() {
    let nota1 = this._examsGrades.reduce((acc, curr) => acc + curr)
    let nota2 = this._assignmentsGrades.reduce((acc, curr) => acc + curr)
    return nota1 + nota2
  }

  sumAverageGrade() {
    const sum = this.sumGrades();
    const div = this._examsGrades.length + this._assignmentsGrades.length
    return sum / div;
  }

  generateEnrollment() {
    const randomStr = String(Math.random()).substr(2, 13)
    return 'STU' + randomStr
  }
}

const person1 = new Person('Natália', new Date('1996-02-12'))
// const person2 = new Person('Pessoa Mentirosa', new Date('2024-06-18'))
console.log(person1.getAge())

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
const jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));
const tamires = new Student('Tamires Santos Bastos', new Date('2005/11/05'));
const fernando = new Student('Fernando Gonçalves', new Date('2006/09/11'));

carolina.examsGrades = [25, 20, 25, 23];
lucas.examsGrades = [25, 20, 25, 23];
jessica.assignmentsGrades = [50, 45];
tamires.assignmentsGrades = [47, 42];

console.log(carolina);
console.log(lucas);
console.log(jessica);
console.log(tamires);
console.log(fernando);