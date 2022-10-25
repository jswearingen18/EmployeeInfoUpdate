const inquirer = require("inquirer");
const mysql = require("mysql2");
const EmployeeDB = require("./classes/Employee");
let newEmployeeDB;

const team = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "From12last",
  database: "employees_db",
});
team.connect((err) => {
  if (err) throw err;
  newEmployeeDB = new EmployeeDB(team);
  menu();
});

const menu = () => {
  inquirer
    .prompt([
      {
        name: "mainMenu",
        message: "What would you like to do?",
        type: "list",
        choices: [
          "View All Employees",
          "Add Employee",
          "Update Employee Role",
          "View All Roles",
          "Add Role",
          "View All Departments",
          "Add Department",
          "Exit Program",
        ],
      },
    ])
    .then((answer) => {
      if (answer.mainMenu === "View All Employees") {
        viewEmployee();
      } else if (answer.mainMenu === "Add Employee") {
        addEmployee();
      } else if (answer.mainMenu === "Update Employee Role") {
        updateRole();
      } else if (answer.mainMenu === "Add Role") {
        inquirer.prompt([
          {
            name: "newRoleDepartmentId",
            message: "What department will the new role be assigned to?",
            type: "input",
          },
          {
            name: "addNewRoleTitle",
            message: "What is the title of the new role?",
            type: "input",
          },
          {
            name: "addNewRoleSalary",
            message:
              "What is the starting salary of the new role? (Must be an 8 digit number with a decimal 2 spaces from right",
            type: "input",
          },
        ]);
      } else if (answer.mainMenu === "Add Department") {
        inquirer.prompt([
          {
            name: "addNewDepartmentTitle",
            message: "What is the title of the new department?",
            type: "input",
          },
        ]);
      }
    });
};
const viewEmployee = (menu) => {
  newEmployeeDB.viewEmployee(menu);
};
const addEmployee = () => {
  inquirer
    .prompt([
      {
        name: "firstName",
        message: "What is the Employee's first name?",
        type: "input",
      },
      {
        name: "lastName",
        message: "What is the Employees's last name?",
        type: "input",
      },
      {
        name: "managerId",
        message: "What manager is the Employee assigned to if applicable?",
        type: "list",
        choices: [{ name: "Hama Nephthys", value: 100 }],
      },
      {
        name: "addRole",
        message: "What role will the Employee be in?",
        type: "list",
        choices: [
          { name: "Front-End Developer", value: 10 },
          { name: "Back-End Developer", value: 11 },
          { name: "Full-Stack Developer", value: 12 },
          { name: "Database Administrator", value: 13 },
          { name: "Program Tester", value: 14 },
          { name: "SoftWare Engineer", value: 15 },
          { name: "Hardware Engineer", value: 16 },
          { name: "Computer Engineer", value: 17 },
        ],
      },
    ])
    .then((response) => {
      newEmployeeDB.addEmployee(
        response.firstName,
        response.lastName,
        response.addRole,
        response.managerId,
        menu
      );
    });
};
const updateRole = () => {
  inquirer
    .prompt([
      {
        name: "selectEmployee",
        message: "Which employee are you updating?",
        type: "list",
        choices: [
          { name: "Hama Nephthys", value: 100 },
          { name: "Ninsun Eogan", value: 101 },
          { name: "Neptuno Janaina", value: 102 },
          { name: "Sunita Dazhdbog", value: 103 },
        ],
      },
      {
        name: "updateRole",
        message: "What is the Employee's new role?",
        type: "list",
        choices: [
          { name: "Front-End Developer", value: 10 },
          { name: "Back-End Developer", value: 11 },
          { name: "Full-Stack Developer", value: 12 },
          { name: "Database Administrator", value: 13 },
          { name: "Program Tester", value: 14 },
          { name: "SoftWare Engineer", value: 15 },
          { name: "Hardware Engineer", value: 16 },
          { name: "Computer Engineer", value: 17 },
        ],
      },
    ])
    .then((response) => {
      newEmployeeDB.updateRole(
        response.selectEmployee,
        response.updateRole,
        menu
      );
    });
};
