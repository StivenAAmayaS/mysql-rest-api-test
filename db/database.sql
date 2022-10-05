CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employee;

INSERT INTO employee values
    (1, 'Joe', 1000),
    (2, 'Maria', 2000),
    (3, 'Camila', 2500),
    (4, 'Jose', 1500);

SELECT * FROM employee;