const inquirer = require('inquirer');

inquirer.prompt([
    { name: "mainMenu",
      message: "What would you like to do?",
      type: "list",
      choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department"],
    }
])
.then((answer) => {
    if (answer.mainMenu === "Add Employee") {
        inquirer.prompt([
            { name: "addEmployeeId",
              message: "What is the employee Id?",
              type: "input"
            },
            { name: "addEmployeeDepartmentId",
              message: "What department will the Employee be in?",
              type: "choices",
              choices: ["Web Developer", "Computer Programmer", "Computer Engineer"],
            },
            { name: "addManagerId",
              message: "What manager is the Employee assigned to if applicable?",
              type: "input",
            },
            { name: "addEmployeeFirstName",
              message: "What is the Employee's first name?",
              type: "input",
            },
            { name: "addEmployeeLastName",
              message: "What is the Employees's last name?",
              type: "input",
            },
        ])
    } else if (answer.mainMenu === "Update Employee Role") {
        inquirer.prompt([
            { name: "updateEmployeeRole",
              message: "What is the Employee's new role?",
              type: "input",
            },
        ])
    } else if (answer.mainMenu === "Add Role") {
        inquirer.prompt([
            { name: "addNewRoleId",
              message: "What is the new role Id you would like to add?",
              type: "input",
            },
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
            { name: "addNewDepartment",
              message: "What is the new department Id?",
              type: "input",
            },
            { name: "addNewDepartmentTitle",
              message: "What is the title of the new department?",
              type: "input",
            },
        ])
    }
});
