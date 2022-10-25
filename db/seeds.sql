INSERT INTO department (department_name)
VALUES ("Web Developer"), 
       ("Computer Programmer"),
       ("Computer Engineer");

INSERT INTO employee_role (department_id, title, salary)
VALUES (1, "Front-End Developer", 100000.00),
       (1, "Back-End Developer", 110000.00),
       (1, "Full-Stack Developer", 125000.00),
       (2, "Database Administrator", 105000.00),
       (2, "Program Tester", 90000.00),
       (3, "SoftWare Engineer", 140000.00),
       (3, "Hardware Engineer", 140000.00),
       (3, "Computer Engineer", 165000.00);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Hama", "Nephthys", 12, NULL),
       ("Ninsun", "Eogan", 12, 100),
       ("Neptuno", "Janaina", 16, 100),
       ("Sunita", "Dazhdbog", 14, 100);
