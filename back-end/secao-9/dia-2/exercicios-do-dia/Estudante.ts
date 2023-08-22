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
    if (this.getAge() > 120) throw new Error('Impossível que a pessoa seja uma múmia, informe a data de nascimento correta')
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
    const randomStr = String(Math.random() + 1).substr(2, 13)
    return 'STU' + randomStr
  }
}

interface Employee {
  registration: string,
  salary: number,
  admissionDate: Date,

  generateRegistration() : string;
}

class Subject {
  private _name: string;
  constructor(nameValue:string) {
    this.verifyName(nameValue);
    this._name = nameValue;
    }

  get name():string {
    return this._name;
  }

  set name(value:string) {
    this.verifyName(value);
    this._name = value;
  }

  verifyName(value:string):void {
    if (value.length < 3) throw new Error('Nome deve possuir ao menos três caracteres')
  }
}

class Teacher extends Person implements Employee{
  private _subject: Subject;
  private _registration = String();
  private _admissionDate: Date;

  constructor(name: string, birthDate: Date, private _salary: number, subject: Subject) {
    super(name, birthDate);

    this._subject = subject;
    this.salary = _salary;
    this._admissionDate = new Date();
    this.registration = this.generateRegistration();
  }

  get subject():Subject {
    return this._subject;
  }

  set subject(value:Subject) {
    this._subject = value;
  }

  get registration(): string {
    return this._registration;
  }

  set registration(value: string) {
    if (value.length < 16) throw new Error('O registro deve possuir no mínimo 16 caracteres.');

    this._registration = value;
  }

  get salary() : number {
    return this._salary;
  }

  set salary(value:number) {
    if (value <= 0) throw new Error('O salário deve ser maior que zero');
    this._salary = value;
  }

  get admissionDate() : Date {
    return this._admissionDate;
  }

  set admissionDate(value:Date) {
    if (value.getTime() > Date.now()) throw new Error('A data de admissão não pode ser no futuro');
    this._admissionDate = value;
  }

  generateRegistration(): string {
    const randomStr = String(Math.random() + 1).substr(2, 13)
    return 'TEA' + randomStr
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

const mat = new Subject('Matématica');
const hist = new Subject('História');
const fil = new Subject('Filosofia');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, mat);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, hist);
const lucio = new Teacher('Lucio Teixeira', new Date('1986/01/29'), 2000, fil);

console.log(carolina);
console.log(lucas);
console.log(jessica);
console.log(tamires);
console.log(fernando);
console.log(mat.name);
console.log(hist.name);
console.log(fil.name);
console.log(marta);
console.log(joao);
console.log(lucio);