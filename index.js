const inquirer = require("inquirer");
const mysql = require("mysql2");
const EmployeeDB = require("./classes/Employee");
const cTable = require("console.table");
let newEmployeeDB;
// Set up a localhost connection to create a path to mysql DB
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
// Function to create the main menu available to user
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
      } else if (answer.mainMenu === "View All Roles") {
        viewRoles();
      } else if (answer.mainMenu === "Add Role") {
        addRole();
      } else if (answer.mainMenu === "View All Departments") {
        viewDepartments();
      } else if (answer.mainMenu === "Add Department") {
        addDepartment();
      }
    });
};
// Function to view the employees in the DB
const viewEmployee = () => {
  newEmployeeDB.viewEmployee(menu);
};
// Function to add employees to the DB
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
        choices: [
          { name: "null", value: null },
          { name: "Hama Nephthys", value: 100 },
        ],
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
// Function to update the roles of employees that exist in the DB
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
        name: "updateRoles",
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
        response.updateRoles,
        menu
      );
    });
};
// Function to view all roles in the DB
const viewRoles = () => {
  newEmployeeDB.viewRoles(menu);
};
// Function to add roles to the DB
const addRole = () => {
  inquirer
    .prompt([
      {
        name: "departmentId",
        message: "What department will the new role be assigned to?",
        type: "list",
        choices: [
          { name: "Web Developer", value: 1 },
          { name: "Computer Programmer", value: 2 },
          { name: "Computer Engineer", value: 3 },
        ],
      },
      {
        name: "newRole",
        message: "What is the title of the new role?",
        type: "input",
      },
      {
        name: "roleSalary",
        message: "What is the starting salary of the new role?",
        type: "input",
      },
    ])
    .then((response) => {
      newEmployeeDB.addRole(
        response.departmentId,
        response.newRole,
        response.roleSalary,
        menu
      );
    });
};
// Function to view current departments in the DB
const viewDepartments = () => {
  newEmployeeDB.viewDepartments(menu);
};
// Function to add a new department to the DB
const addDepartment = () => {
  inquirer
    .prompt([
      {
        name: "newDepartment",
        message: "What is the title of the new department?",
        type: "input",
      },
    ])
    .then((response) => {
      newEmployeeDB.addDepartment(response.newDepartment, menu);
    });
};
