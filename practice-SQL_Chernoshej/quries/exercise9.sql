USE EnterpriseDb

SELECT AVG(SalaryAmount) average_salary, Name
FROM Salary, Employee
WHERE Salary.EmployeeId = Employee.EmployeeId AND Year = 2015
GROUP BY Name
HAVING COUNT(Salary.EmployeeId) >= 2
