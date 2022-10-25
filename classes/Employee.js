class EmployeeDB {
  constructor(team) {
    this.team = team;
  }
  viewEmployee(id, firstname, lastname, menu) {
    this.team.query(
      `SELECT id, first_name, last_name FROM employee;`,
      [id, firstname, lastname],
      (err, data) => {
        if (err) throw err;
        console.log(data);
        menu();
      }
    );
  }
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
  updateRole(role_id, lastname, menu) {
    this.team.query(
      `UPDATE employee
       SET role_id = (?)
       WHERE last_name = (?)`,
      [role_id, lastname],
      (err, data) => {
        if (err) throw err;
        console.log(data);
        menu();
      }
    );
  }
  viewRoles(department_id, title, salary, menu) {
    this.team.query(
      `SELECT department_id, title, salary FROM employee_role;`,
      [department_id, title, salary],
      (err, data) => {
        if (err) throw err;
        console.log(data);
        menu();
      }
    );
  }
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
  viewDepartments(departments, menu) {
    this.team.query(
      `SELECT department_name FROM department;`,
      [departments],
      (err, data) => {
        if (err) throw err;
        console.log(data);
        menu();
      }
    );
  }
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
module.exports = EmployeeDB;
