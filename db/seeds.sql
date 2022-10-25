INSERT INTO department (id,department_name)
VALUES (100, "Web Developer"), 
       (101, "Computer Programmer"),
       (102, "Computer Engineer");

INSERT INTO employee_role (id, department_id, title, salary)
VALUES (10, 100, "Front-End Developer", 100000.00),
       (11, 100, "Back-End Developer", 110000.00),
       (12, 100, "Full-Stack Developer", 125000.00),
       (20, 101, "Database Administrator", 105000.00),
       (21, 101, "Program Tester", 90000.00),
       (30, 102, "SoftWare Engineer", 140000.00),
       (31, 102, "Hardware Engineer", 140000.00),
       (32, 102, "Computer Engineer", 165000.00);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1000,"Hama", "Nephthys", 12, NULL),
       (1001,"Ninsun", "Eogan", 12, 1000),
       (1002, "Neptuno", "Janaina", 30, 1000),
       (1003, "Sunita", "Dazhdbog", 21, 1000);
