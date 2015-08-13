USE EnterpriseDb

SELECT AVG(SalaryAmount), Name
FROM Salary, Employee
WHERE Salary.EmployeeId = Employee.EmployeeId AND Year = 2015
GROUP BY Name