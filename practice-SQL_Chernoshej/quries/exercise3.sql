USE EnterpriseDb

SELECT AVG( SalaryAmount ) average_salary
FROM Salary
WHERE Month = 1 AND Year = 2015;