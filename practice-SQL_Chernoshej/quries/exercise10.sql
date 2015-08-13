USE EnterpriseDb

SELECT Name
FROM Employee
JOIN Salary on Employee.EmployeeId = Salary.EmployeeId
WHERE SalaryAmount > 1000 AND Month = 1 AND Year = 2015