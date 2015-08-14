USE EnterpriseDb
GO

INSERT INTO Department(Name, DepartmentAddress)
VALUES ('D1','tolstogo_1001');
INSERT INTO Department(Name, DepartmentAddress)
VALUES ('D2','tolstogo_1002');
INSERT INTO Department(Name, DepartmentAddress)
VALUES ('D3','tolstogo_1003');
INSERT INTO Department(Name, DepartmentAddress)
VALUES ('D4','tolstogo_1004');

INSERT INTO Employee(Name, SerName, Birthdate)
VALUES ('Rick','Rickman', CAST('1990-05-25' as datetime));
INSERT INTO Employee(Name, SerName, Birthdate)
VALUES ('Liz','Lizman', CAST('1992-04-15' as datetime));
INSERT INTO Employee(Name, SerName, Birthdate)
VALUES ('Louis','Louisman', CAST('1991-12-26' as datetime));
INSERT INTO Employee(Name, SerName, Birthdate)
VALUES ('Matt','Mattman', CAST('1994-02-28' as datetime));

INSERT INTO Job(JobName, MinSalary)
VALUES ('HR', 400);
INSERT INTO Job(JobName, MinSalary)
VALUES ('tester', 350);
INSERT INTO Job(JobName, MinSalary)
VALUES ('manager', 1000);
INSERT INTO Job(JobName, MinSalary)
VALUES ('director', 1500);

INSERT INTO Salary(EmployeeId, Month, Year, SalaryAmount)
VALUES (1, 9, 2013, 1000);
INSERT INTO Salary(EmployeeId, Month, Year, SalaryAmount)
VALUES (2, 9, 2014, 500);
INSERT INTO Salary(EmployeeId, Month, Year, SalaryAmount)
VALUES (3, 9, 2014, 1100);

INSERT INTO Salary(EmployeeId, Month, Year, SalaryAmount)
VALUES (1, 1, 2015, 800);
INSERT INTO Salary(EmployeeId, Month, Year, SalaryAmount)
VALUES (2, 1, 2015, 900);
INSERT INTO Salary(EmployeeId, Month, Year, SalaryAmount)
VALUES (3, 1, 2015, 1200);
INSERT INTO Salary(EmployeeId, Month, Year, SalaryAmount)
VALUES (4, 2, 2015, 1000);
INSERT INTO Salary(EmployeeId, Month, Year, SalaryAmount)
VALUES (1, 12, 2015, 1000);
INSERT INTO Salary(EmployeeId, Month, Year, SalaryAmount)
VALUES (2, 12, 2015, 100);
INSERT INTO Salary(EmployeeId, Month, Year, SalaryAmount)
VALUES (3, 12, 2015, 500);

INSERT INTO Salary(EmployeeId, Month, Year, SalaryAmount)
VALUES (1, 5, 2015, 750);
INSERT INTO Salary(EmployeeId, Month, Year, SalaryAmount)
VALUES (2, 5, 2015, 1000);
INSERT INTO Salary(EmployeeId, Month, Year, SalaryAmount)
VALUES (3, 5, 2015, 1100);

INSERT INTO Career(JobId, EmployeeId, DepartmentId, StartDate, EndDate)
VALUES (1, 1, 1, CAST('2014-08-28' as date), NULL);
INSERT INTO Career(JobId, EmployeeId, DepartmentId, StartDate, EndDate)
VALUES (2, 2, 1, CAST('2014-08-28' as date), NULL);
INSERT INTO Career(JobId, EmployeeId, DepartmentId, StartDate, EndDate)
VALUES (3, 3, 4, CAST('2014-08-28' as date), NULL);
INSERT INTO Career(JobId, EmployeeId, DepartmentId, StartDate, EndDate)
VALUES (4, 4, 3, CAST('2014-08-28' as date), NULL);
INSERT INTO Career(JobId, EmployeeId, DepartmentId, StartDate, EndDate)
VALUES (1, 1, 1, CAST('2011-08-28' as date), CAST('2014-08-20' as date));
