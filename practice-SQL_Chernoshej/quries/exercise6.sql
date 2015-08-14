USE EnterpriseDb

SELECT EmployeeId AS Code FROM Salary s
 WHERE Month < 5 AND Year = 2015 AND SalaryAmount >(SELECT TOP(1) SalaryAmount FROM Salary
 WHERE Month = 5 AND Year = 2015 AND s.EmployeeId = EmployeeId)