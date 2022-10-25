const inquirer = require('inquirer');

class Employee {
  constructor(first_Name, last_Name, employee_Role, manager_Id) {
    this.first_Name = first_Name;
    this.last_Name = last_Name;
    this.employee_Role = employee_Role;
    this.manager_Id = manager_Id;
  }

  createNewEmployee(employee) {
inquirer.prompt([
    { name: "addEmployeeFirstName",
      message: "What is the Employee's first name?",
      type: "input",
    },
    { name: "addEmployeeLastName",
      message: "What is the Employees's last name?",
      type: "input",
    },
    { name: "addEmployeeRole",
    message: "What role will the Employee be in?",
    type: "list",
    choices: ["Front-End Developer", "Back-End Developer", "Full-Stack Developer", "Database Administrator", "Program Tester", "SoftWare Engineer", "Hardware Engineer", "Computer Engineer"],
    },
    { name: "addManagerId",
      message: "What manager is the Employee assigned to if applicable?",
      type: "list",
      choices: ["Hama Nephthys"],
    },
])
}

module.exports = Employee;