class Employee {
  private static employeeCount = 0
  
    private _employeeName: string;
  
    constructor(employeeName: string) {
      this._employeeName = employeeName;
      Employee.Name(employeeName);
      Employee.addEmployee();
    }
  
    private static Name(theName:string) {
      console.log(`${theName} adicionado ao quadro de funcionários`)
    }
  
    private static addEmployee() {
      Employee.employeeCount += 1;
      console.log(`Total de pessoas funcionárias: ${Employee.employeeCount}`)
    }
  
    get name():string {
      return this._employeeName
    }
  
    public set Name(name:string) {
      this._employeeName = name;
    }
  }
  
  const employee1 = new Employee('Kissyla');
  const employee2 = new Employee('Calaça');
  const employee3 = new Employee('Setinha');
  