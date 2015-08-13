USE EnterpriseDb

SELECT SerName
FROM Employee
WHERE EmployeeId in (SELECT EmployeeId 
					 FROM Salary
					 WHERE Month = 1 AND Year = 2015)