const inquirer = require('inquirer');
const Employee = require('./classes/newEmployee')
const { createConnection } = require('net');

const employee = new Employee();

inquirer.prompt([
    { name: "mainMenu",
      message: "What would you like to do?",
      type: "list",
      choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department", "Exit Program"],
    }
])
.then((answer) => {
    if (answer.mainMenu === "Add Employee") {
        employee.createNewEmployee();
    } else if (answer.mainMenu === "Update Employee Role") {
        inquirer.prompt([
            { name: "updateEmployeeRole",
              message: "What is the Employee's new role?",
              type: "input",
            },
        ])
    } else if (answer.mainMenu === "Add Role") {
        inquirer.prompt([
            { name: "newRoleDepartmentId",
              message: "What department will the new role be assigned to?",
              type: "input",
            },
            { name: "addNewRoleTitle",
              message: "What is the title of the new role?",
              type: "input",
            },
            { name: "addNewRoleSalary",
              message: "What is the starting salary of the new role? (Must be an 8 digit number with a decimal 2 spaces from right",
              type: "input",
            },
        ])
    } else if (answer.mainMenu === "Add Department") {
        inquirer.prompt([
            { name: "addNewDepartmentTitle",
              message: "What is the title of the new department?",
              type: "input",
            },
        ])
    }
});
