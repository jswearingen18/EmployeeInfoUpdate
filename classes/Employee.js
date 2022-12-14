// Setup Class EmployeeDB
class EmployeeDB {
  constructor(team) {
    this.team = team;
  }
  // Function that allows user to view the employee table of the DB
  viewEmployee(menu) {
    this.team.query(
      `SELECT id, first_name, last_name FROM employee;`,
      (err, data) => {
        if (err) throw err;
        console.table(data);
        menu();
      }
    );
  }
  // Function to add employees into the DB
  addEmployee(firstname, lastname, role_id, manager_id, menu) {
    this.team.query(
      `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`,
      [firstname, lastname, role_id, manager_id],
      (err, data) => {
        if (err) throw err;
        console.log(data);
        menu();
      }
    );
  }
  // Function to update the role that an employee is in
  updateRole(role_id, last_name, menu) {
    console.log(role_id, last_name);
    this.team.query(
      `UPDATE employee
       SET role_id = (?)
       WHERE last_name = (?)`,
       [role_id, last_name],
      (err, data) => {
        if (err) throw err;
        console.log(data);
        menu();
      }
    );
  }
  // Function that allows user to view the employee_role table of the DB
  viewRoles(menu) {
    this.team.query(
      `SELECT department_id, title, salary FROM employee_role;`,
      (err, data) => {
        if (err) throw err;
        console.table(data);
        menu();
      }
    );
  }
  // Function to add roles into the DB
  addRole(department_id, roleTitle, salary, menu) {
    this.team.query(
      `INSERT INTO employee_role (department_id, title, salary) VALUES (?,?,?)`,
      [department_id, roleTitle, salary],
      (err, data) => {
        if (err) throw err;
        console.log(data);
        menu();
      }
    );
  }
  // Function that allows user to view the department table of the DB
  viewDepartments(menu) {
    this.team.query(`SELECT department_name FROM department;`, (err, data) => {
      if (err) throw err;
      console.table(data);
      menu();
    });
  }
  // Function to add employees into the DB
  addDepartment(departmentName, menu) {
    this.team.query(
      `INSERT INTO department (department_name) VALUES (?)`,
      [departmentName],
      (err, data) => {
        if (err) throw err;
        console.log(data);
        menu();
      }
    );
  }
}
// Exports the EmployeeDB
module.exports = EmployeeDB;
