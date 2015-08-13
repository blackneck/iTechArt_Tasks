USE EnterpriseDb

SELECT AVG( SalaryAmount ) average_salary
FROM Salary
WHERE Month = 12 AND Year = 2015;